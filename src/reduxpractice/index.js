
import {createStore} from 'redux'
import Counter from './Counter'
import {Provider} from 'react-redux'
const intialState = {
    count : 0
}
function reducer (state=intialState,action) {

    console.log('reducer',state,action)
    switch (action.type) {
        case "INCREMENT":
            
            return{
                count:state.count+5
            };
        case "DECREMENT":
            return{
                count: state.count-1
            };
        default:
            return state
    }
    
}
const store = createStore(reducer)

store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"DECREMENT"})
store.dispatch({type:"DECREMENT"})
const IndexApp= () => {
    return(

        <Provider store ={store}>
            <Counter />
        </Provider>
    )
    
}

export default IndexApp;