import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";

const PlanContent = () => {

    const ceremonyLink = "https://www.google.com/maps/search/?api=1&query=Rynek+Główny+1,+Kraków"

    return (
        <div className='info-content-wrapper'>
            <h3>PLAN WYJAZDU</h3>
            <p>4-7 SIERPIEŃ 2027</p>
            <p>Sprawdźcie plan naszego wspólngo wyjazdu pełnego atrakcji, pysznego jedzenia i niezapomnianych chwil.</p>
            <InfoTileButton text='ZOBACZ PLAN' link={ceremonyLink}/>
        </div>
    )
}
export default PlanContent
