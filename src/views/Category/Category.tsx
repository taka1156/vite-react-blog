import { BaseHeading } from '../../components/Atoms/BaseHeading/BaseHeading';
import logo from '@/assets/logo.svg';

export const Category: React.VFC = () => {
  return (
    <main className="content-center mx-auto">
      <BaseHeading hLv={1} underlined={true} text="Profle" />
      <div className="px-4 py-4 font-extrabold">
        <img
          src={logo}
          className="mx-auto w-1/4 h-1/4 animate-spin-logo"
          alt="logo"
        />
        <p className="text-center my-5 text-4xl text-blue-500">Profile</p>
      </div>
    </main>
  );
};
