import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';

export interface CategoryProps {
  category: ArticleCategory;
  className?: string
}

export const ArticleCategory: React.FC<CategoryProps> = ({ category, className="" }) => {
  const { id, name, img } = category;
  const { url } = img;

  const categoryCp = (
    <div className="flex justify-end">
      <div className="flex m-1 p-1 border-2 border-blue-500 rounded-full">
        <div>
          <BaseText text={name} className="p-1" />
        </div>
        <div>
          <BaseImg img={url} alt={`${name}のロゴ`} size={'sm'} className="p-1" />
        </div>
      </div>
    </div>
  );

  return (
    <div className={className}>
      <BaseLink cp={categoryCp} link={`category/${id}`}></BaseLink>
    </div>
  );
};
