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

const addUserAction = {
    type: 'ADD_USER',
    payload: [{ name: 'Ayon', email: 'ayonjodder177@gmail.com', password: 'asdfga4' }]
}