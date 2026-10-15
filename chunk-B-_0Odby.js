import{Bn as ru,St as W,w as G}from"./chunk-BNvdDmYQ.js";import{a as V,i as Q,n as H,r as J,t as $}from"./chunk-BW_VUcVD.js";var m={html:[{id:`html-1`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is semantic HTML?`,answer:`Semantic HTML uses tags that describe their meaning rather than only their appearance — header, nav, main, article, section, aside and footer. It improves accessibility for screen readers and helps search engines understand the page structure, while also making the code easier to read for other developers. Semantic tags are not a display mode: some are block-level (e.g. <header>, <main>, <section>) and some are inline (e.g. <strong>, <em>), so "semantic" says what the element means, never how it is displayed. The accessibility payoff is concrete rather than general: assistive technology exposes header, nav and main as landmarks, so a user can jump between regions and straight to the content instead of tabbing through everything - and a skip link works for the same reason, because it can target main. Headings build an outline that can be navigated by level, and a native element such as button, label or table already carries its role, keyboard behaviour and state. The trap is replacing those with divs and spans: the browser then announces generic text with no role, no keyboard support and no state, and rebuilding that by hand with roles and tabindex is more work and usually less correct than having used the right element in the first place.`,examples:[{title:`Semantic structure of a page`,code:`<body>
  <header><nav aria-label="Main">...</nav></header>
  <main>
    <article>
      <h1>Title</h1>
      <section><h2>Details</h2>...</section>
    </article>
    <aside>Related links</aside>
  </main>
  <footer>...</footer>
</body>`,explanation:`header/nav/main/article/section/aside/footer describe meaning, so screen readers and search engines get the structure for free.`},{title:`Semantic tags come in block-level and inline flavours`,code:`<header>...</header>   <!-- block-level semantic element: starts on its own line -->

<p>This word is <strong>important</strong> but stays inline.</p>
<!-- <strong>/<em> are inline semantic elements: they carry meaning without breaking the line -->`,explanation:`Semantics and display are independent: <header> is a block-level semantic element, while <strong> is an inline one.`},{title:`What a screen reader gets from each version`,code:`<!-- no landmarks, no outline, no keyboard support -->
<div class="nav"><div (click)="save()">Save</div></div>

<!-- landmarks, a heading outline, a real control -->
<header><nav aria-label="Main">...</nav></header>
<main>
  <h1>Checkout</h1>
  <button type="button" (click)="save()">Save</button>
</main>`,explanation:`The first version is a flat list of text with nothing to navigate by; the second lets a screen-reader user jump by landmark or heading, and the button arrives with role, focus and Enter/Space handling included.`}],tags:[`MS`]},{id:`html-2`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between a div and a span?`,answer:`A div is a block-level container that takes the full available width and starts on a new line, while a span is an inline container that flows inside a line of text. Use a div to group larger layout blocks and a span to style or group a fragment of text without breaking the line.`,examples:[{title:`block vs inline vs span`,code:`<style>
  .box { width: 100px; height: 40px; background: #90caf9; }
  .tag  { background: #ffcc80; }
</style>

<div class="box"></div>   <!-- block: own line, full width -->
<span class="tag">A</span><span class="tag">B</span>  <!-- inline: flows in the line -->`,explanation:`div is block-level, so it breaks the line and stretches; spans sit side by side inside the surrounding text.`}]},{id:`html-3`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`When should I use a class instead of an id?`,answer:`An id must be unique on the page and is used when you need to identify a single element — for example as an anchor, or a CSS selector that definitely targets one node. A class can be reused across many elements, so if a style or behaviour applies to more than one element, prefer a class.`,examples:[{title:`id for one node, class for many`,code:`<style>
  #main-banner { background: gold; }   /* one element only */
  .chip { border-radius: 999px; }          /* reused everywhere */
</style>

<div id="main-banner">Sale</div>
<span class="chip">new</span>
<span class="chip">beta</span>`,explanation:`The id must be unique and is what fragment links (#main-banner) and JS lookups use; the class is the reusable hook.`}]},{id:`html-4`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do I make an image render well on different screen sizes?`,answer:`A box only keeps an image's proportions if you tell it the ratio up front, and there are two ways. The classic technique is the padding hack: wrap the image in a container whose padding-bottom is the height divided by the width as a percentage (56.25% for a 16:9 image), and absolutely position the image to fill that box - because the padding is calculated from the container's width, the ratio holds before the image has loaded. The modern replacement is the CSS aspect-ratio property: set aspect-ratio on the element and it strictly respects the original image ratio, with no wrapper and no absolute positioning. If you are designing for modern browsers, skip the padding hack and use aspect-ratio.`,examples:[{title:`The padding hack`,code:`.ratio {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;   /* 9 / 16 = 0.5625 -> a 16:9 box */
}
.ratio img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`,explanation:`A percentage padding-bottom is resolved against the container's width, so the box holds a 16:9 ratio before the image arrives; the image is absolutely positioned to fill it.`},{title:`Modern CSS aspect-ratio (skip the hack)`,code:`img {
  width: 100%;
  aspect-ratio: 16 / 9;   /* strictly respects the original image ratio */
  object-fit: cover;      /* crop instead of distorting */
}`,explanation:`aspect-ratio does the padding hack's job with no wrapper and no absolute positioning; for modern browsers you can skip the padding hack entirely.`}]},{id:`html-5`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Why is the alt attribute important on images?`,answer:`The alt attribute provides a text alternative that is announced by screen readers and shown when the image fails to load. It is required when the image conveys information, and should describe the content or purpose. Decorative images can use an empty alt="", but hiding them without an attribute hurts accessibility.`,examples:[{title:`Meaningful vs decorative alt`,code:`<img src="chart.png" alt="Revenue grew from 2.1M to 3.4M in Q3">

<img src="divider.svg" alt="">   <!-- decorative: say nothing -->

<img src="icon.png">               <!-- no alt at all: screen readers read the filename -->`,explanation:`Describe the information for content images; use alt="" for decoration so it is skipped, and never omit alt for meaningful images.`}]},{id:`html-6`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do I show a block of code on a page?`,answer:`Wrap the lines in pre/code tags to keep whitespace and line breaks intact. Escape raw angle brackets as &lt; and &gt; inside the block, and add overflow-x: auto so long lines scroll horizontally instead of breaking the layout.`,examples:[{title:`Code block that survives long lines`,code:`<pre><code class="language-ts">const total = items
  .filter(i =&gt; i.active)
  .reduce((s, i) =&gt; s + i.price, 0);</code></pre>

<style>
  pre { overflow-x: auto; }
  code { font-family: ui-monospace, monospace; }
</style>`,explanation:`pre keeps whitespace and newlines, escaped &lt; &gt; stop the browser parsing tags, and overflow-x keeps one long line from breaking the layout.`}]},{id:`html-7`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between <article> and <section>?`,answer:`<article> is a self-contained composition that makes sense on its own - a blog post, a news story, a comment - and could be syndicated or reused independently. <section> is a thematic grouping of related content within a page, usually with a heading. Use section to break up a long page, article for content that stands alone; an article can contain sections.`,examples:[{title:`<article> vs <section>`,code:`<article>
  <h2>Blog Post</h2>
  <section>
    <h3>Intro</h3>
    <p>...</p>
  </section>
</article>`,explanation:`article is standalone/reusable; section groups related content with a heading.`}]},{id:`html-8`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you correctly associate a <label> with a form control?`,answer:`Give the control an id and point the label's for attribute at it, or nest the control inside the label. The association means clicking the label focuses/activates the control and screen readers announce the label text. A placeholder attribute is not a substitute - it disappears when the user types and is poorly announced.`,examples:[{title:`Label association`,code:`<label for="email">Email</label>
<input id="email" type="email">

<!-- or nested -->
<label>Email <input type="email"></label>`,explanation:`Use for+id or nesting for accessibility and click-to-focus.`}]},{id:`html-9`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between async and defer on a <script> tag?`,answer:`Both are boolean attributes that let an external script download without blocking HTML parsing; the difference is when it executes. defer downloads in parallel and executes once the document has been parsed, in order, right before DOMContentLoaded - reliable for scripts that touch the DOM. async downloads in parallel and executes as soon as it is ready, which can interrupt parsing and ignores order - fine for independent analytics but unsafe for scripts that depend on each other. Neither blocks parsing, but only defer preserves execution order.`,examples:[{title:`async vs defer`,code:`<!-- executes as soon as loaded, order not guaranteed -->
<script async src="analytics.js"><\/script>

<!-- executes after parsing, in order -->
<script defer src="vendor.js"><\/script>
<script defer src="app.js"><\/script>`,explanation:`defer preserves execution order and runs before DOMContentLoaded.`}]},{id:`html-10`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the viewport meta tag and why does it matter on mobile?`,answer:`<meta name='viewport' content='width=device-width, initial-scale=1'> tells the browser to render at the device width instead of a desktop-width virtual viewport. Without it, mobile browsers zoom out to fit a desktop layout, making text tiny and tap targets hard to hit. It is the HTML precondition for responsive CSS to work.`,examples:[{title:`Viewport meta`,code:`<meta name="viewport" content="width=device-width, initial-scale=1">`,explanation:`Ensures mobile renders at device width for responsive layouts.`}]},{id:`html-11`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between <strong>/<em> and <b>/<i>?`,answer:`<strong> and <em> carry meaning: strong implies importance (read as emphasis by screen readers, often bold), em adds stress emphasis (often italic). <b> and <i> are purely presentational - b is bold text, i is italic text - and pass no semantic meaning. Prefer the semantic pair and style them with CSS; reserve b/i for purely visual effects.`,examples:[{title:`Semantic vs presentational`,code:`<p>This is <strong>important</strong> and <em>emphasized</em>.</p>
<p>This is <b>bold</b> and <i>italic</i>.</p>`,explanation:`strong/em carry meaning; b/i are purely visual.`}]},{id:`html-12`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How does native browser form validation work and when would you disable it?`,answer:`Constraints like required, type='email', min/max length and the pattern attribute are validated by the browser: the form is blocked from submitting and the :invalid pseudo-class lets you style errors. Setting novalidate (or noValidate) on the form disables native bubbles so you can run your own validation - useful when you need consistent messaging or server-side rules.`,examples:[{title:`Form validation`,code:`<form novalidate (ngSubmit)="submit()">
  <input required type="email">
  <button>Submit</button>
</form>`,explanation:`novalidate disables native validation for custom error handling.`}]},{id:`html-13`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you put audio and video on a page, and what do you have to get right?`,answer:`The browser gives you this natively: video and audio elements take one or more source children with a type, plus fallback content for anything that cannot play them - no plugins, no player library required for the basics. What separates a working embed from a correct one is the list around the media itself. Accessibility first: captions for pre-recorded speech (a track with kind=captions), a transcript for audio, and controls left on so keyboard users have play, seek and volume without hunting for a custom widget; autoplay only ever with muted and playsinline, and even then only when it cannot be avoided. Performance next: poster for the first frame, preload=none when the video is below the fold, and lazy-load it like any other heavy asset rather than letting the page fetch a 20 MB file it may never show. Then the practicalities - MP4/H.264 is still the safe default, WebM where you want open codecs and smaller files, know that codecs differ by browser, and long or adaptive content wants streaming (HLS with a player or native support) rather than a giant file. Responsive is the least of it: width:100% plus an aspect-ratio box handles layout.`,examples:[{title:`A captioned, non-blocking video`,code:`<video
  controls
  width="640"
  preload="none"
  poster="/assets/lesson-poster.jpg"
  (timeupdate)="onProgress($event)">

  <source src="/assets/lesson.mp4" type="video/mp4" />
  <source src="/assets/lesson.webm" type="video/webm" />
  <track kind="captions" src="/assets/lesson.en.vtt" srclang="en" label="English" default />

  Your browser cannot play this video.
  <a href="/assets/lesson.mp4">Download it instead</a>.
</video>`,explanation:`preload=none and the poster keep it off the critical path until the user acts, the captions track makes it usable without sound, and the fallback link covers both an unsupported browser and a failed download.`}],tags:[`MS`]},{id:`html-14`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How does native drag and drop work in HTML, and how would you build it in Angular?`,answer:`HTML gives you drag and drop natively. Mark the source draggable="true" and handle dragstart on it, then handle dragover and drop on the target. Only one detail trips people up: the target must call preventDefault() in dragover, otherwise the browser assumes the default action and drop never fires. The payload travels through event.dataTransfer - setData in dragstart, getData in drop. In Angular those are just event bindings, and for a real feature such as reordering a list, moving cards between Kanban columns or a file drop zone, I would use the Angular CDK's cdkDrag and cdkDropList instead of hand-rolling the index maths. The part not to skip is accessibility: native drag and drop does not work for keyboard or screen-reader users, so every drag action needs an equivalent - Move up/down buttons or a menu action - with clear labels and an announcement when the order changes.`,examples:[{title:`The template`,code:`<div draggable="true" (dragstart)="onDragStart($event)">
  Drag me
</div>

<div
  (dragover)="$event.preventDefault()"
  (drop)="onDrop($event)"
>
  Drop here
</div>`,explanation:`draggable on the source, and the inline preventDefault in dragover is what allows the drop - remove that one call and drop never fires.`},{title:`The handlers`,code:`onDragStart(event: DragEvent): void {
  event.dataTransfer?.setData('text/plain', 'Hello');
}

onDrop(event: DragEvent): void {
  event.preventDefault();
  const data = event.dataTransfer?.getData('text/plain');
  console.log(data); // 'Hello'
}`,explanation:`setData in dragstart and getData in drop: the payload is carried as text/plain data, so you move an identifier rather than markup.`}],tags:[`MS`]},{id:`html-15`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between SVG and Canvas, and when would you use each?`,answer:`SVG and Canvas mostly differ in what they are made of. SVG is a document: every shape is a real DOM element you can style with CSS, select, focus, animate and attach a listener to, it stays sharp at any zoom or print size, and it sits in the accessibility tree, where you can give it a role, a title and a description. Its limit is node count - a chart drawn as ten thousand SVG paths is ten thousand objects for the browser to lay out and for Angular to track. Canvas is the opposite: a single element and a bitmap surface you paint yourself. You ask for a context (2d, or webgl when you want the GPU), issue imperative drawing commands such as fillRect, arc, lineTo and drawImage, and then clear and redraw whenever something changes, usually inside a requestAnimationFrame loop. That makes it the right tool at volume and for pixel work: tens of thousands of moving points, games and animation loops, image filters and cropping, heatmaps, signature pads. The trade-offs are the point of the answer: because there are no elements, CSS styling and per-shape events do not exist - hover and click are hit-testing maths you write yourself with isPointInPath or a distance check; nothing on the surface is in the accessibility tree, so give the canvas role=img and an accessible name, or publish the same data as text or a table next to it; you handle devicePixelRatio yourself or it looks blurry on a retina display; and exporting means toDataURL rather than reading the DOM. My rule: choose by interaction and accessibility first, then by volume - anything the user inspects, selects, hovers or reads should be SVG, and anything with thousands of repainted objects or pixel-level manipulation should be Canvas. In Angular that is inline SVG in the template, and Canvas behind a ViewChild with its drawing loop stopped in ngOnDestroy.`,examples:[{title:`The accessibility difference in five lines`,code:`<svg viewBox="0 0 100 40" role="img" aria-labelledby="title">
  <title id="title">Revenue up 18% this quarter</title>
  <path d="M0 35 L40 28 L70 15 L100 5" fill="none" stroke="currentColor" />
</svg>

<canvas width="400" height="160" role="img"
  aria-label="Revenue up 18% this quarter"></canvas>`,explanation:`The SVG carries a real title element and a stroke the browser renders crisply at any zoom; the canvas carries only the label you give it, because everything drawn into it is invisible to the accessibility tree.`},{title:`What a canvas actually is`,code:`const ctx = canvas.getContext('2d')!;

function draw(points: Point[]) {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // you own the repaint
  ctx.beginPath();
  for (const p of points) ctx.lineTo(p.x, p.y);
  ctx.stroke();
}

// none of those points is a DOM node, so a click has to be matched by hand
const hit = points.find((p) => Math.hypot(p.x - x, p.y - y) < 6);`,explanation:`One element, one surface: repainting everything each frame is cheap at tens of thousands of points, but hover, focus and clicks are maths you write, and the DOM has no idea what is on screen.`}],tags:[`MS`]},{id:`html-16`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are the different ways to hide an element, and what does each mean for layout and accessibility?`,answer:`There are several, and they are not interchangeable - the right one depends on whether you care about layout space, focusability or what assistive technology announces. display:none (or the hidden attribute, which is a UA rule for exactly that) removes the element from layout and from the accessibility tree entirely: nothing is painted, nothing takes space, nothing is announced, and on Angular it is what @if produces when the branch is removed from the DOM. visibility:hidden keeps the box and its space but hides the painting and still removes it from the accessibility tree, which is what you want for a reserved placeholder that must not be read. opacity:0 is the trap: the element is invisible but still there - it can still be clicked, still be tabbed to, and screen readers may still reach it - so pairing it with inert or pointer-events:none is mandatory if it is meant to be inactive. aria-hidden only hides it from assistive technology while leaving it visible and, dangerously, still focusable, which creates the classic focus-into-invisible-content bug. The modern, honest option is the inert attribute: it removes the subtree from focus, from interaction and from the accessibility tree at once. In Angular I reach for @if when losing and recreating the DOM is fine, and a binding to [hidden] or [inert] when the component must keep its state - and I always check the tab order afterwards.`,examples:[{title:`Three toggles, three different meanings`,code:`<button type="button" (click)="open.set(!open())">Toggle panel</button>

<!-- 1. gone from the DOM: state is lost when it comes back -->
@if (open()) { <app-expensive-editor /> }

<!-- 2. still mounted and still focusable, just not painted -->
<div [hidden]="!open()">Draft: {{ draft() }}</div>

<!-- 3. mounted, but removed from focus, interaction and the a11y tree -->
<section [inert]="!open()">{{ panelContent() }}</section>`,explanation:`@if trades state for absence, [hidden] keeps state but not focusability, [inert] keeps state and blocks focus - and opacity:0 would do none of these, which is why it is the one to avoid as a visibility toggle.`}],tags:[`MS`]},{id:`html-17`,category:`html`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What values can the type attribute of an input take, and what do they actually give you?`,answer:`The type attribute chooses which control the browser renders, and with it the keyboard a mobile user gets, the browser's own validation and the shape of the value you read back. The practical set falls into groups. Text-shaped: text (the default), password, email, url, search, and tel - which has no format rule of its own, because phone numbers differ by country. Numeric: number, which brings a spinner, arrow-key stepping and native min/max/step validation, with the caveat that it also refuses non-numeric characters and handles locale decimal separators inconsistently, so for an id-like or phone-like field inputmode is the better tool; and range for a slider. Temporal: date, time, datetime-local, month and week, which give a native picker where the browser supports it. Choice and binary: checkbox, radio (grouped by name), and file with accept and multiple. Submitter plumbing: submit, reset, button, image and hidden. Two details worth stating out loud: an unrecognised type degrades to text rather than breaking the page, which is what makes the attribute safe to use, and type is only part of the decision - inputmode picks the keyboard, autocomplete lets the browser fill the field, and enterkeyhint labels the key. Choose by the intent of the data and let the browser do work you would otherwise write by hand.`,examples:[{title:`The same form, letting the browser carry the semantics`,code:`<form (ngSubmit)="save()">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required />

  <label for="phone">Phone</label>
  <!-- tel has no format rule; inputmode gets the numeric keypad anyway -->
  <input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" />

  <label for="salary">Expected salary</label>
  <input id="salary" name="salary" type="number" min="0" step="1000" />

  <label for="start">Start date</label>
  <input id="start" name="start" type="date" />

  <label for="cv">CV</label>
  <input id="cv" name="cv" type="file" accept=".pdf,.docx" />

  <button type="submit">Send</button>
</form>`,explanation:`email and date are validated and rendered by the browser, tel borrows the numeric keypad without pretending to validate, and type=submit is what makes Enter work as the user expects. In Angular the value is bound like any attribute, so [type] works - but these give you validation and keyboard for free that no amount of TypeScript can.`}],tags:[`MS`]}],css:[{id:`css-1`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the CSS box model?`,answer:`Every element is rendered as a box made of four layers, from the inside out: content, padding, border and margin. Content holds the actual content, padding adds space between content and border, the border frames the box, and margin creates space between this box and its neighbours. box-sizing: border-box makes width and height include padding and border: because the declared width now measures the border box, the content area shrinks to leave room for that padding and border instead of the element growing past the width you set. Margin sits outside the box and is never part of box-sizing.`,examples:[{title:`Box model with content-box vs border-box`,code:`.card {
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  box-sizing: content-box;  /* total width = 250px */
}

*, *::before, *::after { box-sizing: border-box; }
/* now width:200px INCLUDES padding+border -> total stays 200px */`,explanation:`content-box measures only the content; border-box makes width/height include padding and border, which is why global resets set it.`}]},{id:`css-2`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between padding and margin?`,answer:`Padding is the space inside the element, between the content and the border. Margin is the space outside the element, between the border and neighbouring elements. Padding is always part of the element's background; margins collapse with adjacent margins.`,examples:[{title:`Padding is inside, margin is outside`,code:`.btn {
  padding: 8px 16px;   /* inside the border */
  margin: 12px;          /* between this and neighbours */
  border: 2px solid;
}`,explanation:`Padding grows the element and shows its background; margin separates elements and can collapse with an adjacent margin.`}]},{id:`css-3`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between block, inline and inline-block?`,answer:`Block elements start on a new line and fill the available width. Inline elements flow within a line of text and ignore width and height. Inline-block flows inline but respects width, height and vertical margins like a block, which makes it useful for grid-like layouts.`,examples:[{title:`block`,code:`.header { display: block; }  /* full width, own line */`,explanation:`The default for div, p, section - takes the available width and starts a new line.`},{title:`inline`,code:`.tag { display: inline; }   /* width/height ignored, stays in the line */`,explanation:`The default for span, a, strong - flows with the surrounding text.`},{title:`inline-block`,code:`.badge { display: inline-block; width: 80px; height: 24px; }`,explanation:`Flows inline but respects width, height and vertical margin - a building block for chip/button rows.`}]},{id:`css-4`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What do align-items and justify-content do in flexbox?`,answer:`justify-content controls the distribution of items along the main axis (the flex container's flex-direction). align-items controls alignment along the cross axis, which is perpendicular to the main axis. For a default row layout, justify-content is horizontal and align-items is vertical.`,examples:[{title:`Row vs column flexbox`,code:`.row  { display: flex; flex-direction: row;            justify-content: space-between; align-items: center; }
.col  { display: flex; flex-direction: column;         justify-content: space-between; align-items: stretch; }`,explanation:`justify-content works along flex-direction (main axis), align-items across it (cross axis) - swap the two when you switch direction.`}]},{id:`css-5`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you center a block element horizontally?`,answer:`Give the element a width and set margin-inline: auto (or margin-left and margin-right to auto). The auto margins split the remaining space equally on both sides. Flexbox centers with display: flex and justify-content: center for a row of items.`,examples:[{title:`Centering with auto margins`,code:`.box { width: 300px; margin-inline: auto; }  /* splits leftover space evenly */`,explanation:`Works for a single block element with a known width.`},{title:`Centering with flexbox`,code:`.wrapper { display: flex; justify-content: center; align-items: center; height: 100vh; }
.centered { width: 300px; }`,explanation:`Centres both axes without knowing the size, and works for any number of children.`}]},{id:`css-6`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are specificity and the cascade, and where does !important fit in?`,answer:`The cascade decides which rule wins when selectors conflict; specificity ranks them by id (highest), then class/attribute/pseudo-class, then type selectors, and a style attribute beats all of those normal author rules. !important lifts an author declaration above every normal author rule, including the style attribute, which is why it is a code smell: the only thing that reliably beats it is another !important, so the source of a style becomes unpredictable. Prefer increasing specificity or changing the order and origin of the stylesheet instead.`,examples:[{title:`Specificity example`,code:`/* specificity: 0,0,1 */ p {}
/* 0,1,0 */ .note {}
/* 1,0,0 */ #main {}
/* an author !important also beats the style attribute, and can only be beaten by another !important */
.foo { color: red !important; }`,explanation:`Cascade + specificity decide; !important breaks the normal order, and the only escape from it is another !important.`},{title:`Where pseudo-class, attribute and type selectors rank`,code:`/* 0,0,1 - a type selector */
button { color: black; }

/* 0,1,0 - class, attribute and pseudo-class all weigh the same */
.note       { color: blue; }
[type=text] { color: green; }
a:hover     { color: red; }

/* 1,0,0 - an id outranks every one of the above */
#submit { color: purple; }`,explanation:`A pseudo-class (:hover), an attribute selector ([type=text]) and a class each count 0,1,0 - above type selectors, below an id. The later of two equal rules wins.`}]},{id:`css-7`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are CSS custom properties (variables) and how are themes built with them?`,answer:`Custom properties are defined on a selector with --name and read with var(--name). They cascade and can be redefined on a themed container, which is how theming works: define --primary, --bg and --text on :root, then override them on a .dark or [data-theme='dark'] selector. Because they cascade, a component can read var(--primary) and automatically adapt to whichever theme is active.`,examples:[{title:`CSS variables for theming`,code:`:root {
  --bg: #fff;
  --text: #111;
}

[data-theme='dark'] {
  --bg: #111;
  --text: #fff;
}

body {
  background: var(--bg);
  color: var(--text);
}`,explanation:`Redefining on a container/theme selector cascades to all children.`},{title:`Toggling the theme from HTML`,code:`<html data-theme="light">
  <body>
    <button (click)="toggleTheme()">Toggle theme</button>
  </body>
</html>

// toggleTheme() flips one attribute:
// document.documentElement.dataset.theme = 'dark'`,explanation:`Because the variables are redefined under [data-theme='dark'], flipping that single attribute re-themes every element that reads var(--bg) or var(--text).`}]},{id:`css-8`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between position: relative, absolute, fixed and sticky?`,answer:`relative offsets an element from its normal flow position without removing it from flow. absolute takes the element out of flow and positions it relative to the nearest positioned ancestor (a relative/absolute parent); without one, relative to the containing block. fixed positions it relative to the viewport, so it stays put while scrolling. sticky toggles between relative and fixed as the element crosses a scroll threshold - useful for section headers.`,examples:[{title:`Positioning`,code:`.parent { position: relative; height: 200px; }
.child-abs { position: absolute; top: 10px; right: 10px; }
.sticky { position: sticky; top: 0; }`,explanation:`absolute relative to nearest positioned ancestor; sticky toggles on scroll.`}]},{id:`css-9`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are responsive breakpoints and why is mobile-first preferable?`,answer:`Breakpoints are viewport widths where the layout changes, defined with media queries (@media (min-width: 768px)). Mobile-first means you write the base styles for small screens and layer on wider layouts with min-width queries, so narrow devices get less CSS and no override churn. Because min-width is additive, wide screens upgrade rather than narrow screens override.`,examples:[{title:`Mobile-first`,code:`/* base mobile */ .grid { display: block; }
/* tablet+ */ @media (min-width: 768px) { .grid { display: grid; grid-template-columns: 1fr 1fr; } }`,explanation:`min-width queries add layout as viewport grows.`}]},{id:`css-10`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between px, rem, em, % and vw/vh?`,answer:`px is a fixed unit; rem is relative to the root font-size (so 2rem scales with the user's base size and stays predictable); em is relative to the element's own font-size and compounds as it nests; % is relative to the parent's size for the same property; vw/vh are 1% of viewport width/height. Prefer rem for spacing and text so zoom and browser font settings work, and %/flex units for layout.`,examples:[{title:`Units`,code:`html { font-size: 16px; }
.card { padding: 1rem; /* 16px */ margin: 0.5em; /* relative to current font */ width: 50%; height: 50vh; }`,explanation:`rem predictable for spacing; em compounds; % parent-based; vh/vw viewport-based.`}]},{id:`css-11`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`When would you use CSS Grid and when Flexbox?`,answer:`Grid is two-dimensional - it sizes and positions items across explicit rows and columns, ideal for page layouts, card grids and dashboards. Flexbox is one-dimensional - it distributes items along a single axis, ideal for navbars, aligning rows, centering and wrapping lists. Modern usage: Grid for the big layout skeleton, Flexbox for everyday alignment inside cells; they compose, not compete.`,examples:[{title:`Grid vs Flexbox`,code:`.layout { display: grid; grid-template-columns: 200px 1fr; gap: 1rem; }
.nav { display: flex; gap: .5rem; justify-content: space-between; align-items: center; }`,explanation:`Grid 2D layout skeleton; Flexbox 1D alignment.`}]},{id:`css-12`,category:`css`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What problems do global styles cause, and how do you keep styles contained?`,answer:`Global styles fail quietly: a rule written for one screen silently restyles every element that matches it in another screen, and the symptom appears three features later as a button that is the wrong height. The usual categories are selector collisions, specificity fights between files loaded in an order nobody controls, inherited properties leaking somewhere they were not wanted, third-party styles overriding yours (or yours breaking a library), and design drift, where spacing and colour are re-decided per screen because nothing forces them to be shared. Angular's default emulated view encapsulation scopes component styles to that component - they are rewritten with content attributes so they cannot match anything else - which is the containment mechanism I lean on, so the global file stays small. My rules: globals hold only the reset, design tokens as CSS custom properties, base typography and genuinely shared primitives; feature styling lives with the component; avoid bare element selectors and generic classes like .container in globals; use cascade layers when a library and your own styles need an explicit order; use !important only as a last resort with a comment; and reach for ViewEncapsulation.None deliberately, for something like a third-party theme, rather than by accident. The test is simple - if a change in one component's styles alters another component's pixels, containment has failed.`,examples:[{title:`What belongs in globals versus with the component`,code:`/* styles.css - tokens and reset only, nothing feature-specific */
:root {
  --app-gap: 1rem;
  --app-surface: #ffffff;
  --app-on-surface: #16161d;
}
* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; }

/* card.component.css - everything else travels with the component */
:host { display: block; padding: var(--app-gap); background: var(--app-surface); }`,explanation:`The global file defines the vocabulary once; components spend it through var(). A rule that only one component needs is scoped to that component, so it cannot be inherited by accident anywhere else.`}],tags:[`MS`]}],javascript:[{id:`js-1`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is hoisting in JavaScript, and how does it differ for var, let and const?`,answer:`Hoisting is the default behaviour where declarations are processed before any code runs, so the engine "knows" about them at the top of the scope. var declarations (and function declarations) are hoisted and initialised to undefined, so reading them before the line throws nothing - you get undefined. let and const are hoisted too but stay in the temporal dead zone until the declaration executes, so accessing them earlier throws a ReferenceError. Hoisting applies to the declaration, not the assignment.`,examples:[{title:`var vs let before declaration`,code:`console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

console.log(c); // ReferenceError
const c = 3;`,explanation:`var is initialised to undefined at scope start; let/const live in the temporal dead zone until their declaration runs.`}]},{id:`js-2`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between var, let and const?`,answer:`var is function-scoped, hoisted, and can be redeclared - the source of most closure bugs in loops. let is block-scoped, hoisted but not initialised, and cannot be redeclared in the same block, so it is the default choice. const is also block-scoped and cannot be reassigned after initialisation, but note it does not make the value immutable - a const object can still have its properties changed.`,examples:[{title:`Loop scoping bug`,code:`for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3, 3, 3
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 0, 1, 2`,explanation:`var shares one binding across the whole function; let creates a new binding per iteration.`},{title:`const is not deeply immutable`,code:`const user = { name: 'Ada' };
user.name = 'Grace'; // fine
user = { name: 'Lin' }; // TypeError: Assignment to constant variable`,explanation:`const freezes the binding, not the value inside it.`}],tags:[`MS`]},{id:`js-3`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a closure?`,answer:`A closure is the combination of a function with its lexical environment: an inner function keeps access to the variables of the scope where it was created, even after that outer function has returned. That is how private state, memoisation caches and event handlers that remember their context work.`,examples:[{title:`Counter with private state`,code:`function createCounter() {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count,
  };
}
const c = createCounter();
c.inc(); c.inc();
console.log(c.get()); // 2  (count is unreachable from outside)`,explanation:`count survives after createCounter returned because the returned functions captured its scope.`}],tags:[`MS`]},{id:`js-4`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between null and undefined?`,answer:`undefined means a value has never been assigned - missing arguments, absent properties, uninitialised lets, and the return value of a function with no return. null is an explicit signal from the developer that there is intentionally no value. In practice: use undefined for absence by default, null to say "deliberately empty", and prefer ?? over || so 0 and empty string are not swallowed.`,examples:[{title:`?? vs ||`,code:`0 || 'fallback';   // 'fallback'  (0 is falsy)
0 ?? 'fallback';   // 0          (only null/undefined fall through)`,explanation:`|| treats every falsy value as missing; ?? only treats null and undefined as missing.`}]},{id:`js-5`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are arrow functions and how do they differ from function declarations?`,answer:`An arrow function is the shorter way to write a function that arrived in ES6: const add = (a, b) => a + b, with the parentheses around a single parameter optional and the return keyword dropped when the body is one expression. The difference that matters in interviews is this: an arrow function has no this of its own. A normal function gets this from how it is called - user.greetRegular() makes this the user object - while an arrow function inherits this from the scope it was written in, so calling it as a method cannot change it. That is why arrows are the right choice for map, filter and callbacks, and the wrong choice for an object method that needs this to be the object. Two smaller differences come from the same place: an arrow has no arguments object, so use rest parameters instead, and it cannot be used with new because it has no prototype, so it is never a constructor. Because an arrow is usually assigned to a const, it cannot be hoisted and called before that line the way a function declaration can.`,examples:[{title:`this in a regular function vs an arrow function`,code:`const user = {
  name: 'Shreyas',

  greetRegular() {
    console.log(this.name);   // called as user.greetRegular(), so this is user
  },

  greetArrow: () => {
    console.log(this.name);   // arrow has no this of its own
  },
};

user.greetRegular(); // 'Shreyas'
user.greetArrow();   // undefined`,explanation:`A regular method reads this from the call site, so user.greetRegular() hands it the object. An arrow ignores the call site and keeps the this of the surrounding scope, which here is the module scope - so this.name is undefined even though it was called on user.`},{title:`An arrow defined inside a method keeps that method's this`,code:`const user = {
  name: 'Shreyas',

  greet() {
    const arrow = () => console.log(this.name);        // inherits greet's this
    const regular = function () {
      console.log(this.name);                         // gets its own this
    };

    arrow();    // 'Shreyas'
    regular();  // undefined - called as regular(), not user.regular()
  },
};

user.greet();`,explanation:`The arrow is written inside greet, so it takes greet's this, and greet's this is user because the method was called on user. The inner regular function is a new function with a fresh this from its own call, and regular() is not user.regular(), so in strict mode it is undefined.`},{title:`No arguments object, and not a constructor`,code:`function sum() {
  return arguments.length;   // regular functions have their own arguments
}

const sumArrow = (...numbers) => numbers.length; // arrow: rest parameters instead

new sum(1, 2);           // works - a regular function can be a constructor
// new sumArrow(1, 2);   // TypeError: sumArrow is not a constructor`,explanation:`Arrows have no arguments object and no prototype, so they cannot be newed and cannot be constructors - a rest parameter and a normal function replace both.`}],tags:[`MS`]},{id:`js-6`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between a function and a method?`,answer:`A function is a standalone callable, usually declared at module scope and invoked by name. A method is a function that lives on an object and is invoked as obj.method(), so it receives the object as this. The same function object can be used either way - what changes is how it is called and therefore what this is. A standalone function that does not use this at all is better described as a plain function, not a method.`,examples:[{title:`Same function, two call styles`,code:`function greet() { return 'Hi ' + this.name; }
const user = { name: 'Ada', greet };
user.greet();      // 'Hi Ada'  (method - this = user)
const g = user.greet;
g();              // TypeError in strict mode (this = undefined)`,explanation:`A function becomes a method through its call site, which supplies this.`}]},{id:`js-7`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is event propagation, and what are the capture and bubble phases?`,answer:`Event propagation is the process by which an event travels through the DOM tree to determine which element's listeners fire and in what order. It has three phases. Capturing (the trickle-down): the event starts at the root — window/document — and travels down through every ancestor until it reaches the target. Target: the event arrives at the element that was actually triggered (event.target) and the listeners attached directly to it run. Bubbling (floating up): the event reverses and travels back up from the target through its parents and ancestors to the root, which is where most listeners run. addEventListener accepts a third argument - true registers in the capture phase, false (the default) or omitted registers in the bubble phase.`,examples:[{title:`Listening in each phase`,code:`document.addEventListener('click', log, true);  // capture: root first
button.addEventListener('click', log);      // target
panel.addEventListener('click', log);       // bubble: nearest ancestor first

