import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks: ITask[],
    filter: "All" | "Height" | "Low"
}

const initialState: InitialState = {
    tasks: [
        {
            id: "834798375349875",
            title: "Initial fronted",
            description: "Create Home , and routing",
            dueDate: "2025-11",
            isCompleted: "High",
            isTask: true
        },
        {
            id: "834987968778785568875",
            title: "Initial fronted With GitHub",
            description: "Create Home , and routing",
            dueDate: "2025-11",
            isCompleted: "Low",
            isTask: false
        },
    ],
    filter: "All"
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "isCompleted">
const createTask = (taskData: DraftTask): ITask => {
    return { id: uuidv4(), ...taskData, isTask: false }
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            // };
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? (task.isTask = !task.isTask) : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id != action.payload)
        }
    },
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const filterTasks = (state: RootState) => {
    return state.todo.filter;
}
export const { addTask, toggleCompleteState, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
