import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

export interface LinkProps {
  cp: JSX.Element;
  link: string;
  className?: string;
}

export const BaseLink: React.VFC<LinkProps> = ({ cp, link, className='' }) => {
  const style = classNames(className);

  if (link.indexOf('http') !== -1) {
    return (
      <a href={link} className={style}>
        {cp}
      </a>
    );
  } else {
    const location = useLocation();
    return (
      <Link to={`${location.pathname}/${link}`} className={style}>
        {cp}
      </Link>
    );
  }
};
