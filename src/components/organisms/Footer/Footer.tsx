import { BaseText } from "@/components/atoms/BaseText/BaseText";

export const Footer = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <div className="bg-blue-500 w-full">
      <p>&copy; {copyrightYear}</p>
    </div>
  );
};
