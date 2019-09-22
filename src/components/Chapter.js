import React from "react";
export default class Chapter extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         clrs: ["#5B2D90", "#D20078", "#0069AF", "#00A0D7", "#004F8B",
            "#008C3A", "#00B44B", "#C10052", "#E71224", "#F6630D", "#C6A377"],
         named: false,
      }
   }
   checkNamed = (e) => {
      if (e.keyCode === 13) {
         this.setState({
            named: true,
         });
      }
   }
   render() {
      let clrs = this.state.clrs;
      return (
         <div className="Chapter">
            <div className="mark_cnt">
               <div className="mark">
                  <div className="mark_1" style={{ backgroundColor: clrs[this.props.clr_num] }} />
                  <div className="mark_2" style={{ backgroundColor: clrs[this.props.clr_num] }} />
               </div>
            </div>
            <div className="txtCont">
               <div className="txt">
                  <input type="text" onKeyUp={(e) => this.checkNamed(e)}
                     defaultValue={"New Section " + this.props.num} 
                     readOnly={this.state.named} autoFocus 
                     style={{
                        borderWidth: this.state.named ? "0" : "2px",
                        backgroundColor: this.state.named ? "inherit" : "white",
                        cursor: this.state.named ? "default" : "auto"
                     }} />
                  <button style={{ display: this.state.named ? "none" : "inline-block" }}
                     onClick={() => console.log("deleteFunction")}>X</button>
               </div>
            </div>
         </div>
      );
   }
}