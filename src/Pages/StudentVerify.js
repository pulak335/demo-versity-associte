import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

const StudentVerify = () => {
    const { uniqeId } = useParams();
    const [studentData, setStudentData] = useState([]);
    const [studentId, setStudentId] = useState('');
    useEffect(() => {
        const uri=`http//localhost:5000/${studentId}`
        fetch(uri)
            .then(res => res.json())
            .then(data => console.log(data))
        
    }, [studentId])
    return (
        <div className="container">
            <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Enter Your ID" aria-describedby="button-addon2" onBlur={(e) => {
                    setStudentId(e.target.value)
                }}/>
                <Link to={`/studentverify/${studentId}`}>
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Verify</button>
                </Link>
            </div>
            <div>
                <h1>{studentId}</h1>
            </div>
        </div>
    );
};

export default StudentVerify;