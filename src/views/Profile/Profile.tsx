import { getTags } from '@/api';
import { BaseHeading } from '@/components/atoms/BaseHeading/BaseHeading';

import { useEffect, useState } from 'react';

export const Profile: React.FC = () => {

  return (
    <main className="mx-auto md:w-3/5">
      <BaseHeading hLv={1} underlined={true} text="Profile" className="text-3xl flex justify-center items-center my-3" />
    </main>
  );
};
