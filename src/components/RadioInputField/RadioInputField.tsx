import { ChangeEvent, useCallback, useState } from "react";

const RadioInputField = (props: any) => {
    const { label, radioid, radiooption } = props;
    const [value, setValue] = useState<string>("");
    const onValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [])


    return (
        <div>
            <label>{label}</label>
           
            <input type="radio" value={radioid} onChange={onValueChange}  />

            {value}
        </div>
    )
}
export default RadioInputField