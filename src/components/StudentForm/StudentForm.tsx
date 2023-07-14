import { useCallback, useRef, FormEvent, ChangeEvent, useState } from 'react'
import StringInputField from '../StringInputField/StringInputField';
import CheckBoxes from '../CheckBoxes/CheckBoxes';
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
    const onStudentInputChange = useCallback ((outputdata:any)=>{
        console.log(outputdata);
    },[]) 


    //const focusDuringBegining = useCallback((el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el},[])

    return (
        <>
            <form onSubmit={sendToServer}>

                <div className="form-group">
                    <label> StudentName</label>
                <div className="form-group">
                    <StringInputField name="studentName" label="Student Name" placeholder="Enter Student Name" onChange={onStudentInputChange}></StringInputField>
                </div>
                    {/* <input className="form-control" ref={studentNameRef} type="text" placeholder="StudentName" ></input> */}
                    {/*                       <input ref={focusDuringBegining}/>
                    <input  ref={(el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el}} type="text"  placeholder="StudentName" ></input>
 */}                </div>

                {/* <input   placeholder="StudentID" value ={studentId} onChange={onStudentIdChange}></input> */}
                <div className="form-group">
                    <StringInputField name="studentId" label="Student ID" placeholder="Enter Student ID" onChange={onStudentInputChange}></StringInputField>
                </div>
                {/* <div className="form-group">
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
                </div> */}
                <div>
                <label>Hobbies</label>
                <CheckBoxes inputs={[{id:"1", name:"hobby1", label:"playing", value:"bike", checked:false}, {id:"2", name:"hobby2", label:"Reading", value:"read", checked:true}]} onChange={onStudentInputChange}></CheckBoxes>
              
                </div>
                <button type="submit"  >FormSubmit</button>
            </form>
        </>
    )
}
export default StudentForm;