import React from "react";
import ThemedButton from "./ThemedButton";
const Toolbar2 = ({changetheme}) =>{
    return <ThemedButton onClick = {changetheme}> Change Theme </ThemedButton>
}
export default Toolbar2;