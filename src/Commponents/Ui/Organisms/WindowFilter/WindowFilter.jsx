import AddFilters from "../../Molecules/AddFilters/AddFilters"
import AllFilters from "../../Molecules/AllFilters/AllFilters"
import HeaderFilters from "../../Molecules/HeaderFilters/HeaderFilters"

function WindowFilter({get,stayle}) {

 
    
    return (
       <div className={`${stayle} h-[100vh]   z-20 w-full top-0  justify-center items-center bg-[rgba(0,0,0,0.54)]`}>
        <div className="w-[700px] h-[90vh] bg-white rounded-[16px] mx-auto my-[40px] flex flex-col items-center justify-around  ">
            <HeaderFilters get={get} />
            <AllFilters />
            <AddFilters get={get} />
        </div>
       </div> 
    )
}

export default WindowFilter
