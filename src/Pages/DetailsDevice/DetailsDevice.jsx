import DeviceDetailsOrganisms from "../../Commponents/Ui/Organisms/DeviceDeatilsOrganisms/DeviceDeatilsOrganisms";
import { useParams } from "react-router";
import { SliderRentUsers } from "../../Commponents/Constans/SliderRents/SliderRentUsers";
function DetailsDevice() {

    const { id } = useParams();
    const FindHome = SliderRentUsers.find(item => item.id == id);
    console.log(FindHome)
    return (
        <>
            <div className="w-full  ">

                <DeviceDetailsOrganisms role={ FindHome.role} image={FindHome.image}  />
            </div>
        </>
    )
}
export default DetailsDevice