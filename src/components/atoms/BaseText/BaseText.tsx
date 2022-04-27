import classNames from 'classnames';

export interface TextProps {
  text: string;
  className?: string;
}

export const BaseText: React.FC<TextProps> = ({ text, className='text-xl' }) => {
  const textClass = classNames(className);
  return <p className={textClass}>{text}</p>;
};