function log(e) { console.log(e.eventPhase, e.currentTarget); }`,explanation:`The same handler can observe the event at three different points in its path.`}]},{id:`js-8`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between event.preventDefault() and event.stopPropagation()?`,answer:`preventDefault() cancels the default browser action for that event - following a link, submitting a form, checking a checkbox - but the event still travels to other listeners. stopPropagation() stops the event from reaching any further nodes, so ancestor and descendant handlers never run; the default action still happens unless you also call preventDefault(). stopImmediatePropagation() additionally prevents the remaining listeners on the same element.`,examples:[{title:`One is not the other`,code:`form.addEventListener('submit', (e) => {
  e.preventDefault();      // page does not reload
  save();
  // e.stopPropagation() would only stop the event going further up the DOM
});`,explanation:`preventDefault changes what the browser does; stopPropagation changes who else hears about it.`}]},{id:`js-9`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are the common array methods - map, filter, reduce, forEach - and when do you use each?`,answer:`forEach runs a side effect per element and returns undefined - never use it to build a new array. map returns a new array of the same length with each element transformed. filter returns a new array of only the elements that pass a test. reduce folds the array into one value (sum, group, object) and always returns an accumulator you must initialise. Prefer these over raw for loops when you only need a transformation; use .at(), .find(), .some(), .every() and .sort() for the other common cases.`,examples:[{title:`The four shapes`,code:`const nums = [1, 2, 3, 4];

nums.forEach(n => log(n));                  // side effect only
const doubled = nums.map(n => n * 2);      // [2, 4, 6, 8]
const evens = nums.filter(n => n % 2 === 0);// [2, 4]
const total = nums.reduce((acc, n) => acc + n, 0); // 10`,explanation:`Each operator has a distinct job; mixing them up usually means you wanted a different one.`},{title:`Grouping with reduce`,code:`const words = ['apple', 'avocado', 'banana'];
const byLetter = words.reduce((acc, w) => {
  (acc[w[0]] ||= []).push(w);
  return acc;
}, {});`,explanation:`reduce is the general-purpose fold - handy for grouping, counting and building lookups.`}]},{id:`js-10`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the spread operator, and how is it different from rest parameters?`,answer:`Spread (...) expands an iterable into individual elements or properties at the call site - used to copy arrays/objects and to pass an array as separate arguments. Rest parameters collect an indefinite number of arguments passed to a function into a real array, and must be the last parameter in the definition; rest in destructuring gathers the remaining properties into an object. They use the same three dots but sit in opposite positions: spread produces many values from one, rest collects many values into one.`,examples:[{title:`Both directions`,code:`const nums = [1, 2, 3];
const copy = [...nums, 4];                 // spread (produce)

function sum(...args) { return args.reduce((a, b) => a + b, 0); }
sum(...nums);                              // spread args + rest params

const { id, ...rest } = user;             // rest in destructuring (collect)`,explanation:`Spread spreads out, rest gathers in.`},{title:`Rest parameters bundle arguments into an array`,code:`function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sumAll(1, 2, 3);        // 6
sumAll(10, 20, 30, 40); // 100`,explanation:`...numbers is a true array, so array methods work on it directly - unlike the old arguments object.`},{title:`Positional parameters plus rest`,code:`function displayBio(firstName, lastName, ...hobbies) {
  console.log(\`\${firstName} \${lastName} likes:\`);
  console.log(hobbies); // hobbies is a true array
}

displayBio('John', 'Doe', 'Cycling', 'Reading', 'Cooking');
// John Doe likes:
// ['Cycling', 'Reading', 'Cooking']`,explanation:`The rest parameter must come last; it takes everything the earlier named parameters did not.`}]},{id:`js-11`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are Map, Set and WeakMap, and how do they differ from plain objects and arrays?`,answer:`Set holds unique values with fast has/add and preserves insertion order. Map holds key-value pairs with a typed API and reliable iteration, and unlike an object it accepts any value as a key and exposes size, keys(), values() and entries(). WeakMap is the non-enumerable, garbage-collectable variant of Map: keys must be objects and entries vanish when the key is unreachable, which is why it is used for private per-object caches. Use a Set for membership tests instead of indexOf on an array.`,examples:[{title:`Membership and lookup`,code:`const allowed = new Set(['html', 'css']);
allowed.has('css');            // true  (O(1) - array indexOf would be O(n))

const byId = new Map([[1, 'Ada'], [2, 'Lin']]);
byId.get(2);                     // 'Lin'  (keys need not be strings)
Object.keys(byId).length;       // 0 - Map data is not on the prototype`,explanation:`Collections give O(1) lookups and safe handling of keys that objects cannot express.`},{title:`WeakMap for private per-object state`,code:`const meta = new WeakMap();
function tag(node) { meta.set(node, { visits: 0 }); }
function visits(node) { return meta.get(node)?.visits ?? 0; }`,explanation:`Because the keys are objects, entries are collected once the nodes become unreachable.`}]},{id:`js-12`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Why is JavaScript single-threaded, and how can it still handle concurrent work?`,answer:`One thread plus one synchronous call stack means code cannot interleave mid-statement, so you never get data races on shared memory - which is why it is safe by default. Concurrency comes from the event loop: the stack runs to completion, then the microtask queue (promise callbacks) is drained, then one macrotask (timers, I/O callbacks) is processed. I/O is delegated to the browser or Node, so while a request is in flight the main thread is free. That is also why a long synchronous loop freezes the UI - and why heavy work goes to a Web Worker.`,examples:[{title:`Order of execution`,code:`console.log('1 sync');
setTimeout(() => console.log('4 macrotask'), 0);
Promise.resolve().then(() => console.log('3 microtask'));
console.log('2 sync');
// 1 sync, 2 sync, 3 microtask, 4 macrotask`,explanation:`All synchronous code runs first, then microtasks, then the next macrotask.`}]},{id:`js-13`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the prototype chain?`,answer:`Prototypes are the mechanism by which JavaScript objects inherit features from one another. Every object has a built-in property, its prototype (the internal [[Prototype]] link), and the prototype is itself an object with its own prototype - so property lookup walks a chain and stops only when it reaches a prototype whose own prototype is null. That is how arrays inherit from Array.prototype, functions from Function.prototype, and how any object can delegate shared behaviour to another: "inheritance" in JavaScript is delegation along the chain, not copying. Object.create(proto) sets the link directly, Object.getPrototypeOf reads it, and class syntax is sugar over the same mechanism.`,examples:[{title:`Properties are found along the chain`,code:`const myObject = {
  city: 'Madrid',
  greet() {
    console.log(\`Greetings from \${this.city}\`);
  },
};

myObject.greet();                // Greetings from Madrid
myObject.toString();             // found on Object.prototype, not on myObject
Object.getPrototypeOf(myObject); // Object.prototype -> ... -> null`,explanation:`greet() is the object's own property; toString() is found further up the chain, which is why you can call methods you never wrote.`},{title:`Manual delegation`,code:`const animal = { speaks() { return 'generic sound'; } };
const dog = Object.create(animal);
dog.name = 'Rex';

dog.speaks();                 // 'generic sound' (found on the prototype)
Object.hasOwn(dog, 'speaks');// false
'speaks' in dog;              // true  (walks the chain)`,explanation:`Properties are looked up along the chain, so shared behaviour lives on one shared object.`}]},{id:`js-14`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What do call, apply and bind do?`,answer:`All three change what this refers to when a function is invoked. call invokes the function immediately with the given this and arguments listed individually. apply invokes it immediately with an array-like list of arguments. bind returns a new function with this permanently bound and arguments partially applied - which is how you keep a handler working when you pass it to addEventListener.`,examples:[{title:`Invocation styles`,code:`function intro(greeting, mark) { return \`\${greeting} \${this.name}\${mark}\`; }
const user = { name: 'Ada' };

intro.call(user, 'Hi', '!');      // 'Hi Ada!'
intro.apply(user, ['Hi', '!']);   // 'Hi Ada!'
const bound = intro.bind(user, 'Hi');
bound('?');                        // 'Hi Ada?'`,explanation:`call/apply run now; bind produces a reusable function with this fixed.`},{title:`Video walkthrough`,code:`call, apply and bind - https://www.youtube.com/watch?v=75W8UPQ5l7k`,url:`https://www.youtube.com/watch?v=75W8UPQ5l7k`,explanation:`A short visual run through setting this with call, apply and bind, and why bind is the one that returns a new function instead of calling immediately.`}],tags:[`MS`]},{id:`js-15`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What does use strict do?`,answer:`It opts a script or function into strict mode, which removes the sloppy-mode escape hatches: undeclared assignments throw instead of creating a global, this inside a plain function call is undefined rather than the global object, duplicate parameters are rejected, and writes to non-writable properties throw instead of failing silently. Modules and class bodies are always strict, so bundler-based Angular code is strict whether you ask for it or not.`,examples:[{title:`Errors instead of silent globals`,code:`'use strict';
undeclared = 1;       // ReferenceError (sloppy mode would create window.undeclared)

function f() { return this; }
f();                    // undefined (sloppy mode: globalThis)`,explanation:`Strict mode converts silent misbehaviour into immediate errors.`}]},{id:`js-16`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are the ES6+ features worth knowing as an Angular developer?`,answer:`The ones you meet daily: let/const with block scoping, arrow functions, template literals, destructuring with defaults and rest, spread for copying, classes, ES modules with import/export, and the null-handling operators ?. and ??. Map/Set replaced the need for most object-as-dictionary hacks, and Object.entries/values/fromEntries make transformation easy. Later editions add optional catch binding, logical assignment (??=, ||=) and Array.prototype.at for negative indexing.`,examples:[{title:`Everyday uses`,code:`const state = { user: { name: 'Ada' }, tags: ['a'] };
const { user: { name }, ...rest } = state;  // destructuring + rest
const label = \`Hi \${name ?? 'guest'}\`;       // template literal + nullish coalescing
const count = state.tags?.length;            // optional chaining`,explanation:`These are the features that remove most defensive coding.`}]},{id:`js-17`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is Object.assign and how does it differ from object spread?`,answer:`Object.assign(target, ...sources) copies own enumerable properties from the sources onto the target and returns that same mutated object. Spreading ({ ...source }) builds a new object instead. They copy the same properties - including symbol-keyed ones - so the only real difference is the target: spread cannot mutate a shared object by accident. Prefer spread in application code. Both are shallow - nested objects are still shared references.`,examples:[{title:`Mutate vs copy`,code:`const defaults = { retries: 3 };
const a = Object.assign({}, defaults, { retries: 5 });  // new object
const b = Object.assign(defaults, { retries: 5 });       // mutates defaults!

const c = { ...defaults, retries: 5 };                   // new object`,explanation:`Prefer spread - Object.assign on a shared defaults object edits it for everyone.`}]},{id:`js-18`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you prevent an object from being modified?`,answer:`Object.freeze seals an object shallowly: existing properties cannot be reassigned or deleted, and new ones cannot be added. Nested objects are not affected, so for deep protection you freeze recursively. Object.seal allows modification but blocks adding and deleting. Reassigning an existing non-writable property throws a TypeError in strict mode and fails silently in sloppy mode. Freeze also reaches internal slots: a frozen array cannot be pushed to or sorted, because every one of those operations has to write a property on an object that is no longer extensible - that throws in both modes. What freeze never reaches is anything the object references, which is why the recursion above is the part people forget.`,examples:[{title:`Shallow vs deep freeze`,code:`const config = Object.freeze({ url: '/api', nested: { retries: 3 } });
config.url = '/x';        // TypeError in strict mode, ignored otherwise
config.nested.retries = 9;// allowed - freeze is only one level deep

const deep = Object.freeze({ nested: Object.freeze({ retries: 3 }) });`,explanation:`Freeze walks one level; nested objects must be frozen explicitly.`}]},{id:`js-19`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is type coercion in JavaScript?`,answer:`JavaScript implicitly converts values between types when an operator or context demands it, which is why "4" - 2 is 2 but "4" + 2 is "42" - addition concatenates when either side is a string. Comparisons use abstract equality loosely: == coerces types, while === compares type and value. Coercion produces the infamous NaN whenever a string cannot be parsed as a number. Prefer explicit conversion - Number(), String(), Boolean() - and always === over ==.`,examples:[{title:`Coercion surprises`,code:`'4' - 2;        // 2      (numeric)
'4' + 2;        // '42'    (string concat)
'4' == 4;       // true    (loose)
'4' === 4;      // false   (strict)
3 + undefined; // NaN`,explanation:`Arithmetic coerces to numbers, + with a string concatenates, and == coerces while === does not.`}]},{id:`js-20`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you find the minimum and maximum value in an array?`,answer:`Spread the array into Math.min or Math.max. Beware the argument limit: Math.min(...arr) throws a RangeError for arrays with roughly a hundred thousand elements or more, and it also fails on an empty array (Infinity for min, -Infinity for max). For large arrays reduce the values instead, and decide what an empty list should mean for your domain.`,examples:[{title:`Spread, reduce and the empty case`,code:`const nums = [1, -9, -7, 6];
Math.min(...nums);                    // -9

// safe for huge arrays
const min = nums.reduce((m, n) => (n < m ? n : m), Infinity); // -9

Math.min(...[]);                    // Infinity (often not what you want)`,explanation:`Spread is clearest for normal data; reduce avoids the argument-count limit.`}]},{id:`js-21`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`Why is JavaScript single-threaded, and how does the event loop keep it from blocking?`,answer:`Synchronous code runs one statement at a time, in order, and nothing else runs until it finishes. Asynchronous code schedules work to run later and returns immediately, so the thread stays free to keep going. JavaScript is single-threaded because it was born as a browser scripting language: one thread per tab owns the DOM, and if multiple threads mutated the document at once the UI would race and break, so the language runs on one main thread with an event loop that yields to rendering between tasks. Single-threaded means one call stack, so exactly one thing executes at a time. It avoids blocking through the event loop and its two queues: when an async API settles (network, timer, a resolved promise), the runtime does not interrupt the current code; it queues a callback and only runs it once the stack is empty. The microtask queue (promise handlers, queueMicrotask, MutationObserver) is drained completely after each task; the macrotask queue (setTimeout, setInterval, I/O, browser events) runs one task at a time, then the microtask queue empties again, then the browser may paint. Long synchronous work janks the page; long async work stays responsive because the stack empties between small units. Web Workers are the escape hatch for genuinely parallel compute, with the price that they have no DOM access.`,examples:[{title:`Synchronous vs asynchronous at a glance`,code:`console.log('A');                       // sync: runs now, in order
const x = add(1, 2);                  // sync: result available inline
console.log(x);                       // '3' immediately

setTimeout(() => console.log('C'), 0);      // scheduled macrotask
Promise.resolve().then(() => console.log('B')); // scheduled microtask

console.log('D');                     // sync: runs now
// output order: A, 3, D, B, C`,explanation:`Sync code finishes inline; async callbacks run later. Even a 0ms timer is still a task, and the microtask (B) always beats it because the microtask queue drains before the next macrotask.`},{title:`Why one thread does not block: the event loop`,code:`// The event loop, simplified:
while (true) {
  drain the ENTIRE microtask queue;  // promises, queueMicrotask
  if (stack is empty) run ONE macrotask; // timers, I/O, DOM events
  render if needed;                  // layout + paint
}

// Callbacks only run when the stack is empty, which is the yield point
// that keeps the UI responsive - provided no single sync task runs
// so long that it never yields.`,explanation:`The microtask queue empties fully after each task; the macrotask queue runs one task at a time. Callbacks never interrupt running code, so the page stays interactive for async-heavy work.`}]},{id:`js-22`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you find the second highest number in an array?`,answer:`I would clarify first whether duplicates count, because [10, 10, 8] is either 8 or nothing depending on what they meant, and what to return for an array with fewer than two distinct values. With that settled, one pass with two variables is the answer: walk the array once, when a value beats the current highest shift the old highest down into second place, and when it does not beat the highest but beats second, update second. Guarding the second branch with 'less than highest' is what keeps a duplicate of the winner from becoming the runner-up. That is O(n) time and O(1) extra space, versus sorting first at O(n log n) and O(n) space, and the single pass also short-circuits nothing in the worst case, so the honest comparison is about clarity rather than a big win - though on a large input it is still measurably cheaper. Edge cases I would mention rather than let them find them: empty arrays, one distinct value, NaN, and unsorted input, which the one-pass version handles by construction.`,examples:[{title:`One pass, duplicates handled explicitly`,code:`function secondHighest(numbers: number[]): number | undefined {
  let highest = -Infinity;
  let second = -Infinity;

  for (const n of numbers) {
    if (n > highest) {
      second = highest;
      highest = n;
    } else if (n < highest && n > second) {
      second = n;
    }
  }

  return second === -Infinity ? undefined : second;
}

secondHighest([10, 5, 8, 10, 7]); // 8  - the second DISTINCT value
secondHighest([4, 4, 4]);          // undefined`,explanation:`The n < highest test is the whole trick: without it the repeated 10 would overwrite second and you would report 10 as the answer.`}],tags:[`MS`]},{id:`js-23`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between a shallow copy and a deep copy?`,answer:`A shallow copy duplicates the outermost container and copies the references inside it, so the new object is independent at the top level only - spread, Object.assign and array slice all behave this way. Mutate a nested object on the copy and you have mutated the original, which is exactly the bug that produces a UI that will not re-render or a store entry that changed without an action. A deep copy duplicates the nested structure too, so nothing is shared. The standard tool is structuredClone(), which handles cycles, Dates, Maps, Sets, RegExps and typed arrays; it refuses functions, DOM nodes and class instances that are not cloneable, which is the failure people meet first. The old alternative, JSON.parse(JSON.stringify(obj)), silently drops undefined values, Dates become strings, functions disappear, and it throws on circular references - acceptable only for data that is genuinely JSON. The practical rule in Angular is to avoid needing a deep copy at all: update immutably at every level (spread the object and the branch you touched), because signals, OnPush and NgRx all rely on reference changes meaning something.`,examples:[{title:`Shared by reference, then properly cloned`,code:`const original = { name: 'Alice', address: { city: 'Pune' } };

const shallow = { ...original };
shallow.address.city = 'Mumbai';
original.address.city; // 'Mumbai' - address is the SAME object

const deep = structuredClone(original);
deep.address.city = 'Delhi';
original.address.city; // 'Mumbai' - nothing shared

structuredClone(() => {}); // TypeError: functions are not cloneable`,explanation:`Spread copies one level, so every nested reference is still the original's; structuredClone copies the whole graph, and tells you where it stops.`}],tags:[`MS`]},{id:`js-24`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a Promise, and how do you work with one?`,answer:`A Promise is an object that represents the eventual result of an asynchronous operation, and the part worth saying precisely is that it is in one of three states - pending, fulfilled or rejected - and it settles exactly once. After it has fulfilled or rejected it never changes again, which is what separates it from a callback that can fire any number of times. You create one with new Promise((resolve, reject) => ...), but in practice you consume the promises APIs hand back, either with .then/.catch/.finally or with async/await, which is cleaner syntax over the same chain - an await pauses that function, not the thread. Composition is where promises earn their place: Promise.all runs calls in parallel and rejects as soon as one fails, allSettled waits for all of them and reports each outcome, race takes the first to settle and any takes the first to succeed. The pitfalls interviewers listen for are forgetting to return a promise inside a then, which lets the chain resolve before the inner work finishes; floating promises that nobody awaits or catches, because an unhandled rejection surfaces late and somewhere else; and awaiting in a loop when the calls are independent, which turns the total time from the slowest call into the sum of them. Angular's HttpClient returns Observables rather than promises on purpose, since an Observable can emit more than once and be cancelled, and firstValueFrom or lastValueFrom convert one when a promise really is simpler.`,examples:[{title:`States, then/catch, and the same thing with async/await`,code:`const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// then / catch / finally
wait(500)
  .then(() => fetchUser())
  .catch((error) => console.error('failed', error))   // handles any rejection above
  .finally(() => (loading = false));                  // always runs

// the same chain with async/await
async function load() {
  try {
    await wait(500);
    return await fetchUser();   // the return keeps the caller waiting too
  } catch (error) {
    console.error('failed', error);
  } finally {
    loading = false;
  }
}`,explanation:`The promise is pending until it settles, and it settles once - the catch covers a rejection from anywhere above it in the chain. async/await changes the look of this, not the behaviour; await only pauses the function it is written in.`},{title:`Parallel beats sequential, and the combinators`,code:`// ~2s: the second call waits for the first for no reason
const user = await getUser();
const orders = await getOrders();

// ~1s: both run at the same time
const [u, o] = await Promise.all([getUser(), getOrders()]);

await Promise.allSettled([getUser(), getOrders()]); // waits for every outcome, never rejects
await Promise.race([getUser(), timeout(5000)]);     // first to settle wins (timeouts)
await Promise.any([primary(), fallback()]);         // first to fulfil wins`,explanation:`Promise.all is all-or-nothing and fails fast; allSettled always waits and tells you which ones failed; race takes the first settlement, which is how a timeout is built; any takes the first success.`}],tags:[`MS`]}],angular:[{id:`angular-1`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a component in Angular?`,answer:`A component is an Angular building block that combines an HTML template, styles and a TypeScript class that holds the logic and state. Components are standalone by default in modern Angular and import the dependencies they use directly in their imports array.`,examples:[{title:`A standalone component`,code:`import { Component, inject } from '@angular/core';
import { UserCard } from './user-card';

@Component({
  selector: 'app-user-list',
  imports: [UserCard],
  template: \`@for (u of users(); track u.id) { <app-user-card [user]="u" /> }\`,
})
export class UserList {
  private readonly store = inject(UserStore);
  readonly users = computed(() => this.store.active());
}`,explanation:`Template, styles and class in one place; everything it needs is listed in imports.`}]},{id:`angular-2`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is data binding in Angular?`,answer:`Data binding connects the component class to the template. Interpolation {{ }} and property binding [property] flow from class to view, event binding (event) flows from view to class, and two-way binding [(ngModel)] or model() flows both ways.`,examples:[{title:`Interpolation`,code:`<h1>Hello {{ user().name }}</h1>`,explanation:`Class -> view, rendered as text (escaped).`},{title:`Property binding`,code:`<img [src]="avatarUrl()" [disabled]="isPending()" />`,explanation:`Sets a DOM/component property instead of an attribute.`},{title:`Event binding`,code:`<button (click)="save()">Save</button>`,explanation:`View -> class: the handler receives a native or $event value.`},{title:`Two-way binding`,code:`<input [ngModel]="name()" (ngModelChange)="name.set($event)" />`,explanation:`Expands to a property binding plus an event binding; with signals you usually write both sides explicitly.`}]},{id:`angular-3`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is an Angular directive?`,answer:`A directive is a class that extends HTML behaviour — structure or presentation — without an associated template. Attribute directives change an element's appearance or behaviour, while structural directives add, remove or repeat elements in the DOM - *ngIf and *ngFor are the classic ones, replaced in modern templates by the built-in @if / @for control-flow blocks. To write one: a class with a selector that matches an attribute, element or modifier, marked standalone so templates import it directly; host bindings and host listeners expose its state, and the DOM goes through ElementRef and Renderer2 rather than nativeElement.style, because Renderer2 stays platform-safe and testable. If CSS alone can express the behaviour, CSS alone should.`,examples:[{title:`Component directive`,code:`<app-header [title]="pageTitle()" />`,explanation:`A component is a directive with a template - it adds a new element to the DOM.`},{title:`Structural directive`,code:`@if (isLoggedIn()) { <app-admin /> }`,explanation:`Structural directives add or remove DOM (@if/@for/@switch are built-ins now).`},{title:`Attribute directive`,code:`<button matButton appAutofocus>Go</button>`,explanation:`Attribute directives change behaviour or appearance of the host element without adding markup.`},{title:`A directive you can actually write`,code:`@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);
  readonly highlight = input('#fff59d');

  @HostListener('mouseenter')
  enter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlight());
  }

  @HostListener('mouseleave')
  leave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

<p appHighlight>Hover me</p>`,explanation:`Attribute directive: it matches an attribute, adds no markup of its own, and changes the host element - the reusable version of an inline (mouseenter) handler copied into five templates.`}],tags:[`MS`]},{id:`angular-4`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is dependency injection?`,answer:`Dependency injection is how Angular provides the services a component or class needs. Instead of a class creating its own dependencies with new, it declares what it needs - in its constructor or with inject() - and Angular's injector resolves and supplies them, which is the "no manual instantiating" part. The advantages are loose coupling (a class depends on a token, not a concrete implementation), testability (swap in a fake via the same token), a single place to control scope and lifetime (an app-wide singleton or one instance per component or route), and easier refactoring because the wiring lives in the injector rather than being scattered through constructors. Services marked providedIn: 'root' are app-wide singletons.`,examples:[{title:`Root-provided service`,code:`@Injectable({ providedIn: 'root' })
export class ApiClient {
  private readonly http = inject(HttpClient);
}

// anywhere: private readonly api = inject(ApiClient);`,explanation:`One instance for the whole app - inject it without listing it anywhere.`},{title:`Component-provided service`,code:`@Component({
  providers: [DraftForm],
})
export class Editor {}`,explanation:`A new instance per component, which is how you keep state from leaking between component instances.`}]},{id:`angular-5`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between @Input and @Output, and how do the signal APIs change it?`,answer:`@Input lets a parent pass data down into a child, and @Output lets the child emit an event upward - together they are the two halves of component communication. In modern Angular you use the signal APIs rather than the decorators: input() / input.required() on the way in, output() on the way out, and model() when the value both flows down and can be written back up by the child. The behavioural difference is that signal inputs and outputs are reactive - a computed() can derive from them and change detection is notified when they change - whereas decorator inputs are plain properties that you read imperatively.`,examples:[{title:`Input into a child`,code:`id = input.required<string>();
label = input('Untitled');`,explanation:`Parent passes data down: <app-tag [id]="tagId" />`},{title:`Output from a child`,code:`removed = output<string>();
// <app-tag (removed)="onRemoved($event)" />`,explanation:`Child emits upward so the parent can react - the other half of component communication.`}]},{id:`angular-6`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`A user types in a search box and the whole page feels janky. How do you isolate the cause and fix it?`,answer:`Profile first: use Angular DevTools to spot components running many change-detection cycles and the Chrome performance tab to confirm what is slow. Common fixes: debounceTime(300) + switchMap on the search stream so every keystroke does not hit the API, move heavy computations out of templates into pipes or a computed, add trackBy, use ChangeDetectionStrategy.OnPush on the growing list, and wrap high-frequency handlers like scroll in runOutsideAngular(ngZone). Fix the root cause rather than sprinkling optimizations.`,examples:[{title:`Debounce + cancel + isolate`,code:`// template
<input (input)="onInput($event)" />
@for (r of results(); track r.id) { <p>{{ r.name }}</p> }

@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class Search {
  private readonly api = inject(CustomerApi);
  private readonly term$ = new Subject<string>();

  // toSignal needs an injection context, so it belongs in a field
  // initializer - not inside the event handler.
  readonly results = toSignal(
    this.term$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(t => this.api.search(t)),   // cancels the previous request
    ),
    { initialValue: [] as Customer[] },
  );

  onInput(e: Event): void {
    this.term$.next((e.target as HTMLInputElement).value);
  }
}`,explanation:`Fix the cause: one request per settled term, stale responses dropped, and the list re-renders on its own dependency only.`}]},{id:`angular-8`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`A sidebar filter and a dashboard list are unrelated components but must stay in sync. How do you implement this?`,answer:`Put the shared state in a service: a signal() (or BehaviorSubject if you need an async stream) with read/computed selectors. Keep components dumb - the list reads the signal and re-renders. For parent-to-child data use @Input/@Output; for unrelated components a shared service is the standard answer, and signals today remove the subscription boilerplate the BehaviorSubject approach needed.`,examples:[{title:`Shared service with signals`,code:`@Injectable({ providedIn: 'root' })
export class FilterStore {
  private readonly role = signal<UserRole | 'all'>('all');
  readonly users = computed(() => {
    const r = this.role();
    return r === 'all' ? this.all() : this.all().filter(u => u.role === r);
  });
  setRole(r: UserRole | 'all') { this.role.set(r); }
}`,explanation:`The sidebar writes, the list reads - no parent, no Input/Output plumbing, and derived data stays consistent.`}]},{id:`angular-9`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`The user clicks 'Save' rapidly while a POST is in flight. How do you prevent duplicate requests?`,answer:`Use exhaustMap on the click stream: it ignores new emissions while an inner request is running and only accepts the next click after completion. That matches the intent - ignore extra clicks until the request settles. switchMap would cancel the in-flight request, which is wrong for a save; debounceTime would just delay the first click.`,examples:[{title:`Ignore clicks while saving`,code:`private readonly save$ = new Subject<void>();
readonly saving = signal(false);

constructor() {
  // one subscription for the lifetime of the component. Piping inside save()
  // would build a new subscription per click and defeat exhaustMap entirely.
  this.save$.pipe(
    exhaustMap(() => {
      this.saving.set(true);
      return this.api.save(this.form.value).pipe(
        finalize(() => this.saving.set(false)),
      );
    }),
  ).subscribe();
}

save(): void { this.save$.next(); }`,explanation:`exhaustMap drops emissions while the inner request is in flight, so one click means one request - but only because the subscription is created once.`}]},{id:`angular-10`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`A dashboard must show data from three APIs, but only when all three have arrived, and it must update if any of them changes later. What operator do you use and why?`,answer:`combineLatest: it emits only once all sources have emitted at least once and keeps emitting whenever any source changes afterwards - exactly 'render once all three exist, update on any change'. forkJoin would be wrong because it emits once and completes, so later changes never re-render. If you only needed the first combined value, forkJoin would be fine.`,examples:[{title:`combineLatest vs forkJoin`,code:`// live: re-emit when any source changes after all have arrived
combineLatest([profile$, prefs$, permissions$]).subscribe(render);

// one-shot: last value of each, only after all complete
forkJoin([a$, b$]).subscribe(renderOnce);`,explanation:`combineLatest fits 'render when everything is present and keep updating'; forkJoin fits 'wait for a batch of requests'.`}]},{id:`angular-11`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`There is a memory leak in production - memory grows steadily as users navigate. How do you track it down?`,answer:`Reproduce in dev with the browser heap snapshot: take two snapshots around a navigation cycle and diff them to find detached DOM nodes or lingering references. Suspect manual subscribe() calls that were never unsubscribed, timers, and addEventListener. Fix by using the async pipe or takeUntilDestroyed(), and centralizing subscriptions so cleanup is a convention, not a discipline.`,examples:[{title:`Finding and fixing the leak`,code:`// leaking
ngOnInit() { this.timer$.subscribe(() => this.tick()); }

// fixed - cleanup tied to the destroy ref
private readonly destroyRef = inject(DestroyRef);

ngOnInit() {
  this.timer$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.tick());
}`,explanation:`In the heap snapshot, detached DOM retained by a live subscription is the giveaway; takeUntilDestroyed (or the async pipe) makes cleanup automatic.`}]},{id:`angular-12`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`You need a reusable form input that works both with ngModel and inside a reactive form. How do you build it?`,answer:`Implement ControlValueAccessor on a component: writeValue populates the control, registerOnChange/registerOnTouched wire the UI to the form model, and setDisabledState handles enable/disable. You might ask why this is needed - could you not just read the ngModel value and build the payload yourself? For one screen you could, but then the component knows nothing about the form around it. Implementing CVA makes the component speak the same contract as a native input, so it works with [(ngModel)] and with [formControl]/formControlName, participates in validation and touched/dirty/pending state, responds to form.reset(), honours setDisabledState, and composes inside a parent formGroup. The emitted value is only one part of that contract; the rest is what makes it interchangeable with a real input.`,examples:[{title:`ControlValueAccessor`,code:`@Component({
  selector: 'app-rating',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Rating), multi: true }],
})
export class Rating implements ControlValueAccessor {
  value: number | null = null;
  disabled = false;
  private onChange: (v: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void { this.value = value; }
  registerOnChange(fn: (v: number | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}`,explanation:`Implementing the four methods makes the component bindable by both ngModel and formControlName. The signatures accept null because the forms API calls them with null, for example on reset.`},{title:`Using it`,code:`<app-rating [(ngModel)]="score" />

<form [formGroup]="form">
  <app-rating formControlName="score" />
</form>`,explanation:`One component, both form APIs, because it speaks the CVA contract.`}]},{id:`angular-13`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`A stepper form is spread across multiple components but must behave as one form. How do you keep it consistent?`,answer:`Own a single FormGroup instance in a parent component and pass it down (@Input) or expose it from a shared service provided at the parent scope. Each step component binds its controls to the same instance via formControlName/formGroup, and the stepper reads validity from one place. A service scoped to the feature route (rather than root) avoids leaking state across navigation.`,examples:[{title:`One FormGroup, several steps`,code:`// stepper (parent) owns the group
private readonly fb = inject(FormBuilder);

readonly form = this.fb.group({
  address: this.fb.group({ city: ['', Validators.required] }),
  payment: this.fb.group({ card: ['', Validators.required] }),
});

// each step child
@Component({ selector: 'app-address-step' })
export class AddressStep {
  form = input.required<FormGroup>();   // passed, not duplicated
}`,explanation:`The step components never own form state - they render and validate parts of the parent's instance.`},{title:`Scoped service alternative`,code:`@Component({ providers: [CheckoutForm] })   // one instance per checkout flow`,explanation:`Providing the form on the parent (or a route-scoped service) avoids stale state surviving navigation.`}]},{id:`angular-14`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`How do you implement role-based access control - restricting routes by role and hiding UI elements?`,answer:`Two layers: a route guard canActivateFn checks whether the logged-in role may enter a route (and redirects otherwise), while a structural directive (like *appHasRole) conditionally renders UI for a role. Keep the user's roles in a shared service/signal read by both. Never rely on hiding UI alone - guards must also enforce the route, and the server must enforce authorization anyway.`,examples:[{title:`Route guard + structural directive`,code:`// guard
canMatch: [() => {
  const auth = inject(AuthService);
  return auth.roles().includes('admin') ? true : inject(Router).createUrlTree(['/login']);
}]

// directive
@Directive({ selector: '[appHasRole]' })
export class HasRole {
  roles = input.required<string[]>();
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vcr = inject(ViewContainerRef);
  // render the embedded view only when the current user has the role
}`,explanation:`The guard protects the route and (with canMatch) the download; the directive only shapes the UI. The backend must still authorise.`}]},{id:`angular-15`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`Two routes must be lazy-loaded, but only admin users may reach the Reports route. How do you set that up?`,answer:`Use a guard that checks the user's role from the auth store before entry. Prefer canMatch (which runs before the module is loaded) over canActivate only, so the lazy Reports bundle is never downloaded for unauthorized users. Pair it with loadComponent routing so admin access and code-splitting both hold.`,examples:[{title:`canMatch keeps the bundle private`,code:`{ path: 'reports',
  canMatch: [adminGuard],   // runs BEFORE the chunk is fetched
  loadComponent: () => import('./reports/reports').then(c => c.Reports) }`,explanation:`canActivate checks after the route is matched (chunk already requested); canMatch blocks earlier, so unauthorised users never download the code.`}]},{id:`angular-16`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between the constructor and ngOnInit?`,answer:`The constructor runs when the component instance is created, before inputs are resolved - Angular best practice is to use it only for dependency injection and minimal setup. ngOnInit runs after the first ngOnChanges, once the component's inputs are set, so it is the right place to read input values and kick off initialization logic or long-lived subscriptions.`,examples:[{title:`Constructor vs ngOnInit`,code:`constructor(private svc: UserService) {}

ngOnInit(): void {
  // inputs are resolved here
  this.users = this.svc.list(this.id);
}`,explanation:`DI only in constructor; initialization that reads inputs in ngOnInit.`}]},{id:`angular-17`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the async pipe and how does it prevent memory leaks?`,answer:`The async pipe subscribes to an Observable in the template ({{ users$ | async }}) and unsubscribes automatically when the component is destroyed. That removes the need for a manual subscription and the classic leak where a component subscribes in ngOnInit but never unsubscribes in ngOnDestroy. It pairs naturally with OnPush change detection.`,examples:[{title:`async pipe leak prevention`,code:`<ul>
  @for (u of users$ | async; track u.id) { <li>{{ u.name }}</li> }
</ul>`,explanation:`async pipe auto-unsubscribes when component is destroyed.`}]},{id:`angular-18`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are route guards and which ones do you know?`,answer:`Route guards decide whether navigation proceeds. canActivate/canActivateFn checks a route's entry once matched, canMatch blocks the route from even being considered (running before module load - best for lazy security), and canDeactivate asks before leaving a dirty form. They are functions or services returning boolean, an observable/promise, or a redirect URL tree.`,examples:[{title:`Route guards`,code:`export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.role() === 'admin' ? true : inject(Router).createUrlTree(['/']);
};`,explanation:`canActivateFn/canMatch gate navigation/loads.`}],tags:[`MS`]},{id:`angular-19`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is an HTTP interceptor and what are typical use cases?`,answer:`An interceptor sits in the request/response pipeline and lets you transform a request or observe a response centrally, instead of repeating logic per call. Common uses: attaching an auth token header, global error handling and retries, logging, and loading indicators. In modern Angular it is implemented as a function returning next.handle(req) in the chain.`,examples:[{title:`HTTP interceptor (function form)`,code:`import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next(authReq);
};`,explanation:`Modern functional interceptor: clone and chain with next.`}],tags:[`MS`]},{id:`angular-20`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a pipe and the difference between pure and impure pipes?`,answer:`A pipe transforms a value in the template ({{ value | date: 'short' }}). A pure pipe (the default) runs its transform only when Angular detects a "pure change" to an input argument: a change to a primitive value (string, number, boolean) or a new object/array reference. That is why mutating data in place - pushing into an array or editing a property of an object - does not re-run a pure pipe: the reference is unchanged, so Angular sees no change. That is the classic pure-pipe pitfall. An impure pipe (pure: false) runs during every change detection cycle - every keystroke, click or timer tick - so it does pick up mutations and data changing independently of its arguments, but at a real performance cost. Make pure the rule and impure the exception.`,examples:[{title:`Why a pure pipe misses a mutation`,code:`items.push(newItem);         // same array reference -> a pure pipe does not re-run
this.items.set([...items]);  // new reference -> the pipe re-runs`,explanation:`A pure pipe keys off the argument's reference, so an in-place mutation is invisible to it; hand it a new array (or use an impure pipe).`},{title:`Pure vs impure pipe`,code:`@Pipe({ name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {
  transform(list: any[], q: string) { /* runs every CD cycle */ return ...; }
}`,explanation:`pure (default) runs on primitive or reference changes only; impure runs every change detection cycle.`}]},{id:`angular-21`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is content projection (ng-content)?`,answer:`Content projection lets a parent component pass markup into a child's template via <ng-content>. In a card or modal component the child defines named slots with <ng-content select="[slot='header']"> and the parent fills them by putting slot="header" on its content, which makes the component reusable without prop-drilling markup. Multi-slot projection uses the select attribute; a catch-all ng-content without select grabs everything else.`,examples:[{title:`Multi-slot content projection`,code:`<app-card>
  <h2 slot="header">Title</h2>
  <p>Body content</p>
  <button slot="footer">OK</button>
</app-card>

<!-- card.html -->
<header><ng-content select="[slot='header']"></ng-content></header>
<section><ng-content></ng-content></section>
<footer><ng-content select="[slot='footer']"></ng-content></footer>`,explanation:`select targets named slots; unnamed ng-content is the default.`}]},{id:`angular-22`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`A username field must show "already taken" while the user types, using a backend check. How do you implement it?`,answer:`Reach for an AsyncValidator, not a manual subscribe. Angular runs async validators through the same FormControl status pipeline as sync validators, so the control goes PENDING while the check is in flight and then VALID or INVALID - and you wire the disabled state yourself from form.pending, Angular will not do that for you. Two rules matter. Debounce before hitting the network, with a timer inside the validator. And skip re-checking an unchanged value - but note that distinctUntilChanged() belongs on the valueChanges stream that drives the check, not inside the validator, because Angular re-runs the validator as a fresh subscription on every value change and there is no previous emission for it to compare against. Always catchError inside the validator and return null - a network failure is not the user's fault, so it must not mark the field invalid and block submit.`,examples:[{title:`Async validator factory (debounced + failure-tolerant)`,code:`export function usernameAvailable(api: UserApi): AsyncValidatorFn {
  return (control) => {
    const value = (control.value ?? '').trim();
    if (value.length < 3) return of(null);

    return timer(300).pipe(              // debounce: one request per pause
      switchMap(() => api.checkUsername(value)),
      map(taken => (taken ? { usernameTaken: true } : null)),
      catchError(() => of(null)),        // network error != invalid value
      first(),
    );
  };
}`,explanation:`The factory takes the service as an argument because inject() is not available inside the function the validator returns. Dedupe the value upstream on valueChanges with distinctUntilChanged() - each validator run is a fresh subscription, so it has nothing to compare against.`},{title:`Wiring it up and showing the three states`,code:`username = new FormControl('', {
  nonNullable: true,
  validators: [Validators.required],
  asyncValidators: [usernameAvailable(inject(UserApi))],
});

// template
@if (username.pending) { <span>Checking...</span> }
@if (username.hasError('usernameTaken')) { <span>Already taken</span> }

// <button [disabled]="username.invalid || username.pending">Save</button>`,explanation:`pending covers the in-flight window, invalid covers a real backend rejection, and the submit button stays disabled while either is true - that last part is your binding, not Angular's behaviour.`}]},{id:`angular-24`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`A component loads its data in ngOnInit from a service. How do you test that the data actually renders?`,answer:`Configure the test with a fake for the dependency, not the real HTTP stack. Provide a spy object with TestBed, assert the component called it, then trigger change detection and assert on the rendered DOM. Use signals plus whenStable rather than relying on a timer, so the test is deterministic. Signal inputs must be set through componentRef.setInput, because assigning to the input field directly bypasses the signal. Also test the failure path - the empty and error states are where component bugs hide.`,examples:[{title:`Test with a spy for the service`,code:`const api = jasmine.createSpyObj<UserApi>('UserApi', ['getUsers']);

TestBed.configureTestingModule({
  imports: [UserList],
  providers: [{ provide: UserApi, useValue: api }],
});

api.getUsers.and.returnValue(of([{ id: 1, name: 'Ada' }]));

const fixture = TestBed.createComponent(UserList);
await fixture.whenStable();
fixture.detectChanges();

expect(api.getUsers).toHaveBeenCalled();
expect(fixture.nativeElement.textContent).toContain('Ada');`,explanation:`No HTTP, no async pipe waiting games - the fake returns a synchronous observable.`},{title:`Signal inputs and the error path`,code:`api.getUsers.and.returnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

const fixture = TestBed.createComponent(UserList);
await fixture.whenStable();
fixture.detectChanges();

expect(fixture.nativeElement.textContent).toContain('Could not load users');

// signal inputs must go through setInput
fixture.componentRef.setInput('role', 'admin');`,explanation:`Asserting the empty/error state catches the bugs that only appear in production.`}]},{id:`angular-25`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`Forms must be generated at runtime from a JSON schema sent by the backend. How do you build them?`,answer:`Build the FormGroup imperatively from the schema and drive the template from the same schema, so adding a field needs no component change. Walk the schema, addControl per field, attach validators from declarative hints (required, minLength, email), and use nonNullable controls for inputs so you get strings and numbers instead of null unions. For nested objects recurse into child FormGroups; for anything with conditional visibility or cross-field rules, hand off to a library such as Formly or Angular's signal forms instead of reinventing the DSL. Always cache the generated group when the schema is static, otherwise you recreate controls on every detection cycle.`,examples:[{title:`Schema to FormGroup`,code:`interface FieldSchema {
  name: string; label: string;
  type: 'text' | 'number' | 'email';
  required?: boolean;
  minLength?: number;
  children?: FieldSchema[];
}

function toControls(schema: FieldSchema[]): Record<string, AbstractControl> {
  return Object.fromEntries(schema.map(f => {
    const validators = f.required ? [Validators.required] : [];
    if (f.minLength) validators.push(Validators.minLength(f.minLength));

    const control: AbstractControl = f.children
      ? new FormGroup(toControls(f.children))
      : new FormControl(f.type === 'number' ? 0 : '', { validators, nonNullable: true });

    return [f.name, control];
  }));
}

form = new FormGroup(toControls(schema));`,explanation:`Validators come from data, so the schema is the single source of truth for validation.`},{title:`Rendering from the same schema`,code:`<form [formGroup]="form">
  @for (f of schema; track f.name) {
    <label [for]="f.name">{{ f.label }}</label>
    <input [id]="f.name" [formControlName]="f.name" />
    @if (form.controls[f.name].hasError('required')) {
      <small>{{ f.label }} is required</small>
    }
  }
  <button [disabled]="form.invalid">Save</button>
</form>`,explanation:`The template never names a specific field, so backend schema changes ship without code.`}]},{id:`angular-26`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`How would you structure a multi-role enterprise Angular app so it stays maintainable as features keep being added?`,answer:`Use three layers with a strict dependency direction: core holds singletons and app-wide wiring (interceptors, guards, app config, root services), shared holds reusable presentation (UI components, pipes, directives) that depend only on core, and features holds the domain code - one folder per role or bounded context, each with its own components, routes and models. Lazy-load each feature and gate it with a role guard. The rule that keeps it from rotting is that features must not import from other features; when two features need the same thing it moves to shared or into a small publishable library. Prefer explicit imports over barrel files, because barrels pull unrelated code into every chunk and blur the dependency graph.`,examples:[{title:`Folder structure`,code:`src/app/
  core/            # providedIn:'root' services, interceptors, guards, app.config
    auth/
    http/
  shared/          # reusable UI - imports core only
    ui/            # button, dialog, data-table
    pipes/
  features/        # domain code - never imported across
    admin/         # routes.ts + components + models
    manager/
    reports/
  app.routes.ts    # top-level lazy routes only

libs/
  ui-kit/          # publishable lib when shared grows`,explanation:`core and shared stay small and stable; features absorb all the churn.`},{title:`Top-level lazy routes per role`,code:`export const routes: Routes = [
  { path: 'admin', canMatch: [roleGuard('admin')],
    loadChildren: () => import('./features/admin/routes').then(m => m.ADMIN_ROUTES) },
  { path: 'manager', canMatch: [roleGuard('manager')],
    loadChildren: () => import('./features/manager/routes').then(m => m.MANAGER_ROUTES) },
  { path: 'reports', canMatch: [roleGuard('admin')],
    loadComponent: () => import('./features/reports/report-list').then(c => c.ReportList) },
];`,explanation:`canMatch keeps the chunk from even being fetched by users who cannot use it.`}]},{id:`angular-27`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`A third-party chat widget needs its <script> injected and global config loaded. How do you integrate it without breaking SSR or encapsulation?`,answer:`Wrap it in a service plus a thin component or directive rather than scattering script tags. Create the service with Renderer2 so the script node is added and later removed through Angular, and only in the browser - guard with isPlatformBrowser or run the work in afterNextRender, which never executes on the server. Load the configuration with provideAppInitializer so the app blocks until the config exists, instead of racing it during bootstrap. If the vendor injects its own styles into document.head, isolate it in a wrapper component with ViewEncapsulation.None; if it needs a framework, add it as an external script in angular.json rather than injecting at runtime. Always keep the cleanup handle - chat widgets keep global listeners.`,examples:[{title:`SSR-safe loader with Renderer2`,code:`@Injectable({ providedIn: 'root' })
export class ChatWidget {
  private readonly renderer = inject(Renderer2);
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private script?: HTMLScriptElement;

  load(src: string) {
    if (!isPlatformBrowser(this.platformId) || this.script) return;
    this.script = this.renderer.createElement('script') as HTMLScriptElement;
    this.script.src = src;
    this.script.async = true;
    this.renderer.appendChild(this.doc.body, this.script);
  }

  destroy() {                       // widgets hold global listeners
    if (this.script) this.renderer.removeChild(this.doc.body, this.script);
    this.script = undefined;
  }
}`,explanation:`On the server this is a no-op, and the DOM node is created and removed through Angular.`},{title:`Blocking bootstrap on config`,code:`provideAppInitializer(() => {
  // returns a Promise -> the app does not bootstrap until it resolves
  return firstValueFrom(http.get<ChatConfig>('/assets/chat-config.json'))
    .then(cfg => inject(ChatWidget).configure(cfg));
}),

@Component({
  selector: 'app-chat',
  encapsulation: ViewEncapsulation.None,  // vendor writes to document.head
  template: '<div id="chat-root"></div>',
})
export class Chat {}`,explanation:`provideAppInitializer replaces the deprecated APP_INITIALIZER token; Encapsulation.None keeps the vendor's global styles working.`}]},{id:`angular-29`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`You need to move an application from an older Angular major to a current one. How do you plan the upgrade?`,answer:`Upgrade one major at a time with ng update, and never jump two majors in one branch - the migrations assume the previous layout. Before running anything, read the update guide for that version: it lists breaking changes, the required Node and TypeScript and RxJS versions, and flags removed APIs. Then move in this order: Angular packages, then third-party libraries whose majors are coupled to it (Angular Material must match), then tooling and CI images. Let ng update rewrite angular.json, tsconfig and the entry files for you instead of editing them by hand. Afterwards check the bundle budgets, remove obsolete polyfills, rebuild, and fix whatever the compiler flags - deprecations usually surface as compile errors once the old name is removed. Verify on a branch with tests and manual smoke checks before merging.`,examples:[{title:`One major per step`,code:`# pre-flight: node -v, then branch + tests green
ng update @angular/cli@17 @angular/core@17 @angular/material@17
npm run build            # read every warning before continuing

ng update @angular/cli@18 @angular/core@18 @angular/material@18
npm run build

ng update @angular/cli@19 @angular/core@19 @angular/material@19
npm run build && npm test`,explanation:`Material and other libs must move in lockstep, or you get injection-token and template type errors that are hard to read.`},{title:`Post-upgrade checks`,code:`{
  "budgets": [
    { "type": "initial", "maximumWarning": "500kb" },
    { "type": "anyComponentStyle", "maximumWarning": "4kb" }
  ]
}

// polyfills.ts - drop entries the new baseline no longer needs
// tsconfig.json - "target" follows the browserslist you actually support`,explanation:`Budgets turn a silent bundle regression into a build failure, and stale polyfills are dead weight.`}]},{id:`angular-30`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`Two separately deployed Angular apps must share one login. How do you implement shared authentication?`,answer:`Give ownership of the session to one place and treat the other app as a client of it. Preferred design: a shell or BFF owns an HttpOnly, Secure, SameSite cookie, and each app verifies the session with a cheap GET /me during provideAppInitializer before it bootstraps - so a user with an expired session lands on login instead of rendering a broken shell. Put that logic in a shared library so both apps run identical code. Never store access tokens in localStorage if you can avoid it: anything in localStorage is readable by injected script, so use the cookie plus CSRF protection, and keep any token in memory only. To keep the two apps in sync, broadcast login and logout over BroadcastChannel when they share an origin (cookies ignore the port, so :4300 sees the cookie set by :4200); across origins you need a real shared backend session or an iframe/postMessage broker.`,examples:[{title:`Shell owns the cookie, apps verify`,code:`// shared auth library, used by both apps
provideAppInitializer(() => {
  const http = inject(HttpClient);
  const auth = inject(AuthService);
  return firstValueFrom(http.get<User>('/api/me'))
    .then(u => auth.signIn(u))
    .catch(() => auth.signOut());
});

// HttpOnly; Secure; SameSite=Lax; Path=/  - never visible to JS`,explanation:`Session verification before bootstrap means both apps agree on auth state from the first render.`},{title:`Sync logout between apps on the same origin`,code:`// app A
const channel = new BroadcastChannel('auth');
channel.onmessage = (e) => e.data.type === 'logout' && this.auth.signOut();

logout() {
  this.http.post('/api/logout', {}).subscribe(() => {
    this.auth.signOut();
    channel.postMessage({ type: 'logout' });
  });
}`,explanation:`Cookies are shared across ports on one domain, so the logout must hit the server - clearing client state alone leaves the cookie valid.`},{title:`Memory-only token in an interceptor`,code:`const token = signal<string | null>(null);   // never localStorage

export const authInterceptor: HttpInterceptorFn = (req, next) =>
  next(req.clone({
    headers: req.headers.set('Authorization', \`Bearer \${token() ?? ''}\`),
  }));`,explanation:`An XSS bug cannot read the token out of storage; it can only use it while the page lives.`}]},{id:`angular-31`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`Production errors are vague and hard to trace. What do you set up for monitoring?`,answer:`Put three layers in place. First, an error tracker (Sentry or similar) with its official Angular integration, which reports uncaught errors and rejections, attaches release and environment tags, and - critically - uploads source maps so the production stack traces are readable. Second, a global ErrorHandler that forwards anything Angular catches to the tracker with user context and scrubs tokens and PII before sending. Third, an HTTP interceptor that normalises every failure into one shape, attaches a correlation id that also goes into your backend logs, and rethrows so callers still handle their own errors. Add breadcrumbs for the user actions leading up to the failure, then alert on thresholds rather than on every error, or the channel gets ignored.`,examples:[{title:`Global ErrorHandler that scrubs`,code:`@Injectable()
export class TrackedErrorHandler implements ErrorHandler {
  private readonly tracker = inject(ErrorTracker);

  handleError(error: unknown): void {
    this.tracker.capture(error, {
      tags: { release: environment.version, env: 'prod' },
      extra: { route: this.router.url, userId: this.auth.user()?.id },
      beforeSend: (e) => scrub(e),   // strip tokens, emails, card data
    });
    console.error(error);            // still log locally
  }
}

{ provide: ErrorHandler, useClass: TrackedErrorHandler }`,explanation:`One place decides what leaves the browser, so no component accidentally leaks PII.`},{title:`Normalising HTTP errors with a correlation id`,code:`export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const trace = inject(TraceService).newId();
  req = req.clone({ setHeaders: { 'X-Trace-Id': trace } });

  return next(req).pipe(
    catchError((res: HttpErrorResponse) =>
      throwError(() => new ApiError({
        trace,
        status: res.status,
        message: res.error?.message ?? 'Something went wrong',  // safe for users
        cause: res,                    // full detail for the tracker
      }))),
  );
};`,explanation:`One error type for the whole app, plus an id that ties the browser report to the server log.`},{title:`Readable production stacks`,code:`// angular.json
"configurations": {
  "production": {
    "sourceMap": { "scripts": true, "styles": false, "hidden": true },
    "namedChunks": false
  }
}

// upload the maps at build time, never serve them publicly
npx sentry-cli sourcemaps upload --release $VERSION dist/browser`,explanation:`Hidden source maps are uploaded to the tracker and excluded from the bundle you deploy.`}]},{id:`angular-32`,category:`angular`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are micro-frontends, and how would you implement them in Angular?`,answer:`A micro-frontend splits one UI into independently built, independently deployed applications owned by separate teams, stitched together into a single product for the user. In Angular the common approaches are: module federation (Webpack 5, or Native Federation for the esbuild/Vite application builder), where a shell loads remote apps at runtime and shares framework singletons; Web Components via Angular Elements, where each micro-app is exported as a custom element and may even be written in another framework; and iframes for hard isolation at the cost of integration and performance. The genuinely hard parts are not the loading mechanism. Angular must be a shared singleton, not one copy per remote. Routing from the shell into a remote has to be designed. The apps need an agreed way to communicate (custom events, a shared event bus, or a shared state library). And a shared design system has to stop the UI drifting. Add the operational cost too: several pipelines, several versions of shared dependencies, and a much harder end-to-end testing story. The honest framing is that a modular monolith in an Nx workspace is the better default, and micro-frontends are justified only when independent deployment and team autonomy outweigh that complexity.`,examples:[{title:`Runtime composition with Native Federation`,code:`// federation.config.js (remote app)
export default withNativeFederation({
  name: 'checkout',
  exposes: { './routes': './projects/checkout/src/app/checkout.routes.ts' },
});

// shell: load the remote only when its route is hit
const routes: Routes = [{
  path: 'checkout',
  loadChildren: () =>
    loadRemoteModule('checkout', './routes').then((m) => m.CHECKOUT_ROUTES),
}];`,explanation:`The shell is a normal Angular app; the remote is a separately deployed one loaded lazily at runtime. Shared packages (including @angular/core) are configured as singletons so there is one framework instance.`},{title:`A framework-agnostic boundary with Angular Elements`,code:`import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

const app = await createApplication({ providers: [/* ... */] });
const el = createCustomElement(CheckoutWidget, { injector: app.injector });
customElements.define('checkout-widget', el);
// <checkout-widget></checkout-widget> mounts the Angular app anywhere`,explanation:`Exposing the app as a custom element gives a clean boundary that a legacy host page, or a host built with another framework, can consume.`}]},{id:`angular-33`,category:`angular`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How do you write a custom validator and an async validator in Angular reactive forms?`,answer:`A validator is just a function that takes a control and returns either null (valid) or an errors object. For a reusable one, return a factory so you can pass a parameter: forbiddenName('admin') returns (control: AbstractControl) => ValidationErrors | null. Attach it when you build the FormControl, or later with addValidators(). The keys of the returned object are what the template switches on, so expose the key and the value that failed rather than baking a message into the validator. Cross-field rules such as password === confirmPassword belong on the parent FormGroup, not the control, because one control cannot see its sibling. An async validator is the same idea but returns an Observable or a Promise; the control goes to status 'pending' while it runs, and Angular only runs it once the synchronous validators pass. Always debounce it and cancel stale work (or use updateOn: 'blur'), otherwise you fire a server request on every keystroke and race the responses. In template-driven forms the same logic is packaged as a directive registered on NG_VALIDATORS / NG_ASYNC_VALIDATORS; in reactive forms the function is enough.`,examples:[{title:`A reusable synchronous validator`,code:`import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenName(name: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const taken = control.value?.toLowerCase() === name.toLowerCase();
    return taken ? { forbiddenName: { value: control.value } } : null;
  };
}

