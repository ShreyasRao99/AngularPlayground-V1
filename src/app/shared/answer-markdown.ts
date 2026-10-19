export interface AnswerRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  code?: boolean;
}

export type AnswerBlock =
  | { kind: 'p'; runs: AnswerRun[] }
  | { kind: 'ul'; items: AnswerRun[][] };

// Bold first so `**x**` is not read as an empty italic pair. Italic requires a
// non-space right after the opening marker, which keeps markup like `*ngIf`
// out of the parser.
const INLINE = /(\*\*[^*]+\*\*|\*[^*\s](?:[^*]*[^*\s])?\*|`[^`]+`)/g;

function parseInline(text: string): AnswerRun[] {
  const runs: AnswerRun[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  INLINE.lastIndex = 0;
  while ((match = INLINE.exec(text)) !== null) {
    if (match.index > last) runs.push({ text: text.slice(last, match.index) });

    const token = match[0];
    if (token.startsWith('**')) runs.push({ text: token.slice(2, -2), bold: true });
    else if (token.startsWith('`')) runs.push({ text: token.slice(1, -1), code: true });
    else runs.push({ text: token.slice(1, -1), italic: true });

    last = INLINE.lastIndex;
  }

  if (last < text.length) runs.push({ text: text.slice(last) });

  return runs.filter((run) => run.text.length > 0);
}

/**
 * Turns an authored answer into paragraphs and bullet lists. A blank line starts
 * a new block; a run of lines that all begin with "- " becomes a list; a single
 * newline inside a block is a soft wrap and is joined back into one line.
 * Inline `**bold**`, `*italic*` and `` `code` `` become runs for the template.
 */
export function parseAnswer(answer: string): AnswerBlock[] {
  const blocks: AnswerBlock[] = [];

  for (const chunk of answer.replace(/\r\n/g, '\n').trim().split(/\n{2,}/)) {
    const lines = chunk
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (lines.length === 0) continue;

    if (lines.every((line) => line.startsWith('- '))) {
      blocks.push({ kind: 'ul', items: lines.map((line) => parseInline(line.slice(2))) });
    } else {
      blocks.push({ kind: 'p', runs: parseInline(lines.join(' ')) });
    }
  }

  return blocks;
}
