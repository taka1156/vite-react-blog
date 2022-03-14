import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export interface LinkProps {
  cp: JSX.Element;
  link: string;
  className?: string;
}

export const BaseLink: React.FC<LinkProps> = ({ cp, link, className='' }) => {
  const linkClass = classNames(className);

  if (link.indexOf('http') !== -1) {
    return (
      <a href={link} className={linkClass}>
        {cp}
      </a>
    );
  } else {
    return (
      <Link to={link} className={linkClass}>
        {cp}
      </Link>
    );
  }
};
