// rotationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cardSlice = createSlice({
  name: 'task',
  initialState: [],
  reducers: {
    addTask: (state: any, action: any) => {
      state.push(action.payload);
    },
    editTask: (state: any, action: any):void => {
      state[action.payload.index] = action.payload.value;
    },
    deleteTask: (state: any, action: any) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTask, deleteTask, editTask } = cardSlice.actions;
export default cardSlice.reducer;
