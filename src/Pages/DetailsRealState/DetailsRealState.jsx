import { useParams } from "react-router"
import RealStateDetailsOrgainsms from "../../Commponents/Ui/Organisms/RealStateDetailsOrganisims/RealStateDetailsOrganisms";
import { SliderRentBrands } from "../../Commponents/Constans/SliderRents/SliderRentsBrand";
function DeatilsRealState() {
    const { id } = useParams();
      const FindHome =  SliderRentBrands.find(item => item.id == id);
    console.log(FindHome)
    return (
        <>
            <div className="w-full  ">
                <RealStateDetailsOrgainsms name={ FindHome.name} img={FindHome.img} />
            </div>
        </>
    )
}
export default DeatilsRealState