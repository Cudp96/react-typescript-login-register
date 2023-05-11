import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { registerData } from '../../Services/axios.service';
import { dataInterface } from '../../interface/global.interface';
import { useNavigate } from 'react-router-dom';
import { ToastifyError, ToastifySuccess } from "../../Services/toastify.service";



const Register = () => {
    const [fullName, setFullName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [dob, setDob] = useState<number>(0);
    
    const navigate = useNavigate();
    
    
    const submitHandler = async(e: any) => {
      e.preventDefault();
        const dateOfBirth = new Date(dob);
        const data: dataInterface = {
            fullName,
            phoneNumber,
            email,
            password,
            dob: dateOfBirth,
        }
        
        const response:any = await registerData(data);
        console.log(response);

        
        if (response.data.status) {
          navigate("/login");
          ToastifySuccess(response.data.message)
        }
        else{
          ToastifyError(response.data.message)
        }
    }
    return (
        <>
            <Container className='w-80 d-flex justify-content-center align-content-center'>
                <Form className='container '>
                    <h3 className='text-center text-bold'>Register</h3>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirst-Name">
                            <Form.Label>Full-Name</Form.Label>
                            <Form.Control type="text" name='fullName' placeholder="Enter First Name" onChange={(e: any) => setFullName(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGriLast-Name">
                            <Form.Label>Phone-Number</Form.Label>
                            <Form.Control type="number" name='phoneNumber' placeholder="Enter Phone Number" onChange={(e: any) => setPhoneNumber(e.target.value)} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e: any) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Date-Of-Birth</Form.Label>
                            <Form.Control type="date" name='dob' onChange={(e: any) => setDob(e.target.value)} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mb-3 justify-content-center' onClick={submitHandler}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Register