import { BaseText } from '../../Atoms/BaseText/BaseText';
import { BaseImg } from '../../Atoms/BaseImg/BaseImg';
import { BaseLink } from '../../Atoms/BaseLink/BaseLink';

export interface CategoryProps {
  category: ArticleCategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  const { id, name, img } = category;
  const { url } = img;

  const categoryCp = (
    <div className="flex">
      <BaseText text={name} />
      <BaseImg img={url} alt={`${name}のロゴ`} size={'lg'} />
    </div>
  );

  return (
    <>
      <BaseLink cp={categoryCp} link={`category/${id}`}></BaseLink>
    </>
  );
};
