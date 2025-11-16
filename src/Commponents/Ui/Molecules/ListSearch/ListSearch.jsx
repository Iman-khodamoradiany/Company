import { useEffect } from "react";
import Button from "../../Atom/Button/Button";
import Icon from "../../Atom/Icon/Icon";
import Text from "../../Atom/Text/Text";
function ListSearch(props) {
    const { CateGory, setCateGory, SearchList, setSearchList, setFindSearch, findSearch } = props.CateGory
    const DeleteSearch = (id) => {
        setSearchList(prev => prev.filter(item => item.id != id))
    }

    
    useEffect(() => {
        setFindSearch(SearchList.find(item => item.title === CateGory));
    }, [CateGory]);

    return (
        <div className="flex justify-center items-center gap-2">
            <select
                onChange={(e) => setCateGory(e.target.value)}
                value={props.CateGory.CateGory} className="countries bg-gray-50 border bg-transparent border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" dir="rtl">
                <option value="" selected disabled className="hidden">۱+ شهر</option>
                {SearchList.map((item) => (
                    <option value={item.title}>{item.title}</option>
                ))}
            </select>
            {CateGory == '' ?
                SearchList.map((item) => (
                    <div className={"flex justify-center items-center border border-[#353535] py-2 px-2 rounded-lg gap-3"}>
                        <Button onClick={() => DeleteSearch(item.id)}>
                            <Icon Name={'Close'}></Icon>
                        </Button>
                        <Text>{item.title}</Text>
                    </div>
                )) :
                <div className={"flex justify-center items-center border border-[#353535] py-2 px-2 rounded-lg gap-3"}>
                    <Button onClick={() => DeleteSearch(findSearch.id)}>
                        <Icon Name={'Close'}></Icon>
                    </Button>
                    <Text>{CateGory}</Text>
                </div>}
        </div>
    )
}

export default ListSearch;