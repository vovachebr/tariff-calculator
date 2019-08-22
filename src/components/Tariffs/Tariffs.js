import React, { Component } from 'react';
import { connect } from 'react-redux';
let actions = require("../../actions/main");

class Tariffs extends Component {
    constructor(props){
        super(props);
        let tariffs = props.state.tariffs;
        this.hotWater = tariffs.hotWater || 160.94;
        this.couldWater = tariffs.couldWater || 26.11;
        this.electricity = tariffs.electricity || 4.38
    }

    render() {
        return(
        <div>
            <h4>Цены</h4>
            <div id="tariffs" className="row">
            <div className="col">
                <label htmlFor="hotWater">Горячая вода</label>
                <input type="number" id="hotWater" placeholder="Горячая вода" min="0" max="9999999" defaultValue={this.hotWater} onInput={this.setHotWaterPrice}/>
            </div>
            <div className="col">
                <label htmlFor="coldWater">Холодная вода</label>
                <input type="number" id="coldWater" placeholder="Холодная вода" min="0" max="9999999" defaultValue={this.couldWater} onInput={this.setCouldWaterPrice}/>
            </div>
            <div className="col">
                <label htmlFor="electricity">Электричество</label>
                <input type="number" id="electricity" placeholder="Электричество вода" min="0" max="9999999" defaultValue={this.electricity} onInput={this.setElectricityPrice}/>
            </div>
        </div>
        <button className="waves-effect waves-light btn" onClick={this.returnToHome}>Вернуться на главную</button>
    </div>)
    }

    setHotWaterPrice = (e) => this.hotWater = +e.target.value;
    setCouldWaterPrice = (e) => this.couldWater = +e.target.value;
    setElectricityPrice = (e) => this.electricity = +e.target.value;

    returnToHome = () =>{
        this.props.changeTariffs({
            hotWater:this.hotWater,
            couldWater:this.couldWater,
            electricity:this.electricity});
        this.props.history.goBack();
    }
}


const mapStateToProps = state => {return {state}};

export default connect(mapStateToProps,actions)(Tariffs);