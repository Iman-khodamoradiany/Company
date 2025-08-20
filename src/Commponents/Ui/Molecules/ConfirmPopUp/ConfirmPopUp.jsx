    import { useContext, useState } from "react";
    import Button from "../../Atom/Button/Button";
    import Input from "../../Atom/Input/Input";
    import Text from "../../Atom/Text/Text";
    import useTimer from "../../../HOC/useTimer/useTimer";
    import Icon from "../../Atom/Icon/Icon";
    import { MyContext } from "../../../../App";

    function ConfirmPopUp({ SC,setshaw, setSC, Number }) {
        const [Inputs, setInputs] = useState(new Array(5).fill(''))
        const { min, sec } = useTimer(2)
        const [Error, setError] = useState(true)
        const { PopUp, setPopUp , setToken , Save } = useContext(MyContext)

        function InputHandler(e, index) {
            if (isNaN(e.target.value)) return false;

            setInputs(prevInputs =>
                prevInputs.map((data, idx) => (idx === index ? e.target.value : data))
            );

            if (e.target.value && e.target.nextElementSibling) {
                e.target.nextElementSibling.focus();
            }

            if (e.target.value === '' && e.target.previousElementSibling) {
                e.target.previousElementSibling.focus();
            }

        }

        function ButtonHandler() {
            if (Inputs.join('').length <= 4) {
                alert("Enter code")
            } else {
                if (Inputs.join('') == "11111") {
                   if(Save==true){
                     setPopUp("3")
                   }else{
                    setPopUp("0")
                   }
                    setshaw("2")

                } else {
                    setError(!Error)
                }
            }
        }
        return (
            <div className={`${PopUp=="2" ? 'flex' : 'flex'} h-[380px] z-20  justify-center items-center flex-col bg-white w-1/2 px-4 rounded-xl border-3 gap-5`} dir="rtl">
                <div onClick={(e) => e.stopPropagation()} className="bg-white w-[90%] h-full flex justify-between pb-6 pt-6 items-center flex-col">
                    <div>
                        <Text style={'text-[1.5vw] font-bold'}>کد تائید</Text>
                    </div>
                    <div className="flex justify-center items-center flex-col gap-3">
                        <div className="text-center mb-4">
                            <Text style={'text-[1.2vw]'}>کد ارسال‌شده به شماره <span>{Number}</span> را وارد کنید</Text>
                            <Button onClick={(() => setSC(!SC))} className={'text-[#717171]'}>ویرایش شماره موبایل</Button>
                        </div>
                        <div className="flex justify-between items-center gap-5" dir="ltr">
                            {Inputs.map((data, index) => (
                                <Input
                                    type='number'
                                    maxLength="1"
                                    className={`border focus:ring-4 focus:ring-[#2F80ED30] ${Error ? 'border' : 'border-red-500'} focus:border-[#2F80ED] outline-none Remove_Icon text-center w-[20%] h-[50px] rounded-lg`}
                                    onChange={(e) => InputHandler(e, index)}
                                    value={data}
                                    required
                                />
                            ))}
                        </div>
                        <div className="flex justify-start w-full items-center gap-1">
                            <Icon Name={'Clock'}></Icon>
                            <Text><span className="text-[#CB1B1B]">{SC && min}</span><span className="text-[#CB1B1B]">:{SC && sec}</span> تا دریافت مجدد کد</Text>
                        </div>
                    </div>
                    <div className="w-full">
                        <Button onClick={ButtonHandler} disabled={Inputs.join("").length == 5 ? false : true} className={'w-full disabled:bg-[#9e5252] bg-[#CB1B1B] text-white py-2 rounded-md text-[1.4vw]'}>تائید</Button>
                    </div>

                </div>
            </div>
        )
    }

    export default ConfirmPopUp;