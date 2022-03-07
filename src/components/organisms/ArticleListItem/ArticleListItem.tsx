import { BaseHeading } from '@/components/Atoms/BaseHeading/BaseHeading';
import { BaseText } from '@/components/Atoms/BaseText/BaseText';
import { Category } from '@/components/molecules/ArticleCategory/ArticleCategory';
import { Tags } from '@/components/molecules/ArticleTags/ArticleTags';

type ArticleProps = {
  article: Article;
};

export const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { title, summary, tags, category } = article;
  return (
    <>
      <div>
        <Category category={category} />
        <div className="border-b-1 border-blue-500" />
        <BaseHeading hLv={2} text={title} underlined={true} />
        <BaseText text={summary} />
        <Tags tags={tags} />
      </div>
    </>
  );
};
