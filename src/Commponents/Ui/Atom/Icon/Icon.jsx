import Logo from "./Icons/Logo/Logo";

function Icon({Name}){
    switch(Name){
        case 'Logo': 
        return <Logo />
    }
}
export default Icon;