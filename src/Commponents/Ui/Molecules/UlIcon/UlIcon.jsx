import Icon from "../../Atom/Icon/Icon";
import LinkPage from "../../Atom/LinkPage/LinkPage";
import Text from "../../Atom/Text/Text";
function UlIcon({ header, items , style , headerStyle}) {
    return (
        <ul className={`${style}`}>
            <li className={`text-bold ${headerStyle}`}>
                <LinkPage>{header}</LinkPage>
            </li>
            {items.map((item) => (
                <li className="mb-2">
                    <LinkPage style={'flex justify-start items-center gap-2'} To={item.to}>
                        <Icon Name={item.icon} />
                        <Text>{item.title}</Text>
                    </LinkPage>
                </li>
            ))}

        </ul>
    )
}

export default UlIcon;