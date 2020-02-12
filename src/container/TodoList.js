import React from 'react';
import TodoItem from '../components/TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataList: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    const data = [
      { title: 'todo 1번', content: '내용1' },
      { title: 'todo 2번', content: '내용2' },
      { title: 'todo 3번', content: '내용3' },
    ];
    // const data = axios.get('https://api.blah.com/getData');
    this.setState({
      dataList: data,
    });
  }

  func = () => {
    this.setState({
      dataList: [],
    });
  };

  render() {
    console.log('todoList render');
    const { dataList } = this.state;

    return (
      <>
        <button type="button" onClick={this.func}>
          BUTTON
        </button>
        <div>TodoList</div>
        {dataList.map((data, i) => (
          <TodoItem
            key={`${data.title}${`-${i}`}`}
            aaa={data.title}
            content={data.content}
          />
        ))}
      </>
    );
  }
}

export default TodoList;
