import { useCallback, useRef, FormEvent, ChangeEvent, useState } from 'react'
import StringInputField from '../StringInputField/StringInputField';
import CheckBox from '../CheckBox/CheckBox';
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
                <div>
                <label>Hobbies</label>
                <CheckBox name="hobby1" label="Playing" value="bike"/> 
                <CheckBox name="hobby2" label="Reading" value="bike"/> 
                <CheckBox name="hobby3" label="cooking" value="bike"/> 
                </div>
                <button type="submit"  >FormSubmit</button>
            </form>
        </>
    )
}
export default StudentForm;