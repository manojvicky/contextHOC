import React from "react";
import {dynamicThemeContext} from "../../../context";
import LoggerHOC from "../HOC/LoggerHOC";

@LoggerHOC(dynamicThemeContext)
class ThemedButton extends React.Component{
    static contextType = dynamicThemeContext;
    render(){
        // console.log("this.context", this.context, this.props, dynamicThemeContext);
        const props = this.props;
        return  <div className={this.props.className}>
                    <dynamicThemeContext.Consumer>{
                        value=><div>{value.background}</div>
                    }</dynamicThemeContext.Consumer>
                    <button style={{
                        background: this.context.background, 
                        color: this.context.foreground
                        }}
                        {...props}
                    />
                </div>
    }
}
export default ThemedButton;
// ThemedButton.contextType = ThemeContext;