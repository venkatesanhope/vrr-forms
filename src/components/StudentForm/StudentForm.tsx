import { useCallback, useRef,FormEvent, ChangeEvent, useState } from 'react'
const StudentForm = () => {

const [studentId,setStudentId]=useState<number>(0);
const studentNameRef = useRef<HTMLInputElement | null>(null)

const sendToServer = useCallback((e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
console.log(studentNameRef.current?.value)

},[])

const onStudentIdChange = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    const convertedValue = Number(e.target.value)
    if (!isNaN(convertedValue)){
        setStudentId(convertedValue);
    }
   

},[])


//const focusDuringBegining = useCallback((el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el},[])

    return (
        <>
            <form onSubmit={sendToServer}>

                <div>
                    <label> StudentName</label>
                    <input  ref={studentNameRef} type="text"  placeholder="StudentName" ></input>
  {/*                       <input ref={focusDuringBegining}/>
                    <input  ref={(el:HTMLInputElement)=>{el.focus(); studentNameRef.current=el}} type="text"  placeholder="StudentName" ></input>
 */}                </div>
                <div>
                    <label> StudentID</label>
                    <input   placeholder="StudentID" value ={studentId} onChange={onStudentIdChange}></input>
                </div>
                <div >
                    <label> Student Class</label>
                    <input type="text"  placeholder="StudentClass"></input>
                </div>
                <div >
                    <label> Student Section</label>
                    <select >
                        <option value="A">A </option>
                        <option value="B">B </option>
                        <option value="C">C </option>
                        <option value="D">D </option>
                    </select>
                </div>

                <button type="submit"  >FormSubmit</button>
            </form>
        </>
    )
}
export default StudentForm