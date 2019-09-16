import React from "react";
import {staticThemeContext} from "../../../context";
import ContextHOC from "../HOC/ContextHOC";
import renderHOC from "../HOC/renderHOC";

@ContextHOC(staticThemeContext)
class ThemedButton extends React.Component{
    static contextType = staticThemeContext;
    state={
        toggle: false,
        value: ""
    }
    @renderHOC
    render(){
        let xx = React.Children.map((children, func, context)=>{
            console.log("render children", children, func, context)
        });
        console.log("React experiment", xx);
        return  <div>
                    <span>manoj</span><p>prajapati</p>
                </div>
    }
}
export default ThemedButton;
// ThemedButton.contextType = ThemeContext;