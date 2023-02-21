import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Counter.module.css';
import { selectStudnts, getAllStudentsAsync, delStudentAsync, addStudentAsync,updStudentAsync } from './studentSlice';

export function Student() {
    const students = useAppSelector(selectStudnts);
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(getAllStudentsAsync()) }, [])
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
            <button onClick={() => dispatch(addStudentAsync({
                age, sname,
                email: '',
                active: false
            }))}>Add</button>
            {students.map((student , index) =>
                <div key={index}>
                    <button onClick={() => dispatch(delStudentAsync(student.id || -1))} >Del</button>
                    <button onClick={() => dispatch(updStudentAsync({age,sname, id:student.id,active,email}))} >upd</button>
                    Name:{student.sname},
                    Age:{student.age}
                </div>)}
        </div>
    );
}
