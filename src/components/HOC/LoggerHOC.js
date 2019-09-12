import React from "react";

const LoggerHOC = ContextValue => {
  return (WrappedComponent)=>{
      return class HOC extends React.Component{
        constructor(props){
          super(props);
        }
        static contextType = ContextValue;
        componentDidMOunt(){
          console.log("componentDidMOunt", WrappedComponent.name)
        }
        componentDidUpdate(){
          console.log("componentDidUpdate", WrappedComponent.name)
        }
        render(){
          return <WrappedComponent className="wrappedComponent" {...this.props}/>
        }
      }
    }
};
export default LoggerHOC;