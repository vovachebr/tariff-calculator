import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './History.css';

let actions = require("../../actions/main");


class History extends Component {
    constructor(props){
        super(props);
        this.history = props.state.history;
    }

    render() {
        return <div id="history">
            <Link to={`/home`}>
                <button className="waves-effect waves-light btn">Вернуться на главную</button>
            </Link>
                <button className="waves-effect waves-light btn" onClick={this.deleteLastRecord}>Удалить последнюю запись</button>
            <table>
        <thead>
          <tr>
              <th>Дата</th>
              <th>Показатель горячей воды</th>
              <th>Показатель холодной воды</th>
              <th>Показатель электричества</th>
              <th>Сумма оплаты горячей воды</th>
              <th>Сумма оплаты холодной воды</th>
              <th>Сумма оплаты электричества</th>
              <th>Общая сумма оплаты</th>
          </tr>
        </thead>
        <tbody>
            {this.history.map((h,i) => <tr key={i}>
                <td>{String(h.date).slice(4,10)}</td>
                <td>{h.hotwater}</td>
                <td>{h.couldwater}</td>
                <td>{h.electricity}</td>
                <td>{h.hotwaterAmount.toFixed(2)}</td>
                <td>{h.couldwaterAmount.toFixed(2)}</td>
                <td>{h.electricityAmount.toFixed(2)}</td>
                <td>{h.totalAmount.toFixed(2)}</td>
                </tr>)}
        </tbody>
        </table>
        </div>
    }
    deleteLastRecord = () => {
        this.props.deleteHistoryElement();
        this.forceUpdate();
    }
}

const mapStateToProps = state => {return {state}};

export default connect(mapStateToProps,actions)(History);