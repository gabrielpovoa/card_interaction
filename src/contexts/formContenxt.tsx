import { createContext, ReactNode, useContext, useReducer } from "react";

interface State {
    name: string,
    cardNumber: number,
    cardMonth: string,
    cardYear: string,
    cvcCode: number
}

interface Action {
    type: Formactions,
    payload: any,
}

interface ContextType {
    state: State,
    dispatch: (action: Action) => void;
}

interface FormProviderProps {
    children: ReactNode
}

const initialDatum:State = {
    name: '',
    cardNumber: 0,
    cardMonth: '',
    cardYear: '',
    cvcCode: 0
}

//Context
const FormContext = createContext<ContextType | undefined>(undefined)

//Reduce

export enum Formactions {
    setName,
    setCardNumber,
    setSecurityCode,
    setMonth,
    setYear
}

const FormReducer = (state: State, action: Action) => {
    switch(action.type) {
        case Formactions.setName:
            return {...state, name: action.payload};
        break;
        case Formactions.setCardNumber:
            return {...state, cardNumber: action.payload};
        break;
        case Formactions.setMonth:
            return {...state, cardMonth: action.payload};
        break;
        case Formactions.setYear:
            return {...state, cardYear: action.payload};
        break;
        case Formactions.setSecurityCode:
            return {...state, cvcCode: action.payload};
        break;
        default:
            return state;
    }
};

//Provdider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(FormReducer, initialDatum)
    const value = {state, dispatch}
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

//Context Hook

export const useForm = () => {
    const context = useContext(FormContext);

    if(context === undefined) {
        throw new Error('useForm need to be used inside formProvider')
    }
    else {
        return context
    }
}
