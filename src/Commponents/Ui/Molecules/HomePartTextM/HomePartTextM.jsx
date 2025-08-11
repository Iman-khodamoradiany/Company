import { useState } from "react";
import Text from "../../Atom/Text/Text";
import Icon from "./../../Atom/Icon/Icon";
import Button from "../../Atom/Button/Button";
function HomePartTextM() {
  const [Download, setDownload] = useState(false);
  const [Pine, setPine] = useState(false);

  return (
    <div className="w-full flex items-center justify-between  ">
      <div className="w-[65%] flex items-center justify-end gap-3">
        <Button OnClick={() => setPine(!Pine)}>
          <Icon Name={Pine == false ? "Pine" : "PineActiv"} Fill="#353535" />
        </Button>
        <Button OnClick={() => setDownload(!Download)}>
          <Icon Name={Download == false ? "Download" : "DownloadActiv"} />
        </Button>
      </div>
      <Text style="text-[#909090] text-[1.3vw] ">
        رهن و اجاره آپارتمان تهران
      </Text>
    </div>
  );
}

export default HomePartTextM;
