import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const CeremonyContent = () => {

    const ceremonyLink = "https://maps.app.goo.gl/9QXUipqVGgXYCT499?g_st=ac"

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
