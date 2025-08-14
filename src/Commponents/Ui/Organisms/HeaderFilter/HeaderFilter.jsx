import DropDownRent from "../../Molecules/DropDownInRent/DropDownRent"
import InputRent from "../../Molecules/InputRent/InputRent"

function HeaderFilter({set}) {
    return (
        <div className="mt-[200px] w-full  flex items-center justify-center">
            <div className="w-[85%]  flex items-center justify-between">
                <InputRent/>
                <DropDownRent  set={set} />
            </div>
        </div>
    )
}

export default HeaderFilter
