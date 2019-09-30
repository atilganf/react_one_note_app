import React from "react";
import Chapters from "./Chapters";
import Pages from "./Pages";

export default class Aside extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         newPages: [],
         newNum: undefined,
         oldPages: [],
         oldNum: undefined,
      };
   }
   achieveNewPages = (pages, num) => { 
      this.setState({
         newPages: pages,
         newNum: num,
      })
   }
   updatePages = (pages, num) => {
      this.setState({
         oldPages: pages,
         oldNum: num,
      })
   }
   render() {
      return (
         <div className="Aside">
            <Chapters pages={this.state.oldPages} num={this.state.oldNum}
               sendNewPages={(pages, num) => this.achieveNewPages(pages, num)} />
            <Pages pages={this.state.newPages} num={this.state.newNum}
               updatePages={(pages, num) => this.updatePages(pages, num)}
            />
         </div>
      );
   }
}