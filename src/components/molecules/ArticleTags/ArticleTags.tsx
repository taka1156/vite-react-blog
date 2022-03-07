import { BaseText } from '../../Atoms/BaseText/BaseText';
import { BaseImg } from '../../Atoms/BaseImg/BaseImg';
import { BaseLink } from '../../Atoms/BaseLink/BaseLink';

export interface TagsProps {
  tags: ArticleTag[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => {
  

  const tagCp = ({ name, img }: ArticleTag) => {
    const { url } = img;

    return (
      <div className="flex">
        <BaseText text={name} />
        <BaseImg img={url} alt={`${name}のロゴ`} size={'sm'} />
      </div>
    );
  };

  return (<>{tags.map((tag) => <BaseLink cp={tagCp(tag)} link={`tag/${tag.id}`}></BaseLink>) }</>);
};
