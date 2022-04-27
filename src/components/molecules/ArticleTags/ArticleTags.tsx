import classNames from 'classnames';
import { ArticleTag } from '@/components/molecules/ArticleTag/ArticleTag';

export interface TagsProps {
  tags: ArticleTag[];
  className?: string;
}

export const ArticleTags: React.FC<TagsProps> = ({ tags, className = '' }) => {
  const tagsClass = classNames('flex flex-wrap', className);
  return (
    <div className={tagsClass}>
      {tags.map((tag) => (
        <ArticleTag key={tag.id} tag={tag} className='m-0.5' />
      ))}
    </div>
  );
};
