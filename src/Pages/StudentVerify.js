import React,{useState} from 'react';
import StudentInfo from './StudentInfo';

const StudentVerify = () => {
    const [studentData, setStudentData] = useState([]);
    const [studentId, setStudentId] = useState('');


    const handleInput = (e) => {
        e.preventDefault();
        const id = e.target.value;
        setStudentId(id)
    }
    
    const callStudentData = (id) => {

        const uri = `http://localhost:5000/students/${id}`
        fetch(uri)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    

    return (
        <div className="container">
            <div className="input-group my-3">

                <input type="text" className="form-control" placeholder="Enter Your ID" aria-describedby="button-addon2" onBlur={handleInput} />
                
                <button className="btn btn-outline-secondary" type="button" onClick={()=>callStudentData(studentId)}>Verify</button>
                
            </div>
            <div>
                
                <StudentInfo></StudentInfo>
             
            </div>
        </div>
    );
};

export default StudentVerify;