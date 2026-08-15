import {Heart} from "lucide-react";
import {Colors} from "../../constants/colors.ts";
import './DecorativeSeparator.css'

const DecorativeSeparator = () => {
    return (
        <div className="separator-wrapper">
            <div className="line"/>
            <Heart className="mx-3" color={Colors.gold} fill={Colors.gold}/>
            <div className="line"/>
        </div>
    )
}
export default DecorativeSeparator;

