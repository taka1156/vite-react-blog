import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

export interface ListProps {
  articleList: Article[];
};

export const ArticleList: React.VFC<ListProps> = ({ articleList }) => {
  return (
    <>
      {articleList.map((article) => (
        <ArticleListItem article={article} />
      ))}
    </>
  );
};