// new FormControl('', [Validators.required, forbiddenName('admin')])`,explanation:`Return null when valid and a keyed errors object when not; the template reacts to form.controls.name.hasError('forbiddenName').`},{title:`Cross-field rule and an async availability check`,code:`import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { timer, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

// Cross-field: lives on the FormGroup
export const passwordsMatch = (g: AbstractControl): ValidationErrors | null =>
  g.get('password')?.value === g.get('confirm')?.value
    ? null
    : { passwordsMismatch: true };

// Async: runs only after sync validators pass, debounced so it runs on pause
export function uniqueUsername(api: UsersApi): AsyncValidatorFn {
  return (control: AbstractControl) =>
    timer(300).pipe(
      switchMap(() => api.isTaken(control.value)),
      map((taken) => (taken ? { usernameTaken: true } : null)),
      catchError(() => of(null)),
    );
}

// new FormGroup({...}, { validators: passwordsMatch });`,explanation:`One control cannot see its sibling, so the group validator compares them; timer() plus switchMap debounces and cancels stale checks so an older response cannot overwrite a newer one.`}]},{id:`angular-34`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How does JWT authentication work in the UI, what is sent to the backend, and what does the backend do with it?`,answer:`The UI posts credentials (username and password) once; the backend checks them and returns a signed token, usually with a short expiry, plus often a longer-lived refresh token. A JWT is three base64url parts: header.payload.signature. Where you store it matters. The safest option is an httpOnly, Secure, SameSite cookie that the server sets, because JavaScript and therefore an XSS attack cannot read it; if you keep it in JavaScript, prefer memory for the access token and treat localStorage as XSS-exposed. The important division of responsibility is that the UI never verifies the signature and never trusts claims for security. It may decode the payload to read exp or a display name, but that is cosmetic only: decoding is not verifying. On every call the client sends the token, typically Authorization: Bearer <token> (with withCredentials: true when it lives in a cookie). The backend verifies the signature with the secret or public key, checks exp/nbf, issuer and audience, then reads the claims (sub, roles) to authorise the request. In Angular an HTTP interceptor attaches the header and handles a 401 by refreshing the token and retrying once. A token is a credential, so never log it or put it in a URL. One more line interviewers listen for: route guards and role-hidden buttons are user experience, not enforcement - they stop an honest user, not anyone with curl - so the backend authorises every protected call again, and the UI renders a 403 from the API as a state to handle rather than a path that cannot happen.`,examples:[{title:`Attach the token and refresh on 401`,code:`@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private auth = inject(AuthStore);

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.auth.accessToken();
    const authReq = token
      ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })
      : req;

    return next.handle(authReq).pipe(
      catchError((err: HttpErrorResponse) =>
        err.status === 401
          ? this.auth.refreshAndRetry(authReq, next)
          : throwError(() => err)),
    );
  }
}`,explanation:`One place adds the header to every request; a 401 triggers a refresh and a single retry instead of an error surfacing on every in-flight call.`},{title:`The UI only decodes; the backend verifies`,code:`// JWT = base64url(header).base64url(payload).signature
// The UI may read the payload for display only:
const claims = JSON.parse(atob(token.split('.')[1]));
const expired = claims.exp * 1000 < Date.now();

// The backend, on every request:
// 1. verify the signature (secret or public key)
// 2. check exp / nbf / iss / aud
// 3. trust sub + roles for authorisation
// Never make an access decision from a client-decoded token.`,explanation:`Decoding is not verifying: the payload is attacker-visible and attacker-editable, so it is fine for display and useless for a security decision.`}],tags:[`MS`]},{id:`angular-35`,category:`angular`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are pipes in Angular, and how do you create a custom pipe?`,answer:`A pipe transforms a value for display, written in a template with the | operator, so the component keeps the raw data while the view shows a formatted version. Angular ships DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, UpperCasePipe, TitleCasePipe, SlicePipe, JsonPipe, KeyValuePipe and AsyncPipe. A custom pipe is a small class decorated with @Pipe({ name: 'truncate' }) that implements PipeTransform with a transform(value, ...args) method; you then add the class to the standalone component's imports (or declare it in a shared module) and use it as {{ text | truncate: 20 }}. Pipes are pure by default: Angular re-runs one only when its input reference changes, so the transform must be deterministic and free of side effects. Setting pure: false re-runs it on every change detection cycle, which is why an impure pipe over a large list is a well-known performance trap. Keep pipes for display-only transformations; heavy work belongs in computed() or a component, and async state belongs to the async pipe.`,examples:[{title:`A custom pipe`,code:`import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 20, ellipsis = '\\u2026'): string {
    return value.length > limit ? value.slice(0, limit) + ellipsis : value;
  }
}

// standalone component: imports: [TruncatePipe]
// template: {{ description | truncate: 40 }}`,explanation:`Extra arguments after the first are passed with colons; the pipe is reusable because it is a standalone class, and correct because a string input is compared by value.`},{title:`Pure vs impure in practice`,code:`// Pure (default): recomputed only when \`items\` becomes a new reference
@Pipe({ name: 'total', pure: true })
// @Pipe({ name: 'total', pure: false }) recomputes on EVERY change detection tick

// So this shows a stale total until you replace the array:
this.items.push(item);              // same reference -> pipe does not run
this.items = [...this.items, item]; // new reference -> pipe runs`,explanation:`Pure pipes trade freshness for speed; if a mutation must be reflected, either produce a new reference or derive the value from a computed() signal instead.`}]},{id:`angular-36`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What is new in the recent Angular releases?`,answer:`The last few majors have been mostly about signals, zoneless and the build. v17 introduced the built-in control flow (@if/@for/@switch), @defer for lazy-loading template chunks, and the new esbuild/Vite application builder that replaced webpack. v18 brought experimental zoneless change detection and the @let template variable. v19 made standalone the default (standalone: true was no longer needed), shipped incremental hydration, and added the resource() API for async state. v20 stabilised effect, linkedSignal and toSignal, made incremental hydration and route-level render modes stable, promoted zoneless to developer preview, and introduced the experimental httpResource. v21 made zoneless the default for new apps and stopped including zone.js by default, released experimental Signal Forms, made Vitest the default test runner, provided HttpClient by default, and launched Angular Aria in developer preview. v22 stabilised Signal Forms, Angular Aria and the async reactivity APIs (resource/httpResource), made OnPush the default change detection strategy for new apps, and renamed ChangeDetectionStrategy.Default to Eager. The theme across all of it is signal-first, zoneless and performance by default, and every claim here is worth checking against the release blog, because the pace is fast.`,examples:[{title:`New control flow and defer`,code:`@if (user(); as u) {
  <h1>{{ u.name }}</h1>
} @else {
  <p>Signed out</p>
}

@for (item of items(); track item.id) {
  <app-row [item]="item" />
} @empty {
  <p>No items</p>
}

@defer (on viewport) {
  <app-heavy-chart />
} @placeholder {
  <div class="chart-skeleton"></div>
}`,explanation:`Built-in control flow replaced the structural directives; @defer splits a component into its own bundle and loads it only when its trigger fires.`},{title:`Signals and zoneless by default`,code:`import { provideZonelessChangeDetection } from '@angular/core';

bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection()],
});

export class Counter {
  count = signal(0);
  double = computed(() => this.count() * 2);
  // no zone.js: updates are scheduled when a signal a template read changes
}`,explanation:`New Angular apps are zoneless and use OnPush by default, so change detection is driven by signal writes and inputs instead of zone.js patching every browser event.`}]},{id:`angular-37`,category:`angular`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How does change detection work in Angular with zone.js, and how does it work now without it? Walk through what happens from root to child when an event fires in a child.`,answer:`Change detection is Angular asking 'did anything I rendered need to update?', and the mechanism differs by era. With zone.js: zone patches browser APIs (addEventListener, setTimeout, promises, XHR), and when any async task settles it notifies Angular, which runs change detection from the root component down to every leaf. Under the default strategy every component in the tree is visited and its template bindings compared by reference, re-rendering subtrees with new values. So an event in a deeply nested child still triggers a full root-to-leaf pass, because zone only knows that something async happened, not where. In the zoneless era (the default since Angular 21) the framework does not patch globals. It tracks precise triggers - a signal a template reads being written, an input changing, a host or template listener firing, markForCheck(), or an attached view - and a scheduler runs change detection for exactly those components and their descendants, with OnPush as the default. The traversal is still top-down from root to child, but only inside the subtree that actually changed; untouched branches are skipped entirely. The mental model: with zones it is 'check everything after any asynchronous work'; zoneless it is 'check the minimum subtree that something actually touched'.`,examples:[{title:`With zone.js: patch, then walk the whole tree`,code:`// zone.js wraps browser APIs: addEventListener, setTimeout,
// Promise, XHR. When any of them settles, zone signals Angular
// to run change detection from the root down:
//
//   RootComponent
//    \u251C\u2500\u2500 Header    (checked)
//    \u251C\u2500\u2500 Child     (checked)  <- event fired here
//    \u2514\u2500\u2500 List      (checked)
//
// Every component is visited (default strategy) even though the
// event happened only in Child, because zone cannot say where.`,explanation:`Zone's granularity is 'some async task settled', not 'this component changed', so the default is a full-tree pass; OnPush is how you opt subtrees out of it.`},{title:`Zoneless: the signal knows where it changed`,code:`bootstrapApplication(App, {
  providers: [provideZonelessChangeDetection()],
});

@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class List {
  readonly rows = inject(Store).rows; // a signal
  // when Store writes that signal, only components whose template
  // reads rows() are scheduled; the scheduler still runs top-down
  // from their root, but skips everything untouched.
}`,explanation:`The signal carries dependency information, so change detection is notification-based: unaffected branches are never visited, and the root-to-child traversal happens only inside the subtree that changed.`}]},{id:`angular-38`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are the advantages of using Renderer2 instead of touching the DOM directly?`,answer:`Renderer2 is Angular's abstraction layer over the DOM, injected per component, and its advantages are about portability, lifecycle and safety rather than speed. First, platform safety: it creates elements through Angular's abstraction, so the same code runs in the browser, during server-side rendering (where document does not exist) and in Web Workers, instead of crashing on a direct document.createElement call. Second, it plays by Angular's rules: elements it creates are tied into component style encapsulation and are cleaned up when the component is destroyed. Third, lifecycle: Renderer2.listening() returns a teardown function and Angular invokes destroy() at component teardown, so listeners and elements you add imperatively do not leak. Fourth, it is a deliberate, audited API: manipulating the DOM through the renderer keeps you out of raw innerHTML and is the documented path for anything a template cannot express. The honest limit: Renderer2 is not a reactivity tool - DOM changes it makes are not reflected in state, so in the zoneless/signal default you still own keeping the template and the DOM in agreement. And not everything needs it: structural work belongs in templates, and for plain element access Angular also exposes the DOCUMENT token.`,examples:[{title:`SSR-safe imperative DOM work`,code:`import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    // the same code runs on server and browser:
    this.renderer.addClass(this.el.nativeElement, 'highlight');
    const off = this.renderer.listen(this.el.nativeElement, 'click', () => this.flash());
  }
}`,explanation:`Read through ElementRef, write through Renderer2: addClass and listen keep working during SSR and are torn down with the directive, where raw window/document would crash the server render.`},{title:`Listening returns a teardown`,code:`// Every renderer method that subscribes returns a function to undo it:
const removeClick = this.renderer.listen(el, 'click', onClick);
const removeKey  = this.renderer.listen(el, 'keydown', onKey);

// call them when the directive is destroyed:
ngOnDestroy() { removeClick(); removeKey(); }

