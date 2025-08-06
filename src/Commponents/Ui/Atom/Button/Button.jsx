function Button({children , style}){
    return (
        <button type="button" className={style}>{children}</button>
    )
}

export default Button;