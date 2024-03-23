import { useContext,createContext } from "react";

export const themeContext = createContext({
  themeMode:"light",
  darkTheme:()=>{},
  lightTheme:()=>{},
})

export const ThemeProvider = themeContext.Provider

//custom hook
export default function useTheme(){
  return useContext(themeContext)
}