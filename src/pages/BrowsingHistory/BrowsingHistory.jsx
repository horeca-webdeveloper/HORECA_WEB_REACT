import React from "react";
import SidebarProfile from "../../components/SidebarProfile";
import { Wrapper } from "../../shared/Wrapper";

const BrowsingHistory = () => {
  return (
    <Wrapper>
      <div className="flex">
        <SidebarProfile />
        {/* Browsing History Section */}
        <div className="flex flex-col p-[10px] justify-between w-[100%] h-[100%]">
          <div className="flex items-center p-[10px] h-[50px] w-[100%] bg-[#f9fafc] border rounded-sm mb-[10px]">
            Oct 19 2024, 5:45 P.M.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BrowsingHistory;
