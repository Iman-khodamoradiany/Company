import CreateMap from "../../Ui/Molecules/CreateMap/CreateMap"

function CostomMap({Home}) {
  return (
    <div className="w-[570px]  h-[353px] ">

      <CreateMap items={Home} />
    </div>
  )
}

export default CostomMap
