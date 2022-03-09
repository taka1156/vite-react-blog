import { marked } from 'marked';
import '../../../../node_modules/github-markdown-css/github-markdown-light.css';

export interface BodyProps  { body: string };

export const ArticleBody: React.VFC<BodyProps> = ({ body }) => {
  const html = marked(body);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="markdown-body" />
  );
};
