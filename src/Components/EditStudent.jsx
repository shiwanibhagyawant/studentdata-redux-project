import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useLocation, useNavigate} from "react-router-dom"
import "./AddNewStudent.css"
import { editData } from './slice'

const EditStudent = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const index=(location.state.editData);
    const dispatch=useDispatch();
    const array = useSelector((state)=>state.dataKey)
    const newObj={
        name:array[index].name,
        age:array[index].age,
        course:array[index].course,
        batch:array[index].batch,
    }
    console.log("Index : " + index)
    const handleChange = (event) =>
    {
        newObj[event.target.name] = event.target.value;
       // console.log(newObj);     
    }

   const handleUpdate = (event) =>{
    //    console.log(context.entries[index])
    // payload : parameter passed with the action
    dispatch(editData({newObj,index}));
    //    context.updateFunction(
    //     (prevObj)=>{
    //         prevObj[index] = newObj;
    //         return (prevObj)  //updated prevobj is the new state
    //     }
    //    );
       navigate('/');
    }
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Edit Student Details</h2>
            <div className="input-container ic1">
                <input name="name" type="text" onChange={handleChange} className="input" placeholder={array[index].name} />
                <div className="cut"></div>
                {/* <label htmlFor='name'className="placeholder">Name</label> */}
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" onChange={handleChange} type="number" placeholder={array[index].age}/>
                <div className="cut"></div>
                {/* <label htmlFor="age" className="placeholder">Age</label> */}
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" onChange={handleChange} type="text" placeholder={array[index].course} />
                <div className="cut"></div>
                {/* <label htmlFor="course" className="placeholder">Course</label> */}
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" onChange={handleChange} type="text" placeholder={array[index].batch} />
                <div className="cut"></div>
                {/* <label htmlFor="batch" className="placeholder">Batch</label> */}
            </div>
            <Link to="/student"><button className="submit-btn" onClick={handleUpdate} type='submit'>Update</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div> 
  )
}

export default EditStudent