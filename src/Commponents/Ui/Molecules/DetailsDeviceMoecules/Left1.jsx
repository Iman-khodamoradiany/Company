import { useState } from "react"
import Icon from "../../Atom/Icon/Icon"
import Text from "../../Atom/Text/Text"
import { Pointed } from "../../../Constans/Pointed/Pointed"

function Left1() {
    const [rating, setRating] = useState(null)   
    const [ratings, setRatings] = useState([])  
    const [voted, setVoted] = useState(false)   

    const handleRating = (value) => {
        if (!voted) {   
            setRating(value)
            setRatings([...ratings, value])
            setVoted(true)
        }
    }

    const Mohasebe =
        ratings.length > 0
            ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
            : "----"




             
               
            

    return (
        <div className="w-[100%] flex flex-col gap-7 h-[60%]">
           
            <div className="w-[100%] flex pt-6 gap-2">
                <Icon Name={"save"} />
                <Icon Name={"doneee"} />
            </div>

            <div className="w-[75%] text-[#505050] flex justify-center flex-col p-10 gap-4 rounded-[16px] border-2 shadow-md border-[#E1E1E1] items-center ">
              
                <Text>چه امتیازی به علی پتو می‌دی؟</Text>

                <div className="flex gap-2">
                    {Pointed.map((num) => (
                        <button
                            key={num}
                            onClick={() => handleRating(num)}
                            disabled={voted} 
                            className={`w-10 h-7 rounded-[10px] border-2 border-[#909090] flex items-center justify-center transition
                            ${rating === num ? "bg-[#D9D9D9] text-grey" : "border-gray-400"}
                              ${voted && "opacity-60 cursor-not-allowed"}
                            `}
                        >
                            {num}
                        </button>
                    ))}
                </div>

                {voted && (
                    <p className="text-green-600 text-sm mt-2">رأی شما ثبت شد </p>
                )}

                <Text>میزان رضایتمندی کاربران: {Mohasebe} از 5</Text>

                <div className="flex gap-2 items-center text-red-500 cursor-pointer">
                    <Text>گزارش تخلف</Text>
                    <Icon Name={"error"} />
                </div>
            </div>
        </div>
    )
}

export default Left1

