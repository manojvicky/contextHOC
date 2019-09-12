import React from "react";
import ReactDOM from "react-dom";
import Toolbar1 from "./src/components/context/Toolbar1";
import Toolbar3 from "./src/components/context1/Toolbar3";

import Toolbar2 from "./src/components/DynamicContext/Toolbar2";
import ThemedButton from "./src/components/DynamicContext/ThemedButton";

import 'bootstrap/dist/css/bootstrap.css';
import "./src/styles.css";
import {staticThemeContext, dynamicThemeContext, themes} from "./context";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      theme: themes.light,
      theme1: "Dark"
    }
    this.toggleTheme =()=>{
      this.setState((prevState)=>{
        return{
          theme: prevState.theme === themes.dark ? themes.light : themes.dark
        }
      });
    }
    this.toggleThemeStatic =()=>{
      console.log("clicked static context");
      this.setState((prevState)=>{
        return{
          theme1: prevState.theme1 === "Dark" ? "Light" : "Dark"
        }
      });
    }
  }
  render(){
    return (
      <div className="app">
      <staticThemeContext.Provider value={{theme: this.state.theme1, changeTheme: this.toggleThemeStatic}}><Toolbar1/></staticThemeContext.Provider>
      <staticThemeContext.Provider value={{theme: this.state.theme1, changeTheme: this.toggleThemeStatic}}><Toolbar3/></staticThemeContext.Provider>      
      <dynamicThemeContext.Provider value ={this.state.theme}><Toolbar2 changetheme={this.toggleTheme}/></dynamicThemeContext.Provider>
      </div>
    );
  }
}


ReactDOM.render(
    <App />, document.getElementById('app')
);