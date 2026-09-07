import { createContext } from "react"


export const Theme={
    PINK:"theme-pink",
    BLUE:"theme-blue"

}as const


export type ThemeType= (typeof Theme)[keyof typeof Theme]

 interface ThemeContextProps{
    theme?:ThemeType;
    setTheme?:(theme:ThemeType)=>void
}

export const LOCAL_STORAGE_KEY="theme"

export const ThemeContext=createContext<ThemeContextProps>({})
