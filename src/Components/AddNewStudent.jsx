import React from 'react'
import { useDispatch } from 'react-redux'
import {Link,useNavigate} from "react-router-dom"
import "./AddNewStudent.css"
// import { addData } from './slice'
import { addData } from './slice'
// import { useDispatch } from 'react-redux'
// import { StudentContext } from './Context'


const AddNewStudent = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const newObj={
        name:"",
        age:"",
        course:"",
        batch:"",
    }
    const handleChange = (event) =>{
        newObj[event.target.name] = event.target.value;
    }
    const handlesubmit = (e) =>{
        e.preventDefault();
        dispatch(addData(newObj));
        navigate('/student');
    }
    
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Add New Student</h2>
            <div className="input-container ic1">
                <input name="name" type="text"  onChange={handleChange} className="input" placeholder=" " />
                <div className="cut"></div>
                <label htmlFor='name'className="placeholder">Name</label>
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" type="number" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Age</label>
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" type="text" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="course" className="placeholder">Course</label>
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" type="text" onChange={handleChange} placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="batch" className="placeholder">Batch</label>
            </div>
            <Link to="/student"><button className="submit-btn" type='submit' onClick={handlesubmit}>submit</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div>
  )
}

export default AddNewStudent