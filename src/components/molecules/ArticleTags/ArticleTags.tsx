import classNames from 'classnames';
import { ArticleTag } from '@/components/molecules/ArticleTag/ArticleTag';

export interface TagsProps {
  tags: ArticleTag[];
  className?: string;
}

export const ArticleTags: React.FC<TagsProps> = ({ tags, className = '' }) => {
  const tagsStyle = classNames('flex flex-wrap', className);
  return (
    <div className={tagsStyle}>
      {tags.map((tag) => (
        <ArticleTag tag={tag} className='m-1' />
      ))}
    </div>
  );
};
