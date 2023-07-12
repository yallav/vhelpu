
const initialState = {
    showdev: false,
    showtst: false,
    showcontact: false
}

const devReducer = (state=initialState, action) => {

    switch(action.type){
        case "HIDE_DIALOG":
            return Object.assign({}, state, {showdev: false, showtst: false});
        case "TOGGLE_DEV_DIALOG":
            return Object.assign({}, state, {showdev: !state.showdev, showtst: false});
        case "TOGGLE_TST_DIALOG":
            return Object.assign({}, state, {showdev: false, showtst: !state.showtst});
        case "OPEN_CNTCT_DIALOG":
            return Object.assign({}, state, {showcontact: true});
        case "CLOSE_CNTCT_DIALOG":
            return Object.assign({}, state, {showcontact: false})
        default :
            return state;
    }
}

export default devReducer;