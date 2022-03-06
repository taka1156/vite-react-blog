export interface BtnProps {
  type: 'button' | 'submit';
  text: string;
  fn: Function;
  outlined: boolean;
  size: 'small' | 'medium' | 'large';
}

export const BaseBtn: React.VFC<BtnProps> = ({ text, fn, type = 'button' }) => {
  return (
    <button type={type} onClick={fn()}>
      {text}
    </button>
  );
};
