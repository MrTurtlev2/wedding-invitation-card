import '../InfoTile.css'
import InfoTileButton from "./InfoTileButton.tsx";
import {useModal} from "../../../context/PlanInfoModalContext.tsx";

const PlanContent = () => {

    const {openModal} = useModal()
    return (
        <>
            <div className='info-content-wrapper'>
                <h3>PLAN WYJAZDU</h3>
                <p>4-7 SIERPIEŃ 2027</p>
                <p>Sprawdźcie plan naszego wspólngo wyjazdu pełnego atrakcji, pysznego jedzenia i niezapomnianych
                    chwil.</p>
                <InfoTileButton text='ZOBACZ PLAN' onClick={openModal}/>
            </div>
        </>
    )
}
export default PlanContent
