import { useState } from "react";
import Text from "../../Atom/Text/Text";
import Icon from "./../../Atom/Icon/Icon";
import Button from "../../Atom/Button/Button";
function HomePartTextM() {
  const [Download, setDownload] = useState(false);
  const [Pine, setPine] = useState(false);

  const getAdress = JSON.parse(localStorage.getItem("StageTow"));
  const aray = getAdress && Object.entries(getAdress);
  const getAdress2 = JSON.parse(localStorage.getItem("StageOne"));
  const aray2 = getAdress2 && Object.entries(getAdress2);

  return (
    <div className="w-full flex items-center justify-between  ">
      <div className="w-[65%] flex items-center justify-end gap-3">
        <Button onClick={() => setPine(!Pine)}>
          <Icon Name={Pine == false ? "Pine" : "PineActiv"} Fill="#353535" />
        </Button>
        <Button onClick={() => setDownload(!Download)}>
          <Icon Name={Download == false ? "Download" : "DownloadActiv"} />
        </Button>
      </div>
      <div className="text-[#909090] text-[1.3vw] flex gap-1  ">
        {aray2 && aray ? (
          <>
            {aray2.slice(0, 1).map((item) => (
              <Text>{item[1]}</Text>
            ))}
            {aray.slice(2, 3).map((item) => (
              <Text>{item[1]}</Text>
            ))}
            {aray.slice(3, 4).map((item) => (
              <Text>{item[1]}</Text>
            ))}
          </>
        ) : (
          "رهن و اجاره آپارتمان تهران "
        )}
      </div>
    </div>
  );
}

export default HomePartTextM;
