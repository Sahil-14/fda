import * as tabActionsType from './tabActions'

const initialState = {
    selectedTab:""
}

const tabReducer = (state = initialState,action) => {
    switch(action.type){
        case tabActionsType.SET_SELECTED_TAB:
            return{
                ...state,
                selectedTab:action.payload.selectedTab
            }
        default:
            return state
    }
}

export default tabReducer;