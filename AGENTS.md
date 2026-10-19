# AGENTS.md

## Deploying to GitHub Pages

Read this whole section before deploying. Most past deploys went wrong by
skipping one of the checks below.

- **Live site:** https://shreyasrao99.github.io/AngularPlayground-V1/
- **Host:** GitHub Pages in **legacy branch mode**. It serves the committed
  `gh-pages` branch directly. There is **no CI workflow and no `gh` deploy
  command** — `.github/` is an empty, untracked directory. Do not go looking for
  a workflow, and do not add one as part of a deploy.
- **The app is served from a subpath**, so **every build must pass
  `--base-href /AngularPlayground-V1/`**. Omitting it produces a blank page at
  the live URL.
- **No CI runs on PRs or on `dev`.** `ng test` and `ng build` are your only
  verification. Run them yourself.

### Step 0 — Preflight

```bash
git fetch origin
git checkout dev
git pull --ff-only
git status --short        # MUST be clean before you build
git log --oneline -1      # note this sha; it goes in the deploy commit message
```

`ng build` compiles the **working tree, not a commit**. If `git status` is not
clean, either commit the work or stash it, otherwise you will deploy code that
matches no commit:

```bash
git stash push -m "pre-deploy: keep out of the build" -- <path>...
```

Then confirm your local `gh-pages` is not stale (it has been before):

```bash
git rev-parse gh-pages origin/gh-pages   # the two lines MUST match
```

If they differ, reset the local branch to the remote before continuing.

### Step 1 — Test

```bash
npx ng test        # expect "Tests  N passed", 0 failures, 0 skipped
```

### Step 2 — Build

```bash
rm -rf dist
npx ng build --base-href /AngularPlayground-V1/
```

Production is the default configuration; no `--configuration` flag is needed.

**Publish `dist/AngularPlayground-V1/browser/`** — never the parent
`dist/AngularPlayground-V1/`, which also holds `3rdpartylicenses.txt` and
`prerendered-routes.json` (not web assets).

Check the budget line in the build output:

```
Initial total | 527.00 kB | ...
```

Warning at **550 kB**, error at **1 MB**. If it errors, fix the bundle before
deploying.

### Step 3 — Stage the build into a `gh-pages` worktree

Never build on or check out `gh-pages` in your main working tree. Use a
throwaway worktree:

```bash
git worktree add /tmp/opencode/gh-pages gh-pages
cd /tmp/opencode/gh-pages

# Wipe everything except the git dir and .nojekyll
find . -mindepth 1 -maxdepth 1 ! -name .git ! -name .nojekyll -exec rm -rf {} +

cp -a /mnt/c/Projects/AngularPlayground-V1/dist/AngularPlayground-V1/browser/. .

git add -A
```

- **Keep `.nojekyll`.** The build does not produce it. Deleting it makes GitHub
  run the output through Jekyll, which breaks serving.
- **Use `git add -A`, not `git add -u` or a glob**, so that deletions of the
  previous build's hashed chunk files are staged too. Leftovers from the old
  build will otherwise accumulate forever.
- Seeing renamed chunks (`R  chunk-AAAA.js -> chunk-BBBB.js`) is normal: filenames
  are content hashes, and they change whenever any code changes.

#### `404.html` — line-ending trap

`public/404.html` has **CRLF** line endings in the Windows working tree, but the
copy committed on `gh-pages` is **LF**. The `gh-pages` branch has no
`.gitattributes` (the root one is not on that branch), so copying the file
straight in shows it as modified and rewrites its line endings on every deploy.

Before committing, check it:

```bash
git status --short -- 404.html
git diff --cached --numstat -- 404.html
```

- If `public/404.html` **has not changed** since the last deploy, exclude the
  file so you don't ship an EOL-only flip:
  ```bash
  git restore --source=HEAD --staged --worktree 404.html
  ```
- If it **has genuinely changed** (check with
  `git diff --stat <last-deployed-sha>..dev -- public/404.html`), commit it but
  make sure the committed bytes stay LF.

### Step 4 — Commit and push

```bash
git commit -m "Deploy <what changed>

Built from dev at <sha> with --base-href /AngularPlayground-V1/."

git push origin gh-pages
```

Commit **on top of** the current `gh-pages` tip. Never force-push, never
orphan the branch, never rewrite its history — the chain of deploy commits is
the only record of what was live when.

### Step 5 — Verify

```bash
gh run list --branch gh-pages --limit 1        # pages-build-deployment: success
```

Wait for `success`, then confirm the live site serves the bundle you just built:

```bash
grep -o 'main-[A-Za-z0-9]*\.js' dist/AngularPlayground-V1/browser/index.html   # local hash
curl -s https://shreyasrao99.github.io/AngularPlayground-V1/ | grep -o 'main-[A-Za-z0-9]*\.js'   # live hash
```

The two hashes must match. Also load a deep link
(e.g. `.../AngularPlayground-V1/js/some-question-id`) to confirm the SPA
fallback still works.

### Step 6 — Clean up

```bash
git worktree remove /tmp/opencode/gh-pages
```

If you stashed anything in Step 0, `git stash pop` it now and confirm
`git status` looks the way you left it.

### Past mistakes, in one place

