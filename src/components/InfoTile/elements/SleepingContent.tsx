import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const SleepingContent = () => {

    const ceremonyLink = "https://www.google.com/maps/search/?api=1&query=Rynek+Główny+1,+Kraków"

    return (
        <div className='info-content-wrapper'>
            <h3>NOCLEGI</h3>
            <p>Maioliche Apartments<br/>Griante</p>
            <p>
                Via Regina 47,<br/>
                22011 Griante-Cadenabbia
            </p>
            <InfoTileButton text='mapa' link={ceremonyLink}/>
        </div>
    )
}
export default SleepingContent
