import classNames from 'classnames';

type ImgSize = 'sm' | 'md' | 'lg';

export interface ImgProps {
  img: string;
  alt: string;
  size: ImgSize;
}

const imgSizeStyle = (size: ImgSize) => {
  switch (size) {
    case 'sm':
      return 'w-8 h-8';
    case 'lg':
      return 'w-16 h-16';
    default:
      return '';
  }
};

export const BaseImg: React.FC<ImgProps> = ({ img, alt, size = 'sm' }) => {
  return <img src={img} alt={alt} className={imgSizeStyle(size)} />;
};
