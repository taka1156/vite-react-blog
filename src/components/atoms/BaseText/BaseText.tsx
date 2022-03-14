import classNames from 'classnames';

export interface TextProps {
  text: string;
  className?: string;
}

export const BaseText: React.FC<TextProps> = ({ text, className='' }) => {
  const textClass = classNames('text-xl', className);
  return <p className={textClass}>{text}</p>;
};
