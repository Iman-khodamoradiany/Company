import Text from "../../Atom/Text/Text";
import { SuggestedAray } from "./../../../Constans/SuggestedAray/SuggestedAray";
import LinkPage from "./../../Atom/LinkPage/LinkPage";

function SuggestedText() {
  return (
    <div className="w-full  grid grid-cols-6 py-10 gap-3   ">
      {SuggestedAray.map((item) => (
        <LinkPage>
          <Text style=" w-full [direction:rtl] text-[#505050] text-[1.7vw] font-medium   ">
            {item.text}
          </Text>
        </LinkPage>
      ))}
    </div>
  );
}

export default SuggestedText;
