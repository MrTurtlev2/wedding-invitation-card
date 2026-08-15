import './InfoTile.css'

interface InfoTileProps {
    type: 'ceremony' | 'sleeping' | 'plan'
}

const InfoTile = ({type}: InfoTileProps) => {
    return (
        <div className='info-main-wrapper'>
            <img src={`/assets/info-tiles/${type}.png`} alt={''}/>
            <img src={`/assets/info-tiles-icons/${type}-icon.svg`} alt={''}/>
        </div>
    )
}
export default InfoTile
