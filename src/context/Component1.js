import { useState, createContext,useContext } from "react";

const UserContext = createContext()

const Component1=()=>{
    const [user] = useState("Hello All");
        return (
        <UserContext.Provider value={user}>
          {/* <h1>{`Hello ${user}!`}</h1> */}
          <Component2/>
        </UserContext.Provider>
      );
}

const Component2=()=>{
  const user =useContext(UserContext);
  return(
      <h2>{`Hello ${user} again!`}</h2>
  );
}
export default Component1;