function If(props) {
  /**
   * Le component qui m'a fait préférer react à vue
   */
  if (props.condition) {
    return props.children;
  } else {
    return false;
  }
}
export default If;