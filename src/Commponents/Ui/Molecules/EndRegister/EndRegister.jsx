import Img from "../../Atom/Img/Img";
import RegisterNotDone from "../RegisterNotDone/RegisterNotDone";
import RegisterDone from "../RegisterDone/RegisterDone";

function EndRegister() {

  return (
    <div className="w-[140vh] h-[90vh] bg-white rounded-xl mx-auto my-10 flex items-start justify-between  bg-center bg-contain  bg-no-repeat   ">
      <div className="w-[65%]  flex flex-col items-center justify-start my-[100px] gap-5  ">
          <RegisterDone />
        {/* <RegisterNotDone/> */}
      </div>
      <div className=" w-[35%] h-full ">
        <Img
          src="/register/bag.jpg"
          className="w-full object-cover h-full  rounded-r-xl   "
        />
      </div>
    </div>
  );
}

export default EndRegister;
