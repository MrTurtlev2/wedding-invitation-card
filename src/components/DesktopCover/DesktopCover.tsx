import type {ReactNode} from "react";
import DesktopLottieCover from '../../assets/lottie/weddingoutline.json'
import './DesktopCover.css'
import {Player} from "@lottiefiles/react-lottie-player";

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
                        o telefonach. <span className='text-xs'>(i nie miałem czasu robić desktopu)</span>
                    </p>

                    <p className="device-blocker-hint">
                        Otwórzcie ją proszę na swoim telefonie 🤍
                    </p>
                    <div>
                        <Player speed={0.7}
                                autoplay
                                loop
                                src={DesktopLottieCover}
                                style={{height: '300px', width: '300px'}}/>
                    </div>
                </div>
            </div>
        )
    }

    return children
}
export default DesktopCover
