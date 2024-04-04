// JS native fetch
// axios

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserAPIContext = createContext();

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState([]);

  // fetch data from api
  useEffect(() => {

    async function fetchData() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserInfo(res.data);
    }

    fetchData();
  }, []);

  return (
    <UserAPIContext.Provider value={userInfo}>
      {children}
    </UserAPIContext.Provider>
  );
}
