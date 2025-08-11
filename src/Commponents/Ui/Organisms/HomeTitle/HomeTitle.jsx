import HomeTitleProfile from "../../Molecules/HomeTitleProfile/HomeTitleProfile";
import HomeTitleReng from "../../Molecules/HomeTitleReng/HomeTitleReng";
import HomeTitleSize from "../../Molecules/HomeTitleSize/HomeTitleSize";

function HomeTitle() {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-[85%] flex items-start justify-center ">
        <div className="w-full flex items-center justify-start ">
          <HomeTitleProfile />
        </div>
        <div className="w-full flex-col flex items-center justify-center  gap-10">
          <HomeTitleSize />
          <HomeTitleReng />
        </div>
      </div>
    </div>
  );
}

export default HomeTitle;
