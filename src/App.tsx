import './App.css';
import {ThemeProvider} from "react-bootstrap";
import Router from "./Router";
import {createContext, useReducer} from "react";
import {deleteUser, intialuser, updateUser, userReducer} from "./Store/Reducer";
type userContext = {
    users:any
    updateUser:any
    deleteUser:any
    dispatch:any
}
export const userContext = createContext<userContext>({} as userContext);

function App() {
    const [users, dispatch] = useReducer(userReducer, intialuser);

    return (
        <div>
            <ThemeProvider breakpoints={["sm", "md", "xl"]} minBreakpoint={"xl"}>
                <userContext.Provider value={{users:users,updateUser,deleteUser,dispatch}}>
                    <Router/>
                </userContext.Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
