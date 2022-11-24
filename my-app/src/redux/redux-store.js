import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})



let store = createStore(reducers);

window.store = store


export default store;