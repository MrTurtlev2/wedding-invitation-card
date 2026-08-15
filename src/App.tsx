import './App.css'
import DecorativeSeparator from "./components/DecorativeSeparator/DecorativeSeparator.tsx";
import MainClock from "./components/MainClock/MainClock.tsx";
import InfoTile from "./components/InfoTile/InfoTile.tsx";

function App() {

    return (
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
                <p className='text-center mt-5'>To będą wyjątkowe dni pełne miłości, radości i włoskiego klimatu!</p>
            </section>
            <section className='info-tiles-section'>
                <InfoTile type='ceremony'/>
                <InfoTile type='sleeping'/>
                <InfoTile type='plan'/>
            </section>
        </div>
    )
}

export default App
