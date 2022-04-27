import { getTags } from '@/api';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';
import { ClassificationList } from '@/components/organisms/ClassificationList/ClassificationList';
import { useEffect, useState } from 'react';

export const Tags: React.FC = () => {
  const [articleTag, setArticleTags] =
    useState<MicroCMSTagsResult>();

  useEffect(() => {
    getTags().then((result) => {
      setArticleTags(result!);
    });
  }, []);

  return (
    <main className="mx-auto md:w-3/5">
      <BaseHeading
        hLv={1}
        underlined={true}
        text="Tag"
        className="text-3xl flex justify-center items-center my-3"
      />
      <ClassificationList
        classificationType="tag"
        classifications={articleTag?.contents!}
      />
    </main>
  );
};
