import { BaseHeading } from '@/components/Atoms/BaseHeading/BaseHeading';
import { BaseText } from '@/components/Atoms/BaseText/BaseText';
import { ArticleCategory } from '@/components/molecules/ArticleCategory/ArticleCategory';
import { ArticleTags } from '@/components/molecules/ArticleTags/ArticleTags';

export interface ListItemProps {
  article: Article;
};

export const ArticleListItem: React.FC<ListItemProps> = ({ article }) => {
  const { title, summary, tags, category } = article;
  return (
    <>
      <div className="m-1 p-1 border-2 border-blue-500 rounded-lg">
        <ArticleCategory category={category} />
        <div className="border-b-1 border-blue-500" />
        <BaseHeading hLv={2} text={title} underlined={true} />
        <BaseText text={summary} />
        <ArticleTags tags={tags} className="py-2" />
      </div>
    </>
  );
};
