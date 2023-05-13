import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter = () => {

    const count = useSelector((state:any)=>(state.counter.count));
    const dispatch = useDispatch();

  return (
    <div>
         <Card className='w-50 d-flex justify-content-center mx-auto my-5'>
                <Card.Header className='text-center'>Counter App</Card.Header>
                <Card.Body className='text-center text-bold'>{count<0?'Cannot Decrement More!!!': count}</Card.Body>
                <Card.Footer className='d-flex justify-content-center'>
                    <Button variant="primary" onClick={()=>dispatch(increment())} >Increment</Button>
                    <Button variant='danger' className='ms-2' onClick={()=>dispatch(reset())}>Reset</Button>
                    <Button variant='secondary' className='ms-2' onClick={()=>dispatch(decrement())}>Decrement</Button>
                </Card.Footer>
            </Card>
    </div>
  )
}

export default Counter;