import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { ClassificationListItem } from '../ClassificationListItem/ClassificationListItem';

export interface ClassificationListProps {
  classificationType: 'tag' | 'category';
  classifications: (ArticleTag | ArticleCategory)[] | null;
}

export const ClassificationList: React.FC<ClassificationListProps> = ({
  classificationType,
  classifications,
}) => {
  if (classifications != null) {
    return (
      <ul>
        {classifications.map((classification) => (
          <ClassificationListItem
            key={classification.id}
            classificationType={classificationType}
            classification={classification}
          />
        ))}
      </ul>
    );
  } else {
    return <BaseText text="記事がありませんでした。" />;
  }
};
