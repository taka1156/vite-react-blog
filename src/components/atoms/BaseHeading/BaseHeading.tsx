import classNames from 'classnames';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  hLv: HeadingLevel;
  text: string;
  underlined?: boolean;
  className?: string;
}

const headingFontSize = (h: HeadingLevel = 1) => {
  const HeadingSize = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'].reverse();
  return `${HeadingSize[h - 1]}`;
};

export const BaseHeading: React.FC<HeadingProps> = ({
  text,
  hLv = 1,
  underlined = false,
  className = ''
}) => {
  const HeadingTag = `h${hLv}` as React.ElementType;
  const headingClass = classNames(headingFontSize(Number(hLv) as HeadingLevel), {
    'border-b-4 border-indigo-400 pb-2': underlined,
    className
  });
  return <HeadingTag className={headingClass}>{text}</HeadingTag>;
};
