import {useModal} from "../../context/PlanInfoModalContext.tsx";
import './InfoModal.css'
import DecorativeSeparator from "../DecorativeSeparator/DecorativeSeparator.tsx";
import {useEffect} from "react";

const InfoModal = () => {
    const {isOpen, closeModal} = useModal()

    useEffect(() => {
        if (!isOpen) return

        window.history.pushState({modal: true}, '')

        const handlePopState = () => {
            closeModal()
        }

        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('popstate', handlePopState)
        }
    }, [isOpen, closeModal])
    if (!isOpen) {
        return null
    }

    return (
        <div
            className="modal-backdrop"
            onClick={closeModal}
        >
            <div
                className="modal-panel"
                onClick={(event) => event.stopPropagation()}
            >
                <h2>Plan Wyjazdu</h2>

                <DecorativeSeparator/>

                <div className="info-modal-content">
                    <h3>4 lipca – Benvenuti in Italia 🇮🇹</h3>
                    <p>• Przyjazd do apartamentów</p>
                    <p>• Zameldowanie</p>
                    <p>• Wieczorne spotkanie powitalne przy włoskim aperitivo</p>

                    <h3>5 lipca – Dzień Ślubu 🤍</h3>
                    <p>• Wspólne przygotowania</p>
                    <p>• Ceremonia w Palazzo Gallio</p>
                    <p>• Uroczysty obiad i świętowanie</p>
                    <p>• Wieczór pełen tańca, muzyki i prosecco</p>

                    <h3>6 lipca – Lake Como Day ☀️</h3>
                    <p>• Wspólne śniadanie</p>
                    <p>• Czas wolny nad jeziorem</p>
                    <p>• Zwiedzanie Bellagio, Varenny lub Menaggio</p>

                    <h3>7 lipca – Arrivederci 👋</h3>
                    <p>• Śniadanie</p>
                    <p>• Pożegnania</p>
                    <p>• Powrót do domu</p>
                </div>
            </div>
        </div>
    )
}

export default InfoModal
