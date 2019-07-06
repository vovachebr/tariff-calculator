let reducer = function(state = [], action) {
    switch (action.type) {
      case "CALCULATE_VALUES":
        let result = {date: new Date()};
        result.hotwater = action.hotwater;
        result.couldwater = action.couldwater;
        result.electricity = action.electricity;

        if(state.history.length === 0){
          result.hotwaterAmount = 0;
          result.couldwaterAmount = 0;
          result.electricityAmount = 0;
          result.totalAmount = 0;
          state.history.push(result);
          return {...state};
        }
        let lastValue = state.history[state.history.length-1];
        result.hotwaterAmount = (result.hotwater - lastValue.hotwater) * state.tariffs.hotWater / 1000;
        result.couldwaterAmount = (result.couldwater - lastValue.couldwater) * state.tariffs.couldWater / 1000;
        result.electricityAmount = (result.electricity - lastValue.electricity) * state.tariffs.electricity / 10;
        result.totalAmount = result.hotwaterAmount + result.couldwaterAmount + result.electricityAmount;
        state.history.push(result);
        return {...state};
      case "CHANGE_TARIFFS":
        return  {...state,tariffs:action.tariffs};
      case "DELETE_HISTORY_ELEMENT":
        state.history.pop();
        return  {...state};
      default: 
        return state;
    }
  }
  export default reducer;