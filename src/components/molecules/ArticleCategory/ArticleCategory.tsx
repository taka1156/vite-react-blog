import { BaseText } from '../../Atoms/BaseText/BaseText';
import { BaseImg } from '../../Atoms/BaseImg/BaseImg';
import { BaseLink } from '../../Atoms/BaseLink/BaseLink';

export interface CategoryProps {
  category: ArticleCategory;
}

export const ArticleCategory: React.FC<CategoryProps> = ({ category }) => {
  const { id, name, img } = category;
  const { url } = img;

  const categoryCp = (
    <div className="flex">
      <div className="flex justify-between p-4 border-2 border-blue-500 rounded-lg">
        <div>
          <BaseText text={name} />
        </div>
        <div>
          <BaseImg img={url} alt={`${name}のロゴ`} size={'sm'} />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <BaseLink cp={categoryCp} link={`category/${id}`}></BaseLink>
    </>
  );
};
