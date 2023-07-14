import { useCallback, useState } from "react";
import CheckBox from "../CheckBox/CheckBox";

const CheckBoxes = (props:any) => {
    // const {inputs} = props;
    const [inputs, setInputs] = useState([...props.inputs])
    const listenForCheckBoxChange = useCallback ((checkBoxOutputData:any)=>{
        const {id, changes} = checkBoxOutputData;
        console.log(checkBoxOutputData);
        console.log(inputs)
        const index = inputs.findIndex((input)=>input.id===id)
        const newInput = {...inputs[index], ...changes}
        const clonedInputs = [...inputs];
        clonedInputs[index] = newInput;
        setInputs(clonedInputs);
    },[inputs])
    return (
        <div>
            {
                inputs.map( (input:any)=> {
                //   return  <CheckBox key={input.id} name={input.name} label={input.label} value={input.value} checked={input.checked}/>
                return  <CheckBox key={input.id} {...input} onCheckBoxChange={listenForCheckBoxChange}/>    
            })
            }
           
        </div>  
    )
}
export default CheckBoxes;