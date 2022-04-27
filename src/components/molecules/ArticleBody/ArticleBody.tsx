import { marked } from '@/utils/marked';
import '../../../../node_modules/github-markdown-css/github-markdown-light.css';
import '../../../../node_modules/highlight.js/styles/github.css';

export interface BodyProps {
  body: string;
}

export const ArticleBody: React.FC<BodyProps> = ({ body }) => {
  const html = marked(body);
  return (
    <div className="bg-gray-500 my-4 w-4/5 md:w-full">
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown-body"
      />
    </div>
  );
};
