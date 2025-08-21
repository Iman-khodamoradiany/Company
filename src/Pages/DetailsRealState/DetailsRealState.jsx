import { useParams } from "react-router"
import RealStateDetailsOrgainsms from "../../Commponents/Ui/Organisms/RealStateDetailsOrganisims/RealStateDetailsOrganisms";

function DeatilsRealState() {
    const { id } = useParams();
    return (
        <>
            <div className="w-full  ">
                <RealStateDetailsOrgainsms />
            </div>
        </>
    )
}
export default DeatilsRealState