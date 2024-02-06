import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="h-screen max-w-7xl mx-auto px-6">{children}</div>;
};

export default Container;
