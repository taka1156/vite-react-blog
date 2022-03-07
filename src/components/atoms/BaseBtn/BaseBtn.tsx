import classNames from 'classnames';

type BtnSize = 'sm' | 'md' | 'lg';

export interface BtnProps {
  type: 'button' | 'submit';
  text: string;
  fn: Function;
  outlined: boolean;
  rounded: boolean;
  size: BtnSize;
}

const btnSizeStyle = (btnSize: BtnSize) => {
  switch(btnSize) {
    case 'sm':
      return 'py-2 px-6 text-base';
    case 'lg':
      return 'py-2 px-10 text-xl';
    default:
      return 'py-2 px-8 text-lg';
  }
}

export const BaseBtn: React.FC<BtnProps> = ({
  text,
  fn,
  type = 'button',
  outlined = false,
  rounded = false,
  size = 'md'
}) => {
  const btnClass = classNames(
    btnSizeStyle(size),
    outlined ? 'bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white' : 'bg-blue-700 text-white hover:border-2 hover:border-blue-500 hover:bg-white hover:text-blue-500',
    rounded ? 'rounded-full' : 'rounded'
  );
  return (
    <button type={type} onClick={fn()} className={btnClass}>
      {text}
    </button>
  );
};
