import {Heart} from "lucide-react";
import {Colors} from "../../constants/colors.ts";

const DecorativeSeparator = () => {
    return (
        <div className="flex flex-row">
            <div className="w-42 h-0.5 bg-(--color-gold)"/>
            <Heart className="mx-8" color={Colors.gold} fill={Colors.gold}/>
            <div className="w-42 h-1"/>
        </div>
    )
}
export default DecorativeSeparator;
