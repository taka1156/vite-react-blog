import { ArticleBody } from '@/components/molecules/ArticleBody/ArticleBody';
import { ArticleHeader } from '@/components/organisms/ArticleHeader/ArticleHeader';
import { BaseText } from '../atoms/BaseText/BaseText';

export interface ArticleTemplate {
  article: ArticleInfo | null;
}

export const ArticleTemplate: React.FC<ArticleTemplate> = ({ article }) => {
  if (article != null) {
    return (
      <div className="mx-auto md:w-4/5">
        <ArticleHeader article={article} />
        <ArticleBody body={article.body} />
      </div>
    );
  } else {
    return (<BaseText text='記事がありませんでした。' />);
  }
};
