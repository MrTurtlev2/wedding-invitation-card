import './App.css'
import DecorativeSeparator from "./components/DecorativeSeparator/DecorativeSeparator.tsx";
import MainClock from "./components/MainClock/MainClock.tsx";
import InfoTile from "./components/InfoTile/InfoTile.tsx";
import {ModalProvider} from "./context/PlanInfoModalContext.tsx";
import InfoModal from "./components/infoModal/InfoModal.tsx";
import Footer from "./components/Footer/Footer.tsx";
import DesktopCover from "./components/DesktopCover/DesktopCover.tsx";

function App() {

    return (
        <DesktopCover>
            <ModalProvider>
                <div className="flex flex-col">
                    <section>
                        <h2 className="page-header">
                            Weronika & Marek
                        </h2>
                        <MainClock/>
                    </section>
                    <section className='invitation-info-section'>
                        <p className='text-center mb-5'>ZAPRASZAMY WAS DO WSPÓLNEGO ŚWIĘTOWANIA
                            NASZEGO ŚLUBU NAD JEZIOREM COMO.</p>
                        <DecorativeSeparator/>
                        <p className='text-center mt-5'>To będą wyjątkowe dni pełne miłości, radości i włoskiego
                            klimatu!</p>
                    </section>
                    <section className='info-tiles-section'>
                        <InfoTile type='ceremony'/>
                        <InfoTile type='sleeping'/>
                        <InfoTile type='plan'/>
                    </section>
                    <section className='presents-section'>
                        <h2 className='text-center mb-3'>PREZENTY</h2>
                        <DecorativeSeparator/>
                        <p className='text-center mt-3'>Największym prezentem będzie dla nas Wasza obecność.
                            Nie oczekujemy prezentów, kwiatów ani innych upominków. Sam fakt, że poświęcicie swój czas,
                            aby
                            spędzić z nami te wyjątkowe dni nad jeziorem Como, znaczy dla nas więcej niż jakikolwiek
                            podarunek.</p>

                        <p className='text-center mt-10 font-vibes text-xl'>Dziękujemy, że będziecie z nami!</p>
                    </section>
                    <section className='footer-section'>
                        <Footer/>
                    </section>
                </div>
                <InfoModal/>
            </ModalProvider>
        </DesktopCover>
    )
}

export default App
