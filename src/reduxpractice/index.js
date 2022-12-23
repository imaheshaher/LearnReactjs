
import {createStore} from 'redux'
import Counter from './Counter'
import {Provider} from 'react-redux'
import axios from 'axios'
import { useState } from 'react'

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
    const loadData = async() => {

        const postData = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(postData.data,"postdata")
    }

    const loadProduct = async() => {
        const products =  await axios.get('http://65.1.208.185:8000/product/get')
        console.log(products,"products")
    }
    useState(() => {
        loadData();
        loadProduct()
    },[])
    return(

        <Provider store ={store}>
            <Counter />
        </Provider>
    )
    
}

export default IndexApp;