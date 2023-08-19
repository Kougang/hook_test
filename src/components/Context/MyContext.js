import React from "react";

    const user={name:'', age:0}
    const color='blue';

export const UserContext = React.createContext({user});
export const colorContext = React.createContext(color);
