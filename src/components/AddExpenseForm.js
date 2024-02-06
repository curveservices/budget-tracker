import { useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid'

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };
    
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    };

    return ( 
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input 
                    required='required' 
                    type="text"
                    className="form-control"
                    id="name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div className="col-sm">
                <label htmlFor="cost">Cost</label>
                <input 
                type="text"
                required='required'
                className="form-control"
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)} />
            </div>
            <div className="col-sm">
                <button 
                type="submit"
                className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>
     );
}
 
export default AddExpenseForm;