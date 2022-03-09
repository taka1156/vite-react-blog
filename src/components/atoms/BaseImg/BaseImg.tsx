import classNames from 'classnames';

type ImgSize = 'sm' | 'md' | 'lg';

export interface ImgProps {
  img: string;
  alt: string;
  size: ImgSize;
  className?: string;
}

const imgSizeStyle = (size: ImgSize) => {
  switch (size) {
    case 'sm':
      return 'w-10 h-10';
    case 'lg':
      return 'w-18 h-18';
    default:
      return 'w-14 h-14';
  }
};

export const BaseImg: React.FC<ImgProps> = ({ img, alt, size = 'sm', className = '' }) => {
  const style = classNames(imgSizeStyle(size), className);
  return <img src={img} alt={alt} className={style} />;
};
