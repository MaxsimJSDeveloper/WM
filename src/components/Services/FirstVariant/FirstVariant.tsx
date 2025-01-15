import { ReactNode } from "react";

interface firstVariantProps {
  children: ReactNode;
}

const FirstVariant = ({ children }: firstVariantProps) => {
  return (
    <div className="z-10 mb-5 flex items-center rounded-lg p-4 w-[270px] mx-auto h-[120px] bg-card transition-transform duration-300 shadow-sm hover:translate-y-[-5px] hover:scale-105 hover:shadow-lg">
      <p className="text-center text-sm">{children}</p>
    </div>
  );
};

export default FirstVariant;
