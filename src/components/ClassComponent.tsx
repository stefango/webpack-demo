import React from 'react';

export class ClassComponent extends React.Component<any, any> {
  state = { count: 0 };

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
    setTimeout(() => {
      console.log(this.state.count); // 新值：类实例的 this 会持续更新
    }, 0);
  };

  render() {
    return (
      <div>
        CC: {this.state.count} <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}
