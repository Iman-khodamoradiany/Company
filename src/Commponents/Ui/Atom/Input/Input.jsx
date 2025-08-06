function Input({title , style , type}){
    return(
        <input className={style} type={type} placeholder={title}/>
    )
}
export default Input