import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface LinkProps {
  children?: React.ReactNode;
  link: string;
  className?: string;
}

export const BaseLink: React.VFC<LinkProps> = ({children, link, className='' }) => {
  const linkClass = classNames(className);

  if (link.indexOf('http') !== -1) {
    return (
      <a href={link} className={linkClass}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={link} className={linkClass}>
        {children}
      </Link>
    );
  }
};
