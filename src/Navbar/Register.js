import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './style.css';
import {useState} from 'react';
import axios from "axios";
import { useEffect } from 'react';

const Register=()=>{
    const[Inputs,setInputs]=useState({});
    const[data,setData]=useState([]);
    const[stateUpdate,setStateUpdate]=useState([]);
    const[userErr,setUserErr]=useState(false);
    const[emailErr, setEmailErr]= useState(false);
    const[validContactNumberErr,setValidContactNumberErr ]= useState(false);    
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validUserName = new RegExp(/^[a-zA-Z]+([a-zA-Z](_|-| )[a-zA-Z])*[a-zA-Z]+$/);
    const validContactNumber = new RegExp(/^[0-9]+$/);

    const getCustomersData = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then(data => setData(data.data))
            .catch(error => alert("error"));
    };
    useEffect(() => {
        getCustomersData();
      }, []);

    const handleChange = (event) => {
        const name= event.target.name;
        const value=event.target.value;    
        setInputs(values =>({...values, [name] : value }))
    }

    console.log(Inputs);

    const handleSubmit=(event)=>{
        event.preventDefault();

        axios({
            // Endpoint to send files
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            // Attaching the form data
            data: Inputs,
        })
            // Handle the response from backend here
            .then((res) => {
                alert("success")
            })
 
            // Catch errors if any
            .catch((err) => {
                alert("failed")
            });

        if(!validEmail.test(Inputs.email)){
            setEmailErr(true);
        }
        if(!validUserName.test(Inputs.name)){
            setUserErr(true);
        }
        if(!validContactNumber.test(Inputs.contact)){
            console.log(Inputs.contact,'yte');
            setValidContactNumberErr(true);
        }
        console.log(userErr,emailErr,validContactNumberErr);
        if(userErr && emailErr && validContactNumberErr){
        // data.push({Inputs});
        setStateUpdate([]);
        setEmailErr(false);
        setUserErr(false);
        setValidContactNumberErr(false);
        }     
        }

    return(
        <>
            <Form onSubmit={handleSubmit} className="formStyle">
                <Form.Group className="mb-3">
                    <Form.Label>Enter your Name:</Form.Label>
                    <Form.Control  type="Name" name="name" placeholder="Enter Name" onChange={handleChange} />  
                    {userErr && <span style={{color: "red"}}>please enter only character</span>}            
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your Email:</Form.Label>
                    <Form.Control type="text" name="email" placeholder="Enter Email" onChange={handleChange} />
                    {emailErr && <span style={{color: "red"}}>please enter correct email</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your Contact Number:</Form.Label>
                    <Form.Control type="text" name="contact" placeholder="Contact Number" onChange={handleChange} />
                    {validContactNumberErr && <span style={{color: "red"}}>please enter only integer</span>}
                </Form.Group>
                <div className='buttonStyle'>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </div>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d)=>{
                        return(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.userId}</td>
                                <td>{d.title}</td>
                            </tr>
                        );
                    })}                  
                </tbody>
            </Table>
        </>
    );
}
export default Register;