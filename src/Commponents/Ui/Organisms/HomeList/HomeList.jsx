import HomeListM from "../../Molecules/HomeList/HomeListM";
import Text from './../../Atom/Text/Text';

function HomeList() {
  return (
    <div className="w-[90%] flex flex-col items-center my-[50px]  justify-center  mx-auto  ">
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
