import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from "../reducer";

export const store = createStore(
    rootReducer,
    composeWithDevTools( //para poder verlo en la consola y debbuguear
        applyMiddleware(thunk) //permite trabajar asincronicamente.
    )
);