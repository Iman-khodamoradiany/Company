import Logo from "./Icons/Logo/Logo";
import Next from './Icons/Next/Next';

function Icon({Name}){
    switch(Name){
        case 'Logo': 
        return <Logo />
        case 'Next': 
        return <Next />
    }
}
export default Icon;