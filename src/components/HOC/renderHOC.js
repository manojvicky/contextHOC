function renderHOC(target, key, descriptor) {

    console.log("target", target);
    console.log("name", key);
    console.log("des", descriptor);
    // let output = descriptor.value();
    // console.log("output", output);
    // if(Array.isArray(output.props.children)){
    //     output.props.children.map(child=>{
    //         const className="wrappedComponent";
    //         child.props.className=className;
    //     })
    // }

    // return function () {
    //     return output;
    // };
    return descriptor.value;
}
export default renderHOC;