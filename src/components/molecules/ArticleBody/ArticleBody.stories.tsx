import { marked } from 'marked';

type Props = { body: string };

const ArticleBody: React.VFC<Props> = ({ body }) => {
  const html = marked(body);
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="markdown-body" />
  );
};

export default ArticleBody;
