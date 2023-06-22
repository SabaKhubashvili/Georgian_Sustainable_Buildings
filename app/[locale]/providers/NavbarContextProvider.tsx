'use client'

import { createContext  } from "react";

export const NavContext = createContext<any>('')

export function NavbarContextProvider({ children,data }:{children:React.ReactNode,data:any}){


   return  (
       <NavContext.Provider value={data}>
            {children}
        </NavContext.Provider>
       )
}