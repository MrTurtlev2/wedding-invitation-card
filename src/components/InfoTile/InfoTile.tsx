import './InfoTile.css'
import CeremonyContent from "./elements/CeremonyContent.tsx";
import SleepingContent from "./elements/SleepingContent.tsx";

interface InfoTileProps {
    type: 'ceremony' | 'sleeping' | 'plan'
}

const InfoTile = ({type}: InfoTileProps) => {
    return (
        <div className='info-main-wrapper'>
            <img src={`/assets/info-tiles/${type}.png`} alt={''}/>
            <img src={`/assets/info-tiles-icons/${type}-icon.svg`} alt={''}/>
            {type === 'ceremony' && <CeremonyContent/>}
            {type === 'sleeping' && <SleepingContent/>}
        </div>
    )
}
export default InfoTile
