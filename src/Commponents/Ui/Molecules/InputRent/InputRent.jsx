import { useState } from "react"
import Button from "../../Atom/Button/Button"
import Icon from "../../Atom/Icon/Icon"
import Input from "../../Atom/Input/Input"
import Text from "../../Atom/Text/Text"

function InputRent() {
    const [Value, setValue] = useState('');
    const [SearchList, setSearchList] = useState([])

    const HandelInput = (e) => {
        if (e.key == "Enter") {
            setSearchList(prev => [...prev, { id: SearchList.length - 1, title: Value }])
            setValue('')
        }
    }

    const DeleteSearch = (id) => {
        setSearchList(prev => prev.filter(item => item.id != id))
    }

    return (
        <div className="w-1/2  bg-white relative flex items-center justify-end  h-[65px] gap-2 border-[#ADADAD]  rounded-[8px]   ">
            <Input onKeyDown={(e) => HandelInput(e)} onChange={(e) => setValue(e.target.value)} value={Value} placeholder="شهر مورد نظر را اضافه کنید" className="w-full px-[45px] rounded-xl focus:ring-4 h-full text-[#505050] focus:border-[#2F80ED] focus:shadow-[#5094ee1e] focus:shadow-md border outline-none [direction:rtl]   " />
            <div className="absolute px-4">
                <Icon Name="Search" />
            </div>
            <div className="absolute left-3 flex justify-center items-center gap-2">
                {SearchList.length >= 1 ?
                    SearchList.map((item) => (
                        <Button key={item.id} className={"flex justify-center items-center border border-[#353535] py-2 px-2 rounded-lg gap-3"}>
                            <Button onClick={() => DeleteSearch(item.id)}>
                                <Icon Name={'Close'}></Icon>
                            </Button>
                            <Text>{item.title}</Text>
                        </Button>
                    )) : ''}
            </div>
        </div >
    )
}

export default InputRent
