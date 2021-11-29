import React from 'react';

const StudentInfo = () => {

    
    return (
        <div className="container">
            <h1>STUDENT PROFILE</h1>
            <div className="row">
                <div className="col-5">
                    <img style={{ width: "400px", height: "300px" }} src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?size=626&ext=jpg" alt="" />
                    <h3 className="my-3">Name: Jon Hills</h3>
                    <h4>DOB: 2/4/2000</h4>
                    <h4>Phone: +880-1563-9646</h4>
                    <h4>Email: info@gmail.com</h4>
                </div>
                <div className="col-7 .bg-secondary my-5">
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Student Id: GU 65465 5464 5465454</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">University: Oxford University</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Department: Computing</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Passing Year: 2017</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Profession: Doctor</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Permanent Address: Plot-1, Road-1 Main Road, Dhaka Uddan,<br /> Mohammadpur, Dhaka 1207</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Presnt Address: Plot-1, Road-1 Main Road, Dhaka Uddan,<br /> Mohammadpur, Dhaka 1207</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Gender: Male</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Riligon: Islam</h6>
                    <hr/>
                    <h6 className="bg-success p-2 text-white bg-opacity-75">Blood: A ve+</h6>
                </div>
            </div>
        </div>
    );
};

export default StudentInfo;