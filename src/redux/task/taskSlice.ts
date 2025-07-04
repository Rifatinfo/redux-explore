import type { ITask } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import { v4 as uuidv4 } from 'uuid';
import { removeUser } from "../user/userSlice";
// import { el } from "date-fns/locale";

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
            isCompleted: "Height",
            isTask: true,
            assignedTo : null,

        },
        {
            id: "834987968778785568875",
            title: "Initial fronted With GitHub",
            description: "Create Home , and routing",
            dueDate: "2025-11",
            isCompleted: "Low",
            isTask: false,
            assignedTo : null
        },
    ],
    filter: "All" 
}

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "isCompleted" | "assignedTo">


const createTask = (taskData: DraftTask): ITask => {
    return { ...taskData, id: uuidv4(),  isTask: false ,
        assignedTo : taskData.assignedTo ? taskData.assignedTo : null 
    }
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<DraftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action: PayloadAction<string>) => {
            state.tasks.forEach((task) => task.id === action.payload ? (task.isTask = !task.isTask) : task)
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id != action.payload)
        },
        updateFilter : (state, action: PayloadAction<"All" | "Height" | "Low">) => {
            state.filter = action.payload;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(removeUser, (state, action) => {
            state.tasks.forEach((task) =>
                task.assignedTo === action.payload ? (task.assignedTo = null) : task 
            )
        })
    }
})

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;
    if(filter === "Low"){
       return state.todo.tasks.filter((task) => task.isCompleted === "Low");
    }
    else if(filter === "Height"){
       return state.todo.tasks.filter((task) => task.isCompleted === "Height");
    }
    else{
        return state.todo.tasks;
    }

}
export const filterTasks = (state: RootState) => {
    return state.todo.filter;
}
export const { addTask, toggleCompleteState, deleteTask , updateFilter} = taskSlice.actions;
export default taskSlice.reducer;
