import { Route, useLocation } from 'react-router-dom';

export interface LinkProps {
  cp: JSX.Element
  link: string;
};

export const BaseLink: React.VFC<LinkProps> = ({ cp, link }) => {
  if(link.indexOf('http') !== -1) { 
    return (<a href={link}>{cp}</a>);
  } else {
    const location = useLocation();
    return (<Route path={`${location.pathname}/${link}`}>{cp}</Route>)
  }
};
