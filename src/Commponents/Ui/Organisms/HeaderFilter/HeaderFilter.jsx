import DropDownRent from "../../Molecules/DropDownInRent/DropDownRent"
import InputRent from "../../Molecules/InputRent/InputRent"

function HeaderFilter({set}) {
    return (
        <div className="w-full mt-10 flex items-center justify-center">
            <div className="w-[85%] flex items-center justify-between gap-2">
                <InputRent/>
                <DropDownRent  set={set} />
            </div>
        </div>
    )
}

export default HeaderFilter
