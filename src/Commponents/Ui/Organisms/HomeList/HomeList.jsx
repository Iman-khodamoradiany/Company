import HomeListM from "../../Molecules/HomeList/HomeListM";
import Text from './../../Atom/Text/Text';

function HomeList() {
  return (
    <div className="w-full  flex flex-col items-center  justify-center  mx-auto  ">
      <div className="w-full text-end py-10 ">
        <Text style=" font-bold text-[2vw] text-[#353535]  ">
          در سقفینو دنبال چه نوع ملکی هستید
        </Text>
      </div>
      <HomeListM />
    </div>
  );
}

export default HomeList;
