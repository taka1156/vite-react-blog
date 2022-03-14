import { ArticleBadge } from '@/components/molecules/ArticleBadge/ArticleBadge';

export interface CategoryProps {
  category: ArticleCategory;
  className?: string;
}

export const ArticleCategory: React.FC<CategoryProps> = ({
  category,
  className = 'flex',
}) => {
  const { id } = category;

  return (
    <div className={className}>
      <ArticleBadge badge={category} link={`/category/${id}`} outlined={false} />
    </div>
  );
};
