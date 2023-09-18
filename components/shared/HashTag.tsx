import React, { ReactNode } from "react";

const HashTag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-[10px] px-5 rounded-[50px] border-[1px] w-fit">
      <p>{children}</p>
    </div>
  );
};

export default HashTag;
