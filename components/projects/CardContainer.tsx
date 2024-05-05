import React from "react";

const CardContainer = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6" {...props}>
      {children}
    </div>
  );
};

export default CardContainer;
