const Button = (props) => {
    const {children, varian="primary"} = props
    return (
        <button
            className={props.className}
        >
            {children}
        </button>
    )
}