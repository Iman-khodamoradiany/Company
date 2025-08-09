import BoxRentItem from "../../Molecules/BoxRentItem/BoxRentItem";
import BoxRentText from "../../Molecules/BoxRentText/BoxRentText";

function BoxRent() {
  return (
    <div className="w-full  flex items-center justify-center my-[25px] ">
      <div className="w-[85%] ">
        <BoxRentText />
        <BoxRentItem />
      </div>
    </div>
  );
}

export default BoxRent;
