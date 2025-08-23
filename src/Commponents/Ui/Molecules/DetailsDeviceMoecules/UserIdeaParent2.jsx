import Text from "../../Atom/Text/Text"
import UserIdeaChild2 from "./UserIdeaChild2"
function UserIdeaParent2() {
    return (
        <>
            <div className="w-[100%]  flex  justify-center items-center">
            <div className="w-full flex items-center justify-center my-[60px]  ">
                <div className="w-full  flex flex-col gap-[20px] px-[10px]   ">
                    <Text style="w-full font-semibold text-[1.7vw] [direction:rtl] text-[#212121] ">نظرات کاربران   </Text>

                   <UserIdeaChild2/>

                </div>
            </div>
            </div>
        </>
    )
}
export default UserIdeaParent2