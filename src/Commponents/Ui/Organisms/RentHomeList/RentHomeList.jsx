import ListRentM from "./../../Molecules/ListRentM/ListRentM";

function RentHomeList({CurrantPost,start,end,style}) {
  

  return (
    <div className="w-full flex items-center justify-center   my-10 ">
      <div className="w-[85%] flex items-center justify-end ">
        <div className=" w-[650px]  flex flex-col items-center justify-center ">
          <ListRentM
            CurrantPost={CurrantPost}
            start={start}
            end={end}
            stay={`w-full  ${style} grid grid-cols-2 gap-[20px] mt-5`}
          />
        </div>
      </div>
    </div>
  );
}

export default RentHomeList