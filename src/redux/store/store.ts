import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../../redux/task/taskSlice'; 

const store = configureStore({
  reducer: {
    todo: taskReducer, 
  },
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch  = typeof store.dispatch