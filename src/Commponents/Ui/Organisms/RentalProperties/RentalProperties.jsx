import React from "react";
import RentTitele from "../../Molecules/RentTitele/RentTitele";
import ListRentM from './../../Molecules/ListRentM/ListRentM';

function RentalProperties() {
  return (
    <div className="w-full flex items-center justify-center  my-10 ">
      <div className="w-[85%] flex items-center justify-between ">
        <div className=" w-[48%] h-[610px] flex items-center justify-center bg-blue-400">Map</div>
        <div className=" w-[50%] flex flex-col items-center justify-center ">
          <RentTitele />
          <ListRentM start="0" end="4" stay="w-full grid grid-cols-2 gap-[20px] mt-5"/>
        </div>
      </div>
    </div>
  );
}

export default RentalProperties;
