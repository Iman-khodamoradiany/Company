import { HomePartsImgs } from "./../../../Constans/HomePartsImg/HomePartsImg";
function HomePartsImg() {

  return (
    <div className=" h-full  w-[85%] grid grid-cols-3 gap-[10px] ">
      {HomePartsImgs.map((item) => (
        <div
          className={item.id==3?"  bg-center bg-cover row-span-2 rounded-[16px]  ":"   bg-center bg-cover rounded-[16px]  "}
          style={{ backgroundImage: `url(${item.img})` }}
        >
            
        </div>
      ))}
    </div>
  );
}

export default HomePartsImg;
