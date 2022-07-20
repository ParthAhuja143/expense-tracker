//Reducer is a function that takes in an old state and an action and changes the state

const contextReducer = (state , action) => {

    let transactions 

    switch(action.type){

        case 'DELETE_TRANSACTION' :
        transactions = state.filter((t) => t.id !== action.payload)

        localStorage.setItem('transactions' , JSON.stringify(transactions))

        return transactions

        case 'ADD_TRANSACTION' : 
        if(action.payload.amount > 0 && action.payload.category !== ''){
        transactions = [action.payload , ...state]

        localStorage.setItem('transactions' , JSON.stringify(transactions) )

        return transactions 
        }
        else return state

        default : 
        return state
    }
}

export default contextReducer