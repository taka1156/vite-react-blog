import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

export interface ListProps {
  articleList: Article[];
};

export const ArticleList: React.FC<ListProps> = ({ articleList }) => {
  return (
    <>
      {articleList.map((article) => (
        <ArticleListItem article={article} />
      ))}
    </>
  );
};
