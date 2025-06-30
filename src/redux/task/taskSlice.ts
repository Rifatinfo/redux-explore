import type { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
interface InitialState {
    tasks : ITask[],
    filter : "All" | "Height" | "Low"
}

const initialState : InitialState = {
    tasks: [
        {
            id: "834798375349875",
            title: "Initial fronted",
            description: "Create Home , and routing",
            dueDate: "2025-11",
            isCompleted: "High" 
        },
        {
            id: "834987968778785568875",
            title: "Initial fronted With GitHub",
            description: "Create Home , and routing",
            dueDate: "2025-11",
            isCompleted: "Low"
        },
    ],
    filter : "All"
}

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
})

export const selectTasks = (state : RootState) => {
    return state.todo.tasks ;
}
export const filterTasks = (state : RootState) => {
    return state.todo.filter ;
}
export default taskSlice.reducer;
