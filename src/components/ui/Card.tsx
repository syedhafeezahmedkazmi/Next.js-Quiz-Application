import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
      {children}
    </div>
  );
};
