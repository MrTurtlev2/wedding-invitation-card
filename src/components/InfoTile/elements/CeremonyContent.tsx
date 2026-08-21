import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const CeremonyContent = () => {

    const ceremonyLink = "https://maps.app.goo.gl/9QXUipqVGgXYCT499?g_st=ac"

    return (
        <div className='info-content-wrapper'>
            <h3 className='mb-2'>CEREMONIA</h3>
            <p className=''>5 sierpnia 2027</p>
            <p>PALAZZO GALLIO</p>
            <p className='mb-2'>Gravedona</p>
            <InfoTileButton text='mapa' link={ceremonyLink}/>
        </div>
    )
}
export default CeremonyContent
