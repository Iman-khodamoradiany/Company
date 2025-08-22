import { useRef, useState } from "react";
import Input from "./../../Atom/Input/Input";
import Icon from "../../Atom/Icon/Icon";
import Button from "../../Atom/Button/Button";
import Img from "../../Atom/Img/Img";

function UploadImg() {

  const Inputref = useRef();
  const [select, setselect] = useState(null);
  function File(event) {
    if (event.target.files && event.target.files.length > 0) {
      setselect(URL.createObjectURL(event.target.files[0]));
    }
  }

const Location = select;

let previousLocations = JSON.parse(localStorage.getItem("Location7"));
if (!Array.isArray(previousLocations)) {
  previousLocations = [];
}
if (!previousLocations.includes(Location)) {
  previousLocations.push(Location);
}
localStorage.setItem("Location7", JSON.stringify(previousLocations));




  const Choose = () => {
    Inputref.current.click();
  };

  return (

    <div className={`w-[160px] rounded-lg h-[100px]  flex items-center justify-center ${select?"":"border-[2px] border-dashed border-[#ADADAD]"}  `}>
      <Input
        type="file"
        ref={Inputref}
        onChange={File}
        style={{ display: "none" }}
      />
      {!select && (
        <Button className="w-full h-full flex items-center justify-center" onClick={Choose}>
          <div className="w-full flex items-center justify-center">
            <Icon Name="uplode" />
          </div>
        </Button>
      )}
      {select && (
        <div className="w-full h-full  rounded-lg">
          <Img src={select} className="w-full h-full flex items-center justify-center rounded-lg object-cover " />
          <Button className="w-[20px] h-[20px] bg-[#12121246] rounded relative bottom-[95px] right-[135px]  " onClick={()=>setselect(false)}>
            <Icon Name="deletImg" />
          </Button>
        </div>
      )}

    </div>
  );
}

export default UploadImg;
