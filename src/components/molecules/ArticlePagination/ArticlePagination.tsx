import classNames from 'classnames';
import { BaseLink } from '@/components/atoms/BaseLink/BaseLink';

export interface PaginationProps {
  pageInfo: PageInfo;
  className?: string;
}

export const ArticlePagination: React.FC<PaginationProps> = ({
  pageInfo,
  className = '',
}) => {
  const { current, maxPage, pageKind } = pageInfo;
  const paginationClass = classNames('flex -space-x-px justify-center', className);
  const pages = [...new Array(maxPage)].map((_, i) => i + 1);

  const check = (current: number) => {
    if (current === 0) return maxPage;
    else if (current === maxPage + 1) return 1;
    else return current;
  };

  return (
    <ul className={paginationClass}>
      <li className="py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50">
        <BaseLink link={`${pageKind}/${check(current - 1)}`}>&lt;</BaseLink>
      </li>
      {pages.map((i) => (
        <li className="py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50">
          <BaseLink key={i} link={`${pageKind}/${i}`}>
            {i}
          </BaseLink>
        </li>
      ))}
      <li className="py-2 px-3 ml-0 leading-tight text-gray-500 hover:opacity-50">
        <BaseLink link={`${pageKind}/${check(current + 1)}`}>&gt;</BaseLink>
      </li>
    </ul>
  );
};
