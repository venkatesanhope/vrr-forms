
import { useState,useCallback } from 'react'

const MultiSelectDropDown = (props: any) => {
    const { collectionOfData, label } = props;
    const [value,setValue] = useState<Array<string>>([]);

    const onChangeEvent = useCallback((event:any)=>{
            console.log(event.target.value);
            setValue(oldValue => [...oldValue,event.target.value]);
    },[value])

    return (
        <>
        <label>{label}</label>
        <select onChange={onChangeEvent} multiple>
            {collectionOfData.map((collection:any)=>{
                return <option key={collection} value={collection}>{collection}</option>
            })}
        </select>
        </>
    );

};

export default MultiSelectDropDown;