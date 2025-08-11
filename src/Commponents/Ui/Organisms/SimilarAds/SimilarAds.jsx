import React from "react";
import ListRentM from "../../Molecules/ListRentM/ListRentM";
import Text from "../../Atom/Text/Text";

function SimilarAds() {
  return (
    <div className="w-full flex items-center justify-center my-[60px]">
      <div className=" w-[85%] flex items-end justify-center flex-col gap-4 ">
        <Text style="text-[1.8vw] text-[#212121] font-bold ">آگهی‌های مشابه</Text>
        <ListRentM
          start="0"
          end="3"
          stay="w-full grid grid-cols-3 gap-[20px]"
        />
      </div>
    </div>
  );
}

export default SimilarAds;
