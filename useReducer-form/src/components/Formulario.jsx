import { useReducer } from 'react'

const initialState = {
  firstName: {
    value: '',
    error: null,
  },
  lastName: {
    value: '',
    error: null,
  },
  email: {
    value: '',
    error: null,
  },
}

const formReducer = (state, action) => {
  switch (action.type) {
    case 'updateField':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.value,
        },
      };
    case 'validateField':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          error: action.error === '' ? null : action.error,
        },
      };
    default:
      return state;
  }
};


 
      const validateField = (field, value) => {
        if(field === 'firstName' && value.length < 3){
          return 'First name should be at least 3 characters long.'
        }
        if(field === 'lastName' && value.length < 3){
          return 'Last name should be at least 3 characters long.'
        }
        if(field === 'email' && !value.includes('@')){
          return 'Email should contain @'
        }
      }


    function MyForm(){
      const [state, dispatch] = useReducer(formReducer, initialState)
  
      const handleInputChange =(field, value) => {
        dispatch({
          type: 'updateField', field, value
        });
        dispatch({
          type: 'validateField', field, error: validateField(field, value)
        })
      }
  return (
    <form className="max-w-sm mx-auto mt-5">
  <div className="mb-5">
    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input type="text" id="firstName" value={state.firstName.value} onChange={e => handleInputChange('firstName', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your first name here" required />
    <p className={state.firstName.error !== null ? "text-red-500 text-xs italic" : ""}>{state.firstName.error}</p>
  </div>
  <div className="mb-5">
    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
    <input type="text" id="lastName" value={state.lastName.value} onChange={e => handleInputChange('lastName', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your last name here" required />
    <p className={state.lastName.error !== null ? "text-red-500 text-xs italic" : ""}>{state.lastName.error}</p>
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email address</label>
    <input type="email" id="email" value={state.email.value} onChange={e => handleInputChange('email', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    <p className={state.email.error !== null ? "text-red-500 text-xs italic" : ""}>{state.email.error}</p>
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
  )
}

export default MyForm