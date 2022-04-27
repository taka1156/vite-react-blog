import { getCategories } from '@/api';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ClassificationList } from '@/components/organisms/ClassificationList/ClassificationList';
import { useEffect, useState } from 'react';

export const Categories: React.FC = () => {
  const [articleCategory, setArticleCategory] =
    useState<MicroCMSCategoryResult>();

  useEffect(() => {
    getCategories().then((result) => {
      setArticleCategory(result!);
    });
  }, []);

  return (
    <main className="mx-auto md:w-3/5">
      <BaseHeading
        hLv={1}
        underlined={true}
        text="Category"
        className="text-3xl flex justify-center items-center my-3"
      />
      <ClassificationList
        classificationType="category"
        classifications={articleCategory?.contents!}
      />
    </main>
  );
};
