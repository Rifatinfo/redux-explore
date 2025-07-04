import type { IUser } from "@/types/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface InitialState {
    users: IUser[];
}

const initialState: InitialState = {
    users: [
        {
            id: "349773895",
            name: "Md Rifat Hossain"
        }
    ]
}

type DraftUser = Pick<IUser, "name">;

const createUser = (userDate: DraftUser): IUser => {
    return { id: nanoid(), ...userDate };
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userDate = createUser(action.payload);
            state.users.push(userDate);
        },
        removeUser: (state, actions: PayloadAction<string>) => {
            state.users = state.users.filter((user) => user.id != actions.payload);
        }
    }

})

export const selectUsers = (state: RootState) => state.user.users;
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;