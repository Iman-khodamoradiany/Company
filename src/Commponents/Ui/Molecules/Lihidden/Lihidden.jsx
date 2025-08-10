import Ul from "../Ul/Li";

function Lihidden({items , header , style}){
    return(
        <Ul style={`text-[#717171] flex flex-col justify-center items-start ${style}`} headerStyle={'text-[#353535] text-[1.2vw] mb-1'} header={header} items={items}  Fal={true}/>
    )
}

export default Lihidden