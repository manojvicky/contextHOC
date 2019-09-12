import React from "react";
import {staticThemeContext} from "../../../context";
import LoggerHOC from "../HOC/LoggerHOC";

@LoggerHOC(staticThemeContext)
class ThemedButton extends React.Component{
    static contextType = staticThemeContext;
    state={
        toggle: false,
        value: ""
    }
    render(){
        console.log("this.context", this.context);
        return  <div className={this.props.className}>
                    <staticThemeContext.Consumer>{
                        value=><div>{value.theme}</div>
                    }</staticThemeContext.Consumer>
                    <button style={{
                        background: this.context.theme==="Dark" ? "black": "white", 
                        color: this.context.theme==="Dark" ? "white": "black"}}
                        onClick = {()=>this.context.changeTheme()}
                    >
                            click me
                    </button>
                    
                </div>
    }
}
export default ThemedButton;
// ThemedButton.contextType = ThemeContext;