import React from "react"

const AuthContext = React.createContext();


const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [globData, setGlobData] = React.useState([]);
    const [cartData, setCartData] = React.useState([]);
       
    const toggle = (data) => {
        setGlobData(data);
     }

    const value={globData,setGlobData,toggle,isAuth,setIsAuth ,cartData,setCartData}
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export  {AuthContextProvider ,AuthContext}
