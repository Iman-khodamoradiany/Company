import Button from "../../Atom/Button/Button"

function AddFilters({get}) {

    return (
        <div className="w-full h-[12%]  flex items-center justify-center gap-5 ">
            <Button onClick={get} className=" bg-[#CB1B1B] px-[40px] py-[10px] text-white rounded-[8px] " >جست‌وجو</Button>
            <Button  className="border-[2px] border-[#CB1B1B] bg-white text-[#CB1B1B] px-[40px] py-[10px] rounded-[8px] " >حذف فیلترها</Button>
        </div>
    )
}

export default AddFilters
