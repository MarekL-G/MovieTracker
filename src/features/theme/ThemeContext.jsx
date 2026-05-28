import { createContext, use, useReducer } from "react";

const ThemeContext = createContext(null);

function themeReducer(state, action){
    switch(action.type){
        case "TOGGLE":
            return { ...state, mode: state.mode === "dark" ? "light" : "dark"}
        default:
            return state;
    }
}

export function ThemeProvider({children}){
    const [state, dispatch] = useReducer(themeReducer, {mode: "dark"})

    return(
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const ctx = use(ThemeContext);
    if(!ctx) throw new Error("useTheme musi byc uzyte w ThemeProvider")
    return ctx;
}