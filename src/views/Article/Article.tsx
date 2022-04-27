import { ArticleTemplate } from '@/components/template/ArticleTemplate';
import { getArticle } from '@/api/';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleInfo>();

  useEffect(() => {
    console.log(id);
    if (id != null) {
      getArticle(id).then((article) => {
        setArticle(article!);
      });
    }
  }, []);

  return <ArticleTemplate article={article!} />;
};
