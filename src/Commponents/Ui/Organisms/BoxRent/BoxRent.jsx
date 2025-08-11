import BoxRentItem from "../../Molecules/BoxRentItem/BoxRentItem";
import BoxRentText from "../../Molecules/BoxRentText/BoxRentText";

function BoxRent() {
  return (
    <div className="w-full  flex items-center justify-center mt-[80px] ">
      <div className="w-full ">
        <BoxRentText />
        <BoxRentItem />
      </div>
    </div>
  );
}

export default BoxRent;
