import { ChangeEvent, useCallback } from "react";

function CheckBox(props:any) { 
  const {id, name, label, value, checked, onCheckBoxChange} = props;
  const onLocalCheckBoxChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    onCheckBoxChange({id, changes:{checked:e.target.checked}})
  },[id, onCheckBoxChange])
  return (
    <div>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onLocalCheckBoxChange}/>
    <label>{label}</label>
  </div>
  ); 

}; 


export default CheckBox;