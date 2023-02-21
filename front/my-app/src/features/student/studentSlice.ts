import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import Student from '../../models/Student';
import { addStudent, getAllStudents,delStudent,updStudent } from './studentAPI';

interface StudentState {
    status: 'idle' | 'loading' | 'failed';
    students: Student[]
}
const initialState: StudentState = {
    status: 'idle',
    students: []
};


export const addStudentAsync = createAsyncThunk(
    'student/addStudent',
    async (newStudent: Student) => {

        const response = await addStudent(newStudent);
        return response.data;
    }
);

export const getAllStudentsAsync = createAsyncThunk(
    'student/getAllStudents',
    async () => {
        const response = await getAllStudents();
        return response.data;
    }
);
export const delStudentAsync = createAsyncThunk(
    'student/delStudent',
    async (id:number ) => {
        const response = await delStudent(id);
        return response.data;
    }
);

export const updStudentAsync = createAsyncThunk(
    'student/updStudent',
    async (stu:Student ) => {
        const response = await updStudent(stu);
        return response.data;
    }
);
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        increment: (state) => {
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addStudentAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.students.push(action.payload)
        }).addCase(getAllStudentsAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.students = action.payload
        }).addCase(delStudentAsync.fulfilled, (state, action) => {
            // console.log(action.payload)
            state.students =state.students.filter(stu => stu.id !== action.payload)
        }).addCase(updStudentAsync.fulfilled, (state, action) => {
            // console.log(action.payload.id)
            const temp= state.students.filter(stu => stu.id === action.payload.id)[0]
            temp.age=action.payload.age
            temp.sname =action.payload.sname
        });
    },
});

export const { } = studentSlice.actions;
export const selectStudnts = (state: RootState) => state.student.students;
export default studentSlice.reducer;
