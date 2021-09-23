
import './App.css';
import Counters from './component/counters';
import Navbar from './component/navbar';
import React from 'react';


class App  extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 20 },
      { id: 4, value: 30 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() { 
    return (
      <div className="container">
        <Navbar totalCounters={this.state.counters.reduce((a,c)=>a + c.value,0)}/>
        <Counters 
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
