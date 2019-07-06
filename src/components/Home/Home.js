import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';

let actions = require("../../actions/main");

class Home extends Component {
    constructor(props){
        super(props);
        this.hotWaterValue = 0;
        this.couldWaterValue = 0;
        this.electricityValue = 0;
    }

    render() {
        return <div>
            <div id="home" className="row">
                <div className="col">
                    <label htmlFor="hotWater">Горячая вода</label>
                    <input type="number" id="hotWater" placeholder="Горячая вода" min="0" max="999999" onInput={this.setHotWater}/>
                </div>
                <div className="col">
                    <label htmlFor="coldWater">Холодная вода</label>
                    <input type="number" id="coldWater" placeholder="Холодная вода" min="0" max="999999" onInput={this.setCouldWater}/>
                </div>
                <div className="col">
                    <label htmlFor="electricity">Электричество</label>
                    <input type="number" id="electricity" placeholder="Электричество вода" min="0" max="999999" onInput={this.setElectricity}/>
                </div>
                <button className="waves-effect waves-light btn" onClick={this.calculate}>Посчитать</button>
            </div>
            <div className="row controls">
            <Link to={`/tariffs`}>
                <button className="waves-effect waves-light btn">Тарифы</button>
            </Link>
            <Link to={`/history`}>
                <button className="waves-effect waves-light btn">История</button>
            </Link>
            </div>
        </div>
    }
    calculate = () =>{
        if(this.hotWaterValue && this.couldWaterValue && this.electricityValue)
            this.props.calculateValues(this.hotWaterValue, this.couldWaterValue, this.electricityValue);
        this.props.history.push("history");
    }

    setHotWater = (e) => this.hotWaterValue = +e.target.value;
    setCouldWater = (e) => this.couldWaterValue = +e.target.value;
    setElectricity = (e) => this.electricityValue = +e.target.value;
}

const mapStateToProps = state => {return {state}};

export default connect(mapStateToProps,actions)(Home);