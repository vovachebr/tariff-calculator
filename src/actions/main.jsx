function calculateValues (hotwater, couldwater,electricity) {
    return {
        type: "CALCULATE_VALUES",
        hotwater, couldwater,electricity
    }
};

function changeTariffs (tariffs) {
    return {
        type: "CHANGE_TARIFFS",
        tariffs
    }
};

function deleteHistoryElement (id) {
    return {
        type: "DELETE_HISTORY_ELEMENT",
    }
};

export { calculateValues, changeTariffs, deleteHistoryElement };