import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const SleepingContent = () => {

    const ceremonyLink = "https://maps.app.goo.gl/mME8VVgWTKLqkYZg7?g_st=ac"

    return (
        <div className='info-content-wrapper'>
            <h3 className='mb-2'>NOCLEGI</h3>
            <p>Maioliche Apartments<br/>Griante</p>
            <p className='mb-2'>
                Via Regina 47,<br/>
                22011 Griante-Cadenabbia
            </p>
            <InfoTileButton text='mapa' link={ceremonyLink}/>
        </div>
    )
}
export default SleepingContent
