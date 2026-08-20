import type {ReactNode} from "react";
import DesktopLottieCover from '../../assets/lottie/test.json'
import './DesktopCover.css'
import {Lottie} from "lottie-react";

const DesktopCover = ({children}: { children: ReactNode }) => {
    const isMobile =
        window.matchMedia('(max-width: 767px) and (pointer: coarse)').matches

    if (!isMobile) {
        return (
            <div className="device-blocker">
                <div className="device-blocker-content">
                    <div className="device-blocker-heart">♡</div>

                    <h1 className="device-blocker-title">
                        Weronika & Marek
                    </h1>

                    <div className="device-blocker-line"/>

                    <p className="device-blocker-text">
                        Nasza strona została przygotowana z myślą
                        o telefonach.
                    </p>

                    <p className="device-blocker-hint">
                        Otwórzcie ją proszę na swoim telefonie 🤍
                    </p>
                    <div>
                        <Lottie
                            src={DesktopLottieCover}
                            loop
                            autoplay
                        />
                    </div>
                </div>
            </div>
        )
    }

    return children
}
export default DesktopCover
