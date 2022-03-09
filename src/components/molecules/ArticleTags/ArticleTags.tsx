import { BaseText } from '@/components/Atoms/BaseText/BaseText';
import { BaseImg } from '@/components/Atoms/BaseImg/BaseImg';
import { BaseLink } from '@/components/Atoms/BaseLink/BaseLink';

export interface TagsProps {
  tags: ArticleTag[];
  className?: string;
}

export const ArticleTags: React.FC<TagsProps> = ({ tags, className="" }) => {
  
  const tagCp = ({ name, img }: ArticleTag) => {
    const { url } = img;

    return (
      <div className="flex justify-between">
        <BaseText text={name} className="p-1" />
        <BaseImg img={url} alt={`${name}のロゴ`} size={'sm'} className="p-1" />
      </div>
    );
  };

  return (
    <div className={"flex justify-start " + className}>
      {tags.map((tag) => (
        <BaseLink cp={tagCp(tag)} link={`tag/${tag.id}`} className="m-1 p-1 border-2 border-blue-500 rounded-full"></BaseLink>
      ))}
    </div>
  );
};
