interface InfoTileButtonProps {
    text: string
    onClick?: () => void
    link?: string
}

const InfoTileButton = ({text, link, onClick}: InfoTileButtonProps) => {

    return (
        <>
            {link ? (
                <a href={link} target="_blank"
                   rel="noopener noreferrer" className='button-main'>
                    <p className='button-text'>{text}</p>
                </a>
            ) : (
                <div className='button-main' onClick={onClick}>
                    <p className='button-text'>{text}</p>
                </div>
            )}
        </>

    )
}
export default InfoTileButton
