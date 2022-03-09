import classNames from 'classnames';

export interface TextProps {
  text: string;
  className?: string;
}

export const BaseText: React.VFC<TextProps> = ({ text, className='' }) => {
  const style = classNames('text-xl', className);
  return <p className={style}>{text}</p>;
};
