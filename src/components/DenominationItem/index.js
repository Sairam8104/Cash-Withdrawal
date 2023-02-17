// Write your code here
import './index.css'

const CashValue = props => {
  const {EachValue, deleteValue} = props
  const {value} = EachValue
  const onDelete = () => {
    deleteValue({value})
  }
  return (
    <li className="item-container">
      <button type="button" className="button" onClick={onDelete}>
        {value}
      </button>
    </li>
  )
}

export default CashValue
