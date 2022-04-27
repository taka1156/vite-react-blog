import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ArticleCategory } from '@/components/molecules/ArticleCategory/ArticleCategory';
import { ArticleTags } from '@/components/molecules/ArticleTags/ArticleTags';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
dayjs.locale('ja');

export interface HeaderProps {
  article: ArticleInfo;
}

export const ArticleHeader: React.FC<HeaderProps> = ({ article }) => {
  const { id, title, summary, tags, category, createdAt, updatedAt } = article;

  const formatDate = (date = '') => {
    if (date === '') return '--/--/--';
    return dayjs(date).format('YYYY/M/D');
  };

  const fDate = {
    createdAt: formatDate(createdAt),
    updatedAt: formatDate(updatedAt),
  };

  return (
    <div className="flex justify-center">
      <div className="m-1 p-3 w-full border-2 border-blue-500 rounded-lg">
        <ArticleCategory
          category={category}
          className="flex justify-end items-center"
        />
        作成日:{' '}
        <time className="mr-0.5 text-base tracking-widest" dateTime={createdAt}>
          {fDate.createdAt}
        </time>
        ~ 更新日:
        <time className="ml-0.5 text-base tracking-widest" dateTime={updatedAt}>
          {fDate.updatedAt}
        </time>
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
    </div>
  );
};
