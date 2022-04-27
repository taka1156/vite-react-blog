import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';

export interface ClassificationListItemProps {
  classificationType: 'tag' | 'category';
  classification: ArticleTag | ArticleCategory;
}

export const ClassificationListItem: React.FC<ClassificationListItemProps> = ({
  classificationType,
  classification,
}) => {
  const { id, name, img } = classification;
  return (
    <li className="flex justify-between border-2 border-blue-500 m-2 p-5 border-l-8">
      <BaseLink link={`/${classificationType}/${id}`} className="text-2xl">
        {name}
      </BaseLink>
      <BaseImg img={img.url} alt={`${name}のロゴ`} className="w-18 h-18" />
    </li>
  );
};
