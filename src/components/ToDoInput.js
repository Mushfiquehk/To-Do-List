import './ToDoInput.css'
import React from 'react';


class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event);
  }

  render() {
    const value = this.props.value;
    const field = this.props.field;
    return (
      <label>
        <h3 className='title'>{field}</h3>
        <input
          type='text'
          name={field}
          value={value}
          onChange={this.handleChange}/>
      </label>
    );
  }
}

export default ToDoInput;
