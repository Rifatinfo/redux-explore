import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../../redux/task/taskSlice'; 
import userReducer from '../../redux/user/userSlice'
const store = configureStore({
  reducer: {
    todo: taskReducer, 
    user : userReducer
  },
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch