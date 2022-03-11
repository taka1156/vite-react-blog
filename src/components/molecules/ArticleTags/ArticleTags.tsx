import { ArticleTag } from '@/components/molecules/ArticleTag/ArticleTag';

export interface TagsProps {
  tags: ArticleTag[];
  className?: string;
}

export const ArticleTags: React.FC<TagsProps> = ({ tags, className = '' }) => {
  return (
    <div className={'flex flex-wrap ' + className}>
      {tags.map((tag) => (
        <ArticleTag tag={tag} className='m-1' />
      ))}
    </div>
  );
};