// Angular's component teardown also disposes what it tracked.`,explanation:`Renderer2 tracks what you attached and disposes it on destroy, so imperative DOM code cannot leave orphan listeners behind.`}]},{id:`angular-39`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What is view encapsulation in Angular, and what are its types?`,answer:`View encapsulation controls how far the CSS you write in a component's styles reaches. Emulated (the default) rewrites your styles during compilation: every element of the component gets a unique attribute such as _ngcontent-abc123, and every selector gets the same attribute appended, so the rules only match that component. You get the isolation of shadow DOM without actually using it; the trade-off is rewritten CSS at build time and the fact that it is not impenetrable - :host, :host-context and ::ng-deep still reach across it. ShadowDom puts the component's template into a real shadow root, so its styles are fully isolated from the document: nothing leaks in and nothing leaks out; the price is that global styles and external libraries stop affecting the component. None adds no scoping at all: the component's styles become global document styles. Choose Emulated for normal component styling, None when you deliberately want global CSS (often for a styles file at app level), and ShadowDom for a strict public widget where hard isolation matters more than inheriting the app's theme.`,examples:[{title:`Emulated: attribute rewriting`,code:`@Component({
  selector: 'app-card',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [\`.title { font-weight: 600; }\`],
  template: \`<p class="title">Hello</p>\`,
})

// compiled to:
//   .title[_ngcontent-abc123] { font-weight: 600; }
//   <app-card _ngcontent-abc123>
//     <p _ngcontent-abc123 class="title">Hello</p>
//   </app-card>`,explanation:`The attribute on both selector and element keeps the rule inside the component while the DOM stays in the normal document - that is what makes it the cheap default.`},{title:`ShadowDom vs None at a glance`,code:`ViewEncapsulation.ShadowDom
  - template goes inside a real shadow root
  - styles fully isolated: nothing leaks in or out
  - global styles and third-party libs stop applying
  - use for a strict standalone widget

ViewEncapsulation.None
  - no scoping at all: styles are injected globally
  - component's CSS can affect anything (name collisions!)
  - use only when you deliberately want document-level CSS`,explanation:`The two ends of the spectrum: hard isolation for a public widget, no isolation when you opt out on purpose; Emulated sits between them as the day-to-day default.`}]},{id:`angular-40`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are the Angular component lifecycle hooks, and how do they change in the signal-based era?`,answer:`Lifecycle hooks are the calls Angular makes as a component is created, updated and torn down. Creation order: constructor (plain TypeScript, nothing bound yet), ngOnChanges (runs before ngOnInit and again on every decorated @Input change, handing you a SimpleChanges object of previous/current values), ngOnInit (once, after inputs resolve), ngDoCheck (every change detection pass, for custom checks), ngAfterContentInit and ngAfterContentChecked (projected content), ngAfterViewInit and ngAfterViewChecked (the component's own view), then ngOnDestroy (teardown, where manual subscriptions, listeners and timers must be unwound). The list is unchanged in the signal era; what changes is what you reach for. Signal inputs do not fire ngOnChanges - it is decorated-input only - so previous/current logic moves to an effect() that tracks the input. constructor becomes the natural place to set up signals, because input() signals are readable immediately and need no waiting pass. ngDoCheck and the ...Checked hooks exist for pain cases that rarely arise now, since a signal a template reads schedules exactly the update it needs. computed() replaces most derived-value bookkeeping, and the cleanup that used to live in ngOnDestroy is handled by DestroyRef and by effect() and afterRenderEffect() that dispose themselves with the component. So a modern component leans on computed/effect plus OnInit and OnDestroy, and the rest of the pipeline is mostly invisible.`,examples:[{title:`The lifecycle in order`,code:`constructor()            // plain TS; inputs not resolved yet
ngOnChanges()            // every @Input change, incl. the first
ngOnInit()               // once: component ready
ngDoCheck()              // every change detection pass
ngAfterContentInit()     // projected content ready
ngAfterContentChecked()
ngAfterViewInit()        // own view ready
ngAfterViewChecked()
ngOnDestroy()            // teardown: unsubscribe, clear timers`,explanation:`The full pipeline runs creation -> change -> destruction; the only two you will consciously use most days are constructor/onInit and onDestroy.`},{title:`Signal inputs skip ngOnChanges`,code:`// decorated @Input -> ngOnChanges fires with previous/current:
@Input() name = '';                    // changes land in ngOnChanges

// signal input -> ngOnChanges does NOT fire, use an effect instead:
readonly name = input.required<string>();
effect(() => {
  const current = this.name();
  console.log('name changed to', current);
});

// derived values: computed, not a hook
readonly greeting = computed(() => \`Hello \${this.name()}\`);`,explanation:`Signal inputs bypass ngOnChanges by design, so tracked changes move to effect() and derived values move to computed(); that is the main way hooks shrink in the signal era.`}]},{id:`angular-41`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are the Angular route guards, with a small example of each?`,answer:`Route guards are functions the router runs while resolving a navigation to decide whether it proceeds. The current API is functional: canActivate (may this route be entered - auth/access control), canActivateChild (same check for every child of a route, protecting a whole section), canMatch (participates in route matching, picking between several route objects for the same URL - feature flag or user type), canDeactivate (may we leave - unsaved changes), and resolve (prefetch data before the component renders; generally discouraged today, prefer loading after navigation with a loading state). Each guard returns boolean, a UrlTree to redirect, or an Observable/Promise of those. You can list several guards on a route; they run in order and the first false or UrlTree stops navigation. The old class-based guards (CanActivate, CanActivateChild, CanDeactivate, Resolve - and CanLoad, removed in v15) still appear in legacy code; functional guards run inside the injection context, so inject() works directly and testing one is just calling a function. Two things separate a senior answer from a list: guards are not a security boundary - they shape what the UI lets you do, while the server authorises every request regardless - and each piece owns one job. Guards decide whether navigation proceeds, resolvers (used sparingly, because they delay navigation) prepare data before activation, HTTP services own the calls, and interceptors own what is cross-cutting about them, such as the auth header and a standard error shape.`,examples:[{title:`canActivate, canMatch and canDeactivate`,code:`export const requireLogin = (): boolean => inject(AuthStore).isLoggedIn();

export const isPro = (): boolean => inject(FlagStore).pro();

export const confirmLeave = (cmp: Editor): boolean =>
  cmp.dirty ? window.confirm('Leave without saving?') : true;

const routes: Routes = [
  { path: 'pro', canMatch: [isPro], component: ProComponent },
  { path: 'editor',
    canActivate: [requireLogin],
    canDeactivate: [confirmLeave],
    component: Editor },
];`,explanation:`Return false to block navigation, a UrlTree to redirect; guards run in listed order, and inject() works inside them because they execute in the injection context.`},{title:`canActivateChild protects a whole section`,code:`export const adminOnly = (): boolean | UrlTree =>
  inject(AuthStore).isAdmin()
    ? true
    : inject(Router).createUrlTree(['/forbidden']);

const routes: Routes = [{
  path: 'admin',
  canActivateChild: [adminOnly],
  children: [
    { path: 'users', component: UsersComponent },
    { path: 'settings', component: SettingsComponent },
  ],
}];`,explanation:`One guard covers every child, so a newly added admin sub-page cannot be forgotten; a UrlTree gracefully redirects instead of failing the navigation.`}],tags:[`MS`]},{id:`angular-42`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How do you embed an iframe such as a YouTube video in Angular, and what are DomSanitizer, SafeResourceUrl and bypassSecurityTrustResourceUrl?`,answer:`Angular treats anything that can execute code as untrusted by default. That includes an iframe's src, an img src, a javascript: link and [innerHTML]: these bindings are sanitized, and anything Angular cannot prove safe is stripped or blocked before it reaches the DOM. DomSanitizer is the injectable that sits at that boundary - it is how you tell Angular a value is safe - and its methods map to the exact context the value will be used in. For an iframe the context is RESOURCE_URL, so the correct call is bypassSecurityTrustResourceUrl(url), which returns a SafeResourceUrl: a wrapper type, not a string, that marks the value as trusted for that binding and stops the sanitizer from touching it. That is the whole reason SafeResourceUrl exists - it is Angular's ticket saying 'I vouch for this resource URL'. What keeps it safe is the rule that you only bypass when you control or strictly validate the input. The safe pattern is to never echo raw data into the src: parse a video id from an allow-list of hosts and rebuild the URL from that id, so a hostile string can never reach the iframe. Bypassing with an unvalidated user-supplied URL is how XSS sneaks in, because a crafted src can point at attacker content that runs under your origin. Finally, trust is per-value: the wrapper applies only to the binding you bind it to, and the same string used anywhere else is still sanitized.`,examples:[{title:`Embed only after validating the input`,code:`import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export class VideoPlayer {
  private sanitizer = inject(DomSanitizer);

  // strict: allow-list the hosts, rebuild the URL from a matched id,
  // never echo the raw string into the iframe
  embedUrl(raw: string): SafeResourceUrl | null {
    const id = raw.match(
      /(?:youtube\\.com\\/(?:watch\\?v=|embed\\/|shorts\\/)|youtu\\.be\\/)([A-Za-z0-9_-]{5,})/
    )?.[1];

    return id
      ? this.sanitizer.bypassSecurityTrustResourceUrl(
          \`https://www.youtube.com/embed/\${id}\`,
        )
      : null;
  }
}
// template: <iframe [src]="embedUrl(videoUrl)" title="Video" allowfullscreen></iframe>`,explanation:`The id is matched against a fixed pattern and the URL is assembled from that id only, so the value you mark trusted is something you constructed - an attacker cannot smuggle arbitrary content into the src.`},{title:`The trust contexts at a glance`,code:`// Each bypass matches the context Angular would otherwise sanitize:
bypassSecurityTrustResourceUrl(url)  // iframe src, <video>/<audio>, css url()
bypassSecurityTrustUrl(url)           // <a href>, <img src>
bypassSecurityTrustHtml(html)         // [innerHTML]
bypassSecurityTrustStyle(css)         // [style] bindings
bypassSecurityTrustScript(script)     // <script> content

// These are not strings but wrapper types (SafeResourceUrl, SafeUrl, ...)
// that mark the value as trusted for that one binding. A plain string in
// the same binding is sanitized and may not make it into the DOM at all.`,explanation:`Pick the bypass that matches the binding: iframe/video sources need the ResourceUrl flavour, not TrustUrl. The wrapper is per-value, so using it does not weaken sanitization anywhere else.`}]},{id:`angular-43`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What does ViewportScroller do, and when would you reach for it?`,answer:`ViewportScroller is Angular's small abstraction over "scroll the page". It gives you getScrollPosition(), scrollToPosition([x, y]), scrollToAnchor(id), setOffset(margin) and setHistoryScrollRestoration() without touching window or document yourself, which matters because the router drives those same methods and because a test can swap in a fake instead of scrolling jsdom. The default implementation is BrowserViewportScroller - window.scrollTo and history.scrollRestoration under the hood. You reach for it directly in two situations. First, a component that is reused across navigations: when only a route parameter changes, Angular does not recreate the component and the router has no reason to scroll, so the new content opens at the old offset. Reading the parameter inside an afterRenderEffect and calling scrollToPosition([0, 0]) fixes it, and the afterRender principle is that the DOM has to be laid out before you write to its scroll. Second, anchor and offset cases - scrollToAnchor() for a fragment, setOffset() so a sticky header does not cover the target. What you normally should not do is hand-roll scrolling for route changes at all: provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })) installs RouterScroller, which listens to navigation events and calls ViewportScroller for you. Use the service directly only for in-place changes the router cannot see, like a reused parameterised component.`,examples:[{title:`Reset the scroll when only the route parameter changes`,code:`import { ViewportScroller } from '@angular/common';
import { afterRenderEffect, inject, input } from '@angular/core';

@Component({ /* ... */ })
export class QuestionDetail {
  private readonly scroller = inject(ViewportScroller);
  readonly questionId = input.required<string>();

  constructor() {
    // Reading questionId makes this re-run on every prev/next, and
    // afterRenderEffect guarantees the new view is in the DOM first.
    afterRenderEffect(() => {
      this.questionId();
      this.scroller.scrollToPosition([0, 0]);
    });
  }
}`,explanation:`When only the parameter changes, Angular reuses the component and the router does not scroll, so the next question would otherwise open at the previous scroll offset. The signal read is what registers the dependency; the afterRender effect is what stops the scroll being clamped against the old, shorter view.`},{title:`Let the router do it app-wide`,code:`provideRouter(
  routes,
  withComponentInputBinding(),
  withInMemoryScrolling({
    // 'enabled' restores on back/forward and scrolls to top on a new push;
    // 'top' always goes to the top.
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  }),
);`,explanation:`withInMemoryScrolling installs RouterScroller, which subscribes to router events and scrolls through ViewportScroller for you - restoration on history navigation, top on a fresh navigation, and fragments via scrollToAnchor. Reach for the service directly only for changes the router cannot detect, such as a reused parameterised component.`}]},{id:`angular-44`,category:`angular`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What is the NgRx SignalStore, and which features do you compose to build one?`,answer:`SignalStore is NgRx's signal-native state container, shipped in @ngrx/signals. You declare a store by calling signalStore(...) with an optional config followed by a sequence of features; it returns an injectable service that you register with { providedIn: 'root' } for global state, or in a providers array for component/route-scoped state where it is disposed with that injector. State is added with withState(initialState) - the type must be a record/object literal - and every slice becomes a signal on the store, with nested properties exposed lazily as DeepSignals such as store.filter.query(). Derived values are declared with withComputed(({ books, filter }) => ({ booksCount: computed(() => books().length) })); its factory runs in an injection context and any plain function it returns is wrapped in computed() for you. Behaviour lives in withMethods((store, service = inject(Service)) => ({ ... })), and state is written only through patchState(store, patch) or patchState(store, (state) => patch), which shallow-merges the patch and keeps updates immutable. withHooks({ onInit, onDestroy }) adds store-level lifecycle logic, withProps adds static values, observables or injected dependencies, signalStoreFeature builds reusable custom features, and withEntities manages collections. State is protected by default - calling patchState on the store from outside one of its methods throws unless you opt out with { protectedState: false } - which keeps every change flowing through the store's own methods. For async work you either write a plain async method or reach for rxMethod from @ngrx/signals/rxjs-interop, which turns an RxJS pipeline into a method you call with a signal, a value or an observable. SignalStore is the recommended choice for feature and local state, while @ngrx/store remains the tool for large global state.`,examples:[{title:`State, computed signals and methods in one store`,code:`import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { BooksService } from './books.service';

type Book = { title: string };

type BookSearchState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string };
};

const initialState: BookSearchState = {
  books: [],
  isLoading: false,
  filter: { query: '' },
};

export const BookSearchStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
    visibleBooks: computed(() =>
      books().filter((book) => book.title.includes(filter.query())),
    ),
  })),
  withMethods((store, booksService = inject(BooksService)) => ({
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    async loadAll(): Promise<void> {
      patchState(store, { isLoading: true });
      const books = await booksService.getAll();
      patchState(store, { books, isLoading: false });
    },
  })),
);`,explanation:`Each withState slice becomes a signal (filter and its nested query() too); withComputed derives read-only signals; withMethods is the only place patchState is called, so state changes through named, testable operations.`,url:`https://ngrx.io/guide/signals/signal-store`},{title:`Reactive async work with rxMethod`,code:`import { inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { BooksService } from './books.service';

type Book = { title: string };

export const BookSearchStore = signalStore(
  withState({ books: [] as Book[], isLoading: false }),
  withMethods((store, booksService = inject(BooksService)) => ({
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) =>
          booksService.getByQuery(query).pipe(
            tapResponse({
              next: (books) => patchState(store, { books }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            }),
          ),
        ),
      ),
    ),
  })),
);`,explanation:`rxMethod wraps an RxJS pipeline in a store method; hand it a signal, a value or an observable and each emission is debounced and switched, while tapResponse keeps the loading and error state in sync.`,url:`https://ngrx.io/guide/signals/rxjs-integration`}],tags:[`MS`]},{id:`angular-45`,category:`angular`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How does the NgRx Store work - actions, reducers, selectors and effects?`,answer:`@ngrx/store is RxJS-powered global state management inspired by Redux, built around a single immutable state tree held by the Store service. Store is both an observer of state, via store.select(selector), and an observer of actions, via store.dispatch(action). There are four moving parts. Actions are plain objects that describe unique events; createAction('[Source] Event') creates one and props<{...}>() attaches a typed payload. Reducers are pure, synchronous functions that take the current state and the latest action and return a new state - never a mutation - using createReducer(initialState, on(action, handler)) (or a switch statement in older code); every registered reducer receives every action, and each on() decides whether it cares. Selectors are pure, memoized functions that select, derive and compose slices: createFeatureSelector<T>('key') reads a feature slice and createSelector(...) composes it into a read model, returning the cached value while its inputs are unchanged. Effects are injectable RxJS streams (createEffect + ofType) that listen for actions and perform side effects such as HTTP or storage, then dispatch new actions on success or failure - reducers must stay pure, so impure work belongs here, not in a reducer. The flow is strictly one-directional: a component dispatches an action, reducers compute the next state, selectors emit the new slice to subscribers, and effects react to the same action stream and dispatch follow-up actions. When an action is dispatched it is always processed by the reducers first and then by the effects. State is registered with provideStore(reducers) and provideState('feature', reducer) in standalone apps, or StoreModule.forRoot / StoreModule.forFeature in NgModules, together with provideEffects / EffectsModule; because updates are immutable, a new reference signals change, which pairs well with OnPush and memoized selectors. In CQRS terms the reducers are the write model and the selectors the read model. For local or component state, prefer NgRx SignalStore and keep the global Store for app-wide state.`,examples:[{title:`Actions and a reducer`,code:`import { createAction, createReducer, on, props } from '@ngrx/store';

export const loadBooks = createAction('[Books Page] Load Books');
export const loadBooksSuccess = createAction(
  '[Books API] Load Books Success',
  props<{ books: Book[] }>(),
);
export const loadBooksFailure = createAction(
  '[Books API] Load Books Failure',
  props<{ error: string }>(),
);

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: string | null;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const booksReducer = createReducer(
  initialState,
  on(loadBooks, (state) => ({ ...state, loading: true, error: null })),
  on(loadBooksSuccess, (state, { books }) => ({ ...state, books, loading: false })),
  on(loadBooksFailure, (state, { error }) => ({ ...state, error, loading: false })),
);`,explanation:`createAction names each event and props() types its payload; createReducer pairs the initial state with on() handlers that return a new state via the spread operator, so the previous reference is never mutated.`,url:`https://ngrx.io/guide/store/reducers`},{title:`Effects run the side effects`,code:`import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { BooksService } from './books.service';
import { loadBooks, loadBooksFailure, loadBooksSuccess } from './books.actions';

@Injectable()
export class BooksEffects {
  private readonly actions$ = inject(Actions);
  private readonly booksService = inject(BooksService);

  readonly loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      switchMap(() =>
        this.booksService.getAll().pipe(
          map((books) => loadBooksSuccess({ books })),
          catchError((error) => of(loadBooksFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}`,explanation:`An effect filters the action stream with ofType, performs the HTTP call, and maps the result back to success or failure actions; the reducers stay pure because the impure work lives here.`,url:`https://ngrx.io/guide/store/effects`},{title:`Selectors feed the component; it only dispatches`,code:`import { createFeatureSelector, createSelector, Store } from '@ngrx/store';

export const selectBooksState = createFeatureSelector<BooksState>('books');
export const selectAllBooks = createSelector(selectBooksState, (state) => state.books);
export const selectLoading = createSelector(selectBooksState, (state) => state.loading);

@Component({
  imports: [AsyncPipe, NgFor, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: \`
    <button (click)="reload()">Reload</button>
    <p *ngIf="loading$ | async">Loading...</p>
    <ul>
      <li *ngFor="let book of books$ | async">{{ book.title }}</li>
    </ul>
  \`,
})
export class BooksPage {
  private readonly store = inject(Store);
  readonly books$ = this.store.select(selectAllBooks);
  readonly loading$ = this.store.select(selectLoading);

  reload(): void {
    this.store.dispatch(loadBooks());
  }
}`,explanation:`createFeatureSelector reads the 'books' slice and createSelector composes memoized read models. Register the slice with provideStore({ books: booksReducer }) and the effect with provideEffects(BooksEffects); the component then only dispatches actions and selects slices, never touching the state object.`,url:`https://ngrx.io/guide/store/selectors`}],tags:[`MS`]},{id:`angular-46`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you make an Angular application accessible?`,answer:`Accessibility is mostly HTML discipline, then focus management, then testing. Start with real elements: button, a, label, fieldset, nav, main and heading levels give you keyboard behaviour, roles and announced names for free, whereas a div with a click handler gives you none of it. Associate every control with a label, keep a logical heading order, and give images and icon-only controls an accessible name. Keyboard is the floor: everything reachable, visible focus, no traps, and focus moved deliberately when a dialog opens or a route changes. Then the dynamic parts - announce results and validation through aria-live or role=status, and use ARIA only where native semantics cannot express it, because a wrong attribute is worse than none. Angular's CDK gives me focus trapping and overlays, and Material components ship with the semantics built in, but they cannot invent the labels or the structure; that stays my job. In practice I target WCAG 2.2 AA, run axe and the angular-eslint accessibility rules in CI so regressions fail the build, and finish with a manual pass - keyboard first, then a screen reader on the main journeys - because automation catches maybe a third of the real problems.`,examples:[{title:`Semantics plus a live announcement`,code:`<button type="button" (click)="save()">Save</button>

<p role="status">{{ status() }}</p>

@if (errors().length) {
  <ul aria-labelledby="form-errors">
    @for (e of errors(); track e) { <li>{{ e }}</li> }
  </ul>
}`,explanation:`A real button gives the keyboard handler, the role and the focus ring; role=status lets the screen reader announce the async result without the user hunting for it.`}],tags:[`MS`]},{id:`angular-47`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How would you produce an accessibility report for an application?`,answer:`The report has to be evidence a team can act on, so I scope it before I test: the key journeys first - sign in, search, the main form, the main dialog - rather than every screen. Three passes feed it. Automated: axe-core in the browser or wired into the component tests, Lighthouse, and the angular-eslint accessibility rules in CI, which give repeatable numbers and catch regressions. Manual keyboard pass: tab order, visible focus, no keyboard traps, Escape closing overlays, and every action reachable without a mouse. Screen-reader pass on the journeys, checking names, roles, headings, form errors and live announcements, because a green automated run only proves a fraction of conformance. Then I write each issue up with the page, the WCAG 2.2 criterion, the severity and user impact, the reproduction, evidence, the suggested fix, an owner and a retest status - a missing label on the payment field is not the same severity as a slightly low contrast ratio on a caption. I track it against the agreed target, usually AA, and I state plainly in the report that automated checks passing is not a claim of accessibility; it is a floor.`,examples:[{title:`One row of the report`,code:`Page:     /employees/new (step 2)
Issue:    Amount input has no accessible name (screen reader reads 'edit text')
Criterion: WCAG 2.2 - 4.1.2 Name, Role, Value
Severity: High - blocks a primary task for screen-reader users
Repro:    Tab to the field, inspect accessible name in the a11y tree
Fix:      <label for="amount">Amount</label> + id on the input
Owner:    FE squad 2      Status: Open -> Fixed, retested 14 Mar`,explanation:`Severity is argued from user impact, not from how easy the fix is, and every row carries enough detail to be verified by someone who was not in the room.`}],tags:[`MS`]},{id:`angular-48`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Walk me through routing in Angular - how is it configured, and what does the router actually do?`,answer:`Routing is a URL-to-view mapping. You declare a Routes array where each route points a path at a component, usually through loadComponent so the code is not in the initial bundle, and register it with provideRouter(routes) in the application config. A router-outlet in the root template is the slot the active component renders into, and RouterLink or Router.navigate moves between routes without a full page load. Around that sit the pieces you are asked about: path parameters for identity (/employees/123), query parameters for optional state (?page=2), child routes for nesting, guards to decide whether navigation proceeds, resolvers to prepare data first, router events such as NavigationEnd for analytics or scroll resets, and a wildcard route for anything unmatched. Deep linking only works if the server falls back to index.html for unknown paths, otherwise a refresh on a nested URL 404s. In practice I also add withComponentInputBinding() so route and query parameters arrive as inputs, a custom route reuse strategy or scroll handling only when needed, and a preloading strategy so important lazy routes are fetched while the user is still reading the first page.`,examples:[{title:`A route config with parameters, children and a wildcard`,code:`export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: 'employees',
    loadComponent: () => import('./employees/list').then((m) => m.EmployeeList),
    children: [
      { path: ':id', loadComponent: () => import('./employees/detail').then((m) => m.EmployeeDetail) },
    ],
  },
  { path: '**', loadComponent: () => import('./not-found').then((m) => m.NotFound) },
];

bootstrapApplication(AppComponent, { providers: [provideRouter(routes)] });`,explanation:`Each lazy entry is a separate chunk fetched on first navigation; the wildcard must be last or it swallows every path.`}],tags:[`MS`]},{id:`angular-49`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you handle errors in an Angular application, including API errors?`,answer:`I handle errors at the layer that can do something useful about them, and I distinguish expected failures from bugs. At the source - the service - catchError classifies the failure (status 0 is network or CORS, 401 means re-authenticate, 403 means authenticated but not allowed, 404 is a contract problem, 5xx is upstream) and then either hands back fallback data such as of([]) when the screen can degrade gracefully, or rethrows with throwError so the caller decides. At the component level the error becomes state: a signal the template renders as a message with a retry, loading cleared in finalize() so the UI cannot get stuck half-finished, and technical detail kept out of the user-facing text. Interceptors own what is genuinely cross-cutting - a standard error envelope, logging, refresh-and-retry-once on 401 - but I do not swallow every failure there, because a 404 on one endpoint usually needs its own response. Angular's ErrorHandler catches what nothing else did and ships it to monitoring, and the router gives a separate path for a lazy chunk that fails to download. The rule I keep: every error either reaches a human who can act or reaches a log that someone reads.`,examples:[{title:`Classify, then rethrow or degrade`,code:`getEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>('/api/employees').pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) this.log.warn('network/CORS', error);
      else if (error.status === 401) this.auth.reauthenticate();
      else if (error.status === 403) this.log.warn('not authorised', error);
      else if (error.status >= 500) this.monitor.report(error);

      return this.fallback
        ? of([])                  // the screen can render an empty state
        : throwError(() => error); // the caller decides what the user sees
    }),
  );
}`,explanation:`catchError must return an Observable, so you choose: a fallback keeps the stream alive, throwError keeps the failure visible upstream. Splitting those two is the whole decision.`}],tags:[`MS`]},{id:`angular-50`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is zone.js, and why does Angular use it?`,answer:`zone.js is a library that gives JavaScript execution contexts called zones, and it gets there by patching the asynchronous APIs the browser exposes - timers, event listeners, promises, XHR/fetch callbacks - so that it knows when a scheduled piece of async work starts and finishes. Angular used it as its change-detection trigger: because the zone can see every callback settle, the framework no longer had to be told that state might have changed. The developer experience effect was real - you could update a field inside a setTimeout or an event handler and the view refreshed - and the cost was that Angular had to assume any async completion might have changed anything and re-check the tree. Two things are worth being precise about. First, zone.js is not change detection: it reports that asynchronous work settled, and Angular's change detection decides what to inspect. Second, it is no longer required - the zoneless model, the default for new applications since Angular 21, drops the patching entirely and schedules checks from explicit triggers such as a signal a template reads being written, a listener firing, or markForCheck(). So I would describe it as the mechanism Angular needed before signals made the framework aware of changes at the source.`,examples:[{title:`What the zone was standing in for`,code:`// zoneful: the zone sees the callback finish and schedules a check
setTimeout(() => {
  this.label = 'Done';   // view updates without being told
}, 500);

// zoneless: the notification comes from the state itself
this.label = signal('');
setTimeout(() => {
  this.label.set('Done'); // the written signal schedules the check
}, 500);`,explanation:`Same behaviour, different source of truth about when to render: an intercepted callback versus an explicit signal write.`}],tags:[`MS`]},{id:`angular-51`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What does cross-browser compatibility mean for an Angular app, and what has zone.js got to do with it?`,answer:`Cross-browser compatibility means the application behaves acceptably on every browser you have promised to support, and it is a testing and tooling problem, not a framework feature. My approach: agree the support matrix first, because that decides everything else; write standards-based HTML, CSS and JavaScript rather than vendor-specific behaviour; let the TypeScript target and the browserslist configuration downlevel syntax and styles for that matrix; add a polyfill only where a supported browser is genuinely missing a runtime API, which in a modern matrix is rare and always costs bytes; use feature detection at the edges rather than sniffing user agents; and actually run the key journeys in the supported browsers, real devices for the mobile ones or a service such as BrowserStack, with Playwright projects per browser where it is worth automating. Responsive layout, font rendering and input differences (touch versus hover, focus behaviour) are part of it too. zone.js belongs to a completely different category: it is Angular's mechanism for noticing that asynchronous work finished so change detection can run. It has no bearing on whether a browser supports a CSS feature or a JavaScript API, and it is not a compatibility layer - a very common mix-up worth correcting in the answer.`,examples:[{title:`The three places compatibility is actually configured`,code:`// tsconfig.json - how far syntax is downlevelled
{ "compilerOptions": { "target": "ES2022", "module": "preserve" } }

// browserslist (package.json or .browserslistrc) - the promise you make
["last 2 Chrome versions", "last 2 Firefox versions", "Safari >= 15", "iOS >= 15"]

// angular.json - runtime APIs a supported browser lacks (zoneless apps omit it)
"polyfills": ["zone.js"]`,explanation:`Syntax, styles and missing APIs are three different problems with three different settings. zone.js is none of them - it is a change-detection dependency you either load or do not.`}],tags:[`MS`]},{id:`angular-52`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are polyfills in Angular, and how do you decide which ones you need?`,answer:`A polyfill supplies at runtime an API a browser does not implement, which is different from transpilation: a transpiler rewrites newer syntax into older syntax, while a polyfill fills in a missing function or behaviour such as a missing navigator or a missing string method. In Angular, polyfills are declared as a build option - angular.json's build.options.polyfills array, where an application running with zones lists 'zone.js' - rather than imported from a hand-maintained polyfills.ts file, which older projects still have. The decision process is short: look at the support matrix, check each candidate feature against it, and add a polyfill only if a browser you must support is actually missing it. I verify with a tool such as caniuse or MDN rather than habit, because the common failure is a copied polyfill list from a project that supported IE11 years ago, silently costing critical-path bytes on every load. I also keep transpilation and polyfills separate in the answer: if the build fails or the syntax breaks it is a target problem, if a function is undefined at runtime it is a polyfill problem. This application needs none of its own, because it is zoneless and targets ES2022 browsers.`,examples:[{title:`Where a polyfill lives today`,code:`// angular.json
"build": {
  "options": {
    "polyfills": ["zone.js"],   // omitted entirely in a zoneless app
    "styles": ["src/styles.css"]
  }
}

// an older project still reads from a file the CLI generated
// src/polyfills.ts
import 'core-js/actual/structured-clone';`,explanation:`The array is the whole mechanism now: each entry is a module bundled into the app, so every entry is a kilobyte you have justified.`}],tags:[`MS`]},{id:`angular-53`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What testing setup does an Angular project get by default?`,answer:`Historically the CLI scaffolded Karma as the runner and Jasmine as the assertion library: Karma launched a browser, reported results back, and specs used describe/it/expect with spies. Karma was deprecated in 2023 and from Angular 21 the default ng test runs Vitest through the builder, which keeps the familiar Jasmine-style API but runs fast in a DOM environment instead of driving a browser, and it is what this project uses. End-to-end is deliberately not chosen for you: Protractor reached end of life in 2023 and the CLI now asks you to pick from Playwright, Cypress, WebdriverIO, Puppeteer or Nightwatch. Beyond the tooling, the part of the answer that matters is how I write tests: exercise behaviour rather than implementation - create the fixture, set inputs with setInput, drive an event, then assert on what the user can see; fake services instead of hitting HTTP, using provideHttpClientTesting and the testing controller to verify the method, URL and body; and assert the failure path as well as the happy one, because the empty and error states are where the bugs hide. I would rather have ten tests that would fail if behaviour changed than fifty that only prove the framework works.`,examples:[{title:`A component test in the current default setup`,code:`it('should render the employees the service returned', async () => {
  api.getEmployees.and.returnValue(of([{ id: 1, name: 'Ada' }]));

  const fixture = TestBed.createComponent(EmployeeList);
  await fixture.whenStable();
  fixture.detectChanges();

  expect(api.getEmployees).toHaveBeenCalled();
  expect(fixture.nativeElement.textContent).toContain('Ada');
});`,explanation:`describe/it/expect come from the runner (Vitest here), the service is a spy so nothing hits the network, and the assertion is on the rendered DOM rather than on component fields.`}],tags:[`MS`]},{id:`angular-54`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What happens when a component is destroyed, and what do you have to clean up?`,answer:`Angular calls ngOnDestroy once when the component instance is being torn down, and it is the last place you can undo everything the component started. The checklist I run through: long-lived subscriptions (the modern answer is takeUntilDestroyed() in the injection context, or the async pipe in the template, so there is nothing to unsubscribe by hand), intervals and timeouts, event listeners you added yourself, anything you appended to the DOM outside Angular's knowledge, third-party widgets you instantiated, and native resources such as a WebSocket or an observer. Signals blur the line usefully: an effect() created in the component's injection context disposes itself with the component, toSignal() is tied to DestroyRef, and a finite HTTP observable completes on its own so it needs no cleanup at all - the mistake is treating every observable as if it needs an unsubscribe. In tests I prove teardown rather than assume it: assert that ngOnDestroy ran, or that a stopped interval no longer ticks. Worth knowing if you touch a legacy AngularJS codebase: the equivalent is the scope's $destroy event, and AngularJS fires it twice - once broadcast to descendant scopes, once on the element itself when it is removed - so those handlers have to be idempotent.`,examples:[{title:`Tear down what the framework cannot`,code:`export class OrderPoller {
  private readonly destroyRef = inject(DestroyRef);
  private readonly api = inject(OrderApi);
  private handle?: number;

  constructor() {
    // subscription: tied to the component, nothing to unsubscribe manually
    interval(10_000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.api.refresh());

    // a resource outside Angular's control needs an explicit undo
    this.destroyRef.onDestroy(() => clearInterval(this.handle));
    this.handle = window.setInterval(() => this.tick(), 1_000);
  }
}`,explanation:`Angular owns its own subscriptions now; anything it did not create - a raw interval, a listener, a widget - still has to be released in onDestroy, exactly once.`}],tags:[`MS`]},{id:`angular-55`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you integrate a REST API into an Angular application?`,answer:`I keep HTTP in a typed service per resource and never in a component: register provideHttpClient() once in the application config, then a service injects HttpClient and exposes methods that return an Observable typed to the response shape. The component owns state - loading, data, error as signals - and the service owns the wire. Around that I do four things consistently. Interceptors attach what is cross-cutting: the Authorization header, a correlation id, a consistent error envelope. Unsubscribing matters: because an HttpClient observable cancels on unsubscribe, search-style calls go through switchMap and everything else is tied to the component with takeUntilDestroyed. Validation happens at the boundary, because a TypeScript interface disappears at runtime and does not check the JSON that actually arrived - for anything that drives logic I narrow the payload before trusting it. And where two screens ask for the same collection, I deduplicate with shareReplay rather than firing the request twice. For testing I swap in provideHttpClientTesting, assert the method, URL and body with the testing controller, and drive success, 404 and 500 through the same spec, so the loading and error states are proven rather than hoped for.`,examples:[{title:`A resource service and the test that pins its contract`,code:`// employee.service.ts
@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private readonly http = inject(HttpClient);
  private readonly base = '/api/employees';

  list(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.base).pipe(shareReplay({ bufferSize: 1, refCount: true }));
  }
  update(id: string, patch: Partial<Employee>): Observable<Employee> {
    return this.http.patch<Employee>(\`\${this.base}/\${id}\`, patch);
  }
}

// employee.service.spec.ts
TestBed.configureTestingModule({
  providers: [provideHttpClient(), provideHttpClientTesting()],
});
const req = httpMock.expectOne('/api/employees');
expect(req.request.method).toBe('GET');
req.flush([{ id: '1', name: 'Ada' }]);`,explanation:`The spec is a contract test: if someone changes the URL or the method, the test fails before any screen does.`}],tags:[`MS`]},{id:`angular-56`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`A feature runs on the traditional NgRx Store and the team wants to move it to SignalStore. How do you decide whether to do it, and how would you run the migration?`,answer:`I would decide before I design, because the honest first answer is often 'not yet'. The Store earns its boilerplate when state is shared widely, when you need effects as a visible side-effect stream, devtools time-trace debugging, or rules about what may write. SignalStore wins when the state belongs to one feature, the consumers are already signal-based, and the cost of dispatching actions through reducers is buying nothing. So the first task is to write down the pain - is it boilerplate, test setup, or the indirection of dispatch-then-select - and check how much of the ecosystem the feature actually relies on. If it is app-wide state with ten consumers and middleware, I would keep the Store and improve it instead. If it is a feature slice, I migrate in a way that keeps a working application at every step: characterise the current behaviour with tests first, so the reducer and effect outcomes are pinned; build the SignalStore slice with withState for the data, withComputed for derived values, withMethods for the actions that used to be dispatched, and withHooks for load and reset; keep the old facade - the same selectors and dispatch points - so nothing outside the feature notices; then move consumers one component at a time from store.select to a signal and from dispatch to a method call. The last step deletes the actions, reducers and effects for that slice, and the two models coexist until then. The risks I would name out loud: two sources of truth if both stores write the same data during the transition, losing the devtools timeline the team relied on, and a team learning a new pattern mid-delivery. Migrating because SignalStore is newer is not a reason.`,examples:[{title:`The slice that replaces an actions/reducers/effects trio`,code:`export const EmployeeStore = signalStore(
  { providedIn: 'root' },
  withState({ employees: [] as Employee[], loading: false, error: null as string | null }),
  withComputed(({ employees }) => ({
    active: computed(() => employees().filter((e) => !e.archived)),
  })),
  withMethods((store) => {
    const api = inject(EmployeeApi);
    return {
      load: async () => {
        patchState(store, { loading: true, error: null });
        try {
          patchState(store, { employees: await api.list(), loading: false });
        } catch (e) {
          patchState(store, { loading: false, error: String(e) });
        }
      },
      archive: (id: string) => {
        const employees = store.employees().map((e) => (e.id === id ? { ...e, archived: true } : e));
        patchState(store, { employees });
      },
    };
  }),
);`,explanation:`state replaces the reducer, computed replaces the memoized selector, methods replace dispatch, and the HTTP call sits where the effect used to - one file where there were three, with no dispatcher in between.`}],tags:[`MS`]}],performance:[{id:`performance-1`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`What happens when a user types a URL into the browser and presses enter?`,answer:`The first question of this category, and the one that reveals whether you actually
understand the network or just the framework. Walk it in order without
skipping: URL parsing, DNS resolution to an IP, TCP connection, TLS handshake,
the HTTP request, the response, and then what the browser does with the bytes. Two
details that separate a strong answer from a recited one: DNS and TLS both happen
before any application code runs, and for a single-page app the server usually
returns the same index.html for every route - so the router, not the server,
decides what the user sees. Mention HTTP/2 or HTTP/3 multiplexing, and be honest
about what you have measured versus what you know generally.`,examples:[{title:`Full request path to first render`,code:`DNS
User types app.example.com/orders/42
  -> URL parsed: scheme, host, path
  -> DNS resolution: hostname -> IP (cached by browser, OS, or resolver)

TCP
  -> TCP handshake: SYN, SYN-ACK, ACK

TLS
  -> TLS 1.3 handshake, certificates verified
  -> If resuming a previous connection, this is much cheaper

HTTP
  -> GET /orders/42 HTTP/2
  -> CDN or server replies. For a SPA the response is almost always the same
     index.html regardless of the /orders/42 path - the server does not know
     or care which route you wanted.

Browser
  -> HTML received, parsing starts immediately, streaming
  -> Preload scanner scans ahead for CSS, JS, images and starts fetching
  -> Render-blocking CSS found in <head> pauses first paint
  -> <script type="module"> is deferred by default, so it does not block
     parsing, but DOMContentLoaded waits for module execution

What a candidate often gets wrong:
"the root component runs first."
No. The first application code to run is whatever main.ts imports. The root
component class - App in app.ts, or AppComponent in older projects - is a
class declaration, and nothing instantiates it until bootstrapApplication is
called from main.ts.`,explanation:`Differentiating DNS/TCP/TLS from HTTP, and being clear that the server returns the
same HTML for every route, are the two markers of a real answer.`}]},{id:`performance-2`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Walk me through how an Angular app boots, step by step. Does it go to app.ts first?`,answer:`No - and correcting that misconception inside the answer is valuable, because it
tests whether you know the order rather than the file names. The order is: the
browser receives index.html, discovers the module script, downloads and executes
main.ts, main.ts calls bootstrapApplication with a root component, Angular creates
that component, its template renders, and only then does anything user-visible
appear. Behind the scenes, the build tool read the main property in angular.json
(which points at src/main.ts) and the Angular CLI injected the compiled bundle
scripts near the bottom of index.html, which is why main-XYZ.js is the first
application code to run. The root component class is inert until
bootstrapApplication instantiates it and renders it into the <app-root> placeholder. Within that you should be able to name where the router fits: the root template
contains router-outlet, the router reads the current URL, matches it against the
route config, and for a lazy route triggers a dynamic import before the routed
component is created. Mention that in Angular 21+ this app is zoneless by default,
so change detection is scheduled by notification rather than by zone.js. Two details that separate a real answer from the file names: bootstrapApplication(AppComponent, appConfig) assembles the root injector from appConfig's providers - provideRouter, provideHttpClient and every app-wide service - before the root component is created, so anything the first render depends on belongs there; and the root component stays a shell until the router matches the URL and renders the routed component into router-outlet, which is why a slow first route feels like a slow application.`,examples:[{title:`index.html -> main.ts -> bootstrapApplication -> App`,code:`index.html (build output)
  <!doctype html>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="styles-ABC.css">   <!-- render-blocking -->
    </head>
    <body>
      <app-root></app-root>
      <script type="module" src="main-XYZ.js"><\/script>
    </body>
  </html>

main.ts
  import { bootstrapApplication } from '@angular/platform-browser';
  import { App } from './app/app';
  import { appConfig } from './app/app.config';

  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));

app.ts  (NOT the entry point - the class only)
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: \`<router-outlet />\`,
  })
  export class App {}

The actual order
  1. HTML parsed, app-root element exists as an empty host element
  2. main.js downloaded, module graph resolved
  3. main.ts executes -> bootstrapApplication(App, appConfig)
  4. Angular creates App and renders its template into <app-root>
  5. Router initialises, reads location.pathname
  6. Route matched. If the route is lazy:
       loadComponent: () => import('./orders/orders.component')
     -> dynamic import of that chunk -> network request -> then component created
  7. First meaningful paint of real content

Note on file names
  Angular 20+ generates src/app/app.ts exporting App rather than
  src/app/app.component.ts exporting AppComponent. Either way the logic is the
  same - the root component is not the entry point, main.ts is.

Key point
  Nothing renders until step 4 at the earliest, and nothing route-specific renders
  until step 6. Both are network-bound, not CPU-bound, which is why this is a
  performance question.`,explanation:`Naming the exact order, correcting the root-component misconception explicitly, and
placing the router dynamic import at the right step is what a strong answer looks
like.`}],tags:[`MS`]},{id:`performance-3`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How does the browser decide what to fetch from your index.html, and in what order?`,answer:`Tests whether you know there is a real parser and a separate preload scanner. The
browser parses HTML incrementally, and the preload scanner runs ahead of the DOM
parser looking for things it can fetch early - stylesheets, scripts, images, fonts.
That is why a script far down the body can already be downloading. Then the priority
rules kick in: CSS in head is render-blocking, module scripts are deferred so they do
not block parsing but do gate DOMContentLoaded, and async scripts have no ordering
guarantee. Fonts are lazy by default, so they only start once something needs them.
Practical consequences: preloading a file the preload scanner would have found anyway
wastes bandwidth, and script tags placed in body get discovered later unless they are
module or defer.`,examples:[{title:`Parser, preload scanner, and priority`,code:`Parsing
  HTML is parsed incrementally. The DOM is built as bytes arrive, which is why
  streaming SSR can show content before the response finishes.

Preload scanner
  Runs ahead of the DOM parser specifically to find fetchable resources early:
    <link rel="stylesheet">    high priority, render-blocking
    <script src>              blocks parser (classic) or deferred (module)
    <img>                     discovered as soon as the tag is scanned
    <link rel="preconnect">    connection opened early, nothing downloaded
    <link rel="preload">      fetched and kept, high priority
    <link rel="prefetch">      fetched low priority for likely-future use
  Note that an <img src> is discovered regardless of whether it has width and height
  - those attributes affect layout reservation, not whether or when it is fetched.

Order in practice
  1. <head> CSS discovered immediately -> blocks first paint
  2. Preload scanner sees <script type="module" src="main.js"> early, so the download
     starts before the body finishes parsing
  3. A classic <script> in <body> without defer pauses the HTML parser until it
     downloads and runs
  4. Module scripts are deferred automatically - never blocking, but DOMContentLoaded
     waits for them to execute

The trap
  <link rel="preload" href="main.js" as="script">
  If main.js is already discoverable by the preload scanner, this does not speed
  anything up - it just competes for bandwidth and can trigger console warnings.
  Preload what the scanner cannot see, like a chunk that is only requested by dynamic
  import.`,explanation:`Distinguishing the DOM parser from the preload scanner, knowing that module scripts
are deferred, and understanding that img discovery does not depend on width/height.`}]},{id:`performance-4`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`What is code splitting in an Angular app, and how does a lazy route actually load?`,answer:`The mechanism to be precise about: the build tool reads the dynamic import in the
route configuration, puts that component and its unique dependencies in a separate
chunk, and leaves it out of the initial bundle. At runtime the router triggers the
import, which is just a promise-returning network fetch, and only after it
resolves is the component created. The important performance consequence is that
lazy loading moves bytes off the critical path rather than making them smaller,
and it costs you a round trip on first navigation - so prefetching is the usual
follow-up. Be able to explain why a barrel file can defeat splitting, because
importing one symbol from a barrel can drag the whole barrel into the chunk
graph. A few details worth knowing rather than assuming: a lazy component does not automatically get a chunk of its own, because dependencies shared with other routes are extracted into shared chunks; a chunk the browser has already cached costs no round trip on a later visit; and the only way to confirm what actually happened is to read the production build's chunk list and watch the network waterfall on a first navigation, rather than trusting the route config.`,examples:[{title:`Dynamic import in the route config`,code:`app.routes.ts
  export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'orders',
      // static import - OrdersComponent is in the initial bundle
      component: OrdersComponent,
    },
    {
      path: 'reports',
      // dynamic import - separate chunk, fetched on navigation
      loadComponent: () =>
        import('./reports/reports.component')
          .then((m) => m.ReportsComponent),
    },
  ];

