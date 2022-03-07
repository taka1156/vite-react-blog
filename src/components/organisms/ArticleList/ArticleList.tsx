import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

type ArticleProps = {
  articleList: Article[];
};

export const ArticleList: React.FC<ArticleProps> = ({ articleList }) => {
  return (
    <>
      {articleList.map((article) => (
        <ArticleListItem article={article} />
      ))}
    </>
  );
};
