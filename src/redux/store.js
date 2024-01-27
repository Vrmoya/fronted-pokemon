
import {createStore, applyMiddleware, compose} from "redux";
import * as thunk from "redux-thunk";
import rootReducer from "./reducer"


const composerEnhacer = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
    rootReducer,
    composerEnhacer(applyMiddleware(thunk.thunk)));

export default store;