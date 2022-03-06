export interface LinkProps {
  text: string;
  href: string;
};

export const BaseText: React.VFC<LinkProps> = ({ text, href }) => {
  return <a href={href}>{text}</a>;
};
