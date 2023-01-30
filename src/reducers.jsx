import initialState from "./initialState";

const reducers = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'cv':
            return {
                ...state,
                profil: [ ...state.profil, action.payload ]
            }
        default:
            return state
    }
}


export default reducers;