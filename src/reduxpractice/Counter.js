import React from 'react';
import {connect} from 'react-redux'
// import {INCREMENT,DECREMENT} from './action'
import {increment,decrement} from './action'
function mapStateToProps (state) {
return {
    count:state.count
}
}


class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {

    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
    
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Counter);