What the build produces
  main-ABC.js         app shell, router, HomeComponent
  chunk-DEF.js        ReportsComponent + anything only it uses
  chunk-GHI.js        a shared dependency, loaded by either route if needed

What happens on first navigation to /reports
  1. Router matches the route
  2. loadComponent() runs -> import() -> dynamic import
  3. Browser fetches chunk-DEF.js (or reads it from cache)
  4. Module evaluates, exports the component class
  5. Component is created and rendered

Why a barrel file breaks this
  // components/index.ts
  export * from './reports.component';
  export * from './orders.component';
  export * from './customers.component';

  import { X } from '../components';
  The bundler must analyse the whole barrel to know what X pulls in, so all
  three components can end up in the shared chunk and main.js grows. Import
  from the file path directly to keep the graph narrow.`,explanation:`Lazy loading moves work off the critical path rather than reducing it, and the
barrel-file explanation is what shows you understand the build, not just the API.`}],tags:[`MS`]},{id:`performance-5`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`What are render-blocking resources, how do you find them, and how do you fix them?`,answer:`Render-blocking means the browser cannot paint until the resource is parsed, so it
directly caps First Contentful Paint. In Angular you should know that the CLI already
does the main optimisation for you: the application builder inlines critical CSS by
default, so the classic manual critical-CSS dance is usually not something you write
yourself. What is left for you is knowing what it cannot do - it cannot help with
third-party tags, it does not apply to inline styles in templates, and you may need
to disable or tune it. Also know the trade-off: inlining removes a round trip but
grows the HTML and cannot be cached across pages, and a single render-blocking
stylesheet blocks everything no matter how small it is.`,examples:[{title:`Angular already inlines critical CSS - what is left for you`,code:`What the CLI does for you by default

  // angular.json -> build -> configurations -> production
  "optimization": {
    "scripts": true,
    "styles": {
      "minify": true,
      "inlineCritical": true,     // <-- default, uses Beasties
      "removeSpecialComments": true
    },
    "fonts": true
  }

  "optimization" itself defaults to true, so a production build gets this without
  you configuring anything.

What that means in practice
  The build extracts the CSS needed for first paint and inlines it into index.html.
  The rest is loaded as a normal stylesheet. So if you are writing an interview
  answer about manual critical CSS in an Angular app, the strong version starts by
  saying the tooling already handles it.

What it cannot do for you

  1. Third-party tags - analytics, chat widgets, consent banners
       <script async src="analytics.js"><\/script>
       <script defer src="support-widget.js"><\/script>
       These are not part of your CSS graph at all.

  2. Inline styles in templates, and styles added at runtime.

  3. The case where critical CSS inlining is wrong for you. If your critical CSS is
     large, or the page structure varies a lot per route, inlining bloats the HTML
     and you would rather disable it:
       "optimization": { "styles": { "inlineCritical": false } }
     then load styles yourself.

Why it matters anyway
  A single render-blocking stylesheet blocks first paint for a full round trip, no
  matter how small it is. That is the property to be able to explain.`,explanation:`Knowing inlineCritical defaults to true is the Angular-specific fact that makes the
answer credible; the remaining blockers are third-party tags, not your own CSS.`}]},{id:`performance-6`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`What are Core Web Vitals, and how do you measure and diagnose each one?`,answer:`Three metrics that approximate real user experience, which means the field data
matters as much as the lab data. Know what each measures and, more importantly,
what each diagnosis is: LCP is about whether the main content arrives fast, so
look at server response, render-blocking resources and image priority; INP is
about whether the main thread is free when the user acts, so look at long tasks
and expensive handlers; CLS is about whether things move after they appear, so
look at images without dimensions, web fonts swapping in, and content injected
above existing content. The graded detail is being able to distinguish a lab score
from field data and to say which one you would optimise against.`,examples:[{title:`Metric, threshold, and what to actually look at`,code:`LCP - Largest Contentful Paint
  Measures when the largest element finished painting.
  Good under 2.5s (75th percentile).
  Diagnose: server response time, render-blocking CSS, whether the LCP element
  is an image with lazy loading applied by mistake, font blocking paint.

INP - Interaction to Next Paint
  Measures the latency from a user interaction to the next frame.
  Good under 200ms. This replaced First Input Delay - it measures the whole
  interaction, not just the first one.
  Diagnose: long tasks, heavy event handlers, expensive re-renders, layout
  thrash where you read and write layout properties in a loop.

CLS - Cumulative Layout Shift
  Measures unexpected movement of visible content.
  Good under 0.1.
  Diagnose: images and iframes without width/height, web fonts swapping after
  fallback text is painted, ads or banners inserted above existing content,
  async content pushing content down.

Lab vs field
  Lab (Lighthouse, DevTools, WebPageTest): one device, one network, repeatable.
  Field (CrUX, RUM): real devices on real networks, includes the users you
  care least about and most about.

  I optimise against field data and use the lab to reproduce. A lab score can
  be perfect while field INP is bad, because a lab run never does the sequence
  of interactions a real user does.`,explanation:`Connecting each metric to a concrete diagnostic, and explicitly preferring field
data, is what a senior answer does. Reciting the thresholds is not enough.`}]},{id:`performance-7`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a long task, and how does blocking the main thread show up to a user?`,answer:`A long task is any script execution over roughly 50ms, and the number is not
arbitrary - it is the point at which the browser cannot reliably keep up with input
handling and rendering. The user-visible symptoms are input lag, animations that
stutter, and INP going up, all of which are the same root cause. The important
distinction for an Angular developer is between work that is long but interruptible
and work that is long and blocking: chunking work with the scheduler or yielding
between frames can make an acceptable task into a fine one, whereas anything inside
a synchronous loop that touches DOM layout will block no matter how you slice it.`,examples:[{title:`Long task, and the yield that fixes it`,code:`Symptom
  User clicks, nothing happens for 300ms, then everything snaps at once.

Cause
  One task occupying the main thread for 300ms. Input events queue behind it.

Find it
  DevTools -> Performance -> record interaction -> look for the red triangle and
  long yellow scripting blocks. Long tasks are also marked in the Interaction to
  Next Paint panel.

Bad fix - reading layout inside the loop
  for (let i = 0; i < 10000; i++) {
    rows.push(expensive(i));
    if (i % 500 === 0) {
      element.offsetHeight;   // forces layout, still synchronous
    }
  }

Good fix - end the task so the browser can breathe
  // Angular has no public yield() scheduler API, so yield with a platform
  // primitive between chunks of work:
  const yieldToBrowser = () => new Promise<void>(r => setTimeout(r, 0));

  for (let i = 0; i < 10000; i++) {
    rows.push(expensive(i));
    if (i % 500 === 0) await yieldToBrowser();   // input and rendering get a turn
  }

  For reactive code the framework-aware version is the experimental onIdle()
  primitive from @angular/core (v22), which recomputes a derived value on an idle
  callback instead of on every read.

Good fix - do less
  Virtualise the list so there is no 10000-row loop in the first place. 10k rows of
  real DOM is the underlying problem; yielding only makes the wrong work less
  painful.

Why the yield has to be a macrotask
  A microtask (Promise.resolve().then) does not help - the browser will not paint or
  dispatch input until the microtask queue drains. Yielding means ending the current
  task, so setTimeout or a MessageChannel postMessage are the tools that work.`,explanation:`The 50ms threshold, the same root cause behind input lag and INP, and knowing that yielding only fixes interruptible work - not a 10k-row DOM problem. Angular ships no scheduler.yield(), so use setTimeout or a MessageChannel, not a microtask.`}]},{id:`performance-8`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you profile an Angular app and find out what is actually slow?`,answer:`Method, not tool names, is the grade. The sequence that works: reproduce
consistently, measure before changing anything, find the longest task or the
largest cost, and only then optimise - then re-measure to confirm. On top of
that, know the Angular-specific tools: the DevTools Performance panel for the
main thread, the Angular profiler (or the newer DevTools performance extension
features) for change detection, and heap snapshots for retained memory. A strong
answer includes a case where a profiler contradicted the team belief - that is
what proves you measured rather than assumed.`,examples:[{title:`Reproduce, measure, confirm`,code:`Step 1 - reproduce it consistently
  A vague "it feels slow" cannot be optimised. Record a scripted interaction
  with the same data volume every time.

Step 2 - measure before touching anything
  DevTools -> Performance:
    - record the interaction
    - look at the summary donut first: scripting vs rendering vs painting
    - the longest task, then what dominates inside it

  Angular-specific:
    - the profiler shows change detection runs and their cost
    - a slow screen is often 40ms of change detection across 3000 views, not
      one slow function

  Network: check whether it was actually a 900ms API call

Step 3 - the finding that contradicted the team
  The team believed a third-party chart library was the problem.
  The profile showed 12ms in the chart library and 380ms in a change
  detection pass, caused by a computed property that returned a new array
  identity on every read and therefore invalidated OnPush children.

Step 4 - fix and re-measure
  Memoise the array so the identity is stable. Re-record: change detection
  dropped from 380ms to 20ms. The chart library stayed.

For memory: take a heap snapshot, do the interaction 5 times, take another,
sort by retained size, and look for detached DOM trees - that is the signature
of a leak.`,explanation:`Reproduce-measure-confirm as a sequence, knowing the Angular profiler is about
change detection rather than functions, and telling a story where measurement
contradicted the team belief.`}]},{id:`performance-9`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How does change detection affect Angular performance, and what are the ways to reduce its cost?`,answer:`Be precise about the mechanism, because this is where vague answers fall apart.
Change detection walks a tree of components and evaluates bindings. In a zoneless
app it does not run on a timer or on every event; it is scheduled when Angular
notices something that needs rendering - a signal written that a template reads, an
input set, a host or template listener firing, markForCheck, or a view being
attached. That is notification-based, so the wins come from not doing unnecessary
work rather than from the scheduler being faster. Know that this is the default in
Angular 21+, and that zone.js apps still exist and still tick on async events, which
is why the two behave differently. The levers are OnPush, pure pipes, stable keys,
and running genuinely framework-free code outside Angular when it does not need to
touch the DOM.`,examples:[{title:`Zoneless scheduling, and the levers`,code:`How scheduling works without zone.js
  With zone.js, any patched event, timer, or promise resolution triggered a full
  tick. Without it, Angular schedules change detection when it observes one of:
    - a signal that is read in a template is written
    - ComponentRef.setInput
    - a bound host or template listener fires
    - ChangeDetectorRef.markForCheck
    - a view marked dirty is attached, or removed

  This is the default in Angular 21+. In v20 you opted in with
  provideZonelessChangeDetection(). Your own app has no zone.js dependency at all,
  so it is already in this mode.

Lever 1 - OnPush
  @Component({ changeDetection: ChangeDetectionStrategy.OnPush })
  export class OrderListComponent {}
  With zoneless, OnPush still matters: it stops a parent invalidation from cascading
  into children that read nothing you changed. Caveat: a new array or object identity
  defeats it.

Lever 2 - pure pipes (already the default)
  {{ total | currency }}                              // memoised on total
  {{ total | currency: 'GBP' : 'symbol' : '1.2-2' }}   // memoised on total + args
  transform() runs only when an argument changes by ===, so the thing to avoid is an
  impure pipe (pure: false), which re-runs on every change detection pass

Lever 3 - stable keys
  @for (row of rows(); track row.id) { ... }      // stable
  @for (row of rows(); track $index) { ... }      // defeats the diff
  Without a stable key Angular recreates the DOM and loses focus, scroll and state.

Lever 4 - do less
  The real win is not doing the work. 3000 rows of Material table is the problem;
  virtualisation beats any scheduler tweak.

Lever 5 - stay out of the framework entirely
  If your code only touches the DOM and never changes component state, do not run
  it through Angular at all:
    private readonly zone = inject(NgZone);

    ngAfterViewInit(): void {
      this.zone.runOutsideAngular(() => {
        element.addEventListener('scroll', onScroll);  // no CD triggered
      });
    }`,explanation:`Knowing the zoneless scheduling triggers as a specific list, understanding it is
the v21+ default, and using NgZone.runOutsideAngular for pure DOM work rather than
claiming a bare function "runs outside Angular".`}]},{id:`performance-10`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is tree shaking, and how do you verify that it is actually working rather than assuming it?`,answer:`This is the verify-it follow-up to the basic definition. Tree shaking removes
exports nothing imports, and it is easy to claim and hard to confirm. The
mechanisms are sideEffects metadata so the bundler knows a file has no
import-time side effects, static versus dynamic imports, and module format -
CommonJS modules cannot be statically analysed, so one require-style dependency can
defeat the whole thing. Verification is the graded part: look at the actual chunk
contents in the build output or the DevTools network panel rather than trusting the
build summary, and know that barrel files, CommonJS interop and accidental
side-effect imports are the usual leaks.`,examples:[{title:`Verify, do not assume`,code:`The setup
  package.json
  {
    "sideEffects": false
  }
  Tells the bundler every file in this package is safe to drop if unused. If you
  have any import-time side effect (polyfills, CSS imports, registering something
  global), list them:
  "sideEffects": ["*.css", "./src/polyfills.ts"]

Why it fails silently
  1. CommonJS. A dependency shipping CJS cannot be statically analysed, so the whole
     module is kept:
       import moment from 'moment';        // the entire library
       import { debounce } from 'lodash';  // unless you use lodash-es or a
                                           // per-method import
  2. Barrel files. import { thing } from './utils' forces the bundler to analyse
     ./utils/index.ts, which may re-export 40 things.
  3. Accidental side-effect import:
       import './polyfills';   // kept even if nothing is used

Verification
  npx ng build --configuration production
  Look at the output table - lazy chunks in kB, and the initial total.

  Then confirm rather than trust:
    - DevTools -> Network -> the JS files actually fetched on a cold load
    - Sources panel -> the bundle, search for a symbol you think is unused
    - source-map-explorer or rollup-plugin-visualizer to attribute bundle size to
      specific files

  I found 180kb of moment this way. The fix was replacing it, not configuring the
  bundler harder.`,explanation:`Knowing CJS defeats shaking, that sideEffects is a contract you must not lie about,
and verifying against the network panel rather than the build summary.`}]},{id:`performance-11`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are the usual causes of a slow Angular app, and how do you prioritise which one to fix?`,answer:`Good answers are a prioritisation framework rather than a list, because the list is
easy to recite. The useful ordering is by cost of fix against cost of delay: fix
network-bound work first, because it is usually both the biggest and the easiest -
a 900ms API call dwarfs any template optimisation. Then main-thread blocking,
because it affects every interaction. Then rendering volume, because it is
proportional and grows with the product. Then bundle size, which matters most on
first load on bad networks and barely at all once cached. The thing that
distinguishes a senior answer is naming what you deliberately did not fix and
why, and saying how you decided where to stop.`,examples:[{title:`Rank by cost of fix against cost of delay`,code:`Ranked for a typical internal app with 40k users on office wifi:

1. Network-bound, before anything else
   An 800ms API call on the critical path. Fix is often a cache or a
   prefetch, and the win is measured in hundreds of ms.
   Highest ratio of gain to effort of anything on this list.

2. Main-thread blocking
   Long tasks over 50ms. Affects every interaction, so it hurts INP directly.
   Usually needs scheduler.yield or moving work out of the change detection
   path.

3. Rendering volume
   500-row Material table with filtering and sorting on every keystroke.
   Fix: virtualisation, and debouncing the filter so it is not per keystroke.

4. Bundle size
   Only matters for first load on poor networks. If 80% of sessions are repeat
   and the bundle is cached, this is near zero and should be last.

5. Change detection cost
   Often real but rarely the biggest single item. Fix with OnPush and signals.

What I deliberately did not fix
  We spent two days on bundle size - the app was 900kb - and our field LCP was
  already fine because 95% of traffic was repeat visits served from cache. I
  should have checked the field data before optimising. We kept maybe 5% of that
  work.`,explanation:`Ranking with a stated reason, and naming work you chose not to do and why, is what
separates this from a recited list.`}],tags:[`MS`]},{id:`performance-12`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`An Angular app's memory grows steadily in production as users navigate between routes. How do you track down what is retaining the memory?`,answer:`This is the diagnostic question, as opposed to the leak question - the graded part
is distinguishing a real leak from a cache that is behaving correctly, which is
where most investigations go wrong. The method that works is comparison rather
than inspection: take a heap snapshot, repeat the suspect interaction several
times, force GC, take another, and diff. A real leak grows monotonically with each
repetition, whereas lazy route chunks and caches plateau. Learn to read the
dominators tree, because the retaining object is usually held by a closure you
cannot see at the call site. In Angular the causes are almost always one of three:
an unsubscribed subscription, a listener or timer registered outside Angular, or a
reference to a detached DOM node.`,examples:[{title:`Snapshot, repeat, diff`,code:`The three causes
  1. Subscription never unsubscribed
       items$ = new Subject();
     // subscribed in a component that can be destroyed
  2. Listener or timer outside Angular
     setInterval(() => this.poll(), 5000);   // survives the component
  3. Detached DOM
     A closure holds a reference to a node the framework has already removed.
     9,912 detached nodes, one detached HTMLDivElement.

The method
  1. DevTools -> Memory -> Heap snapshot
  2. Perform the suspect interaction - navigate to a route with a chart, back, five
     times
  3. Force GC, then take snapshot 2
  4. Comparison view, sort by retained size

The distinction that matters
  Detached node count climbing with each repetition is a leak.
  Lazy route chunks staying resident after the first load are cached, not leaking -
    they plateau. Confusing these two is why people either fix non-problems or miss
    real ones.

Finding the actual retainer
  Select the leaking object, expand the dominators tree, and follow it down. In one
  case the retainer was an arrow function passed to a subscribe-like library API,
  which held the destroyed component forever. You will not find this at the call
  site; the retainer and the leak are in different places.

Prevention, once you have diagnosed it
  import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.timer$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.tick());
  }`,explanation:`The snapshot-and-diff method, knowing that plateauing chunk memory is a cache
rather than a leak, and reading the dominators tree to find the retainer.`}]},{id:`performance-13`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between initial load, a reload, and a route transition? How should each be measured?`,answer:`They have completely different bottlenecks, and optimising the wrong one is a
classic mistake. The initial load has nothing cached, so it is dominated by network
round trips and parse cost - this is where bundle size, render-blocking resources
and the number of requests matter. A reload has the browser HTTP cache partly
warm but not necessarily the runtime state, so it is dominated by parse and
execute time - code cache and bundle size matter more than request count. A route
transition happens inside a running app with the framework already loaded, so it
is dominated by data fetching and rendering work, and bundle size is almost
irrelevant. Being able to separate them is the whole point of the question.`,examples:[{title:`Three different bottlenecks`,code:`Initial load (cold)
  Cache: empty. Server: cold or warm.
  Dominated by: round trips, render-blocking resources, parse time.
  Measure: Lighthouse, throttled to Slow 4G, with cache disabled.
  Fixes that matter: fewer requests, code splitting, deferring below-fold work.

Reload (browser cache warm)
  JS may come from HTTP cache; the runtime state is gone.
  Dominated by: parse and execute, V8 compile, hydration work.
  Measure: same tools but with the cache enabled, and look at the total
  scripting time rather than the request waterfall.

Route transition (SPA, app already running)
  Framework loaded, no new initial bundle.
  Dominated by: the API call for the route data, and rendering the new view.
  Measure: in-app marks around the navigation, and the DevTools Network panel
  filtered by XHR - not the document request.
  Fixes that matter: query caching, pagination, virtualisation, OnPush.

The mistake
  "Our bundle is 1.4mb so the app is slow."
  For a user on their fifth navigation that number is irrelevant. Split the
  complaint into which of the three it is before touching anything.`,explanation:`Separating cold-load network cost from reload parse cost from route-transition
rendering cost, and knowing which fixes apply to which.`}]},{id:`performance-14`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do prefetching and preloading differ, and when is either worth it?`,answer:`Prefetch is for resources you expect to need soon but which must not block anything
now; preload is for resources you know you need immediately, fetched at high
priority and consumed straight away. The distinction matters because a preload on
something the preload scanner would have found anyway is pure loss - it competes
for bandwidth and the browser warns you about it. In Angular, route prefetching is
the standard win because the routes are known ahead of time, so the trade is
bandwidth against first-navigation latency. Know that RouterLink has no prefetch
input and that preloading is configured at the router provider level, not on a link.`,examples:[{title:`Prefetch vs preload, and how Angular route preloading is actually configured`,code:`Prefetch
  <link rel="prefetch" href="chunk-DEF.js">
  Low priority, non-blocking, for likely-next resources such as lazy route chunks.

Preload
  <link rel="preload" href="chunk-DEF.js" as="script">
  High priority, meant to be consumed immediately. Use it for a chunk that is only
  requested by dynamic import, so the preload scanner cannot see it. The as
  attribute makes the intent unambiguous.

The waste
  <link rel="preload" href="main.js" as="script">
  main.js is already discoverable by the preload scanner from
  <script type="module"> in index.html. You have added a duplicate request hint and
  bandwidth contention for no gain.

Configuring route preloading in Angular
  RouterLink has no prefetch input. Preloading is a router-level strategy:

  import { PreloadAllModules, withPreloading, provideRouter } from '@angular/router';

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(
        routes,
        withPreloading(PreloadAllModules),  // stable API, not deprecated
      ),
    ],
  };

  Custom strategy when you want to be selective:

  @Injectable({ providedIn: 'root' })
  export class PopularRoutesPreloader implements PreloadingStrategy {
    private readonly preloader = inject(RouterPreloader);
    private readonly routes = inject(Router).config;

    preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
      return route.data?.['preload'] === false
        ? null!
        : this.preloader.preload(route, load);
    }
  }

The trade
  Preloading every route means the first navigation is fast and total transfer is much
  higher. On a metered connection that can be a net loss. Decide by route popularity,
  not by default.`,explanation:`The discoverability rule for preloads, that RouterLink has no prefetch input and
preloading is configured via withPreloading, and that PreloadAllModules is stable
rather than deprecated.`}]},{id:`performance-15`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How does a service worker change loading performance, and what are the risks?`,answer:`The service worker sits between the network and the app and can serve from a
cache, which turns a network-bound first load into a cache-bound one for repeat
visits. That is a large win for returning users on bad networks and it is also
the source of the classic failure: a stale app shell served to a user whose
JavaScript chunks have been evicted, producing a version mismatch errors. Any
answer should mention versioned caches and cleanup on activate. Be honest that it
adds a layer of complexity and a failure mode that does not exist without one,
and that for a frequently updated internal app it may not be worth it.`,examples:[{title:`Caching strategies and the failure mode`,code:`Lifecycle
  install  -> precache the shell
  activate -> delete old caches by version
  fetch    -> serve from cache, then update in the background

Angular service worker
  npx ng add @angular/pwa
  ngsw-config.json:
  {
    "index": "/index.html",
    "assetGroups": [
      {
        "name": "app",
        "installMode": "prefetch",
        "resources": { "files": ["/favicon.ico", "/*.css", "/*.js"] }
      }
    ],
    "navigationRequestStrategy": "performance",
    "navigationUrls": ["/**", "!/**/*.*", "!/**/*__*", "!/**/*__*/**"]
  }

The failure that bites everyone
  index.html is cached, but a lazily loaded chunk from the new deployment has
  not been fetched yet and the old one has been evicted. The browser gets a
  404 for the chunk hash that index.html asked for.

  Fix: version the cache name, delete old caches on activate, and do not cache
  hashed chunk requests with a cache-first strategy - let them go to the
  network, the browser HTTP cache is usually enough.

Is it worth it here?
  For a public app with returning users, yes. For an internal app that deploys
  weekly to a few hundred people, the complexity is probably not paying for
  itself - the browser HTTP cache already covers most of the repeat-visit case.`,explanation:`Naming the version-mismatch failure, cache versioning and cleanup on activate,
and being willing to say the service worker is not worth it for your app.`}]},{id:`performance-16`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,question:`How do fonts and images affect performance, and how do you load them well?`,answer:`Both affect Core Web Vitals in specific ways, which is what makes this a
performance question rather than a styling one. Fonts: a late-arriving web font
causes a flash of invisible text and then a layout shift as the real font replaces
the fallback, so the fix is a size-matched fallback face with metric overrides on
the fallback, not on the web font itself. Images: an image without intrinsic
dimensions causes layout shift when it loads, and a lazy-loaded LCP element is a
direct LCP regression. The practical skills are sizing attributes, responsive
sources, fetchpriority on the LCP image, and preloading exactly one LCP image rather
than several candidates.`,examples:[{title:`Fonts and images, tied to CLS and LCP`,code:`Fonts - metric overrides belong on the fallback face
  /* the actual web font */
  @font-face {
    font-family: 'Inter';
    src: url('/inter.woff2') format('woff2');
    font-display: swap;
  }

  /* a fallback face adjusted to match Inter's metrics */
  @font-face {
    font-family: 'Inter Fallback';
    src: local('Arial');
    size-adjust: 104%;        /* match the fallback's width to Inter's */
    ascent-override: 90%;
    descent-override: 22%;
    line-gap-override: 0%;
  }

  body {
    font-family: 'Inter', 'Inter Fallback', sans-serif;
  }

  Why here and not on Inter: size-adjust and ascent-override tell the browser how
  to stretch the FALLBACK to look like the real font. Putting them on Inter itself is
  a no-op - Inter does not need adjusting to match Inter.

Images - the two failure modes
  <img
    ngSrc="/hero.webp"
    width="1200" height="675"       <!-- required unless using fill -->
    priority                          <!-- not lazy, and sets fetchpriority -->
    sizes="(max-width: 640px) 100vw, 50vw"
    alt="...">
  <img ngSrc="/below-fold.webp" loading="lazy" ... >

  The mistake I have seen most:
  <img ngSrc="/hero.webp" loading="lazy">
  Lazy-loading the LCP image delays LCP on purpose. Never lazy-load the LCP element.

  If you use fill, do not also set width and height - NgOptimizedImage throws at
  runtime if both are present, and the parent must be position: relative, fixed or
  absolute.

Preload exactly one candidate
  <link rel="preload" as="image" href="hero.webp" fetchpriority="high">
  Preloading three candidates because you were not sure which is LCP makes all three
  compete and helps none of them.`,explanation:`Putting metric overrides on the fallback face rather than the web font, and the
specific error of lazy-loading the LCP image, are the details that stand out.`}]},{id:`performance-17`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,question:`What is the difference between a dev build and a production build in Angular, and why does only one of them tell you about performance?`,answer:`Several switches are on in production, and being able to name what each changes is
the grade. Correct one common misconception first: AOT has been the default since
Angular 9, so both ng serve and ng build compile ahead of time, and JIT is
effectively only something you encounter in TestBed. What production actually
changes is minification and mangling, tree shaking, budget enforcement, font and
critical-CSS inlining, and output hashing. The practical point that matters: dev
builds enable extra runtime error checking that production strips, so a dev build is
both slower and a different program - which is why performance measured on ng serve
is meaningless.`,examples:[{title:`What each production switch changes`,code:`package.json / angular.json
  "configurations": {
    "production": {
      "optimization": {
        "scripts": true,          // minify + mangle
        "styles": { "minify": true, "inlineCritical": true },
        "fonts": true
      },
      "budgets": [
        { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
        { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" }
      ],
      "outputHashing": "all",
      "sourceMap": false
    }
  }

About AOT specifically
  "aot" defaults to true. It has done since Angular 9, so this is not a production-only
  switch. ng serve also compiles AOT. JIT survives in TestBed, which is why test
  environments can behave differently from a production build.

What production actually changes
  Minification   names mangled, whitespace removed
  Tree shaking   unused code removed, plus "sideEffects": false
  Budgets        CI fails if initial bundle exceeds a limit
  Critical CSS   inlined into index.html
  Output hashing index.html references main-ABC123.js so caches update
  Source maps    off by default in production

Run it and measure the right thing
  npx ng build --configuration production
  npx http-server dist/app/browser -p 8080 --proxy http://localhost:4200

  Then measure this, not ng serve.

  Dev builds add runtime checks that production strips - for example, some template
  diagnostics only run in development mode. The module graph served in development is
  not the graph that ships.`,explanation:`Correcting the AOT misconception - it is not a production switch and has been default
since v9 - and listing what production actually changes is the core of this answer.`}]},{id:`performance-18`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,question:`How would you set up bundle budgets, and what happens when one is exceeded?`,answer:`The mechanics are easy; the judgement is what is graded. Budgets are declared in
angular.json and enforced at build time - maximumWarning is advisory,
maximumError fails the build. The judgement is picking a number: it should come from
your actual current size plus a small allowance, not from a round number, and you
should cover both the initial bundle and individual lazy chunks, because a 400kb
route chunk fails on first navigation exactly as badly as a large initial bundle
does. The consequence to talk through is what happens when a PR exceeds it: whether
it blocks before merge, whether there is a waiver process, and who approves. A
budget that everyone routinely overrides is worse than no budget, because it is a
signal you have chosen to ignore.`,examples:[{title:`Declaring, enforcing, and the override problem`,code:`angular.json
  "configurations": {
    "production": {
      "budgets": [
        { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
        { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" },
        { "type": "bundle", "name": "admin", "maximumWarning": "300kB",
          "maximumError": "500kB" }
      ]
    }
  }

Available budget types
  initial            total size of the initial bundle
  bundle             a named bundle - requires an exact name, not a glob
  anyScript          any single script
  allScript          all scripts together
  any                any single asset
  all                everything
  anyComponentStyle  a single component stylesheet

Note the units: kB and MB, capital B. This is the same casing the CLI uses and it
is what the docs show - kb is not accepted.

Where the number comes from
  Not a round number someone liked. It is our current initial bundle plus about
  10%. Starting at exactly current size would block legitimate work; starting at a
  round 500kB when we are at 900kB is theatre.

Per-bundle budget matters too
  A 400kb lazy chunk fails on first navigation just as badly as a big initial
  bundle, and the initial budget will not catch it. That is what the bundle type with
  a name is for.

When a PR exceeds it
  maximumError fails the build, so the decision is made before merge rather than
  discovered in production.

  We require a waiver with a named reason and an owner to remove an existing budget
  temporarily. It happens maybe once a quarter.

  What I would not do: raise the budget silently in the same PR. That is how a budget
  stops meaning anything.

Failure mode to avoid
  Three waivers in a month and people stop reading the warnings. At that point the
  budget is decoration.`,explanation:`Justifying the number from real data, adding a per-bundle budget as well as initial,
using kB casing, and having an explicit waiver process rather than quietly raising
limits.`}]},{id:`performance-19`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,question:`What is SSR and hydration, in plain terms?`,answer:`SSR, or server-side rendering, means the server runs your Angular app and sends the browser a fully built HTML page, instead of an almost-empty page that only fills in once JavaScript has loaded. The user sees real content immediately, which is faster on slow connections and much better for search engines. Hydration is the next step. When the JavaScript finally arrives in the browser, Angular does not throw that HTML away and render everything again; it attaches to the HTML that is already there, wires up event listeners and makes the page interactive. Reusing the existing markup is the whole point, and it is what the word hydration means. Two things follow from that. First, the server and the browser must produce exactly the same markup, otherwise Angular reports a hydration mismatch. Second, SSR means you now need a Node server in production, and any code that touches window or document has to be guarded so it still runs on the server. That Node server is only the renderer, not a replacement for your backend: your real API (or database) is still there and still involved. The difference is where data is fetched - during the server render an injectable can call HttpClient and bake the result into the HTML, so the first paint already contains the data instead of an empty shell that fetches afterwards. From then on the browser talks to the same backend as before. It is worth it for public, content-heavy pages and SEO; for a dashboard behind a login, plain client-side rendering with good caching is often the better trade.`,examples:[{title:`What actually happens, step by step`,code:`Without SSR
  Browser downloads a nearly empty index.html -> downloads and runs JS ->
  renders the app -> user finally sees content. First paint waits on JS.

With SSR + hydration
  1. Server renders the components to an HTML string and sends it. It may call
     the real API or database here, so the HTML already carries the data.
  2. Browser paints that HTML right away, before any JS runs.
  3. JS loads; Angular hydrates: it reuses the existing DOM instead of
     recreating it, attaches event listeners and becomes interactive.

So SSR fixes what the user sees first; hydration fixes when it becomes usable.`,explanation:`SSR is about the first paint; hydration is about turning that server-rendered HTML into a live, interactive app without rebuilding the DOM.`},{title:`Keeping server-only code safe`,code:`import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export class Analytics {
  private platformId = inject(PLATFORM_ID);

  track(event: string) {
    // window/document do not exist on the server, so guard them
    if (isPlatformBrowser(this.platformId)) {
      window.navigator.sendBeacon('/collect', event);
    }
  }
}`,explanation:`Code that runs during SSR has no DOM, so anything touching window or document is wrapped in a platform check to avoid breaking the server render.`}]},{id:`performance-20`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isMarked:!1,question:`What does a Performance API measurement look like in practice, and how would you trust it?`,answer:`Trust is the graded word. In-app marks are useful for route transitions and slow
interactions, but they only measure your application - not the network, not the
browser parse, and nothing that happens before your code runs, which is where
first-load problems live. So pair them: browser-native measurement for what the user
experiences, application marks for attribution within it. Use performance.mark and
performance.measure from the browser Performance API, not perf_hooks, which is a Node
module and will not resolve in a browser bundle. Also be honest about measurement
overhead and about the difference between a synthetic run and a real user.`,examples:[{title:`Two layers of measurement`,code:`In-app marks, for attribution
  // performance.mark / performance.measure come from the browser Performance API.
  // Do NOT import from 'perf_hooks' - that is a Node module and will not
  // resolve in a browser bundle.

  // route transitions - the app is already loaded here
  performance.mark('route:start');
  const data = await fetchOrders();
  performance.mark('route:data');
  performance.mark('route:end');
  performance.measure('orders:load', 'route:start', 'route:end');

  // attributing a slow interaction to a handler
  @HostListener('click', ['$event'])
  onClick(ev: Event): void {
    performance.mark('click:start');
    this.recalculate();                       // 180ms
    performance.mark('click:end');
    performance.measure('click', 'click:start', 'click:end');
  }

Browser-native, for what the user experiences
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    console.log('LCP', entries.at(-1));
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  buffered: true matters, or you miss LCP entries that fired before you observed.

Why both
  In-app marks cannot see the 700ms before main.ts executed.
  Lighthouse cannot tell you which of your three chart initialisers is slow.
  You need both to attribute a symptom to a cause.

Honesty about trust
  - mark() calls cost microseconds individually; do not put them in a loop
  - a single run on a developer laptop is not evidence - I would want field data, or
    at least 30 runs on a mid-range device`,explanation:`Using performance.mark rather than Node's perf_hooks, stating what in-app marks
cannot see, and using buffered observers is what makes measurement trustworthy.`}]},{id:`performance-21`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`Customers complain the app takes around 8 seconds to load. Walk me through your diagnosis and fix.`,answer:`Measure the phases with Lighthouse/WebPageTest: is it bundle size, blocking JS, API latency or render? Shrink the bundle with lazy loading of routes and @defer blocks for non-critical widgets, enable build-time optimizations, compress images (NgOptimizedImage), and consider SSR with hydration or prerendering for the first paint. Verify each change against Core Web Vitals instead of guessing.`,examples:[{title:`Route-level lazy loading`,code:`{ path: 'reports', loadComponent: () => import('./reports/reports').then(c => c.Reports) }`,explanation:`Each route ships its own chunk, so first paint only downloads what the landing page needs.`},{title:`Defer the heavy widget`,code:`<app-dashboard>
  @defer (on viewport) { <app-revenue-chart /> } @placeholder { <app-skeleton /> }
</app-dashboard>`,explanation:`@defer splits a component out of the initial bundle and loads it when it becomes visible or on interaction.`}]},{id:`performance-22`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`A page with very large forms and dropdown lists feels sluggish. What do you optimise, and in what order?`,answer:`Work top-down on cost per change-detection cycle, because that is what sluggishness usually means. First, make sure components are OnPush - with default change detection every keypress re-evaluates every template on the page. Second, kill hidden costs inside those templates: getters, function calls and pipes re-run on every check, so precompute into fields or signals (or make a pipe pure). Third, do not ship data you do not need: a 10k-row dropdown should be a remote search-ahead or virtualized list, not 10k options in the initial payload. Fourth, images go through NgOptimizedImage. Finally, if the remaining work is genuinely CPU-bound (sorting/filtering 100k rows), move it off the main thread instead of micro-optimising templates.`,examples:[{title:`OnPush + stable identity in the list`,code:`// GOOD - derived once, memoised until orders() changes
@Component({ changeDetection: ChangeDetectionStrategy.OnPush, /* ... */ })
export class OrderForm {
  orders = input.required<Order[]>();

  readonly total = computed(() =>
    this.orders().reduce((s, o) => s + o.amount, 0),
  );
}

// BAD - a getter is re-evaluated by the template on every change detection
// pass, so this recalculates for the whole array each time anything changes
@Component({ /* ... */ })
export class OrderFormWithGetter {
  orders = input.required<Order[]>();

  get total() {
    return this.orders().reduce((s, o) => s + o.amount, 0);
  }
}`,explanation:`Getters in templates are a classic hidden cost; a computed caches by dependency.`},{title:`Dropdown: search-ahead instead of shipping 10k options`,code:`// type-ahead queries the server, keeps the list tiny
search = new FormControl('');

readonly options = toSignal(
  this.search.valueChanges.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(q => this.api.findCustomers(q)),
  ),
  { initialValue: [] as Customer[] },
);`,explanation:`Only the visible matches exist in the DOM, so the form has a small working set.`},{title:`Images through NgOptimizedImage`,code:`<!-- with explicit dimensions: responsive and layout-stable -->
<img ngSrc="/hero.webp"
     width="1200" height="600"
     priority
     sizes="(max-width: 640px) 100vw, 50vw"
     alt="" />

<!-- fill mode: no width/height, parent must be positioned -->
<div style="position: relative; aspect-ratio: 2 / 1;">
  <img ngSrc="/hero.webp" fill priority alt="" />
</div>

<!-- placeholder: valueless attribute, needs an image loader with resizing -->
<img ngSrc="/thumb.webp" width="400" height="200" placeholder alt="" />

<!-- placeholder: or supply a URL or data URL yourself -->
<img ngSrc="/thumb.webp" width="400" height="200"
     placeholder="/thumb-placeholder.webp" alt="" />`,explanation:`NgOptimizedImage generates srcset, defers loading off the critical path, and guards against layout shift. Two rules catch people out: you must give width and height unless you use fill, and you must not give both - using fill with width or height throws a RuntimeError at runtime. A missing sizes attribute logs a warning in the dev server (it warns rather than fails the build), and placeholder is either a valueless attribute or a URL - the string blur is not valid on its own.`}]},{id:`performance-23`,category:`performance`,difficulty:`advanced`,scenarioBased:!0,isMarked:!1,question:`A Material table with 500+ rows plus filtering and sorting is slow. How do you diagnose and fix it?`,answer:`Measure first: open DevTools Performance while interacting, and look at how much time is script versus rendering, and how many DOM nodes exist. The usual causes are too many rows in the DOM, a filter or sort running on every change-detection cycle, and identity churn destroying and rebuilding rows. The fixes map one to one: render only visible rows with CdkVirtualScrollViewport and cdkVirtualFor, keep components OnPush, treat filter and sort as a debounced stream with switchMap so rapid typing collapses into one operation, give rows a stable trackBy so unchanged nodes are reused, and cache the comparator instead of allocating one per cycle. Past roughly 10k rows, filter and sort on the server and virtualize the results.`,examples:[{title:`Virtual scroll - only the visible rows exist`,code:`<cdk-virtual-scroll-viewport itemSize="48" class="h-96">
  <div *cdkVirtualFor="let row of rows(); trackBy: trackId"
       class="row">
    {{ row.name }} \u2014 {{ row.amount }}
  </div>
</cdk-virtual-scroll-viewport>

trackId = (_: number, r: Row) => r.id;   // stable identity`,explanation:`500 rows become ~10 DOM nodes; trackBy lets Angular reuse nodes across sort and filter.`},{title:`Filter and sort as a debounced stream`,code:`readonly query = new FormControl('');
readonly sort = signal<Sort>('name');

readonly rows = toSignal(
  combineLatest([
    this.query.valueChanges.pipe(startWith(''), debounceTime(200), distinctUntilChanged()),
    this.sort.asObservable(),
  ]).pipe(switchMap(([q, s]) => this.api.search({ q, sort: s }))),
  { initialValue: [] as Row[] },
);

readonly compare = computed(() => this.comparators[this.sort()]);  // cached, not re-created`,explanation:`One request per settled query instead of one per keystroke; the comparator is computed once per sort change.`}]},{id:`performance-24`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What caching strategies do you use in a front-end application?`,answer:`There are several layers, and a good answer names which one solves which problem. The browser HTTP cache (Cache-Control: max-age, immutable, plus ETag revalidation) and a CDN edge cache are for static assets and GET responses you control; content-hashed filenames (main.abc123.js) let you cache them forever and bust the cache on deploy. A service worker (Angular's built-in ngsw or Workbox) adds a layer independent of the network with runtime strategies: cache-first for static assets, network-first for fresh data, and stale-while-revalidate when you want a fast render plus a background refresh. Inside the running app you cache in memory: an HTTP interceptor or a shareReplay'd observable deduplicates and shares one request across components, and a signals store (or NgRx entity) keeps already-loaded data so a route transition does not refetch. Persistence (localStorage, IndexedDB) survives reloads for things like a user profile or a feature list. The hard part is invalidation, not storage: version your cache keys, prefer stale-while-revalidate over a long max-age for data, never cache authenticated responses in shared caches, and always keep a path to force a refresh. Without an invalidation story a cache just makes bugs look intermittent.`,examples:[{title:`HTTP cache headers: immutable assets vs revalidated data`,code:`// Build output: content-hashed name -> cache forever, never revalidate
// Cache-Control: public, max-age=31536000, immutable

// API GET that must stay fresh: no freshness, revalidate every use
// Cache-Control: no-cache
// ETag: "v42"
// -> browser sends If-None-Match: "v42"; a 304 keeps the body, no transfer`,explanation:`Hashed assets can be immutable because the name changes with the content; data uses ETag so an unchanged response comes back as a 304 instead of a full body.`},{title:`Share one in-flight request across components (shareReplay)`,code:`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private http = inject(HttpClient);
  private cache$?: Observable<User[]>;

  getUsers(): Observable<User[]> {
    // refCount: false keeps the last result even when nothing is subscribed
    this.cache$ ??= this.http
      .get<User[]>('/api/users')
      .pipe(shareReplay({ bufferSize: 1, refCount: false }));
    return this.cache$;
  }
}`,explanation:`Every caller after the first subscribes to the same underlying request instead of firing another one; swap in a signal store or Workbox runtime caching for the persisted layer.`}]},{id:`performance-25`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What do you actually change to make an Angular application faster?`,answer:`I start by naming where the time goes, because every bottleneck is one of five things - network, main-thread work, rendering volume, bundle size or memory - and each has a different fix. Network: cut redundant requests before anything else, by debouncing input, dropping duplicates and only asking for what the screen shows; a 900ms API call dwarfs any template optimisation. Main thread: run OnPush everywhere, keep template expressions trivial by moving work into computed signals, and avoid deep change-detection passes. Rendering volume: render only what is on screen with pagination or virtual scrolling, and let track() in @for reuse DOM instead of rebuilding it. Bundle: lazy-load features with loadComponent, audit what the initial chunk actually contains, and drop dependencies that tree shaking cannot remove. Then the hygiene items: compress images and fonts, measure with Lighthouse and Angular DevTools rather than guessing, and verify before and after with the same profile. Most wins come from removing work, not from making work faster - and the last 10 per cent is rarely worth the readability it costs.`,examples:[{title:`The search pipeline that removes most wasted work`,code:`this.query.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((q) => this.api.search(q ?? '')),
  takeUntilDestroyed(),
).subscribe((results) => this.results.set(results));`,explanation:`One request per pause instead of one per keystroke, no request for a repeat query, stale responses cancelled, and nothing left subscribed after destroy. Four lines that usually beat any micro-optimisation.`}],tags:[`MS`]},{id:`performance-26`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How would you put together a performance report for an application?`,answer:`A report answers one question - is it fast, for whom, and what is the next thing to fix - so I structure it as baseline, evidence, prioritised findings, then retest. Baseline: Core Web Vitals from real users (LCP for first paint, INP for responsiveness, CLS for stability) rather than only lab numbers, plus the environment they came from. Evidence: Lighthouse for the lab run, WebPageTest for filmstrips and connection conditions, Chrome DevTools and Angular DevTools for long tasks and expensive change detection, and bundle analysis for who is owning each kilobyte. Findings are written as a list ordered by impact against effort, each with the measurement, the suspected cause, the fix, an owner and how we will know it worked - for example the reports route ships a 410 kB chunk because a CSV exporter is bundled into it, fixed by a dynamic import, verified by re-running the build. Numbers are compared before and after under the same conditions, because a green Lighthouse score on office wifi tells you almost nothing about a user on a train. Budgets then keep it honest: bundle budgets fail the build, so the report becomes a threshold rather than a slide.`,examples:[{title:`What a finding looks like`,code:`Finding: first load is 8.1s on Slow 4G (LCP 5.4s, target <= 2.5s)
Cause:   640 kB of initial JS, 210 kB of it unused on the landing route
Fix:     lazy-load the reports + admin features, drop the moment.js locale bundle
Owner:   frontend
Verify:  ng build budget pass, Lighthouse CI run on the PR, RUM LCP for 7 days`,explanation:`Every line is checkable: a number someone can reproduce, a cause someone can confirm, and a verification that does not rely on feeling faster.`}],tags:[`MS`]}],rxjs:[{id:`rxjs-1`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is an Observable in RxJS and how is it different from a Promise?`,answer:`An Observable is lazy, cold by default, and can emit multiple values over time; it supports cancellation via unsubscribe() and is composable with operators. A Promise is eager, emits at most one value, is not cancellable, and is not pipeable. For example: new Observable(sub => { interval(1000).subscribe(n => sub.next(n)); return () => clear(); }) emits many values and can be torn down, while fetch() returns a single-value Promise. A Promise is either pending, fulfilled or rejected and settles exactly once, and async/await is sugar over its then() chain; an Observable may emit many times, may be cancelled, and is pipeable into every operator RxJS has. Reach for a Promise when the result is a single event you will wait for, and for an Observable when it is a stream you may need to cancel, throttle or combine - Angular's HttpClient returns Observables precisely so an unsubscribe can cancel an in-flight request.`,examples:[{title:`Observable vs Promise`,code:`// Observable (multiple values, cancellable)
import { Observable, interval } from 'rxjs';
const obs = new Observable(sub => {
  const id = setInterval(() => sub.next(Date.now()), 1000);
  return () => clearInterval(id);
});
const sub = obs.subscribe(v => console.log('tick', v));
setTimeout(() => sub.unsubscribe(), 2500);

// Promise (single value)
fetch('/api').then(r => r.json()).then(console.log);`,explanation:`Observable emits over time and teardown is explicit; Promise settles once.`}],tags:[`MS`]},{id:`rxjs-2`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between cold and hot Observables?`,answer:`A cold Observable produces its values inside the subscription (each subscriber gets its own producer/sequence) — e.g., HTTP calls via HttpClient are cold. A hot Observable shares a single producer among subscribers (late subscribers may miss values) — e.g., a DOM event or a Subject/ConnectableObservable. You can convert cold to hot using share(), shareReplay(), publish()/connect(), or multicast().`,examples:[{title:`Cold vs hot`,code:`// Cold: each subscriber triggers HTTP
http.get('/api').subscribe(...);

// Hot: shared via shareReplay
const shared$ = http.get('/api').pipe(shareReplay({bufferSize: 1}));
shared$.subscribe(...); shared$.subscribe(...);`,explanation:`Cold = per-subscriber producer; hot = shared producer.`}]},{id:`rxjs-3`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a Subject, how does it differ from a plain Observable, and when would you use BehaviorSubject, ReplaySubject or AsyncSubject?`,answer:`A plain Observable is unicast: each subscriber triggers its own independent execution of the producer, so it cannot share one stream between consumers. A Subject is a special type of Observable that is also an Observer: values are pushed into it with next(), and it multicasts that same stream to every subscriber at once, which is how a single data source is shared across an app. Subject: multicast, no initial value, subscribers only get values emitted after subscribing (useful for event buses). BehaviorSubject: requires an initial value, emits the current value to new subscribers (useful for shared auth/user state). ReplaySubject(bufferSize): replays a fixed number of past values to new subscribers (useful for caching chat history). AsyncSubject: emits only the last value and only on completion (useful for one-shot async results).`,examples:[{title:`BehaviorSubject`,code:`import { BehaviorSubject } from 'rxjs';
const user$ = new BehaviorSubject<User|null>(null);
user$.next(u); console.log(user$.value); // current value`,explanation:`BehaviorSubject emits current value to new subscribers.`}],tags:[`MS`]},{id:`rxjs-4`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`When should you use combineLatest, forkJoin, withLatestFrom, and merge?`,answer:`combineLatest: emits when any source emits, after all have emitted at least once — combine related live values (filters + list). forkJoin: emits once, only after all complete with their last value — parallel one-shot requests that all must finish. withLatestFrom: emits only when the source emits, combining the latest values from others (primary stream drives). merge: concurrently emits values from multiple observables as they arrive (union of event streams).`,examples:[{title:`combineLatest vs forkJoin`,code:`import { combineLatest, forkJoin, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

combineLatest([interval(10).pipe(take(2)), of('x')]).subscribe(v => console.log('combineLatest', v));
// emits after both have emitted at least once

forkJoin([of(1), of(2)]).subscribe(v => console.log('forkJoin', v));
// emits last values when both complete`,explanation:`combineLatest stays live; forkJoin is one-shot on completion.`},{title:`withLatestFrom and merge`,code:`import { merge, fromEvent, of } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';

// withLatestFrom: the source drives; sample the latest of the others
fromEvent(button, 'click').pipe(
  withLatestFrom(user$, filters$),
  map(([, user, filters]) => ({ user, filters })), // first value is the source, ignored
).subscribe(load);

// merge: union of streams, values arrive as each emits, no combination
merge(saveClicks$, keyboardSaves$).subscribe(save);`,explanation:`withLatestFrom emits only when the source emits (the others must have emitted at least once); merge just forwards everything as it arrives.`}]},{id:`rxjs-5`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is switchMap, mergeMap, concatMap, and exhaustMap? Give an example for each.`,answer:`switchMap: cancels the previous inner observable on a new outer emission — typeahead/search (cancel stale requests). mergeMap (flatMap): subscribes to all inner observables in parallel, emits results as they come — independent parallel calls. concatMap: subscribes sequentially, waits for current inner to complete before next — queued operations (saving drafts in order). exhaustMap: ignores new outer emissions while the current inner is active — login/save button mash prevention.`,examples:[{title:`switchMap vs exhaustMap (search vs save)`,code:`import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, exhaustMap } from 'rxjs/operators';

// Search: switchMap cancels stale
fromEvent(input, 'input').pipe(
  debounceTime(300), distinctUntilChanged(),
  switchMap(q => searchApi(q))
).subscribe(r => results = r);

// Save: exhaustMap ignores extra clicks
fromEvent(saveBtn, 'click').pipe(
  exhaustMap(() => saveApi())
).subscribe(res => showToast(res));`,explanation:`switchMap cancels previous inner on new outer; exhaustMap drops outer while inner is active.`},{title:`Further reading`,code:`https://blog.angular-university.io/rxjs-higher-order-mapping/`,url:`https://blog.angular-university.io/rxjs-higher-order-mapping/`,explanation:`A detailed walkthrough of the higher-order mapping operators and when each one is the right choice.`}],tags:[`MS`]},{id:`rxjs-6`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the purpose of share(), shareReplay(), and refCount()?`,answer:`share() turns a cold observable hot and replays the source among subscribers; refCount() keeps it alive only while there is >=1 subscriber (unsubscribes upstream when zero). shareReplay({ bufferSize: 1, refCount: true/false }) caches recent values for late subscribers and controls whether it stays alive when no subscribers exist — often used to cache HTTP responses. Use refCount carefully to avoid re-triggering a cold source unexpectedly.`,examples:[{title:`shareReplay`,code:`data$ = this.http.get<Data>('/api').pipe(
  shareReplay({ bufferSize: 1, refCount: true })
);`,explanation:`Caches last emission for late subscribers; refCount controls lifecycle.`}]},{id:`rxjs-7`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you prevent memory leaks when subscribing to Observables?`,answer:`Prefer the async pipe in templates (auto-unsubscribes on destroy). For imperative code, unsubscribe() in ngOnDestroy, or use takeUntil() with a destroy Subject, takeUntilDestroyed() (Angular 16+), first(), take(1), or finalize(). Also avoid long-lived global subscriptions without cleanup. For toSignal(), subscriptions are tied to the injection context (DestroyRef) automatically.`,examples:[{title:`takeUntilDestroyed`,code:`import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
fromEvent(window, 'resize').pipe(takeUntilDestroyed()).subscribe(...);`,explanation:`Auto-cleans up when injection context is destroyed.`}]},{id:`rxjs-8`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between map, tap, switchMap and exhaustMap in terms of what they return?`,answer:`map: transforms values, returns the same stream type (value -> value). tap (do): side effect only, returns the same observable unchanged (use for logging). switchMap: maps outer value to an inner observable and flattens it, emitting values from the latest inner (projects to Observable). exhaustMap: maps to an inner observable but ignores outer emissions while inner is active (projects to Observable).`,examples:[{title:`tap vs map`,code:`source$.pipe(
  tap(v => console.log('side effect', v)),
  map(v => v * 2)
).subscribe(console.log);`,explanation:`tap does not transform values; map projects them.`}]},{id:`rxjs-9`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Give a small example of debouncing a search input with RxJS.`,answer:`In a component: fromEvent(this.input.nativeElement, 'input').pipe(debounceTime(300), distinctUntilChanged(), switchMap(q => this.service.search(q)), takeUntilDestroyed()).subscribe(results => this.results.set(results)). This waits 300ms after typing stops, skips duplicates, cancels stale requests on new input, and cleans up on destroy.`,examples:[{title:`Search debounce`,code:`fromEvent(inputEl, 'input').pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((e: any) => search((e.target as HTMLInputElement).value))
).subscribe(results => this.results = results);`,explanation:`Debounce, ignore duplicates, cancel stale requests.`}],tags:[`MS`]},{id:`rxjs-10`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is error handling in RxJS and when would you use catchError, retry, and retry with a delay?`,answer:`catchError: catches an error in the stream and returns a replacement Observable (a fallback value, EMPTY, or a retry attempt) so the stream can carry on. retry(n): re-subscribes immediately up to n times - fine for a single transient blip. retry({ delay }): the modern form, where delay can be a number, a function of the error and retry index (that is how you do exponential backoff), or an observable such as timer(1000). Note that retryWhen() is deprecated in RxJS 7 - reach for retry({ delay }) instead. Handle errors close to where they can be meaningfully recovered, and remember that catchError replaces the stream, so anything downstream of it will not see the failure unless you re-throw. In a real service I classify before I rethrow: status 0 is network or CORS, 401 means re-authenticate, 403 means authenticated but not allowed, 404 is a contract problem and 5xx is upstream, and each deserves a different log or reaction; loading state is cleared in finalize() so the screen cannot end up stuck half-finished. The rule to remember is that catchError must return an Observable - hand back fallback data such as of([]) when the view can degrade to an empty state, or throwError(() => error) when the caller has to decide.`,examples:[{title:`retry with backoff`,code:`source$.pipe(
  retry({
    count: 3,
    delay: (error, retryCount) =>
      timer(2 ** retryCount * 1000),        // 2s, 4s, 8s
  }),
)
.subscribe(...);`,explanation:`Custom retry with exponential backoff before failing. retryWhen(errors => errors.pipe(delay(...))) is the deprecated equivalent.`}],tags:[`MS`]},{id:`rxjs-11`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What do debounceTime and distinctUntilChanged each do, and why would you use them together?`,answer:`They solve different problems, which is why they are complementary rather than interchangeable. debounceTime(duration) waits for silence: it emits the most recent value only after no new value has arrived for that period, so a user typing 'angular' in half a second produces one emission instead of six. throttleTime(duration) is the opposite temperament - it emits immediately, then suppresses everything for the interval, which suits high-frequency sources where the latest value matters less than a steady one. distinctUntilChanged() does no timing at all: it compares each emission with the previous one and drops the repeat, with a custom comparator available when equality is not what you mean. In a search box the pair covers two different kinds of waste: debounceTime stops the request per keystroke, and distinctUntilChanged stops a request when the query came back to a value you already asked for - typing, pausing, deleting a trailing space and retyping it should not cost a second round trip. Then switchMap does the third job, cancelling the response you no longer want. Chain them in that order - quieten the stream, drop repeats, then flatten with cancellation - because debounceTime after switchMap would still leave stale responses free to land.`,examples:[{title:`The standard search chain, with what each stage buys`,code:`this.query.valueChanges.pipe(
  debounceTime(300),           // 1. one emission per typing pause
  distinctUntilChanged(),      // 2. no request for a query already sent
  switchMap((q) => this.api.search(q ?? '')), // 3. latest wins, stale cancelled
  takeUntilDestroyed(),
).subscribe((results) => this.results.set(results));`,explanation:`Three operators, three costs removed: request volume, duplicate requests, and wasted responses. None of them can do the other two jobs.`}],tags:[`MS`]}],signals:[{id:`signals-1`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a Signal and how is it different from an RxJS Observable?`,answer:`A Signal is a synchronous, granular reactive primitive: a value you read by calling it (count()) and update with set/update, that automatically notifies consumers that depend on it. An Observable is an asynchronous, lazy stream you must subscribe to, with operators for retry, debounce and merging. Signals are ideal for component-local and synchronous UI state; Observables stay the tool for async event streams, HTTP and WebSockets. You bridge the two with toObservable() and toSignal().`,examples:[{title:`signal() basic read/write`,code:`import { signal, computed } from '@angular/core';

const count = signal(0);
console.log(count());        // read
count.set(5);                // write
count.update(c => c + 1);    // update

const doubled = computed(() => count() * 2);
console.log(doubled());`,explanation:`Read with () and update via set/update; computed derives reactively.`}]},{id:`signals-2`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`When would you use signals instead of observables, and can signals replace RxJS completely?`,answer:`Use signals when the state is synchronous UI state - selection, toggles, count, a view model - where you want direct value access without the async pipe or subscriptions. Do not try to replace RxJS for genuinely async work like HTTP retries, websockets, or streams that need cancellation and composition. In an interview, the framing is: streams feed signals, signals feed the template - the correct architecture composes both rather than picking one.`,examples:[{title:`When to use signals`,code:`const isOpen = signal(false); // UI toggle
const total = computed(() => price() * qty()); // derived
// Keep async streams in RxJS: search$ = input$.pipe(debounceTime(300), switchMap(...))`,explanation:`Synchronous UI state → signals; async/event streams → RxJS.`}]},{id:`signals-3`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What are computed signals and effects, and when do you use each?`,answer:`computed() creates a read-only derived signal that lazily recalculates only when its dependencies change - use it for anything you can derive (total = price() * qty()). effect() runs a side effect whenever the signals it reads change - use it only when you have no reactive alternative: syncing with a non-reactive library, analytics, DOM APIs. It should never be your first choice because it runs as a scheduled pass after change detection rather than at the point of the write, it runs at least once on creation, and it re-runs on every change.`,examples:[{title:`computed vs effect`,code:`const items = signal([1,2,3]);
const count = computed(() => items().length); // derived, no side effect

effect(() => {
  document.title = \`Count: \${count()}\`; // side effect only when necessary
});`,explanation:`computed is read-only derived; effect is for external side effects.`}]},{id:`signals-4`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the diamond problem in Observables, and why doesn't it occur with signals?`,answer:`When two or more derived streams share a common source and are combined, RxJS can glitch - combineLatest emitting multiple times for what is logically one update. Signals are synchronous and batched: if you update two source signals, a computed or effect depending on both recalculates once per batch, not per dependency. That single recalc per write cycle is why signal graphs avoid the duplicate-emission problem.`,examples:[{title:`Batching intuition`,code:`const a = signal(0), b = signal(0);
const sum = computed(() => a() + b());

effect(() => console.log(sum())); // runs once if a.set(1); b.set(2) batched`,explanation:`Synchronous updates batch → computed/effect run once per batch.`}]},{id:`signals-5`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`When do you need untracked() inside an effect?`,answer:`untracked() removes dependency tracking inside an effect. You need it when an effect reads signals it should not subscribe to - for example reading a value to send to a server or to focus an element, where you do not want the effect to re-run when that value changes. A common failure is an effect that reads several signals and also writes to one, so writes would retrigger it forever; wrapping the write in untracked() breaks the loop.`,examples:[{title:`untracked() to avoid loops`,code:`import { effect, signal, untracked } from '@angular/core';

const enabled = signal(false);
const log = signal('');

effect(() => {
  const e = enabled();
  untracked(() => {
    // do not track 'log' here
    log.set(e ? 'on' : 'off');
  });
});`,explanation:`Prevents the effect from re-running when log changes.`}]},{id:`signals-6`,category:`signals`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`How would you plan a migration from an Angular 12 app that uses RxJS to Signals?`,answer:`Plan incrementally instead of a big-bang rewrite. Start with component-local UI state and convert @Input/@Output to signal inputs (input()) so computed() can replace ngOnChanges. Then convert simple BehaviorSubject state in services to signal()/state, leaving HTTP and async pipelines on RxJS. Use the dev tools, keep the graph acyclic (never effect + set()), and rely on the signal-input-migration schematic for automation before touching complex features.`,examples:[{title:`ngOnChanges -> computed (the mechanical swap)`,code:`// BEFORE: derive in a lifecycle hook
@Input() price!: number;
@Input() qty!: number;
total = 0;

ngOnChanges() {
  if (this.price !== undefined && this.qty !== undefined) {
    this.total = this.price * this.qty; // manual recompute, runs on every input set
  }
}

// AFTER: derive, don't recompute
price = input(0);
qty = input(0);
total = computed(() => this.price() * this.qty());`,explanation:`computed replaces ngOnChanges entirely: no manual flag, no stale branch when only one input is set.`},{title:`BehaviourSubject -> signal in a service`,code:`// BEFORE
@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly user$ = new BehaviorSubject<User | null>(null);
  readonly user$ = this.user$.asObservable();
}

// AFTER
@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();
  readonly isAdmin = computed(() => this.user()?.role === 'admin');
}`,explanation:`Derived flags become computeds; consumers read store.user() directly instead of the async pipe.`},{title:`Keep RxJS for async, feed it into signals`,code:`private readonly http = inject(HttpClient);

