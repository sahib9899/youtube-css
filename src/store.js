import { createStore } from "redux";
import rootReducer from "./Components/Recucers/RootReducer";

const store = createStore(rootReducer);

export default store;