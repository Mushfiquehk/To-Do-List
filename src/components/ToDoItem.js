import './ToDoItem.css';
import Card from './Card';
import ToDoDate from './ToDoDate';

function ToDoItem(props) {
  return  (
    <Card className="to_do_item">
      <ToDoDate date={props.date}/>
      <div className="to_do_item__info">
        <h2>{props.title}</h2>
        <div className="to_do_item__description">{props.description}</div>
      </div>
    </Card>
  );
}

export default ToDoItem;
