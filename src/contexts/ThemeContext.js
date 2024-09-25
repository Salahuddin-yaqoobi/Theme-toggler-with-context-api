//it is another approch to write the context 
import { createContext,useContext } from "react";


//these are the default value of the themcontext when it is called
export const ThemeContext = createContext({
    ThemeMode : "light",
    darkTheme : () =>{},
    lightTheme : () =>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
      return useContext(ThemeContext)
}