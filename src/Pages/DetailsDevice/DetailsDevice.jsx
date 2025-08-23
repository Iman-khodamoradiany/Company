import DeviceDetailsOrganisms from "../../Commponents/Ui/Organisms/DeviceDeatilsOrganisms/DeviceDeatilsOrganisms";
import { useParams } from "react-router";
function DetailsDevice() {
    const { id } = useParams();

    return (
        <>
            <div className="w-full  ">
               
              <DeviceDetailsOrganisms/>
            </div>
        </>
    )
}
export default DetailsDevice