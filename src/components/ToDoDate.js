import './ToDoDate.css'

function ToDoDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long'})
  const day = props.date.toLocaleDateString('en-US', {date: '2-digit'})
  const year = props.date.getFullYear()

  return (
    <div className='date'>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  )
}

export default ToDoDate;
