import {useEffect, useRef, useState} from 'react'
import '../MainClock.css'

type AnimatedNumberProps = {
    value: number
    label: string
}

const AnimatedNumber = ({value, label}: AnimatedNumberProps) => {
    const previousValue = useRef(value)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (value === previousValue.current) return

        previousValue.current = value
        setIsAnimating(true)

        const timeout = setTimeout(() => {
            setIsAnimating(false)
        }, 400)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <div className="date-cell">
            <span className="number-wrapper text-2xl">
                <span
                    key={value}
                    className={`number ${
                        isAnimating ? 'number-new' : ''
                    }`}
                >
                    {value}
                </span>
            </span>

            <span className="text-base">
                {label}
            </span>
        </div>
    )
}

export default AnimatedNumber
