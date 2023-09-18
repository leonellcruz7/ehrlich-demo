import React, { ReactNode } from "react";

const HashTag = ({ children }: { children: ReactNode }) => {
  return (
    <button className="py-[10px] px-5 rounded-[50px] border-[1px] w-fit">
      <p>{children}</p>
    </button>
  );
};

export default HashTag;
