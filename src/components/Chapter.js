import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Chapter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         clrs: ["#5B2D90", "#D20078", "#0069AF", "#00A0D7", "#004F8B",
            "#008C3A", "#00B44B", "#C10052", "#E71224", "#F6630D", "#C6A377"],
         named: false,
         showOpt: false,
      }
      this.inptxt = React.createRef();
      this.renameBtn = React.createRef();
   }
   checkNamed = (e) => {
      if (e.keyCode === 13) {
         this.setState({
            named: true,
         });
      }
   }
   showOptions = () => {
      this.setState({
         showOpt: !this.state.showOpt,
      })
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
      if (node.value.includes("New Section ") && node.value !== node.defaultValue) {
         node.value = node.defaultValue;
      }
   }
   setchapterRef = (node) => {
      this.chapterRef = node;
   }
   handleClickOutside = (event) => {
      if (this.chapterRef && !this.chapterRef.contains(event.target) &&
         (!this.state.named || this.state.showOpt)) {
         this.setState({
            named: true,
            showOpt: false,
         })
      }
      if (this.chapterRef && this.chapterRef.contains(event.target)) {
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
   //-----------------------------------------------------------------------
   render() {
      let clrs = this.state.clrs;
      return (
         <div ref={(n) => this.setchapterRef(n)} className="Chapter" >
            <div className="mark_cnt">
               <div className="mark">
                  <div className="mark_1" style={{ backgroundColor: clrs[this.props.clr_num] }} />
                  <div className="mark_2" style={{ backgroundColor: clrs[this.props.clr_num] }} />
               </div>
            </div>
            <div className="txtCont">
               <div className="txt">
                  <input ref={this.inptxt} className="input_txt" type="text"
                     onKeyUp={(e) => this.checkNamed(e)} maxLength="15"
                     defaultValue={"New Section " + this.props.num}
                     readOnly={this.state.named}
                     autoFocus
                     style={{
                        borderWidth: this.state.named ? "0" : "2px",
                        backgroundColor: this.state.named ? "inherit" : "white",
                        cursor: this.state.named ? "default" : "auto",
                        marginLeft: this.state.named ? "0" : "12px"
                     }} />
               </div>
               <button onClick={() => this.showOptions()}>
                  <FontAwesomeIcon icon={["fas", "ellipsis-v"]} />
               </button>
               <div className="options" style={{
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