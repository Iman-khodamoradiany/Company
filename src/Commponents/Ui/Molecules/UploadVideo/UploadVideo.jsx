import { useRef, useState } from "react";
import Button from "../../Atom/Button/Button";
import Input from "../../Atom/Input/Input";
import Text from "../../Atom/Text/Text";

function UploadVideo() {
  const Inputref = useRef();
  const [select, setselect] = useState(null);
  function File(event) {
    if (event.target.files && event.target.files.length > 0) {
      setselect(URL.createObjectURL(event.target.files[0]));
    }
  }

  const Choose = () => {
    Inputref.current.click();
  };

  return (
    <div className=" [direction:rtl] flex items-start  justify-center flex-col  ">
      {!select && (
        <>
          <Text style="text-[#909090] text-[0.9vw] ">فرمت ویدئو باید Mp4 باشد.</Text>
          <Text style="text-[#909090] text-[0.9vw] ">ویدئوهای غیر مرتبط توسط پشتیبانی حذف خواهد شد</Text>
          <div className="  w-[120px] text-center py-[5px] my-1 bg-white border-[#717171] border-[1px] rounded-lg text-[#717171]">
            <Input
              onChange={File}
              type="file"
              style={{ display: "none" }}
              ref={Inputref}
            />
            <Button onClick={Choose}>انتخاب ویدئو</Button>
          </div>
        </>
      )}
      {select && (
        <>
          <div className="w-[280px] px-[10px] py-[10px] bg-[#EDEDED] rounded flex items-center justify-start   ">
            <Text style="text-[#353535] " >ویدئو با موفقیت بارگذاری شد</Text>
          </div>
          <div className="  w-[180px] text-center py-[5px] my-1 bg-white border-[#CB1B1B] border-[1px] rounded-lg text-[#CB1B1B]">
            <Input
              onChange={File}
              type="file"
              style={{ display: "none" }}
              ref={Inputref}
            />
            <Button onClick={Choose}>حذف ویدئو</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default UploadVideo;