| Mistake                                                          | Result                                            |
| ---------------------------------------------------------------- | ------------------------------------------------- |
| Forgot `--base-href /AngularPlayground-V1/`                      | Blank page live; assets 404 under the subpath     |
| Published `dist/AngularPlayground-V1/` instead of `.../browser/` | Junk files at the site root                       |
| Deleted `.nojekyll`                                              | Pages runs Jekyll; assets break                   |
| Built a dirty working tree                                       | Deployed code matching no commit                  |
| Used `git add -u` / a glob                                       | Stale hashed chunks never deleted                 |
| Force-pushed `gh-pages`                                          | Lost the record of previous deploys               |
| Committed the CRLF `404.html`                                    | Permanent EOL-only churn on every deploy          |
| Waited on a CI workflow                                          | None exists; verify with `gh run list` and `curl` |

## Curating the question bank and POCs

Context for content work: questions, answers and the proof-of-concept exercises.
Read this before editing `questions.json` or a POC.

### Where content lives

| What                      | Path                                                       |
| ------------------------- | ---------------------------------------------------------- |
| Questions                 | `src/app/shared/questions.json`                            |
| Shapes                    | `src/types/questions-type.ts`, `src/types/poc-type.ts`     |
| Category order and labels | `src/app/shared/categories.ts` (`CATEGORIES`)             |
| POC bank                  | `src/app/poc/pocs/<category>.ts`, assembled in `pocs/index.ts` |
| Answer rendering          | `src/app/shared/answer-markdown.ts` + `question-detail.html`   |

- The JSON is an object keyed by category, each an array of questions. Category
  order is html, css, javascript, angular, performance, rxjs, signals, misc,
  behavioural.
- Question ids are `<category>-<n>`, except javascript which is `js-<n>`
  (`js-25`). Ids are referenced by POC `covers` and persisted in localStorage, so
  never renumber a question and never reuse a removed id.
- Current bank is **208** questions: html 16, css 12, javascript 24, angular 49,
  performance 26, rxjs 11, signals 10, misc 10, behavioural 50.

### Answer format

`answer` is Markdown-ish, parsed by `answer-markdown.ts`:

- A blank line starts a new paragraph.
- A run of lines each beginning with `- ` becomes one bullet list; put the
  bullets on consecutive lines with **no** blank line between them.
- A single `\n` inside a block is a soft wrap and is joined back into one line.
- Inline `**bold**`, `*italic*` and `` `code` ``. Italic needs a non-space right
  after the opening `*`, so `*ngIf` and `a * b` stay literal. No `_emphasis_` and
  no `[links](url)` - the parser does not understand them.

### Editing `questions.json` safely

- **The round-trip is exact:** `JSON.stringify(data, null, 2) + '\n'` reproduces
  the file byte-for-byte. Edit it by running a script through `node`, not by
  hand, so the 2-space indent and the trailing newline survive.
- **Node is not on PATH here.** Use
  `"/mnt/c/Program Files/nodejs/node.exe"`. The Windows binary cannot read WSL
  `/tmp`, so keep throwaway scripts under the repo's gitignored `tmp/` and delete
  them when done.
- **Do not run Prettier on `questions.json`.** `.prettierrc` is `printWidth: 100,
  singleQuote: true`, but the JSON is not Prettier-clean and a format would churn
  the whole file.
- Deleting a question means removing every POC `covers` entry that names its id,
  or the POC links to a 404.

### POCs

- One file per category under `src/app/poc/pocs/`, exporting `<CATEGORY>_POCS`,
  spread into `POCS` in `pocs/index.ts`. That order is the display order.
- Shape is `Poc` in `poc-type.ts`: `id`, `category`, `title`, `summary`,
  `durationMinutes` (a number), `prompt`, `endpoints`, `steps`
  (`title`/`task`/`learn`), `stretch`, `starter` (a code string) and `covers`.
- `covers` lists the question ids the exercise teaches; those questions link to
  the POC. A POC id is a slug (`js-broadcast-channel`), not numbered.
- Behavioural has no POCs - `POC_CATEGORIES` excludes it.

### Tests that pin content (update them with the content)

- `question-list.spec.ts` hard-codes numbers for **performance** and **html**:
  26 rows, the 5/14/12 difficulty splits and the 7 advanced, and 16 for html.
  Adding, removing or re-difficulty-ing those questions breaks it.
- `question-detail.spec.ts` derives prev/next from the data via its own
  `SEQUENCE`, so it follows the bank; it only hard-codes a few ids.
- `poc.spec.ts` asserts against `POCS.length`, so it follows the data.

### Prev/next navigate across sections

`question-detail.ts` walks a flat, `CATEGORIES`-ordered `sequence`, not the
current category, so the last question of a section links forward to the first of
the next, and the first links back to the last of the previous. Only the very
first and last question in the bank keep an empty outer slot. The "Question X of
Y" counter stays per-section.

### Verify

```bash
npx ng test                                   # expect 160 passed, 0 failed
npx ng build --base-href /AngularPlayground-V1/
```

## Branch and commit conventions

- Branch off `dev` as `feature/<short-name>` (use `fix/<short-name>` for bug
  fixes).
- Sentence-case, imperative commit subjects (e.g. `Add per-question notes`).
- Merge PRs into `dev` with a merge commit (`gh pr merge <n> --merge`).
