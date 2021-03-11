import React, { useEffect, useState } from 'react'
import token from "./api/request";

export const TokenContext = React.createContext("default value");

export default function TokenProvider(props) {

  const [access_token, setAccess_token] = useState("");
  

  const getToken = async () => {
      const response = await token();

      setAccess_token(response);
  };

  useEffect(() => {
      getToken();
  }, []);

  return (
    <TokenContext.Provider value={access_token}>
      {props.children}
    </TokenContext.Provider>
  )
}
