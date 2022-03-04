type LinkProps = {
  text: string;
  href: string;
};

const BaseText: React.VFC<LinkProps> = ({ text, href }) => {
  return <a href={href}>{text}</a>;
};

export default BaseText;
