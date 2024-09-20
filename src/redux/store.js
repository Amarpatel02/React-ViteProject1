

import { legacy_createStore as createStore} from "redux";
import { reducerFunction } from "./tickets/reducer";


export const reduxData = createStore(reducerFunction)