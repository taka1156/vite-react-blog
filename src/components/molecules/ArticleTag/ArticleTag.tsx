import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';
import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';

export interface TagProps {
  tag: ArticleTag;
  className?: string;
}

export const ArticleTag: React.FC<TagProps> = ({ tag, className = 'flex' }) => {
  const { id } = tag;

  return (
    <div className={className}>
      <ArticleBadge
        badge={tag}
        link={`/tag/${id}`}
        outlined={true}
      />
    </div>
  );
};
