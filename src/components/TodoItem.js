import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    let a;
  }

  componentDidMount() {
    this.a = setTimeout(() => {
      console.log('setTime');
    }, 3000);
  }

  componentWillUnmount() {
    const { aaa } = this.props;
    console.log(`${aaa}컴포넌트 지워짐`);
    clearTimeout(this.a);
  }

  render() {
    const { aaa, content } = this.props;

    return (
      <div>
        <p>TodoItem</p>
        <p>제목 : {aaa}</p>
        <p>내용 : {content}</p>
      </div>
    );
  }
}

export default TodoItem;
