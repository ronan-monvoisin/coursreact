function If(props) {
    if (props.condition) {
        return props.children;
    } else {
        return false;
    }
}
export default If;