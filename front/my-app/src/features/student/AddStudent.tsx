import React, { useState } from 'react'
import { addStudentAsync } from './studentSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const AddStudent = () => {
    const dispatch = useAppDispatch();
    const [id, setid] = useState(0)
    const [sname, setsname] = useState("")
    const [email, setemail] = useState("")
    const [age, setage] = useState(0)
    const [active, setactive] = useState(true)


    return (
        <div>
            Add a new Student<br></br>
            Student name<input onChange={(e) => setsname(e.target.value)} />
            age:<input onChange={(e) => setage(+e.target.value)} />
            <button onClick={()=>dispatch(addStudentAsync({age,sname,email,active}))}>Add</button>
        </div>
    )
}
export default AddStudent