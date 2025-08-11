import { useEffect, useState } from "react";

function useTimer(time = 2) {
    const [Timer, setTimer] = useState(time * 60);

    useEffect(() => {

        const decrementTime = setInterval(() => {
            setTimer(prev => {
                if (Timer <= 0) {
                    return clearInterval(decrementTime)
                }
                return prev - 1
            })
        }, 1000)

        
    }, [])
    const min = Math.floor(Timer / 60);
    const sec = Timer % 60
    if(Timer == 0){
        min = 0
        sec = 0
    }
    return {min , sec}
}

export default useTimer;