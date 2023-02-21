import Student from "../../models/Student";
import { SERVER } from "../../setting";
import axios from "axios";

export function addStudent(stu: Student) {
    return new Promise<{ data: Student }>((resolve) =>
        axios.post(SERVER, stu).then(res => resolve({ data: res.data }))
    );
}

export function getAllStudents() {
    return new Promise<{ data: Student[] }>((resolve) =>
        axios.get(SERVER).then(res => resolve({ data: res.data }))
    );
}

export function delStudent(id: number) {
    return new Promise<{ data: number }>((resolve) =>
        axios.delete(SERVER + "/" + id).then(res => resolve({ data: id }))
    );
}

export function updStudent(stu:Student) {
    return new Promise<{ data: any }>((resolve) =>
        axios.put(SERVER + "/" + stu.id, stu).then(res => resolve({ data: res.data }))
    );
}

