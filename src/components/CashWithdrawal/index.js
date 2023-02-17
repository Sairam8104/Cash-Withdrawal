// Write your code here

import {Component} from 'react'
import './index.css'
import CashValue from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {initialValue: 2000}

  deleteValue = value => {
    this.setState(prevState => ({
      initialValue: prevState.initialValue - value.value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {initialValue} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <div className="logo-name-container">
            <h1 className="logo">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div className="values-container">
              <p>{initialValue}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="list-container">
              {denominationsList.map(eachItem => (
                <CashValue
                  EachValue={eachItem}
                  deleteValue={this.deleteValue}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
