//some data
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice(
    {
        name : 'dataSlice',
        initialState : [
            {id:1,name:'Shivani',age:26,course:"MERN",batch:"september"},
            {id:2,name:'Sumanya',age:28,course:"MERN",batch:"october"},
            {id:3,name:'Suganya',age:27,course:"MERN",batch:"November"},
            {id:4,name:'Suvarna',age:25,course:"MERN",batch:"December"},
        ],
        // reducer function dispatch actions to update your state
        reducers :
        {
            editData : (state,action)=>{
               console.log("Edit : ")
               console.log(action.payload);
                state[action.payload.index] = action.payload.newObj;
                return (state) 
            },
            addData : (state,action)=>{
                console.log("Add:");
                console.log(action.payload,'payload');
                state.push(action.payload)
                console.log(state);
                return(state)
            }    
        }
    }
);

export const {editData,addData} = dataSlice.actions;
export default dataSlice.reducer; 