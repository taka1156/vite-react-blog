import { marked } from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  breaks: true,
  gfm: true,
});

export { marked };
