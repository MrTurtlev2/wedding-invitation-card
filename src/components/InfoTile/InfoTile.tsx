import './InfoTile.css'

interface InfoTileProps {
    type: 'ceremony' | 'sleeping' | 'plan'
}

const InfoTile = ({type}: InfoTileProps) => {

    
    return (
        <div className='info-main-wrapper'>
            <img src={`/assets/info/${type}.png`} alt={''}/>

        </div>
    )
}
export default InfoTile
