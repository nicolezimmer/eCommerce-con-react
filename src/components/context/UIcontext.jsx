import { createContext, useState } from "react";
export const UIcontext = createContext()

export const UiProvider = ({children})=>{

    const [loading, setLoading]=useState(false)

    return(
        <UIcontext.Provider value={{
            loading, 
            setLoading
        }}>
        {children}
        
        </UIcontext.Provider>

    )
}