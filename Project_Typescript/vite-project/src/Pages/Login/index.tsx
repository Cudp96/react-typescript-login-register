import { useState } from 'react'
import { loginData } from '../../Services/axios.service';
import { ToastifyError, ToastifySuccess } from "../../Services/toastify.service";
import { useNavigate } from 'react-router-dom';
import { loginInterface } from '../../interface/global.interface';
import { useDispatch } from 'react-redux';
import { login } from './loginSlice';
import './index.css'



const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = async (e: any) => {
        e.preventDefault();
        const data: loginInterface = {
            email,
            password,
        }
        const response: any = await loginData(data);

        if (response.status) {
            navigate('/dashboard')
            dispatch(login());
            ToastifySuccess(response.data.message)
        }
        else {
            ToastifyError(response.data.message)
        }

    }
    return (
        // <Container className='w-80 d-flex justify-content-center align-content-center'>
        //     <Form >
        //         <h3 className='text-center'>Log-In</h3>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email:</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e:any)=> setEmail(e.target.value)} />
        //             <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password"  onChange={(e:any)=> setPassword(e.target.value)}/>
        //         </Form.Group>

        //         <Button variant="primary" type="submit" onClick={submitHandler}>
        //             Submit
        //         </Button>
        //     </Form>
        // </Container>

        <>
            <div className="login-box">
                <h2>Log-In</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name=""  onChange={(e:any)=> setEmail(e.target.value)} />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" onChange={(e:any)=> setPassword(e.target.value)} />
                        <label>Password</label>
                    </div><center>
                        <a href="#" onClick={submitHandler}>
                            SEND
                            <span></span>
                        </a></center>
                </form>
            </div>
        </>
    )
}

export default Login