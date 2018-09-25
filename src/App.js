import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { squat } from './data/squat';
import { deadlift } from './data/deadlift';
import moment from 'moment';

class App extends Component {
  state = {
    // 2 = Squat only, 3 = Deadlift only
    elementsShown: 2
  };

  render() {
    let data;
    switch (this.state.elementsShown) {
      case 2:
        data = squat;
        break;
      case 3:
        data = deadlift;
        break;
      default:
        data = squat;
        break;
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Linear chart using Recharts</h1>
        </header>
        <p>
          <input
            type="button"
            onClick={() => this.setState({ elementsShown: 2 })}
            value="Squat"
          />
          <input
            type="button"
            onClick={() => this.setState({ elementsShown: 3 })}
            value="Deadlift"
          />
        </p>
        <div className="chart-container">
          <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            style={{ margin: 'auto' }}
          >
            <Line type="monotone" dataKey="kg" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis
              dataKey="date"
              tickFormatter={date => moment(date).format('DD/MM')}
              name="Time"
            />
            <YAxis dataKey="kg" type="number" unit="kg" />
            <Tooltip />
          </LineChart>
        </div>
      </div>
    );
  }
}

export default App;
