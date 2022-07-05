import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { guardarStateStorage, obtenerStateStorage } from "../../helpers/localStorage";
import { articlesReducer } from "../reducers/articlesReducer";
import { ShoppingCartReducer } from "../reducers/ShoppingCartReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  articles: articlesReducer,
  carrito: ShoppingCartReducer,
});

const storeState = obtenerStateStorage();

export const store = createStore(
  reducers,
  storeState,
  composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(() => {
  guardarStateStorage({
    carrito: store.getState().carrito,
  });
});