readonly user = toSignal(
  this.http.get<User>('/api/me').pipe(catchError(() => of(null))),
  { initialValue: null },
);`,explanation:`The request stays an observable; only the view-facing state becomes a signal.`}]},{id:`signals-7`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Are NgOnInit and ngOnChanges still needed in a fully signal-based application?`,answer:`Largely no. ngOnChanges is replaced by signal inputs (input()) combined with computed() - derived values recalculate reactively instead of in a hook. NgOnInit mostly becomes unnecessary since you can read signals and start effects inline; data fetching moves into resource()/rxResource(). The lifecycle hooks still exist and remain useful for view concerns like afterNextRender, but the signal-based APIs remove most of the boilerplate they forced.`,examples:[{title:`Lifecycle shift`,code:`constructor() {
  effect(() => {
    // scheduled after change detection, not synchronously here
    console.log(this.items());
  });
}`,explanation:`Many init cases move to inline reads/effects instead of NgOnInit.`}]},{id:`signals-8`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is linkedSignal, and why is calling set() inside an effect() considered an anti-pattern?`,answer:`linkedSignal creates a writable signal that is linked to a source signal and resets to the source value when the source changes - ideal for a filter dropdown whose selection must reset when the underlying list changes. Writing signal.set() inside an effect() to do the same thing is an anti-pattern because it writes a signal being read by the effect, creating a feedback loop; Angular warns about it in dev mode. Use linkedSignal when the derived value must be writable, and computed() when it must not.`,examples:[{title:`Overload 1 - source only (resets to the derived value)`,code:`import { signal, linkedSignal } from '@angular/core';

const options = signal(['html', 'css', 'angular']);

// picks options()[0] now, and re-picks it whenever options changes
const selected = linkedSignal(() => options()[0]);

selected.set('css'); // user picks css
options.set(['misc', 'signals']);
selected();        // 'misc' - reset because the source changed`,explanation:`With no computation, the linked value resets to the source's current derived value.`},{title:`Overload 2 - source + computation (recompute on source change, keep local edits)`,code:`const options = signal(['html', 'css', 'angular']);

// recompute from the source, but only when the source itself changes -
// unrelated re-renders keep the user's own selection
const selected = linkedSignal({
  source: options,
  computation: (opts, previous) => previous?.value ?? opts[0],
});

selected.set('css'); // local edit sticks
selected();           // 'css' (previous wins)
options.set(['misc']);
selected();           // 'misc' (source changed -> recompute)`,explanation:`With a computation you control the reset rule - here 'keep previous unless the source really changed'.`},{title:`The anti-pattern this replaces`,code:`// DON'T - writing a signal inside an effect that reads it
general.set('html');
effect(() => {
  const list = options();
  general.set(list[0]); // reads+writes -> loop risk, Angular warns in dev
});`,explanation:`linkedSignal expresses 'derived but writable' declaratively, with no feedback loop.`}]},{id:`signals-9`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`How can you replace BehaviorSubject and Subject with signals?`,answer:`A BehaviorSubject is really two things: it always holds a current value, and it notifies subscribers when that value changes. signal() covers exactly that: signal(0) has an initial value, you read it with count(), and you change it with set() or update(). Because signals are pull-based and synchronous, a template reads them directly, a computed() derives new values from them, and an effect() reacts to changes, all with no subscription to create and therefore no leak to manage. Where the mapping is not exact is a plain Subject, which is a stream of events with no current value. If the thing always has a latest value, use a signal; if it is a stream of many events or you need RxJS operators (debounce, buffer, retry), keep the Subject, because signals are state, not a stream, and cannot be composed with operators. You can also bridge the two: toSignal() wraps an Observable as a signal, and toObservable() turns a signal into an Observable. In practice an injectable service exposes a private writable signal and a public readonly signal, which replaces the BehaviorSubject-in-a-service pattern outright.`,examples:[{title:`BehaviorSubject vs signal`,code:`// Before: a value plus a subscription
private count$ = new BehaviorSubject(0);
readonly count$ = this.count$.asObservable();
increment() { this.count$.next(this.count$.value + 1); }
// consumer: this.count$.subscribe((c) => (this.c = c)); // must unsubscribe

// After: the value itself notifies
readonly count = signal(0);
readonly countView = this.count.asReadonly();
increment() { this.count.update((c) => c + 1); }
// template reads count() directly; no unsubscribe, OnPush works`,explanation:`The signal replaces the value-plus-notification pair; the readonly view replaces asObservable(), and derived values come from computed() instead of subscribe().`},{title:`Bridging with toSignal / toObservable`,code:`import { toSignal, toObservable } from '@angular/core/rxjs-interop';

// Observable -> signal (e.g. an existing stream or router events)
const nav = toSignal(
  router.events.pipe(filter((e) => e.type === NavigationEnd)),
  { initialValue: null },
);

// signal -> Observable when you still need operators
const search$ = toObservable(query).pipe(
  debounceTime(300),
  switchMap((q) => api.search(q)),
);`,explanation:`Use toSignal when a signal is the right consumer, and toObservable when you still need RxJS operators; the two models interoperate rather than compete.`}]},{id:`signals-10`,category:`signals`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,isNew:!0,question:`A filter in a toolbar and a list in a distant component must stay in sync. Show how signals replace the BehaviorSubject service.`,answer:`This is the classic shared-service problem: two components that are not parent and child need to read and write the same state. The old pattern put a BehaviorSubject in an injectable, called next() on change, and had every consumer subscribe and remember to unsubscribe. With signals the same service holds the state as a signal, exposes a readonly copy, and offers a method to change it; components read the signal in their template or derive from it with computed(), so there is no subscription and no initial-value plumbing. Because the signal is the single source of truth, the list can compute its filtered rows from it directly. If a consumer needs to run a side effect rather than derive a value, use an effect(); if it only displays or derives, computed() is enough. The one rule that carries over is ownership: one service owns the state, and the components do not hold their own copies of it.`,examples:[{title:`Before: BehaviorSubject service`,code:`@Injectable({ providedIn: 'root' })
export class FilterService {
  private filter$ = new BehaviorSubject('');
  readonly filter = this.filter$.asObservable();
  setFilter(v: string) { this.filter$.next(v); }
}

// toolbar: this.filter.setFilter(value);
// list: this.filter.filter.subscribe((v) => (this.v = v)); // + unsubscribe`,explanation:`Works, but every consumer subscribes, has to unsubscribe (often on destroy), and the initial value is implicit in the subject's constructor.`},{title:`After: one signal, read directly by both components`,code:`@Injectable({ providedIn: 'root' })
export class FilterService {
  private readonly _filter = signal('');
  readonly filter = this._filter.asReadonly();
  setFilter(v: string) { this._filter.set(v); }
}

// toolbar
setQuery(v: string) { this.filters.setFilter(v); }

// list: derive, no subscribe, no unsubscribe
readonly rows = computed(() =>
  this.all().filter((r) =>
    r.name.toLowerCase().includes(this.filters.filter().toLowerCase()),
  ),
);`,explanation:`The toolbar writes and the list derives; computed() re-runs only when the signal it reads changes, so the two components stay in sync with no manual subscription.`}]},{id:`signals-11`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What are toSignal and toObservable, and when would you use each?`,answer:`toSignal and toObservable both live in @angular/core/rxjs-interop and are the bridge between the two reactivity models. toSignal() turns an Observable into a signal: it subscribes for you, sinks the latest emission into the signal, and - because creation is tracked in an injection context - unsubscribes automatically via DestroyRef when the consumer is destroyed. Pass initialValue so reads before the first emission are something other than undefined. toObservable() goes the other way: it turns a signal into an Observable that emits the current value immediately to new subscribers (like a BehaviorSubject) and then every change; it also tears down when destroyed. Use toSignal() when templates or a computed() read state, which is the common case of handing an HttpClient or a router/Subject stream to a signal-based template. Use toObservable() when you still need RxJS operators - debounceTime, distinctUntilChanged, switchMap, combineLatest - over a signal's changes, or when a component must consume an Observable. Neither replaces the other, and the signal-first answer reaches for them at boundaries: most state should be signals and computed(), and the bridges exist so RxJS streams can be consumed or fed where the other model is already in play.`,examples:[{title:`Observable -> signal with toSignal`,code:`import { toSignal } from '@angular/core/rxjs-interop';

export class UserService {
  private http = inject(HttpClient);

  // subscribes for you, exposes the latest emission as a signal
  readonly user = toSignal(this.http.get<User>('/api/me'), {
    initialValue: null,
  });

  // template: @if (user(); as u) { <h1>{{ u.name }}</h1> }
}`,explanation:`Pass initialValue so the signal is not undefined before the first emission; the subscription and its cleanup are handled by the injection context (DestroyRef).`},{title:`signal -> Observable with toObservable`,code:`import { toObservable } from '@angular/core/rxjs-interop';

export class SearchBox {
  query = signal('');

  results$ = toObservable(this.query).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((q) => this.api.search(q)),
  );
}`,explanation:`toObservable emits the current value immediately to new subscribers (like a BehaviorSubject) and every change after that, which is exactly when you want debounce or switchMap over a signal's history.`}]}],misc:[{id:`misc-2`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is AOT vs JIT compilation?`,answer:`JIT compiles Angular templates and decorators at runtime in the browser, while AOT compiles them ahead-of-time during the build. AOT is the default today: it catches template errors at build time, runs faster in the browser, and ships less runtime compiler code.`,examples:[{title:`AOT vs JIT at runtime`,code:`// JIT - compiles in the browser (needs the compiler shipped to the client)
import '@angular/compiler';

// AOT - compiled during ng build; template errors fail the BUILD`,explanation:`AOT shifts compilation to the build step: smaller runtime bundle, faster startup, template errors caught in CI.`}]},{id:`misc-6`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is a standalone component?`,answer:`A standalone component is one that does not belong to an NgModule: it declares its own imports, services, pipes and directives directly in its imports array. Since Angular 19 standalone is the default for new apps and makes lazy-loading routes with loadComponent straightforward.`,examples:[{title:`Standalone is just an imports array`,code:`@Component({
  selector: 'app-card',
  standalone: true,          // default since v19
  imports: [MatButton, DatePipe],
  template: \`<button matButton>{{ date | date }}</button>\`,
})
export class Card {}`,explanation:`No NgModule to register: dependencies are declared on the component itself, which is what makes loadComponent lazy routes trivial.`}]},{id:`misc-7`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,isNew:!0,question:`What is CORS, and why does a browser block cross-origin requests?`,answer:`Cross-Origin Resource Sharing is a browser mechanism that decides whether JavaScript running on one origin (scheme plus host plus port) may read a response from another. It exists because of the same-origin policy: by default a page can send requests to other origins (images, CSS, fonts) but its JavaScript cannot read the responses, so a malicious site cannot silently exfiltrate data from a bank API while the user is logged in. CORS is the negotiated exception. For a simple request (GET/POST/HEAD using default headers) the response headers alone decide; as soon as custom headers, methods like PUT/DELETE, or credentials are involved, the browser first sends a preflight OPTIONS request asking which origins, methods and headers the server allows, and only ships the real request if the server answers with Access-Control-Allow-Origin, -Allow-Methods, -Allow-Headers and -Allow-Credentials. Crucially, CORS is enforced by the browser, not the server: the blocked request still reaches and runs on the server; only the response is withheld from your code. In an Angular app the everyday symptom is the API not sending the right headers, or sending the wrong origin. In development you sidestep it with the CLI's proxy (proxy.conf.json) so the browser only ever talks to the same origin; in production the backend or an API gateway must set the headers instead.`,examples:[{title:`The preflight flow`,code:`// Browser to server, before the real request:
OPTIONS /api/users HTTP/1.1
Origin: http://localhost:4200
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: authorization

// Server answers:
Access-Control-Allow-Origin: http://localhost:4200
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: authorization
Access-Control-Allow-Credentials: true

// Only then does the DELETE go out - and the browser is the one
// enforcing all of this; the server merely advertises the rules.`,explanation:`Custom methods, headers or credentials force a preflight; the real request is sent only if the OPTIONS response approves it. The server still sees the blocked request - CORS never stops it from arriving.`},{title:`Avoid it in dev with the Angular proxy`,code:`// proxy.conf.json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true
  }
}

// angular.json -> serve -> configurations.development
"proxyConfig": "proxy.conf.json"

// Now /api/... is same-origin in the browser - no CORS at all.`,explanation:`The dev server proxies /api calls server-side, so the browser never performs a cross-origin request; in production the backend or an API gateway must set the CORS headers instead.`},{title:`Further reading`,code:`CORS in 100 Seconds - https://www.youtube.com/watch?v=PNtFSVU-YTI`,url:`https://www.youtube.com/watch?v=PNtFSVU-YTI`,explanation:`A short visual walkthrough of the same-origin policy, preflight and the response headers.`}]},{id:`misc-8`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is Agile, and what does a sprint actually look like day to day?`,answer:`Agile is an approach, not a ceremony: deliver in small increments, get them in front of real users, and let what you learn change the next increment instead of defending a plan written a year ago. Scrum is the most common framework for putting that into a calendar. The product owner owns and orders the backlog and answers what is worth building; the development team owns how and delivers it; the scrum master owns the process and the impediments. The sprint is a fixed box - usually one or two weeks - with four events: planning to agree a goal and take the top of the backlog into the sprint, a daily scrum to inspect and adjust rather than to report status, a review where the increment is demonstrated to stakeholders and feedback changes the backlog, and a retrospective about how the team worked. Underneath sits the Definition of Done - the shared bar for what complete means: reviewed, tests green, accessibility checked, deployed to staging, accepted. As the Angular developer on it I take a story, clarify the acceptance criteria with the analyst, estimate it with the team, build the UI and the services, write tests, raise a pull request, address review comments and support QA through to release. For an employee-search feature I would split it into the search form, the API integration, loading and empty states, accessibility and automated tests - small enough to review in one sitting and to ship independently.`,examples:[{title:`Splitting one feature into reviewable increments`,code:`Story: As a recruiter I can search employees by name and department

Slice 1  search form + validation, no data          (shippable, shows the UX)
Slice 2  GET integration + loading / empty states   (usable end to end)
Slice 3  error and retry states + no-results copy   (polish that QA can test)
Slice 4  keyboard + screen-reader pass, axe in CI   (Definition of Done)
Slice 5  debounce, cancel stale requests, tests     (performance, measured)`,explanation:`Each slice leaves the application in a working, demoable state, so feedback on the design arrives after slice 1 instead of after the whole feature is built.`}],tags:[`MS`]},{id:`misc-9`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between Scrum and Kanban, and what are story points, velocity and the Definition of Done?`,answer:`Both are ways of working empirically, but they optimise for different shapes of work. Scrum is a fixed cadence: roles, a timeboxed sprint, a committed sprint goal, and no mid-sprint changes, which suits work you can plan a week or two ahead. Kanban is continuous flow: you visualise work on a board, limit work in progress so the team finishes rather than starts, and pull the next item when capacity frees up, which suits a stream of support, incident and bug work that does not fit a sprint. Kanban measures cycle time - how long one item takes from start to finish - while Scrum measures velocity. Story points are a relative estimate of effort, complexity and uncertainty, typically on a Fibonacci scale; they are not hours and not a commitment, and the moment a point target is set for a person it stops being useful. Velocity is the average number of points a team completes per sprint - a planning signal for how much a future sprint can hold, never a performance metric. The Definition of Done is different again: it is the shared, non-negotiable criteria for what complete means (code reviewed, pipeline green, accessibility checked, deployed, accepted), as opposed to the acceptance criteria of an individual story, which say what that story must do. In interviews I keep that distinction crisp, because DoD-versus-acceptance-criteria is a common follow-up.`,examples:[{title:`The four things, side by side`,code:`Scrum        fixed sprint, roles, events, sprint goal; measures velocity
Kanban       continuous pull, WIP limits, no sprints; measures cycle time
Story point   relative size of ONE item (1, 2, 3, 5, 8...) - not hours
Velocity      average points completed per sprint - a forecasting signal, not a target
Definition   shared bar for every item: reviewed, tested, accessible,
 of Done       deployed to staging, accepted
Acceptance    the contract for ONE story: what this change must do`,explanation:`Points size an item, velocity forecasts a sprint, the Definition of Done gates every item - confusing any two of them is what makes estimates feel like commitments.`}],tags:[`MS`]},{id:`misc-10`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between prompting an AI model and using an AI coding agent?`,answer:`Prompting is a single turn: you give a model an instruction and the context you think it needs, and you get text or code back that you then read, judge and apply yourself. 'Explain how switchMap differs from mergeMap' is prompting, and the model has no idea what your repository looks like. An agent is a loop around a model: it is given a goal plus tools - reading files, searching the codebase, editing, running the shell and the test suite - and it plans, acts, observes the result of each action, and iterates until the goal is met or it needs a decision from you. 'Find where duplicate employee-search requests originate in this project, fix them, run the tests and summarise the diff' is an agent task, and the difference is not just length: the agent's output depends on what it found, and it can verify its own work. That changes what good looks like. A good prompt states the objective, the relevant context, the constraints, the shape of the output and how you will judge it. A good agent setup adds scoped permissions, repository instructions it can follow, a single command that tells it whether it is done, and a git history that makes everything reversible. The bit I would not skip: an agent that can edit files is not an agent that is right. I review the diff, run the tests myself, and read security-sensitive changes line by line - the same scepticism as reviewing a colleague, with less benefit of the doubt.`,examples:[{title:`The same request at two levels`,code:`PROMPT (one turn, output you must apply)
"Give me an RxJS operator chain that debounces a search input and cancels stale requests."

AGENT (goal, tools, verification loop)
"In this project, find where typing in the employee search box issues a request per
keystroke. Change it so only one request is in flight and repeats are skipped, keep
existing tests passing, add a test for the new behaviour, and tell me which files
changed and why. Run \`npx ng test\` to verify."

// the agent reads, edits, runs the suite, reads the failure it caused, and fixes it
// before reporting back - the loop is the difference, not the model`,explanation:`The prompt asks for knowledge; the agent is given an outcome plus a way to check it reached one. Everything else - permissions, review, reversibility - follows from that.`}],tags:[`MS`]},{id:`misc-11`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How would you integrate Claude into an application, and what are the main challenges?`,answer:`I would never call the provider from the browser. The Angular app talks to our own backend, the backend validates the user, permissions and input, holds the API key in a secrets manager, calls the model, validates the response against the shape the UI needs, and returns it - so the key never ships in a bundle and every call is accounted for. The UI then does what UIs are good at: streaming output as it arrives, a visible loading and cancelled state, an obvious way to edit or discard what came back, and never auto-executing a consequential action on the model's say-so. The challenges are consistent enough to recite: hallucination, mitigated by grounding answers in retrieved data, validating structured output against a schema, and a human in the loop for anything that matters; prompt injection, mitigated by treating user input and retrieved content strictly as data, keeping instructions in a separate trusted layer, and giving tools the least privilege that works; latency, mitigated by streaming, timeouts and background jobs for long work; cost and rate limits, mitigated by quotas, caching of repeated requests and token budgets with monitoring; privacy, mitigated by minimising what leaves - no secrets, no personal data you do not need, no prompt logging that becomes a compliance problem; and reliability, mitigated by retrying only the retryable (429 and 5xx), a fallback behaviour when the model is unavailable, and a feature flag to switch the whole thing off. The last one matters more than people expect: you will want an off switch on day one.`,examples:[{title:`The flow, and what each hop is responsible for`,code:`browser                  your backend                    provider API
  |                          |                                |
  | POST /api/summarise      |                                |
  | { ticketId, locale }     |                                |
  |------------------------->| validate session + permissions  |
  |                          | check input size / rate limit   |
  |                          | read API key from secrets       |
  |                          |-------------------------------->|
  |                          |<-------------------------------|
  |                          | validate output against schema  |
  |<-------------------------| log metadata only (no prompt)   |
  | SSE stream of tokens     |                                |

Angular side: post to your own endpoint, stream with fromEvent/fetch SSM,
surface loading / error / cancel, and require a human to accept the result.`,explanation:`Every risk is answered at one of these hops: key exposure by never leaving the backend, injection by where instructions live, cost by the quota before the call, privacy by what you put on the wire at all.`}],tags:[`MS`]},{id:`misc-12`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`What is the difference between AG Grid's client-side and server-side row models?`,answer:`They differ in one question: where does sorting, filtering and grouping happen. The client-side row model loads the whole dataset into the browser and the grid does the work - sort, filter, group, aggregate, paginate - which makes every interaction instant and needs no server contract, and it is the right choice while the data fits comfortably in memory: thousands to low hundreds of thousands of rows, virtualised so only visible rows exist in the DOM. Past that point the browser is paying for data nobody will look at, and you move to the server-side row model: the grid keeps only the rows in view and asks a datasource for them as the user sorts, filters, groups or scrolls, sending the full request context (start row, sort model, filter model, group state) so the server can answer authoritatively. That buys you millions of rows and server-owned business rules, and costs you an API that understands all of it, careful cancellation of superseded requests, a caching strategy, and loading states in the UI. AG Grid also ships an infinite row model for append-only paging and a viewport model for sparse data such as maps, and the server-side model is an enterprise feature while the client-side one is free. My decision inputs: dataset size, whether the rules for filtering and grouping must live server-side, backend capability, and how much offline or instant interaction you need.`,examples:[{title:`What the server-side datasource has to implement`,code:`import { IServerSideDatasource } from 'ag-grid-enterprise';

const dataSource: IServerSideDatasource = {
  getRows(params) {
    const { startRow, endRow, sortModel, filterModel } = params.request!;

    api
      .loadRows({ startRow, endRow, sortModel, filterModel })
      .then(({ rows, rowCount }) => params.success({ rowData: rows, rowCount }))
      .catch((error) => params.fail()); // grid keeps its current rows, shows its error
  },
};

gridApi.setGridOption('serverSideDatasource', dataSource);`,explanation:`The grid hands you a page plus the whole sort and filter state, and expects success or fail - which is where cancellation of stale requests and a sensible loading state become your problem rather than the grid's.`}],tags:[`MS`]}],behavioural:[{id:`behavioural-1`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Which behavioural question framework will you use to answer these questions?`,answer:`This is often the first question of the loop, and it is a free opportunity either
way. Weak answers name STAR and stop, or worse, explain that they do not use a
framework because they answer honestly. Good answers name a small toolkit and match
the tool to the shape of the question, because the frameworks differ in which
specific weakness they defend against. Say which one you would choose for a given
question, and why, and it sounds deliberate rather than recited.`,examples:[{title:`The toolkit and when to use it`,code:`STAR
Situation, Task, Action, Result. The default for a past action.

STAR-L
STAR plus Learnings. The added beat is the point: it forces a reflection step
STAR skips, which is usually the most interesting part of your answer.

CARL
Challenge, Action, Result, Lesson. Obstacle-first rather than context-first, so
the difficulty leads instead of hiding at the end. Useful when the hardest part
was the problem itself.

SPSIL
Situation, Problem, Solution, Impact, Lessons. Developed by IGotAnOffer as a
STAR alternative. It splits STAR's blurry Task and Action into a clearer
Problem and Solution, and makes the Lesson step non-optional.

SOAR
Situation, Obstacle, Action, Result. Same family as CARL, used where the
obstacle is the interesting part.

PAR
Point, Example, Reason, Point. For questions that are really opinion rather
than story.

PREP
Point, Reason, Example, Point. For philosophy questions - why should we hire
you, how do you decide what to optimise for.

PSB
Problem, Solution, Benefit. For hypotheticals, where there is no real past
event to draw on.

SBI
Situation, Behaviour, Impact. For feedback you gave to someone else. Avoid the
compliment sandwich - the person cannot tell what to change.`,explanation:`Matching the framework to the question type, and using STAR-L or SPSIL when a
learning beat is what the question is really after, is the signal. A framework
recital with no matching is what fails.`}]},{id:`behavioural-2`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about yourself.`,answer:`The most under-prepared question in the loop, and the one where most people
either recite a resume chronologically or start with their university. It is
not a life story - it is a 60 to 90 second argument for why this conversation is
worth having, ending where this role begins. The structure that works: present
tense and current role, the two or three things you are actually good at
backed by a concrete outcome each, then the bridge into why this role. A good
tell is naming what you want next, because that frames the rest of the loop.
Keep it under 90 seconds so there is time for them to ask. Two traps to avoid: nothing from before your professional life - university, school and hobbies do not belong in this answer, because the interviewer already has your resume and is not asking you to read it back to them - and nothing negative about your current or previous employer, since they will reasonably assume you will describe them the same way in six months. Whatever you claim, expect it to become the next question: pick two or three things you can go an inch deeper on, each with a number and a story attached, and steer towards them instead of listing ten you cannot defend.`,examples:[{title:`60 to 90 seconds, ending at this role`,code:`BAD
Graduated from X in 2015, then interned at A, then joined B as a frontend
developer, then moved to C...
- Chronological, no point, and the interviewer now has your resume in front
  of them.

GOOD
I am a frontend engineer at C, where I own our Angular design system and the
checkout flow.

Two things I would say I am genuinely good at. First, I cut initial bundle
size by 180kb on checkout last year - mostly by auditing what was actually
being composed rather than swapping libraries - and I left a CI budget behind
so it stayed down. Second, I have led three version migrations end to end, and
the last one was a major upgrade across four teams where the useful part was
agreeing the sequencing with people who disagreed with me.

What I want next is to be closer to the whole system rather than one surface of
it, which is why this role interested me.`,explanation:`Ends at this role, has two concrete outcomes, and states what you want next so
the rest of the loop has a frame.`},{title:`The preparation that happens before you say a word`,code:`BEFORE THE ROUND
- Replace every generic line with your real domain and one number you can defend:
  what got faster, what shipped, what you owned. 'Improved performance' is not an answer.
- Treat every sentence as a potential next question: list the technologies you mention
  and be ready with a short answer for each of them.
- Keep it to 60-90 seconds. The opener's job is to choose your follow-ups, not to prove
  everything at once.
- Notice period, location and compensation are their questions to ask - do not fold
  logistics into the one answer you get to frame the conversation.
- Say it out loud once. A script recited from memory sounds like a script.`,explanation:`The opener is a framing device: it decides what they ask next, so the follow-ups get prepared as deliberately as the answer itself.`}],tags:[`MS`]},{id:`behavioural-3`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Walk me through your resume.`,answer:`Expectation-setting is the graded part: they want to know how you think and
where your story has gaps, not the contents. Narrate around two or three
threads rather than going chronologically, and be the one who names the gaps
first - a reorg, a short tenure, a gap, a pivot - because that reads as
self-awareness rather than being caught on it. For each thread say the problem,
your role, and the outcome. Do not narrate every job; if you have five, explain
what changed between them.`,examples:[{title:`Two threads, gaps named by you`,code:`Frame it as threads, not jobs:
- Thread 1: performance work. What the problem was, which parts were mine,
  what changed.
- Thread 2: migrations and cross-team delivery. Same structure.
- Then: the bits that do not fit, named by me first.

Naming a gap yourself
"She will ask about the 8 months at D, so say it first:
That was a reorg. My role was made redundant, and looking back I waited about
two months before looking externally, which cost me savings. I would handle
that differently - start while still employed."

Five jobs, one explanation
"I have had five jobs. Three were contract, which is why it looks like a lot:
two were three-month pieces, and between them I was in one bad agency that
placed me badly and I should have left sooner."`,explanation:`Gaps and churn named by you first is the entire tell. Chronological narration is
what loses this question.`}]},{id:`behavioural-4`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`What is one weakness of yours?`,answer:`The scoring is entirely in which weakness you choose and whether the evidence
shows you worked on it. The three failing categories: a humblebrag disguised as
a strength, a weakness that is actually someone else's problem (my manager is
micromanaging), and a real weakness with no evidence of any attempt to fix it.
What works is a genuine, job-relevant weakness with a specific mitigation you
put in place, and ideally a story of it failing before the mitigation existed.
Pick something that is real and small enough that the fix is believable - you
cannot claim to have fixed chronic disorganisation, but you can describe a
system you built to stop losing context.`,examples:[{title:`Real, job-relevant, with the fix`,code:`BAD
I work too hard.
- Humblebrag. Everyone says this and it reads as having not prepared.

