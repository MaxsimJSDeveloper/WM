import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h2 className="font-secondFamily font-medium text-[42px] text-accent text-center mb-4">
      {children}
    </h2>
  );
};

export default Title;
