import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";
import userReducer from './Users-reducer'

let reducers = combineReducers({    
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: userReducer
})



let store = createStore(reducers);
window.store = store

export default store;