BAD
My previous manager was difficult to work with.
- Not your weakness, and you have just told them how you handle conflict.

BAD
I am not very good at saying no.
- Plausible but unevidenced, so it becomes a prediction they will test.

GOOD
I used to lose track of context when I came back to a thread after a day on
something else, and I would re-derive decisions that had already been made.

What it looked like: a task that had been scoped on Monday would be re-scoped
on Wednesday by me, with no memory of why the first answer was chosen.

What I changed: decisions that affect more than one person now get a two-line
written rationale - the problem, the choice, the rejected option. I do it at the
end of the day it is made, which takes about a minute.

Where it has not worked: for genuinely throwaway work I still skip it, and
occasionally that bites.`,explanation:`Real and job-relevant, a specific system rather than willpower, and an honest
note on where it still fails.`}]},{id:`behavioural-5`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Where do you see yourself in five years?`,answer:`Graded on whether it is compatible with the role rather than on the ambition. A
common failure is an answer that quietly exits - I want to run a team, or move
into product - which tells them you will leave. A technically strong answer
stays on the work, names a direction rather than a job title, and ties it to
something you have already shown you can do. Being vague is safer than being
wrong, but pure vagueness reads as no ambition. Aim for a direction, a reason it
suits you, and one honest uncertainty.`,examples:[{title:`Direction, not exit`,code:`BAD
I want to move into engineering management.
- Reads as a resignation letter with a two-year notice. Only use this if the
  role is on the management track and you say so explicitly.

BAD
I want to work somewhere more challenging.
- No direction at all.

GOOD
In five years I want to still be hands on, but owning the architecture of a
larger system than one surface - and to be the person who is trusted with the
hard technical judgement calls rather than just the tickets.

Why that direction: the part I am best at is the trade-off no one wants to
make, and I like that the work is not decided in advance. The engineering
management version of this is also a thing I want eventually, but it is a
different job and I would rather do it deliberately than drift into it.

The uncertainty: whether the next role gives me that scope. I would rather
choose it than wait for it.`,explanation:`Stays on the work, names a direction and a reason, and is honest about the
uncertainty instead of being either grandiose or evasive.`}]},{id:`behavioural-6`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a project you are proud of.`,answer:`This is the most over-claimed question in the set, and the tell is a project
described in the plural - we, I - with no account of what you personally decided.
The strongest shape: pick a project where the interesting part was your
judgement, not the volume of work. Say what was hard about the decision, what you
chose, what you rejected, and what happened. Include a thing that went wrong or
something you would do differently, because an entirely flawless project reads as
either easy or rehearsed. Scale is not impressive; the decision is.`,examples:[{title:`One decision, one flaw`,code:`WEAK
We built a design system used by 40 teams.
- Team success, no personal decision, and the number is doing the work.

STRONG
Mine was the migration off a legacy build system. What makes it worth telling
about is a decision, not the work: we could have done it all at once, or
sequenced it by team.

I chose sequential, by dependency order rather than by team size or by which
team complained loudest. The argument against me was team size - the big teams
were still on the old pipeline for months and that hurt morale.

What it cost: about four months where the biggest teams had no path to the new
setup. I had predicted three.

The flaw: I did not budget for the two teams whose builds were not actually
independent, so we discovered mid-migration that the sequencing I had called
obvious was wrong for them. That was my analysis error, and it cost about three
weeks.

Result: zero rollbacks across 40 teams, and the sequencing doc was reused for
the platform migration afterwards.`,explanation:`One judgement call with a named alternative, a predicted cost, and a real
flaw that was yours. Scale is not the point.`}]},{id:`behavioural-7`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to work in an area you knew nothing about.`,answer:`Graded on the method of getting competent, not on the subject matter - nobody
cares whether it was Kubernetes, a payments integration, or a regex. What they
are listening for is whether you found the people who knew, whether you made
your understanding explicit early enough to be corrected, and how you knew when
you were done. The move that raises the level is building a small thing early
and being visibly wrong in a low-risk place, because that is what actually
produces learning faster than reading.`,examples:[{title:`Learning by being visibly wrong, early`,code:`The area was our payments provider's webhook retry semantics. I knew nothing
about it.

Step one, cheap and fast: I asked three questions - which people actually know
this, what does a correct integration look like, and what is the most common way
people get it wrong. The third question was the valuable one, and it turned out
the standard advice was wrong for our case.

Step two: I wrote the naive integration first, against a sandbox, and it failed
in a way that confirmed the thing I had been told was fine. Cheap correction,
low stakes.

Step three: rather than keep guessing, I wrote down my model of the behaviour
as I understood it and sent it to the payments engineer to correct. She changed
two of my five assumptions and said the other three were right for reasons I had
not considered.

How I knew I was done: not when it felt clear, but when I could predict what the
system would do in the three cases we actually hit, and I had a test for each.`,explanation:`Asking what people commonly get wrong, testing cheap and early, and having an
explicit model that someone corrected - that is the method they are grading.`}]},{id:`behavioural-8`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you simplified something complicated.`,answer:`Simplification is one of the highest-signal behaviours to demonstrate, and the
mistake is describing a cleanup as a simplification. A cleanup leaves the same
complexity with fewer lines. A simplification removes the complexity by changing
the model: you found that the requirement did not actually need generalising, or
you replaced a mechanism that had one use with direct code. Say what was
simplified, why the complicated version existed in the first place, and what
gave you the evidence to safely remove it.`,examples:[{title:`Removing the mechanism, not the lines`,code:`The trap
We refactored the validation module, removed 600 lines, and made it much
easier to read.
- A cleanup. Good, but not simplification.

The actual simplification
We had a generic form-validation engine: rules defined in JSON, a rule engine
that interpreted them, and a schema that had to stay in sync with the TypeScript
types.

It existed because two years earlier we thought we would need configurable
validation for two more teams.

What made it safe to remove: I grepped the rule definitions and found 41 of them,
and 38 were static. The other three were our login form and had not changed in
four months.

So we deleted the engine, inlined the 38 as typed functions so TypeScript now
checks them, and kept the three as three explicit validators. The JSON schema is
gone, so the class of bug where the two drifted cannot happen anymore.

What it cost: three weeks, and the three dynamic validators are hand-written,
which is more code than they were before.

Result: a whole category of runtime validation bugs went away.`,explanation:`Finding the evidence that the generality was never needed, and removing the
mechanism rather than the lines, is what makes this simplification.`}]},{id:`behavioural-9`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you made an unpopular technical decision.`,answer:`Not a training story and not a workshop. This is about noticing the current
standard was not good enough, deciding so, and changing something systemic about
how work got done. The distinction is between improving your own output and
changing the default for everyone. A strong answer names what the new standard
was, how you made it easy to meet, and what happened to people who did not -
including whether anyone pushed back and what you changed as a result.`,examples:[{title:`The decision, the cost, the objection`,code:`The decision: we would stop supporting the two oldest browsers we support and
ship only modern-targeted JavaScript.

Why it was unpopular: support had two enterprise customers still on them, and
QA had signed off a manual test matrix that assumed them. Nobody was wrong -
they were counting a cost I was proposing to delete.

What I brought instead of arguing: the numbers. Those two browsers were 0.8%
of sessions, 0% of revenue across four quarters, and 11% of CI time, because of
a transpile-and-polyfill matrix nobody had touched in two years.

How I made it cheap to comply: kept a legacy bundle behind one flag for two
quarters, so anyone with a real customer on those browsers could ship without
arguing with me again.

What happened: QA's matrix went from 34 cases to 6, which is what actually
turned them around - they had been defending a cost, not a principle.

What I got wrong: I led with "0.8% of sessions" before establishing that we
even had session analytics, and spent ten minutes on trust instead of on data.`,explanation:`A decision that was genuinely contested, the number that reframed it, and an escape hatch that removed the reason people were objecting.`}]},{id:`behavioural-10`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to make an architectural trade-off.`,answer:`This is the question senior candidates most often waste on a project summary. The
story has to be built around the trade-off itself, with a named alternative a
competent peer would have chosen. For Angular-adjacent work the axes that produce
good material: consistency of one state paradigm versus fitting async work;
modular monolith versus micro-frontends; SSR and hydration versus CSR under Core
Web Vitals pressure; build versus buy; and build-time versus runtime
configuration. Say what you rejected, what it would have cost you, and what would
make you reverse.`,examples:[{title:`Monolith versus micro-frontends, with the reversal condition`,code:`The axis: independently deployable pieces versus one deployable whole.

The alternative a good peer would have chosen: a modular monolith. Fewer moving
parts, one deployment, no duplicated runtime. Entirely defensible for a team of 15
with four domains - and honestly the right call.

I chose micro-frontends for two domains only, not the whole app, because those
two had genuinely different release cadences driven by different customers, and
each release of the monolith forced a coordinated freeze on the other team.

What it cost, and this is the part I underestimated: each boundary means a
runtime, a duplicated dependency tree, and a design-system versioning problem. We
spent roughly a quarter of one engineer's time on version alignment.

Reversal condition, written down at the time: if we add a third frontend, or if
cross-domain journeys make up more than about 30% of traffic, we fold back into a
modular monolith. The second one has not triggered yet.

What I got wrong: I did not budget for the version-alignment cost at all, and that
is the cost that actually hurt.`,explanation:`A named defensible alternative, a cost you accepted, and a written reversal
condition is the structure. The project itself is almost irrelevant.`}]},{id:`behavioural-11`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you worked on something at scale.`,answer:`Scale stories fail in two directions: they are either unquantified - we served a
lot of users - or they are about volume rather than judgement. What is being
graded is how the scale changed the shape of the solution. Name a constraint
that only exists at scale (blast radius, cost per request, cache invalidation,
fan-out, noisy neighbours) and the specific mechanism you built because of it.
Include the number that made the constraint bite, because an abstraction with no
triggering number reads as premature.`,examples:[{title:`The constraint and the mechanism`,code:`The numbers first, because they set the constraint: we went from about 400
requests a minute at peak to 9,000, driven by one new integration partner.

The constraint that only existed at scale: the partner's load was bursty and
unpredictable - 3x spikes in under a minute - and our per-request cost was
dominated by one external call we made per request. At 400 rpm that was fine.
At 9,000 rpm it was about a third of our cloud bill, and it made our p99 depend
on a third party we did not control.

What that ruled out: nothing architectural, actually. That is the honest part.
The obvious answers - caching, batching, a queue - were already in the system
for the user-facing path.

The mechanism: a single-flight layer keyed on the tenant, so the 40 concurrent
burst requests became 1. Plus a per-tenant circuit breaker, because noisy
neighbours were the other scale problem - one partner's spike was starving the
rest.

What I did not do: I did not pre-build any of this. We had the numbers from the
integration pilot for a month before they switched over.`,explanation:`The triggering number, the constraint it created, and the specific mechanism -
plus admitting that most of the architecture was already right.`}]},{id:`behavioural-12`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you failed.`,answer:`Failure stories are graded almost entirely on the last third of the answer. The
setup can be brief; what matters is whether you own it without a justification
clause, whether you can name your specific part in a failure that had other
contributors, and whether the conclusion is a change in a system or behaviour
rather than a lesson about being careful. The two failures to avoid: failing at
something with no stakes, and failing at something where you were right and
unlucky. Also avoid the answer where the only real mistake was someone else's
decision you executed - that is not yours to claim.`,examples:[{title:`Owned, systemic, specific`,code:`The rule I set myself: no explanation clause before the ownership. Not because
the context does not matter, but because it always sounds like an excuse first.

What happened: I cut a release branch while a long-running migration was
half-applied, because I trusted a feature flag check that was scoped to the web
client. The API path did not have it. About 3% of users saw an error state for
roughly 40 minutes.

My part specifically: I was the one who decided the flag was sufficient coverage,
and I did not check the second entry point. The migration engineer had assumed the
flag was complete, because I told them it was.

What I changed, and it is a system change not a lesson: release checklists now
require every entry point to be named explicitly against the flag or the change,
and a reviewer whose name is on the checklist has to confirm coverage. It has
caught two omissions since, including one of mine.

What I still feel about it: not the outage, but that I let a person assume
instead of asking them.`,explanation:`No explanation before the ownership, a specific part in a shared failure, and a
systemic change rather than the lesson be more careful.`}]},{id:`behavioural-13`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about the biggest mistake you have made.`,answer:`This is the same competency as the failure question, asked from the opposite
direction: the difference is that a mistake is something you did and a failure is
something that did not work. Practically, expect this to be asked as a follow-up,
so be consistent - if you tell the same story twice, say so explicitly and give
the part they have not heard. The grading emphasis shifts slightly toward the
consequence: how bad was it, who was affected, and what did you actually do about
the people affected rather than only the system.`,examples:[{title:`Same story, and say so`,code:`Open with the flag, because they are testing for consistency:
That is the same mistake I would tell you about - the half-applied migration and
the feature flag. I will not retell it.

What I have not said yet, since you are asking about the biggest one rather than
a failure: the scale of it. It was 3% of users for 40 minutes, which by our
numbers was a few thousand people, and it was the day before a customer
conference.

The communication part, which I did handle badly at first: I told support in the
DMs, then corrected it publicly an hour later when I realised I should have. The
correction was messier than the original message should have been. Support had
already answered a ticket saying the error was ours, which turned out to be wrong -
it was a caching layer.

What that taught me, separately from the outage: the audience for incident
communication is not the one that is easiest to reach.`,explanation:`Flagging the overlap immediately, then supplying the scale and the communication
detail they have not heard, is what answers this properly.`}]},{id:`behavioural-14`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a production incident you handled.`,answer:`The strongest incident answers follow the response rather than the drama. What
is graded: how quickly you established what was actually happening versus what
people were guessing, how you handled the pressure to act before you knew,
whether you communicated outward at all, and whether you found the actual cause
rather than stopping at the proximate trigger. Include the boring operational
parts - how you decided, who you told, what you wrote down - because that is what
separates someone who was there from someone who performed being calm. Ending
with a real systemic change, not a promise, is what closes it.`,examples:[{title:`Detection, decision, cause`,code:`Detection over drama:
I was on call. First signal was a support ticket, not a page, because our alert
was on error rate and the failure was a 200 response with empty data. So the
first fifteen minutes were spent establishing what was actually happening -
three people comparing a user report against logs, and finding that the data was
missing rather than the request failing.

Deciding before knowing:
We had two plausible causes and a choice between rolling back a deploy from an
hour ago and waiting. I chose to roll back even though the deploy was not
obviously related, because the cost of rollback was about two minutes and the
cost of waiting was unbounded. That was a judgement under uncertainty, not a
diagnosis.

Outward communication: I sent one message to support at minute twenty saying
what we knew, what we did not, and when the next update would be. I would not
have done that at minute twenty in my previous job.

Cause, not trigger: the trigger was a config change. The actual cause was that
our cache had no invalidation on a field we had started writing from a new
service six weeks earlier, and the deploy only happened to be running when
traffic crossed a threshold.

The fix was the invalidation. The alert change - alerting on empty responses,
not just errors - was mine, because that was the fifteen minutes.`,explanation:`Detection versus the drama, a real decision under uncertainty, a proactive
outward update, and the cause rather than the trigger.`}]},{id:`behavioural-15`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to deliver under pressure.`,answer:`Pressure stories usually collapse into either heroics - I worked through the night
- or into process, which reads as defensive. The middle is the graded answer: name
the specific pressure (a date, a person, a risk), say what you deliberately did
not do, and be honest about whether the pressure changed the quality of the
outcome. Saying the work was fine, but that you skipped something you would
normally do, is far better than implying you did everything at a higher standard.
Also worth naming what support you asked for, because asking for help is itself a
skill being probed.`,examples:[{title:`What I skipped, and what I asked for`,code:`The pressure: a hard date set by a contract, and a review process that had not
started.

What I did not do: I did not skip the security review. It was the thing that
would have bitten later, and I said that out loud even though it cost me four
days of the schedule.

What I did skip, and said so: the accessibility pass. I documented it as a named
debt with an owner and a date rather than pretending it was covered.

What I asked for: I asked for one reviewer from the platform team for four hours,
not for more hands on my own task. That was a better trade than trying to
parallelise work I did not fully understand yet.

Result: shipped on the date, with the accessibility debt tracked and closed six
weeks later by someone else.

Honest assessment: I was lucky about the reviewer being available. If she had
not been, I would have made a worse call.`,explanation:`Naming what you skipped and got caught by, documenting the debt, and admitting
the luck are what keep this from reading as heroics.`}]},{id:`behavioural-16`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to learn something quickly.`,answer:`Distinct from the unfamiliar-domain question: that one is about finding your way
around a field, this one is about speed under a hard constraint. What is graded is
the time-boxing - what you decided to learn, in what order, and what you explicitly
decided not to learn - plus whether you knew when to stop. The senior signal is
naming a stopping condition, because someone who researches until they are certain
is slower, not more thorough. Also worth saying how you verified understanding
rather than assuming it.`,examples:[{title:`Knowing when to stop`,code:`Deciding the scope first:
Two weeks to implement against an unfamiliar message queue. I did not try to learn
message queues. I wrote down the four things our use case required - ordering per
key, at-least-once delivery, retry with backoff, and dead-lettering - and treated
everything else as out of scope for the fortnight.

Ordering for speed:
I did the four in dependency order and in parallel where possible, so the item I
was most likely to be wrong about was first while there was still time to change
the plan. That order was: at-least-once delivery, then retry, then dead-lettering,
then ordering - which is not the order they appear in most docs.

Verifying rather than assuming:
On day nine I had a local harness replaying our real message shapes, which is what
told me our retry semantics were wrong - not the reading, and not a code review.

Deciding to stop:
I stopped when I could no longer name anything I would do differently with more
knowledge. Specifically: I could explain every behaviour we would hit, and I could
write a test that would fail if a behaviour changed.

What I got wrong: I left dead-lettering untested for three weeks because I assumed
it was simple, and it was not. Time pressure made me treat a familiar-looking
problem as a known one.`,explanation:`Explicit scope, ordering by risk rather than by documentation order, verifying with
a harness, and a named stopping condition - plus admitting where the speed
shortcut bit.`}]},{id:`behavioural-17`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to say no to a request.`,answer:`Saying no is graded on whether it was a real refusal. Requests from the right
person for a reason you agreed with are the strongest material - you declined
because the cost landed elsewhere, not because you were busy. What fails is
agreeing while resenting it, which they can hear, and refusing in a way that
protected your pride. The good shape: understand what the request is actually
for, name the real constraint, offer the nearest thing you can do instead, and
say what you would need in order to say yes. Turning it down and offering an
alternative is what separates this from being obstructive.`,examples:[{title:`Real constraint, real alternative`,code:`What the request was actually for:
My lead asked me to add a feature to a system I owned, the week before a
release. I said no. Not the week before.

Why it was a real refusal, not a soft one:
The reason I said no was not the week. It was that the feature needed to write
to a table that had no migration strategy, and we had already agreed with the
data team that schema changes went through their review. So the real constraint
was someone else's process, not my time.

The nearest thing I could do:
I offered two things. A read-only version against the existing endpoint, which
they could ship in the week, and a version writing to the new structure after
their review, which I said I would own and could start the day the migration was
approved.

What I said I would need to say yes:
A migration reviewed and merged, and one week after it. They got both.

What happened: the read-only version shipped on time and got used enough that
the write version turned out to be a lower priority than they had assumed. That
was luck as much as judgement.`,explanation:`A real constraint you can name, an alternative rather than a flat refusal, and
the condition under which you would have said yes.`}]},{id:`behavioural-18`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you took responsibility for something that went wrong on someone else's behalf.`,answer:`The graded skill is taking the blame in a direction that costs you, without taking
responsibility for the competence of someone who did not have it. The failure to
avoid is defending yourself - I was following the spec - because it reads as
someone who will do that when it is inconvenient. Distinguish clearly between
owning the system (including what you shipped) and attributing the specific
error (which was someone else's). Also worth noting whether you did anything
about the other person's ability, because a senior version of this answer
includes helping them get better rather than absorbing their mistake quietly.`,examples:[{title:`Own the system, not their competence`,code:`The structure that works: own what is yours, state the other part factually,
no adjectives.

Owning the system:
I shipped the feature and I did not review the error handling properly. That is
my responsibility regardless of who wrote the code path.

State it factually:
The specific mistake was mine to prevent in review. My manager caught it in
production, not in my review, which means the review did not cover the failure
mode at all.

Do not:
I was following the spec and the other engineer did not tell me.
- Reads as someone who will do this the moment it is inconvenient.

The part that matters for a senior answer:
What I did about their capability. Naming it to management privately would have
been a quick route to looking fair and would have taught them nothing. Instead I
told him directly that the gap was error handling, gave him one piece to work
through, and reviewed the next one. He has not shipped an unhandled error path
since.

What I would change: I should have raised the review gap in the PR, where it was
cheap, rather than in the incident review.`,explanation:`Owning the system, stating the other part without adjectives, no
I-was-following-the-spec defence, and doing something about their capability.`}]},{id:`behavioural-19`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you improved something nobody asked you to improve.`,answer:`This overlaps with the unowned-problem question, so the distinction is who owns
it: here something already had an owner and it was still wrong, and you raised it.
The graded elements are the specific problem you found, why the existing owner was
not fixing it, and the evidence that the improvement survived after you stopped
paying attention to it. An improvement that only held while you maintained it
personally is a real and common failure, and saying so is better than pretending it
stuck.`,examples:[{title:`Improved, and it stuck without me`,code:`What nobody was going to fix: our test suite had grown to about 40 minutes, and
the last four months show it getting worse, not better. Nobody owned it because it
was not breaking anything - it was just slow, and CI slowness is easy to live with
when you are not the one waiting.

What I changed: I added a shard split and parallelised the two slowest suites,
which took 40 minutes to 12.

Why I raised it rather than just doing it: because it would make CI fail
differently for people who had not opted in, so it needed to be visible. I brought
the numbers to the team meeting and asked whether anyone objected. Nobody did.

Whether it stuck: this is the part I would not have claimed if I had not checked.
Six months later the suite is 14 minutes, because two other people added tests and
it did not go back up. But the split I did is still there and nobody has had to
maintain it.

Honest part: the first version of the shard config broke on a machine with fewer
cores and I did not notice for a week. Someone else found it.`,explanation:`Evidence that it persisted without you, plus the honest gap you did not notice
until someone else did.`}]},{id:`behavioural-20`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you were wrong about something for a long time.`,answer:`This is a much harder question than the failure question, because it requires
believing something, defending it, and being wrong - and the trap is telling a
story where you were only ever slightly off. The strong answer commits to a real
position, shows the evidence that made you hold it, and describes the moment the
evidence changed. Being wrong for a long time is normal and saying so is the
point; an answer where you were only ever mistaken about details is not the same
thing and interviewers notice. Note also what you now do differently in how you
form opinions, since that is the part being graded.`,examples:[{title:`Belief, evidence, what changed`,code:`What I believed, and held for about two years:
That our component tests were worth keeping as they were. My argument: they were
the only automated check on a lot of business logic, and removing tests is how
suites rot. I said that in about three design reviews.

Why I held it: I had been burned before by deleting tests that looked redundant,
so I was being conservative on principle.

What changed it: we added a rule that every new test had to fail when I
deliberately broke the thing - and about 30% of the existing component tests
passed without asserting anything meaningful. Not wrong assertions. No
assertions.

The moment my position flipped: not the 30%, which surprised me. It was a test
that passed because it asserted on a mock's return value rather than the
component's output. That test could never have failed for a real bug, and I had
written it.

What I do differently now: I ask what would make a test fail before I keep it. If
I cannot answer that quickly, I do not believe the test exists, and I do not
trust the coverage number.`,explanation:`Committing to a real position, the moment the evidence turned rather than
accumulated, and a specific change to how you form and trust opinions now.`}]},{id:`behavioural-21`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a conflict you had with a coworker. How did you resolve it?`,answer:`Two things are graded: genuine empathy for the other position, and a real
resolution. The single most common mistake is telling a story where you were
simply right - interviewers discount it because real conflicts do not resolve
that cleanly. A strong answer shows you understood the other person well enough
to steelman them, changed or clarified something in your own position as a
result, and ended with a working agreement rather than a victory. Avoid
conflicts where the other person was incompetent or absent - that reads as
blame rather than conflict skill.`,examples:[{title:`Steelman, then converge`,code:`We disagreed about where validation belonged - in the component or in the API
layer.

His position, which I had not considered properly: our desktop client and the
partner integration both call that API, so component-level validation left the
partner path unprotected. That was a real hole and I had not seen it.

What changed in my position: I stopped arguing it had to be one or the
other. We did both - component validation for fast feedback, API validation as
the actual contract, with a shared schema so the rules cannot drift.

Resolution: I asked for his integration test case and added it to our suite, so
his scenario stayed covered.`,explanation:`Naming what you learned and changing your own position is what separates a
resolution from a win. Adding his test case shows you treated his concern as
legitimate.`}]},{id:`behavioural-22`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you disagreed with your manager.`,answer:`The most-asked behavioural question in tech, and the easiest to sanitise into
uselessness. Graded items: real tension, a data-based case rather than an
appeal to taste, and specifically what committing to the final decision cost
you. Interviewers listen hardest for the commitment half - someone who only
describes the argument and then says "and we went with my approach" has not
demonstrated disagree and commit. If the manager decided against you, say what
you did and how you made the losing decision work. If you lost badly, that is
a strong answer if you can name what you learned about your judgement.`,examples:[{title:`Disagree, then commit fully`,code:`I argued we should not ship the migration in the same release as the dependency
bump. My case was a blast radius argument, not taste: if the bump broke, we
could not tell a dependency issue from a migration issue in the logs.

He decided otherwise - one release was simpler to roll back.

Committing: I wrote the rollback plan so reverting was a single command rather
than a sequence, and I pre-tagged both versions so the diff was available
instantly. I also added a canary at 10% so we would see the failure mode
quickly.

Cost: the bump did cause a 20-minute degradation on 3% of traffic. The canary
limited it and the rollback took 90 seconds. I do not think the extra release
would have saved us, and I told him so afterwards.`,explanation:`The commitment must be visible and specific, and conceding after the data lands
is the strongest possible ending.`}]},{id:`behavioural-23`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to convince a skeptical stakeholder.`,answer:`Influence without authority, graded on mechanics rather than on whether you
won. The strong shape: understand their incentives and constraints first,
change the evidence rather than restating the argument, and give them something
that makes saying yes easy. Weak answers describe being right. Also note what
happens if you fail - an answer with no failure path sounds naive. If the
stakeholder had a legitimate concern you could not resolve, saying so is better
than a fantasy where everyone converts.`,examples:[{title:`Changing evidence, not volume`,code:`The operations lead did not want my caching change. Her concern was
invalidation correctness, and she was right to have it.

What I did NOT do: argue that the hit rate would be high.

What I did: wrote a 200-line harness that replayed a day of real read traffic
against both designs and printed divergence. It showed 3 divergence cases per
million, all in the first 30 seconds after a write - the exact window she was
worried about.

So the design changed: write-through on the first read after a mutation,
read-through after that. Divergence went to zero.

Making it easy to say yes mattered too: I scoped it to one endpoint, with a
kill switch, and put her name on the runbook.`,explanation:`Turning a disagreement into a test that settles it is the durable skill.
Noticing that making it easy to agree is a separate, explicit skill.`}]},{id:`behavioural-24`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to influence people outside your team.`,answer:`The signal is that you understood the other side incentives, not just that you
advocated. Name what the other team was measured on and how your request
affected it - then show how you addressed that cost rather than ignoring it. The
distinction from convincing a stakeholder is that here the person gains nothing
from your success, so reciprocity and shared credit matter. A common
senior-level tell is whether you ended up owning the change for a team you did
not belong to.`,examples:[{title:`Addressing their incentives`,code:`I needed the platform team to expose a per-tenant rate limit. Their goal that
quarter was reducing their on-call pages, and any new endpoint was new surface
they would own.

So I did not lead with my need. I found their actual pain: they were already
absorbing 30 pages a month from one noisy tenant, and per-tenant limits would
have fixed most of them.

I wrote the spec for their problem, implemented the first version, and gave
them the tests and the dashboards. I also put the rate limit config in their
runbook, not mine.

Outcome: 30 pages a month to 2, and my endpoint shipped in their sprint rather
than needing escalation.`,explanation:`Doing their work, not just asking for it, is what makes cross-team influence
possible without authority.`}]},{id:`behavioural-25`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time two teams had conflicting priorities.`,answer:`The best answer names both sides legitimate interests, shows the data used to
weigh them, and - the part most candidates skip - says how you mitigated the
cost to the side that lost. The verdict matters far less than the reasoning. A
weak answer implies your team was obviously right. Also useful: say how the
decision was actually made, because in a real conflict that is often a third
party with a different objective, and recognising that is a senior observation.`,examples:[{title:`Including the losing side's cost`,code:`Support needed the admin export tool urgently. The data team needed the schema
migration first because the export would break on the new table layout.

Both legitimate: support was fielding 40 tickets a week about a workaround, and
the data team was one week from a hard deprecation deadline they had not
publicised.

How it was decided: the release manager owned both dates, so I stopped trying to
argue and took the trade to her.

The call: migration first. I mitigated support's cost by having them get a
temporary version built on the old schema - two days of my team's time - which
cut the tickets to 8 while we waited.`,explanation:`Naming the decision-maker and mitigating the loser's cost are the two moves that
separate this from a complaint.`}]},{id:`behavioural-26`,category:`behavioural`,difficulty:`medium`,scenarioBased:!0,isMarked:!1,question:`How would you handle a teammate who is not pulling their weight?`,answer:`A hypothetical, so PSB rather than STAR. The graded balance is directness against
empathy, and sequencing: private before public, specific before general, and
escalation as a genuine last resort. The most common failure is jumping straight
to escalation, or being so gentle that nothing is said directly. A strong answer
acknowledges the cause is unknown and information-gathering is the first step,
because it might be onboarding, illness, or a misunderstanding about the role
rather than effort.`,examples:[{title:`PSB, sequenced`,code:`P - Problem
Their output is inconsistent and the rest of the team is absorbing rework, so
this is now a team problem.

S - Solution
Step 1, get information privately rather than assuming laziness - it may be
onboarding, illness, or a role mismatch: I have noticed the last three PRs
needed a lot of rework, is there something unclear or in your way?
Step 2, if it continues, be specific in the same private conversation with a
concrete ask and a date.
Step 3, escalate to our manager only after that, with specific examples and my
own contribution.

B - Benefit
Resolves the team impact quickly if it is a fixable gap, and if it is not, the
escalation is documented and fair to both of them rather than a surprise.`,explanation:`Refusing to assume laziness, and sequencing private and specific before
escalation, is what the question is testing.`}]},{id:`behavioural-27`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you showed leadership without having a leadership role.`,answer:`The strongest version is not "I was the tech lead". It is what you did when it
was not obviously your job - the problem nobody assigned, the standard nobody
was enforcing, the review nobody had time for. Interviewers are specifically
looking for emergent ownership rather than assigned responsibility, so an
answer describing duties you were given scores poorly. Say what the situation
was, why nobody else was going to pick it up, what you did without being asked,
and what changed because of it.`,examples:[{title:`Unowned problem, no title`,code:`Nobody owned our bundle size and it had doubled in a year. It was not in
anyone's goals, and the natural moment to cut it - adding a library - was the
moment it grew.

Why I picked it up: I was the one who had added 140kb of it in one PR, so I had
the context to tell what was ours and what was vendor.

What I did without being asked: measured the composition, found one moment
library and three unused internal helpers, removed the helpers, replaced the
moment usage, and wrote a one-paragraph note on what to use instead. Then I
added a budget check to CI and told my manager, because it would fail PRs and
people should know that before they hit one.

Result: initial bundle down 180kb. The budget has blocked four PRs since,
including two of mine.`,explanation:`Fixing your own contribution, then warning the team before the guardrail bites,
is what separates this from credit-taking.`}]},{id:`behavioural-28`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you mentored someone.`,answer:`Graded on whether you identified a specific growth gap and did something
calibrated to it, with measurable improvement. Weak answers are either vague
encouragement, or the story where the mentee succeeded and you take credit. The
distinction that raises the level is giving them the problem rather than the
answer - the mentoring move where you withhold the solution on purpose. Have a
number: what could they do at the start, what could they do at the end, and over
what period.`,examples:[{title:`Gap, intervention, evidence`,code:`The gap was not coding. Her PRs were technically fine and clean, and she
avoided anything she could not verify, so she shipped very little.

What I did not do: tell her to be more proactive.

What I did: deliberately gave her the problem instead of the answer. On a
migration I said: here is the rollout, the first PR is yours, and I am not
going to tell you the ordering - tell me what you think the order should be
and why. That was uncomfortable for her, which was the point.

Evidence: three months on she had run two deployments end to end, including
one rollback she drove. She now runs our release checklist review.

Honest caveat: I was slower to give her real ownership than I should have
been. The first month she was doing throwaway tasks.`,explanation:`A specific diagnosed gap, a deliberately uncomfortable intervention,
measurable evidence - plus an honest note on your own delay.`}]},{id:`behavioural-29`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you raised the bar for your team.`,answer:`Not a training story and not a workshop. This is about noticing that the team's output standard was below what the work deserved, and then making the higher bar reachable rather than aspirational. The graded elements: what the new bar was in observable terms, what you removed or automated so that meeting it was not extra effort, what happened to the people who did not meet it, and whether the bar survived contact with a deadline. A weak version quotes a rule you introduced. A strong one shows what it cost the team to meet, what you yourself had to cut, and whether you held yourself to the same standard.`,examples:[{title:`Changing the default`,code:`Our review culture was: approve if the tests passed. Review time was about 4
minutes and defects found in review were rare because reviewers were not
looking.

New standard: every change states how it was verified, and review checks the
diff against the ticket acceptance criteria, not just the tests.

Making it easy: I wrote the template with the fields pre-filled from the
ticket, so following it was less work than not following it. I also did the
first ten reviews to model it.

What happened: review time went to about 25 minutes and we caught three real
defects per month that previously shipped. Two people pushed back - they said
it slowed them down. I heard it, so the verification field became the only
required one.`,explanation:`Lowering the cost of the standard while raising it, and adjusting after
pushback, is what makes this systemic rather than heroic.`}]},{id:`behavioural-30`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to delegate.`,answer:`Graded on whether you built leverage rather than remaining the bottleneck. The
wrong answer delegates an unimportant task and reports it as delegation. The
right answer names what you deliberately kept, what you handed over including
the parts you wanted to keep, and how you checked without taking it back.
Redelegating your work and then redoing it because it was not right is the
classic self-sabotage answer, and interviewers listen for it.`,examples:[{title:`Handing over the interesting parts`,code:`I owned the design of the notification service and was the only person who had
context on the retry semantics.

What I kept: the API contract and the queue topology - too load-bearing to hand
over and still be useful.

What I handed over, and I wanted to keep: implementing it. I said explicitly
that I wanted to own it and was handing it over anyway.

Making it stick: I asked for a written design doc from them before any code, so
I was reviewing their thinking rather than my memory. Then I reviewed weekly for
the first month.

One thing went wrong: they got the retry semantics wrong on the first pass. I
did NOT fix it - I made them explain it to me, found the gap in their
reasoning, and they corrected it. They have owned it for two years.`,explanation:`Naming what you deliberately kept, and resisting the urge to fix their bug, is
exactly the leverage signal being tested.`}]},{id:`behavioural-31`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Give me an example of tough or critical feedback you received.`,answer:`Graded on ego management and evidence of an actual behaviour change. Defending
the critique, or explaining that the reviewer was wrong, is an outright failure
even if it is true. The strong answer: name the feedback specifically, your
initial reaction honestly, what you concluded about whether it was fair, and
the specific change you made that persists today. Mentioning that you now ask
for feedback more often is a nice touch, because it shows you changed the system
and not just the behaviour.`,examples:[{title:`Specific critique, durable change`,code:`A staff engineer told me my design reviews were thorough but slow - about 40
minutes - and that people stopped bringing me reviews early because of it.

Honest first reaction: I thought that was unfair, I was being careful. I also
could not argue with the observation, because I had noticed people asking
whether they should bring things to me.

What was actually right: I was re-deriving the design from scratch each time
instead of asking what they had already decided. My thoroughness was partly me
not trusting their work.

The change: I now ask them to write up their thinking first and I review that,
which typically takes 15 minutes. I also started asking what would make this
easier for you next time.

Last review since: about 18 minutes, and two juniors told me it is the reason
they bring me things early now.`,explanation:`Separating your defensive reaction from the fair part of the critique, and
admitting what your thoroughness actually was, is the whole answer.`}]},{id:`behavioural-32`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you gave difficult feedback to a peer.`,answer:`Graded on mechanics: private, specific, observable, and paired with a next step.
The common failure is a compliment sandwich, which destroys the feedback - the
person cannot tell what to change. Naming the SBI structure explicitly is
high-signal. Also graded: whether you asked about intent, which converts telling
into a conversation, and whether the behaviour actually changed. If the
feedback landed badly, say so and say how you handled it.`,examples:[{title:`SBI, and asking about intent`,code:`Using SBI: Situation - the Thursday release we cut on Monday.
Behaviour - in the channel, after the decision was made, with two people copied
who did not need to be.
Impact - the platform lead read it as a personal objection to his design and
stopped raising things early for two weeks.

What I added: the intent question. I sent that too fast and too wide - was my
read that you were going to bypass the platform team correct? He said yes -
which it was, and I had not noticed.

After: we agreed that concerns go to me first and I take them to him. Four
months on he still brings me things early, which is the opposite of where we
were.

What I learned: he was not defending the design, he was defending his team, and
I had no way of knowing that.`,explanation:`The intent question is what converts feedback into a conversation, and admitting
you were wrong about the substance is not weakness.`}]},{id:`behavioural-33`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time your team's trust was damaged, and how you fixed it.`,answer:`Accountability plus repair, without a blame narrative. Graded on whether you
accepted the damage was yours, whether you were specific about what you did to
earn trust back, and whether you changed something so it could not recur. Also
graded: whether you let the team see the repair period cost you something. A
vague "we talked it through" fails. If your team damaged trust rather than you,
the answer should be about what you did as the person in charge - which is
harder and scores higher.`,examples:[{title:`Repair, with a cost to you`,code:`I was going to make it quiet. A support lead had raised the same flaky-deploy
problem four times, ignored three of them, and the fifth time he escalated past
me to my manager. That went badly and the team saw it.

It was my fault. I had deprioritised it silently instead of saying not now,
and here is when. Silence read as not caring.

The repair, in order: I met with the support lead alone and said plainly that I
had ignored him and that the four asks were one problem I had failed to route.
Then I took it to the team and said the same thing in front of them, because
they had watched it happen.

The structural fix: every support escalation now gets an owner and a date from
me within a day, even if the answer is no.

The cost: I gave up a feature I had been pushing for two months. Six months on,
the support lead raises problems early instead of escalating, and we have
caught two outages before customers saw them.`,explanation:`Saying it in front of the team, and giving up something real, is what makes the
repair credible rather than performative.`}]},{id:`behavioural-34`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had a tight deadline with shifting scope.`,answer:`Scope discipline is the whole answer: what you cut, why that, and crucially who
you told and when. The specific failure being probed is absorbing the scope
increase silently and then missing the date, because that converts a
prioritisation problem into a trust problem. A strong answer names what you
deliberately descoped and defends it as scope, not as failure. Pre-communicating
the trade is the signal - if you tell people the new date after slipping, you
have already lost the point of the question.`,examples:[{title:`Cut early, say early`,code:`A compliance feature landed in week one of a six-week build, with a hard date.

What I did in week one rather than week five: went back with a descoped plan.
Two of the four sub-features were regulator-facing and mandatory; two were
internal analytics. I dropped the analytics, about 30% of the work, and shipped
a stub for it after.

Why those two: the regulator-facing items carried the actual legal risk.
Internal analytics was nice to have.

Who I told: the compliance lead and my manager in week one, with the trade
stated as a trade, not an apology. They approved the cut the same day.

Result: shipped on the original date with the mandatory scope. The analytics
went out six weeks later as planned.`,explanation:`Week one instead of week five is the entire lesson. Coming back early with a
defended descope is scope discipline.`}]},{id:`behavioural-35`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a project where the requirements were unclear or kept changing.`,answer:`What is graded is how you created clarity rather than how you survived it. Four
moves tend to separate strong answers: writing the scope down so disagreement
becomes concrete, making assumptions explicit rather than silent, shipping
something small to get real feedback, and setting up a mechanism so changes
cost something. "I adapted" is not an answer. Interviewers want to know whether
you reduced the ambiguity for the team, not just absorbed it personally.`,examples:[{title:`Creating clarity`,code:`Three weeks in, the brief said improve engagement and nothing else changed.

Move one: I wrote a one-page doc stating what I believed was being asked and
what I was assuming about success, and sent it asking them to correct it. Three
of my five assumptions were wrong, and finding that out on day 15 was worth more
than a month of building.

Move two: shipped a thin version in week four - one notification surface, no
personalisation - to get a reaction instead of an opinion.

Move three, the one that actually stuck: I asked for a prioritisation call every
Friday, 30 minutes, decisions recorded in the doc. After that, changes started
arriving with a reason attached instead of just arriving.

What I would change: I should have pushed for move three in week one rather than
week four.`,explanation:`Written assumptions expose what is actually being asked, and the recurring
decision forum is what stops the churn - plus naming your own delay.`}]},{id:`behavioural-36`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a decision you made with incomplete information.`,answer:`Graded on how you handled the uncertainty, not on the outcome being right. Name
the uncertainty explicitly, say what you used as a proxy signal, state your
confidence level honestly, and explain how you would find out if you were wrong.
The advanced move is buying the information cheaply first - a time-boxed spike
or a query against historical data - which is more senior than deciding under
uncertainty or waiting for certainty. Weak answers pick one of the two extremes
with no acknowledgement of the middle.`,examples:[{title:`Buying the information cheaply`,code:`We had to choose a database for a new service, and we did not know the
read/write ratio or the growth curve.

Rather than guess, I spent two days buying the missing numbers: queried six
months of our existing service production logs for reads per write and data
growth, and replayed the top ten queries against a candidate instance.

The numbers said 200:1 read-to-write and 40% annual growth, which ruled out the
option with higher write throughput and made the cheapest read-optimised option
the obvious answer.

Honest confidence: high on the read pattern, low on growth, because the new
service had a different adoption curve. So I put a monthly review on the numbers
rather than committing to a migration plan that assumed they would hold.

What would have changed my mind: reads per write under 20, or growth past 3x.`,explanation:`A time-boxed spike to buy the missing information beats both guessing and
waiting, and stating what would change your mind is the confidence signal.`}]},{id:`behavioural-37`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you shipped something you were not fully confident about.`,answer:`The graded skill is making a bounded, reversible bet rather than either stalling
or shipping recklessly. Name what specifically worried you, how you bounded the
blast radius - feature flag, canary, limited cohort, or a rollback that was
actually tested - and how you decided the residual risk was acceptable. Also
name the check that would have caught you being wrong. What fails this question
is a story about shipping because of a deadline with no guardrail, and equally a
story about endlessly waiting for certainty.`,examples:[{title:`Bounded bet with a kill switch`,code:`The thing I was not confident about was not the code, it was the load
assumption. Our peak was 4x average and the new service had no production
history to extrapolate from.

Why I shipped anyway: the read path was the same as an existing service that
had handled 10x our peak.

Bounding it: dark launch to 1% of traffic, feature flag on a route rather than
a code branch, and I rehearsed the rollback on staging the day before rather
than trusting that it would work.

The check: a dashboard comparing that cohort error rate and latency against the
old path, checked every hour for two days.

What happened: nothing - which was the point of the rollout. I would have waited
indefinitely otherwise, and a week of delay on a fully reversible path is just
fear.`,explanation:`Isolating exactly what you were unsure about, bounding it, and rehearsing the
rollback is the whole distinction between a bet and a gamble.`}]},{id:`behavioural-38`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to balance quality against speed.`,answer:`What is graded is which debt you consciously took on and how you ensured it got
paid. Every team takes this trade; the answer that scores is one where you named
the debt out loud, wrote it down somewhere visible, and either scheduled its
repayment or set a condition for it. The failing version either claims there was
no tradeoff - you were always perfect - or admits to debt that was never repaid
and never tracked. Naming the condition that would have made you stop is a
strong senior signal.`,examples:[{title:`Debt taken deliberately and tracked`,code:`We had three weeks to a launch and a real problem: the checkout flow had no test
coverage on the payment step.

My decision: ship, because the payment step is 12 lines of SDK glue and the week
was needed for the migration. But I did not ship it silently.

What I did: wrote it into the launch checklist as a named gap with an owner and a
date, and said it out loud in the launch review so it was not a surprise later.

The condition: if the payment provider changed its API before we paid it down, I
would delay the launch instead. We never hit that condition, and the tests
landed the week after.

Honest part: that was luck as much as planning. I have no idea whether I would
have held the line.`,explanation:`Tracking the debt, naming the condition that would have stopped you, and
admitting the luck is what makes this read as honest rather than rehearsed.`}]},{id:`behavioural-39`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a production risk that nobody else had noticed.`,answer:`Graded on proactive detection and, critically, on whether you actually did
something about it. Noticing a risk and raising it in passing is much weaker
than noticing it and removing it or forcing a decision. A strong answer makes
the risk concrete to a non-engineer - what breaks, who notices, how slowly -
because an unquantified risk loses its urgency. If you raised it and were
ignored, say what you did next, since being overridden and then doing nothing is
the weak version.`,examples:[{title:`Concrete risk, action taken`,code:`Nobody owned our backup restore path. We ran backups daily and had never restored
one.

Making it concrete for a non-engineer: I said the failure mode was not a slow
disk, it was that we would discover during an outage that the backups did not
work, and we would find that out at the worst possible moment.

Making it cheap to act on: I restored last month's backup into a scratch database
and timed it. It failed after 40 minutes on a corrupt segment.

So the risk was not hypothetical - it was already true.

What I did: I did not raise it as an opinion. I put the restore in front of the
team with the corrupt segment as evidence, and we made it a weekly automated
job. It has now caught two bad backups.

The part that mattered: I ran the test rather than asking someone to trust that
backups work.`,explanation:`Running the restore yourself, and making the risk concrete for a non-engineer,
is what turns a worry into something people act on.`}]},{id:`behavioural-40`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you had to function under significant ambiguity.`,answer:`Sustained productivity despite missing information. Graded on whether you made
progress on the parts that were genuinely knowable while isolating the parts
that were not, and on how you avoided either guessing confidently or waiting to
be told. The senior move is being explicit about your assumptions and about which
decisions the ambiguity actually blocks - separating decisions that are
reversible from those that are not, and stalling only on the irreversible ones.
Saying what you did not do, and why, is part of the answer.`,examples:[{title:`Isolating what was genuinely unknown`,code:`Four weeks into a new role I was told to improve engagement on a product I had
never used, with no metrics, no baseline, and no access to research.

What I could act on without the missing information: the technical health of the
funnel - load time, error rates, form abandonment at each step. That needed no
product context and turned out to be where the problem was.

What I refused to decide: whether the strategy was wrong. That was reversible
and cheap to explore, but I could not tell from inside the data.

So I split it: shipped the perf work, and asked for a decision meeting with the
two metrics I could not get myself - session recordings and a control group.

Honest note: two weeks of that felt like guessing, and I should have said that
out loud to my manager in week one instead of week three.`,explanation:`Isolating the knowable, deferring only the irreversible, and admitting the delay
in escalating is the mature shape.`}]},{id:`behavioural-41`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Why are you leaving your current role?`,answer:`One of the highest-stakes questions in the loop, and a credibility test. Four
beats: the trigger stated neutrally without blaming anyone, a brief description
of the situation, a specific pull toward the role in front of you, and why this
company specifically. The two common failures are a criticism of your current
employer, which reads as a forecast of how you will talk about us, and a generic
pull that could be pasted into any application. If you are leaving because of a
specific problem, say it plainly and then show what you did about it.`,examples:[{title:`Neutral trigger, specific pull`,code:`WEAK
The management was not supportive and I did not get along with my lead.
That reads as a forecast about us.

STRONG
My scope narrowed. I joined as the person who would own the front-end
architecture, and over two years the work turned into maintaining features other
people designed. Nothing wrong with the team - the change came from the product
direction.

The pull: I want to be the person who decides, and I want that decision-making
to be about a system end to end rather than about a quarter of it.

Why here specifically: name two things that are real reasons - a team problem
they are solving, a technical direction they have committed to - not the funding
or the brand.

What I did about it rather than just leaving: I raised the scope question with
my lead in January. We restructured my role for six months and it did not stick,
which is why I am looking now.`,explanation:`Showing you attempted the fix before leaving is the part that separates a
considered move from a complaint.`}]},{id:`behavioural-42`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Why should we hire you?`,answer:`An opinion question, so PREP rather than STAR. Do not summarise your resume -
they already have it. Pick the two or three things you would genuinely contribute
in the first six months and make each one checkable against something they said
they need. Strong answers include a specific weakness in their current setup that
you would address, which shows you have thought about the actual job.
Overclaiming is the risk - every claim you make here becomes a topic they probe.`,examples:[{title:`PREP, aimed at their problem`,code:`P - Point
Three things I would contribute in the first six months.
R - Reason
Based on what you said about their specific problem, these are the parts of it
I have actually done.
E - Example
1. Bundle and load: I cut initial JS by 180kb by auditing composition rather
   than swapping libraries, and I left the CI budget behind so it stayed down.
2. State migration: I moved an app from NgRx to signals one vertical slice at a
   time, keeping observables where cancellation and retry mattered. Five weeks
   of two paradigms, then one.
3. The thing you are probably worse at than you think: nobody on your team
   seems to own incident follow-up, and the last three postmortems have action
   items that were never closed. I close those.
P - Point
The common factor is that all three end with a mechanism still running, not a
fix I made once.`,explanation:`Each claim is a checkable experience rather than a trait, and the third one shows
you have thought about the actual job.`}]},{id:`behavioural-43`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you prioritised safety, ethics or trust over a metric.`,answer:`Graded on naming the integrity question cleanly enough that the interviewer
knows you actually saw it, and on the cost you accepted. Be concrete about the
kind of problem - a known security regression, a data-handling issue, a
user-trust concern - because vague framing means the interviewer cannot tell
whether you recognised a real ethical problem or are performing one. Also:
which channel you used, and how you resisted becoming a permanent blocker. The
outcome matters much less than the cost you chose to bear.`,examples:[{title:`Naming the cost you accepted`,code:`We found a logging library that was sending error payloads to a third-party
service. Payloads included form field names, and in one case the values, because
an error message interpolated them.

The metric pressure: removing it meant losing the error grouping that had cut
our triage time roughly in half.

What I did: I did not simply argue. I measured the actual exposure - a scripted
query of what fraction of error payloads in 30 days contained anything
resembling submitted data - so the conversation was about a number rather than a
principle.

The cost I accepted: I had personally spent two weeks building the
error-dashboard workflow on top of it, and I led the migration away from it.
Triage went back up. I also kept a local-only version so we still had grouping.

What I would do differently: raise it to security earlier rather than resolving
it inside the team.`,explanation:`Measuring the exposure turns a principle argument into a decision, and admitting
the cost you personally bore is what makes it credible.`}]},{id:`behavioural-44`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you raised a problem you found that nobody had asked about.`,answer:`Distinct from the production-risk question, which is about a system that could fail:
this is about a process or quality gap you noticed, where the cost is that the same
thing happens again. The graded elements are that you raised it rather than sitting
on it, that you raised it in a channel that could act on it rather than the loudest
one, and whether it is still closed. Saying "it is deprioritised twice and I asked
again this month" is the strongest ending available, because it shows you are still
accountable rather than relieved to have mentioned it.`,examples:[{title:`Early, private, with a recommendation`,code:`During a release review I noticed our seeded test data had been copied from a
production export, including a column with customer emails. It was in an internal
repo behind access control, but it was still customer data in a place it did not
belong.

What I did not do: file a ticket and move on, and I did not raise it in the team
channel where the owners would read it as a debate.

What I did: messaged the two people who owned the repo directly, same day, with the
specifics and a recommendation - scrub the column now, replace the seed with
synthetic data, and add a CI check that fails on email-shaped strings in migrations.

The cost: that pushed our migration by four days, which I had to explain to a
release date I had also been holding.

Did it get closed? The scrub is done. The CI check is still open - it has been
deprioritised twice, and I asked about it again this month rather than assuming
someone had it.`,explanation:`Same-day, private, with a fix rather than an alarm, and naming what is still not
closed - that last detail proves you are still accountable.`}]},{id:`behavioural-45`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about something you did that you are not proud of.`,answer:`This is the failure question asked personally rather than professionally, so the
grading is about accountability without self-flagellation. What matters: whether
you name something real and genuinely uncomfortable, whether you avoid the
compliment sandwich, and whether your conclusion is a mechanism rather than an
apology. An answer with a shallow lesson fails even if the story is good. Note
also that a small bad thing reads as honest, while a catastrophic one reads as
either a fabrication or a pattern you have not recognised in yourself.`,examples:[{title:`Uncomfortable and specific`,code:`I reviewed a junior's PR with one line of feedback - nit: fix this - on a file
with 200 lines in it. I was late for something and I did it in about ninety
seconds.

Why I am not proud of it: that comment is indistinguishable from saying your work
is not worth my time, which is what it told her. She read it that way. She stopped
asking me for reviews for two months.

What I did: I noticed, went back, and apologised properly - not for the time, for
the framing. Then asked directly what had put her off.

What I installed: I now leave either a substantive review or say I cannot get to
it properly today and suggest someone else. No more one-line reviews.

What I still feel awkward about: I did not raise it at the time. I only noticed
because a third person mentioned she had been quiet in reviews. That is the part
I actually learned from.`,explanation:`The story is small, the embarrassment is real, and the final line identifies the
actual failure - not reacting sooner - rather than the nit itself.`}]},{id:`behavioural-46`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you sought out perspectives different from your own.`,answer:`Graded on whether you actually changed your mind. Seeking perspectives you
already agree with is not the competency. The strong answer names who you
deliberately went to and why them specifically, states what they told you that
you had not considered, and - the part most candidates skip - says plainly where
they were right. Wording matters: I was wrong about X is the signal. If your
conclusion was that you were right, that is a weaker answer and you should be
able to say why their view did not move you.`,examples:[{title:`Including where they were right`,code:`I was convinced our quarterly planning was broken because the teams had no
visibility of each other's timelines.

So I went and asked the two teams who were always asked to move, separately, and
then asked the platform lead who owned the scheduling tool. All three said the
tooling was fine and the problem was that we were renegotiating priorities in the
last week, every quarter.

That is not what I expected. They were right - I had been treating the timeline
scramble as a visibility problem because I only ever saw it from my own side.

What changed: I moved priority negotiation to week one of the quarter and gave it
a fixed slot. The timeline scramble has not happened in three quarters.

What I got wrong that I did not correct: I still think the tooling could show
cross-team load better. I just no longer think that is the problem.`,explanation:`Naming who you asked, saying what you learned, and admitting where you remained
unconvinced - all three - reads as genuine intellectual humility.`}]},{id:`behavioural-47`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time someone was being excluded and you helped.`,answer:`The graded distinction is intervening versus observing, and whether you involved
yourself rather than feeling bad about it. Strong answers are specific about the
observable behaviour, safe in the moment, and effective - and they avoid the trap
of narrating a discrimination story in which you single-handedly corrected a
systemic issue. The most credible shape is usually the low-stakes one: a meeting
where someone was talked over, a review where an area of work was dismissed, an
offhand remark you did not let pass. Graded also: whether you raised it in the
moment or privately afterwards, and how you followed up.`,examples:[{title:`Small, observable, in the moment`,code:`In a design review, the most experienced person in the room twice answered a
question I had asked about my own component before I finished the sentence.

In the moment, the second time: I said, quite neutrally, let me finish the
thought, then I would like to come back to your point. Then I actually did come
back to their point, and said it was worth discussing.

That matters more than it sounds - if I had just cut them off repeatedly, I would
have looked like I was defending territory rather than the conversation.

Afterwards, separately: I mentioned to my manager that I had noticed it twice,
not as a complaint, and that I was not sure how common it was.

What changed: nothing dramatic. But a few months later the same person asked me a
direct question about the component instead of assuming. Which is what I wanted.

Honest part: I did not raise it again, and I still do not know how widespread it
was.`,explanation:`The move is small, in the moment, non-accusatory, and includes giving the other
person credit - which keeps it from reading as territorial.`}]},{id:`behavioural-48`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`Tell me about a time you worked with someone whose style was very different from yours.`,answer:`Graded on whether you genuinely adapted rather than merely tolerated, and on
whether you learned something specific about the other approach - ideally
something you adopted. Tolerance is not the competency. A strong answer names the
specific difference (planning-first versus exploratory, verbose versus terse,
comfortable with ambiguity versus needing closure), describes the specific
friction it caused, and describes the concrete change you made to your own
behaviour. The follow-up trap is what you learned about yourself - if you only
learned about them, the answer is thin.`,examples:[{title:`Adapted, and adopted something`,code:`I plan everything before starting. My pair on the migration wrote a throwaway
script, ran it against production data and iterated. I thought that was
reckless. I was wrong, and here is why.

What I had been doing: writing a full design doc, getting it reviewed, then
implementing. For the schema migration that meant three weeks before any real
feedback, and the doc was written against assumptions about the data I could have
tested in an hour.

What he taught me: for anything I cannot fully specify up front, build the
smallest script that proves the risk and run it. The script becomes either the
migration or the reason to write the doc.

What I changed: I now do a one-hour spike on anything involving data I have not
seen. For the second migration I did it, found two columns the docs said were NOT
NULL that were not, and avoided a bad week.

Honest caveat: I still write the doc for changes with real reversibility risk. I
am not abandoning planning.`,explanation:`Adopting something from the other person, with evidence it worked on a later
task, is what separates adaptation from tolerance.`}]},{id:`behavioural-49`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isMarked:!1,question:`Tell me about a technical decision where reasonable engineers would disagree. What did you decide?`,answer:`This is the highest-value question for a senior candidate and the one most often
wasted on a project description instead of a decision. Anchor the whole story on
the central trade-off - consistency versus availability, build versus buy,
monolith versus services. What is being probed is whether you can name the
alternative a competent peer would have chosen, articulate why you rejected it,
and state the condition under which you would change your mind. An answer with no
credible alternative is not a decision, it is an implementation.`,examples:[{title:`Trade-off stories worth banking for Angular`,code:`Strong candidates, each with a real axis:

1. NgRx to Signals migration, or a principled refusal to do it.
   Axis: consistency of one state paradigm vs. fitting async work.
2. Bundle budgets as a hard CI failure.
   Axis: PR friction vs. a whole class of late regressions.
3. Modular monolith vs. micro-frontends.
   Axis: deployment independence vs. dependency and runtime cost.
4. SSR and hydration vs. CSR under Core Web Vitals pressure.
   Axis: first-paint metrics vs. server cost and complexity.
5. A major Angular upgrade driven across teams.
   Axis: one risky migration vs. accumulating version debt.
6. Adopting a component library vs. building in-house.
   Axis: control and fit vs. delivery speed and maintenance.

For each, be able to say: the option I rejected, why, what it cost, and what
would make me reverse.`,explanation:`Having six of these ready covers most senior technical-judgement questions,
because the axis matters more than the project.`}]},{id:`behavioural-50`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isMarked:!1,question:`How do you decide what to optimise for when everything is a trade-off?`,answer:`A philosophy question, so PREP rather than STAR. The graded content is whether
you can name the trade-off explicitly rather than saying it depends - because
it depends without naming what it depends on is not an answer. Strong responses
define the non-negotiable first (data integrity, user trust, or the constraint
that actually binds), then rank the rest, and crucially say what would make them
re-rank. Saying what you refuse to trade is what distinguishes a senior answer,
since most candidates claim to optimise everything equally.`,examples:[{title:`Naming the ranking`,code:`P - Point
I decide the non-negotiable first, then rank the rest, and I say out loud what
I will not trade.
R - Reason
Optimising everything equally is not a priority, it is an avoidance. And if I
cannot say what I refuse to trade, I have not made a decision - I have deferred
it.
E - Example
On the checkout work: user trust and payment correctness are non-negotiable, so
latency is where the pressure goes. I said that explicitly to the team, which
meant a complaint about latency got a this is the trade I chose answer instead
of an argument. Latency was the thing I gave up, not correctness. Later, when a
cache could remove 400ms without risking either, that was a pure win and we took
it.
P - Point
The thing I watch for is when the ranking was set by a deadline rather than by
the problem. That is worth revisiting out loud.`,explanation:`Naming what you refuse to trade, and separating binding constraints from
negotiable ones, is the actual senior answer.`}]}]};var g=`q-marked-flags`;var w=`q-read-flags`;var y=`q-flags`;var b=Object.values(m).flat();var v={"angular-7":`performance-21`,"angular-23":`performance-22`,"angular-28":`performance-23`};var k={questionData:[]};function x(n){if(!n)return[];try{let a=JSON.parse(n);return Array.isArray(a)?a:[]}catch{return[]}}function r(n,a){let t=x(n).filter(e=>typeof e?.id==`string`).map(e=>[v[e.id]??e.id,a(e)]).filter(e=>e[1]!==null);return Object.fromEntries(t)}function S(){let n=localStorage.getItem(g);if(n!==null)return r(n,e=>typeof e?.isMarked==`boolean`?e.isMarked:null);let a=localStorage.getItem(w);if(a!==null)return r(a,e=>typeof e?.isRead==`boolean`?e.isRead:null);let t=localStorage.getItem(y);return t?r(t,e=>typeof e?.forLater==`boolean`?e.forLater:null):{}}var j=V({providedIn:`root`},Q(k),$(n=>({onInit(){let a=S();H(n,{questionData:b.map(t=>G(W({},t),{isMarked:a[t.id]===!0}))}),ru(()=>{localStorage.setItem(g,JSON.stringify(n.questionData().map(({id:t,isMarked:e})=>({id:t,isMarked:e})).filter(t=>t.isMarked)))})}})),J(n=>({toggleMarked(a){H(n,t=>({questionData:t.questionData.map(e=>e.id===a?G(W({},e),{isMarked:!e.isMarked}):e)}))},replaceMarkedFlags(a){let t=new Set(a);H(n,e=>({questionData:e.questionData.map(l=>G(W({},l),{isMarked:t.has(l.id)}))}))}})));export{j as t};