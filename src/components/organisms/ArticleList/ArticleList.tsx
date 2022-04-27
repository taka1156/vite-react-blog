import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticlePagination } from '@/components/molecules/ArticlePagination/ArticlePagination';

export interface ListProps {
  pageInfo: PageInfo;
  articleList: ArticleInfo[] | null;
}

export const ArticleList: React.FC<ListProps> = ({ pageInfo, articleList }) => {
  if (articleList != null) {
    return (
      <>
        <ArticlePagination pageInfo={pageInfo} />
        <ul>
          {articleList.map((article) => (
            <ArticleListItem key={article.id} article={article} />
          ))}
        </ul>
        <ArticlePagination pageInfo={pageInfo} />
      </>
    );
  } else {
    return <BaseText text="記事がありませんでした。" />;
  }
};
