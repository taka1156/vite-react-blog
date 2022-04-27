import classNames from 'classnames';

type ImgSize = 'sm' | 'md' | 'lg';

export interface ImgProps {
  img: string;
  alt: string;
  size?: ImgSize;
  className?: string;
}

const imgSizeClass = (size: ImgSize) => {
  switch (size) {
    case 'sm':
      return 'w-8 h-8';
    case 'lg':
      return 'w-15 h-15';
    case 'md':
      return 'w-10 h-10';
    default:
      return '';
  }
};

export const BaseImg: React.FC<ImgProps> = ({ img, alt, size = 'sm', className = '' }) => {
  const imgClass = classNames(imgSizeClass(size), className);
  return <img src={img} alt={alt} className={imgClass} />;
};
