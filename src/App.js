import './App.css';
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';
import Card from './components/Card';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      to_do_list: [
        {
          title: 'Group Presentation',
          date: new Date(2021, 7, 7),
          description: 'Meet with teammates',
        },
        {
          title: 'fake',
          date: new Date(2021, 7, 7),
          description: '400',
        },
      ],
      tvalue: '',
      dvalue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.tvalue;
    const description = this.state.dvalue;
    const to_do_list = this.state.to_do_list;
    const to_do = {
      title: title,
      date: new Date(),
      description: description,
    };

    this.setState({
      to_do_list: to_do_list.concat([to_do]),
    })

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "Title") {
      this.setState({
        tvalue: value,
      })
    };

    if (name === "Description") {
      this.setState({
        dvalue: value,
      })
    };
  }

  render() {
    const to_do_list = this.state.to_do_list;
    const task_list = to_do_list.map((task) => {
        const title = task.title;
        const date = task.date;
        const description = task.description;

        return (
          <li
            className="to_do_list"
            key={title}
            >
              {title !== "fake" &&
              <ToDoItem
                title={title}
                date={date}
                description={description}
                />
              }
          </li>
        );
    });

    return (
      <div className="App">

        <Card className="task">
          <h2 className='title'>Task List</h2>
          <ul>
            {task_list}
          </ul>
        </Card>

        <Card className='toDoForm'>
          <ToDoInput
            field='Title'
            value={this.state.value}
            onInputChange={this.handleChange}
          />
          <ToDoInput
            field='Description'
            value={this.state.value}
            onInputChange={this.handleChange}
          />
          <button
            onClick={this.handleSubmit}
            >Submit</button>
        </Card>
      </div>
    );
  }
}

export default App;
