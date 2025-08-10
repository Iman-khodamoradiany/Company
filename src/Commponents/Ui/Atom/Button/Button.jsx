function Button({children , style,OnClick}){
    return (
        <button type="button" className={style} onClick={OnClick}>{children}</button>

    )
}

export default Button;