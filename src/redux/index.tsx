import { legacy_createStore as createStore, combineReducers } from "redux";
import { basketReducer } from "./reducers/reducer";
const rootReducer = combineReducers({
    basket: basketReducer,
});

export const store = createStore(rootReducer);
