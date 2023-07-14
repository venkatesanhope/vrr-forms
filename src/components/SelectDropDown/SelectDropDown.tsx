
import { useState,useCallback } from 'react'

const SelectDropDown = (props: any) => {
    const { collectionOfData, State } = props;
    const [value,setValue] = useState<String>("");

    const onChangeEvent = useCallback((event:any)=>{
            setValue(event.target.value);
    },[value])

    return (
        <>
        <label>{State}</label>
        <select onChange={onChangeEvent}>
            {collectionOfData.map((collection:any)=>{
                return <option key={collection} value={collection}>{collection}</option>
            })}
        </select>
        </>
    );

};

export default SelectDropDown;
