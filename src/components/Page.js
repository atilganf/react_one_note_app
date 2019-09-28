import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class page extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         named: false,
         showOpt: false,
      }
      this.inptxt = React.createRef();
      this.optRef = React.createRef();
   }
   checkNamed = (e) => {
      if (e.keyCode === 13) {
         this.setState({
            named: true,
         });
      }
   }
   //----------------------------------------------------------------------
   componentDidMount() {
      document.addEventListener('mousedown', (e) => this.handleClickOutside(e));
      this.inptxt.current.select();
   }
   componentWillUnmount() {
      document.removeEventListener('mousedown', (e) => this.handleClickOutside(e));
   }
   componentDidUpdate() {
      let node = this.inptxt.current;
      if (this.state.named && node.value === "") {
         node.value = node.defaultValue;
      }
   }
   setpageRef = (node) => {
      this.pageRef = node;
   }
   handleClickOutside = (event) => {
      if (this.pageRef && !this.pageRef.contains(event.target) &&
         (!this.state.named || this.state.showOpt)) {
         this.setState({
            named: true,
            showOpt: false,
         })
      }
      if (this.pageRef && this.pageRef.contains(event.target)) {
         this.props.onActive();
      }
   }
   rename = () => {
      this.setState({
         named: false,
         showOpt: false
      });

      this.inptxt.current.select();
   }
   showOptions = (e) => {
      e.preventDefault(e);
      this.setState({
         showOpt: true,
      })
      if (this.optRef && !this.optRef.current.contains(e.target)) {
         this.optRef.current.style.top = e.pageY + "px";
         this.optRef.current.style.left = e.pageX - 260 + "px";
      }
   }
   //-----------------------------------------------------------------------
   render() {
      return (
         <div className={"Page " + (this.props.active ? "active_page" : "")}
            onContextMenu={(e) => this.showOptions(e)} ref={(n) => this.setpageRef(n)} >
            <div className="txtCont">
               <div className="txt">
                  <input ref={this.inptxt} className="input_txt" type="text"
                     onKeyUp={(e) => this.checkNamed(e)} maxLength="15"
                     defaultValue="Untitled Page" 
                     readOnly={this.state.named}
                     autoFocus
                     style={{
                        borderWidth: this.state.named ? "0" : "2px",
                        backgroundColor: this.state.named ? "inherit" : "white",
                        cursor: this.state.named ? "default" : "auto",
                        marginLeft: this.state.named ? "0" : "12px"
                     }} />
               </div>
               <div ref={this.optRef} className="options" style={{
                  opacity: this.state.showOpt ? "1" : "0",
                  pointerEvents: this.state.showOpt ? "auto" : "none",

               }}>
                  <button onClick={() => this.rename()} ><FontAwesomeIcon
                     className="rename_icon icon" icon={["fas", "edit"]} />Rename
                  </button>
                  <button onClick={this.props.onDelete}><FontAwesomeIcon
                     className="del_icon icon" icon={["fas", "trash-alt"]} /> Delete
                  </button>
               </div>
            </div>
         </div >
      );
   }
}