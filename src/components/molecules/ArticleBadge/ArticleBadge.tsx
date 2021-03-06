import classNames from 'classnames';
import { BaseText } from '@/components/atoms/BaseText/BaseText';
import { BaseImg } from '@/components/atoms/BaseImg/BaseImg';
import { BaseLink, LinkProps } from '@/components/atoms/BaseLink/BaseLink';

export interface BadgeProps {
  badge: BadgeType;
  outlined: boolean;
  link: string;
  className?: string;
}

export type BadgeType = ArticleCategory | ArticleTag;

export const ArticleBadge: React.FC<BadgeProps> = ({
  badge,
  link,
  outlined = false,
  className = 'flex justify-self-center items-center',
}) => {
  const badgeClass = classNames(
    outlined
      ? 'bg-white border border-blue-500 text-blue-500'
      : 'bg-blue-700 text-white',
    'px-2 rounded-full hover:opacity-70',
    className
  );

  const { name, img } = badge;
  const { url } = img;

  return (
    <BaseLink link={link}>
      <div className={badgeClass}>
        <BaseText text={name} className="text-xs" />
        <BaseImg
          img={url}
          alt={`${name}のロゴ`}
          size="sm"
          className="m-0 p-1.5"
        />
      </div>
    </BaseLink>
  );
};
