import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const CeremonyContent = () => {

    const ceremonyLink = "https://www.google.com/maps/search/?api=1&query=Rynek+Główny+1,+Kraków"

    return (
        <div className='info-content-wrapper'>
            <h3 className=''>CEREMONIA</h3>
            <p>5 sierpnia 2027</p>
            <p>PALAZZO GALLIO</p>
            <p>Gravedona</p>
            <InfoTileButton text='mapa' link={ceremonyLink}/>
        </div>
    )
}
export default CeremonyContent
