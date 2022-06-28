// ----------------> STATE---------------->
// All the state is stored in the store
const initialCountState = {
    count: 0,
}

const initialUserState = {
    user: [{ name: '', email: '', password: '' }],
}


// ----------------> ACTION---------------->
// Actions are payloads of information that send data from your application to your store.
// Actions must have a type property that indicates the type of action being performed.
// Actions may optionally have a payload property that contains the information necessary to complete the action.
// Actions must be plain objects.

//Increment Action
const incrementAction = {
    type: 'INCREMENT',
}

//Decrement Action
const decrementAction = {
    type: 'DECREMENT',
}

const addUserAction = {
    type: 'ADD_USER',
    payload: [{ name: 'Ayon', email: 'ayonjodder177@gmail.com', password: 'asdfga4' }]
}


// ----------------> REDUCER---------------->
// Reducers specify how the application's state changes in response to actions sent to the store.
// Reducers must be pure functions of the state and action parameters passed to them.
// They must not modify the state or action object passed to them.
// They must not have any side-effects.

// Reducer for count
const countReducer = (state = initialCountState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, /* if the state has multiple property then we can use spread operator to copy the state and use the property to update */
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}
