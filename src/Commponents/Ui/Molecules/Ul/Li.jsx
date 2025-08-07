import LinkPage from "../../Atom/LinkPage/LinkPage";
import Text from "../../Atom/Text/Text";

function Ul({ items, Fal = false , style}) {
    return (
        <ul className={style}>
            {items.map((item) => (
                <li>
                    {
                        Fal ? <LinkPage To={item.to}>{item.title}</LinkPage> : <Text>{item}</Text>
                    }
                </li>
            ))}
        </ul>
    )
}

export default Ul;