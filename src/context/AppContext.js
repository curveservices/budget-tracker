import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        default:
            return state;
    }
}

const initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 300 },
        { id: 14, name: 'Transportation', cost: 70 },
        { id: 15, name: 'Fuel', cost: 50 },
        { id: 16, name: 'Child care', cost: 300 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {props.children}
        </AppContext.Provider>
    );
};
