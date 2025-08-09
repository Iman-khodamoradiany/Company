import LinkPage from "../../Atom/LinkPage/LinkPage";
import Text from "../../Atom/Text/Text";

function Ul({ items, Fal = false , style , header , headerStyle}) {
    return (
        <ul className={style}>
            <li className={`text-bold mb-3 ${headerStyle}`}>
                {Fal ?
                <LinkPage>{header}</LinkPage> : <Text>{header}</Text>}
            </li>
            {items.map((item) => (
                <li className="mb-2">
                    {
                        Fal ? <LinkPage To={item.to}>{item.title}</LinkPage> : <Text>{item}</Text>
                    }
                </li>
            ))}
        </ul>
    )
}

export default Ul;