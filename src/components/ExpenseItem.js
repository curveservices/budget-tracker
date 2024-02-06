import { Badge } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';


const ExpenseItem = (props) => {
    return ( 
        <li className='list-group-item d-flex justify-content-between align-content-center'>
            {props.name}
            <div>
                <Badge pill="pill" mt='mt-3'>
                    £{props.cost}
                </Badge>
                <TiDelete size='1.5em' />
            </div>
        </li>
     );
}
 
export default ExpenseItem;