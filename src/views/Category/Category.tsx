import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticles } from '@/api';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ArticleList } from '@/components/organisms/ArticleList/ArticleList';

export const Category: React.FC = () => {
  const [articleList, setArticleList] = useState<MicroCMSArticleResult>();
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [pageIndex, setPageIndex] = useState<number>(0);
  const { categoryId, page } = useParams<{ categoryId: string, page: string }>();

  useEffect(() => {
    setPageIndex(parseInt(page!) || 1);
    getArticles(pageIndex - 1, `category[equals]${categoryId}`).then((result) => setArticleList(result!));

    setPageInfo({
      current: pageIndex,
      maxPage: parseInt(articleList?.totalCount!) / 5 || 0,
      pageKind: '',
    });
  }, [articleList]);

  return (
    <main className="mx-auto md:w-3/5">
      <BaseHeading
        hLv={1}
        underlined={true}
        text="tag"
        className="text-3xl flex justify-center items-center my-3"
      />
      <ArticleList pageInfo={pageInfo!} articleList={articleList?.contents!} />
    </main>
  );
};
