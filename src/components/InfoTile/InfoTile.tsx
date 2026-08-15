import './InfoTile.css'
import CeremonyContent from "./elements/CeremonyContent.tsx";
import SleepingContent from "./elements/SleepingContent.tsx";
import PlanContent from "./elements/PlanContent.tsx";

interface InfoTileProps {
    type: 'ceremony' | 'sleeping' | 'plan'
}

const InfoTile = ({type}: InfoTileProps) => {
    return (
        <div className='info-main-wrapper'>
            <img src={`/assets/info-tiles/${type}.png`} alt={''} style={{width: '45%'}}/>
            <img src={`/assets/info-tiles-icons/${type}-icon.svg`} alt={''} style={{margin: '0 10px'}}/>
            {type === 'ceremony' && <CeremonyContent/>}
            {type === 'sleeping' && <SleepingContent/>}
            {type === 'plan' && <PlanContent/>}
        </div>
    )
}
export default InfoTile
