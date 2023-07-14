import { ChangeEvent, useCallback, useState } from "react"

const StringInputField = (props:any) =>{
    const {label, placeholder, onChange, name} = props;
    const [value, setValue] = useState<string>("");
    const onValueChange = useCallback((e:ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value); 
        onChange({name:name, value:e.target.value})
    },[])
    return (
        <div>
        <label>{label}</label>
        <input type="text" placeholder={placeholder} value={value} onChange={onValueChange}></input>
        </div>
    )

}
export default StringInputField