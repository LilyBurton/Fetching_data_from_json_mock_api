const Button = ({ buttonText, type, setType }) => {
    return (
        <button
            className={buttonText === type ? "selected" : null}
            type="button"
            onClick={() => setType(buttonText)}
        >
            {buttonText}

        </button>
    )
}

export default Button
