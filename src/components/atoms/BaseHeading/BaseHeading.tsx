import classNames from 'classnames';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  hLv: HeadingLevel;
  text: string;
  underlined?: boolean;
  className?: string;
}

export const BaseHeading: React.FC<HeadingProps> = ({
  text,
  hLv = 1,
  underlined = false,
  className = '',
}) => {
  const HeadingTag = `h${hLv}` as React.ElementType;
  const headingClass = classNames(
    {'border-b-2 border-indigo-400 pb-2': underlined},
    className
  );
  return <HeadingTag className={headingClass}>{text}</HeadingTag>;
};
