function Button({children , style , Onclick}){
    return (
        <button onClick={Onclick} type="button" className={style}>{children}</button>
    )
}

export default Button;