const Input = ({id , text , value , onChangeHandler}) =>{
  return(
    <>
      <label htmlFor={id} type="text" className="" /> {text}
      <input type="text" id={id} value={value} 
      onChange={onChangeHandler}/>
    </>
  )
}

export default Input;