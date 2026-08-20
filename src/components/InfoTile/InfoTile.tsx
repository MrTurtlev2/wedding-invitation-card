import './InfoTile.css'
import CeremonyContent from "./elements/CeremonyContent.tsx";
import SleepingContent from "./elements/SleepingContent.tsx";
import PlanContent from "./elements/PlanContent.tsx";
import ceremonyImage from '../../assets/info-tiles/ceremony.png'
import planImage from '../../assets/info-tiles/plan.png'
import sleepingImage from '../../assets/info-tiles/sleeping.png'
import ceremonyIcon from '../../assets/info-tiles-icons/ceremony-icon.svg'
import planIcon from '../../assets/info-tiles-icons/plan-icon.svg'
import sleepingIcon from '../../assets/info-tiles-icons/sleeping-icon.svg'

interface InfoTileProps {
    type: 'ceremony' | 'sleeping' | 'plan'
}

const InfoTile = ({type}: InfoTileProps) => {
    const images = {
        ceremony: ceremonyImage,
        plan: planImage,
        sleeping: sleepingImage,
    }
    const icons = {
        ceremony: ceremonyIcon,
        plan: planIcon,
        sleeping: sleepingIcon,
    }

    return (
        <div className='info-main-wrapper'>
            <img src={images[type]} alt={''} style={{width: '25%'}}/>
            <img src={icons[type]} alt={''} style={{margin: '0 20px'}}/>
            {type === 'ceremony' && <CeremonyContent/>}
            {type === 'sleeping' && <SleepingContent/>}
            {type === 'plan' && <PlanContent/>}
        </div>
    )
}
export default InfoTile
