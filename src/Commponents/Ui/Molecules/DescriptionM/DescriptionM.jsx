import Text from "../../Atom/Text/Text";
import { DescriptionAray } from "./../../../Constans/DescriptionAray/DescriptionAray";

function DescriptionM() {
  const getName = JSON.parse(localStorage.getItem("StageFive"));
  const aray = getName && Object.entries(getName);

  return (
    <div className="flex flex-col items-start justify-center text-[1.4vw] text-[#353535]  [direction:rtl] gap-4">
      {aray
        ? aray.map((item) => <Text>{item[1]}</Text>)
        : DescriptionAray.map((item) => <Text>{item.Text}</Text>)}
    </div>
  );
}

export default DescriptionM;
