function Input({title , style , type,Onclick,DefaultChecked}){
    return(
        <input className={style} onClick={Onclick} defaultChecked={DefaultChecked} type={type} placeholder={title}/>
    )
}
export default Input