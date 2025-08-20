import Button from "../../Atom/Button/Button"

function ButtonStage({text,OnClick1,OnClick2,...props}) {
    return (
        <div className="w-full flex items-center justify-center gap-5 ">
            <Button onClick={OnClick1} {...props} className="w-[180px] bg-[#CB1B1B] text-[#ffff] text-[1.1vw] text-center rounded-[8px] py-3   "  >{text}</Button>
            <Button onClick={OnClick2} className="w-[180px] bg-[#ffff] text-[#CB1B1B] border-[2px] border-[#CB1B1B] text-[1.1vw] text-center rounded-[8px] py-3   "  >قبلی</Button>
        </div>
    )
}

export default ButtonStage
