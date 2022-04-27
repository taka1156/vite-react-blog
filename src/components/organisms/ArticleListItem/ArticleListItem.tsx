import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ArticleCategory } from '@/components/molecules/ArticleCategory/ArticleCategory';
import { ArticleTags } from '@/components/molecules/ArticleTags/ArticleTags';

export interface ListItemProps {
  article: ArticleInfo;
}

export const ArticleListItem: React.FC<ListItemProps> = ({ article }) => {
  const { id, title, summary, tags, category } = article;
  return (
    <li className="flex justify-center">
      <div className="m-1 p-3 w-full border-2 border-blue-500 rounded-lg">
        <ArticleCategory
          category={category}
          className="flex justify-end items-center"
        />
        <BaseLink link={`/article/${id}`}>
          <BaseHeading
            hLv={2}
            text={title}
            underlined={false}
            className="text-xl text-blue-500 hover:opacity-70"
          />
        </BaseLink>

        <BaseText text={summary} className="text-sm" />
        <div className="border border-b-1 border-blue-500"></div>
        <ArticleTags tags={tags} className="py-2" />
      </div>
    </li>
  );
};
