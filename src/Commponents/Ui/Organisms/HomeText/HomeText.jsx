import HomePartTextM from "../../Molecules/HomePartTextM/HomePartTextM";
import Text from "./../../Atom/Text/Text";

function HomeText() {
  const getAdress = JSON.parse(localStorage.getItem("StageOne"));
  const aray = getAdress && Object.entries(getAdress);

  return (
    <div className="w-full  flex items-center justify-center my-[60px] ">
      <div className="w-[85%]  flex flex-col items-end justify-center gap-3 ">
        <HomePartTextM />
        <div className="text-[#212121] text-[1.7vw] font-bold  flex gap-1 ">
          {aray ? (
            <>
              {aray.slice(0, 2).map((item) => (
                <Text>{item[1]},</Text>
              ))}
              {aray.slice(2, 4).map((item) => (
                <Text style=" [direction:rtl] flex gap-1 ">{item[1]}</Text>
              ))}
            </>
          ) : (
            "  ۲۰۰ متر، محدوه ونک، بلوار دانش "
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeText;
