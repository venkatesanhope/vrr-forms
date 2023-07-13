import { useCallback, useRef, FormEvent, ChangeEvent, useState } from 'react'
import StringInputField from '../StringInputField/StringInputField';
import RadioInputField from '../RadioInputField/RadioInputField';
import SelectDropDown from '../SelectDropDown/SelectDropDown';

const listState = ['Tamil nadu', 'Kerala', 'Goa', 'west bengal', 'Assam'];
const colors = ['Red', 'Green'];

const StudentForm = () => {

    const [studentId, setStudentId] = useState<number>(0);
    const studentNameRef = useRef<HTMLInputElement | null>(null)

    const sendToServer = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(studentNameRef.current?.value)

    }, [])

    const onStudentIdChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const convertedValue = Number(e.target.value)
        if (!isNaN(convertedValue)) {
            setStudentId(convertedValue);
        }


    }, [])


    //const focusDuringBegining = useCallback((el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el},[])

    return (
        <>
            <form onSubmit={sendToServer}>

                <div className="form-group">
                    <label> StudentName</label>
                    <input className="form-control" ref={studentNameRef} type="text" placeholder="StudentName" ></input>
                    {/*                       <input ref={focusDuringBegining}/>
                    <input  ref={(el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el}} type="text"  placeholder="StudentName" ></input>
 */}                </div>

                {/* <input   placeholder="StudentID" value ={studentId} onChange={onStudentIdChange}></input> */}
                <div className="form-group">
                    <StringInputField label="Student ID" placeholder="Enter Student ID"></StringInputField>
                </div>
                <div className="form-group">
                    <label> Student Class</label>
                    <input className="form-control" type="text" placeholder="StudentClass"></input>
                </div>
                <div className="form-group">
                    <label > Student Section</label>
                    <select className="form-control" >
                        <option value="A">A </option>
                        <option value="B">B </option>
                        <option value="C">C </option>
                        <option value="D">D </option>
                    </select>
                </div>


                <div className="form-group">
                <RadioInputField label="1" radioid="option1" radiooption="notdisabled"></RadioInputField>
                </div>
                <div className="form-group">
                <RadioInputField label="2" radioid="option2" radiooption="notdisabled"></RadioInputField>
                </div>
                <div className="form-group">
                <RadioInputField label="3" radioid="option3" radiooption="disabled"></RadioInputField>
                </div> 
                <div>
                    <SelectDropDown collectionOfData={listState} label="State"></SelectDropDown>
                </div>
                <div>
                    <SelectDropDown collectionOfData={colors} label="Colors"></SelectDropDown>
                </div>       
                <button type="submit"  >FormSubmit</button>
            </form>
        </>
    )
}
export default StudentForm