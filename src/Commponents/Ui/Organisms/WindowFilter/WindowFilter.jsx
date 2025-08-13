import AllFilters from "../../Molecules/AllFilters/AllFilters"
import HeaderFilters from "../../Molecules/HeaderFilters/HeaderFilters"

function WindowFilter() {
    return (
       <div className={`h-[100vh] fixed  z-20 w-full top-0    justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
        <div className="w-[700px] h-[90vh] bg-white  mx-auto my-[40px] flex flex-col items-center justify-between ">
            <HeaderFilters/>
            <AllFilters/>
        </div>
       </div> 
    )
}

export default WindowFilter
