import { marked } from 'marked';
import '../../../node_modules/github-markdown-css/github-markdown-light.css';

type Props = { body: string };

const ArticleBody: React.VFC<Props> = ({ body }) => {
  const html = marked(body);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="markdown-body" />
  );
};

export default ArticleBody;
