import React from "react";
import Chapters from "./Chapters";
import Pages from "./Pages";

export default class Aside extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         newPages: [],
         oldPages: [],
      };
   }
   achieveNewPages = (pages) => {
      console.log("achieveNewPages");
      this.setState({
         newPages: pages,
      })
   }
   updatePages = (pages) => {
      console.log("updatePages")
      this.setState({
         oldPages: pages,
      })
   }
   render() {
      return (
         <div className="Aside">
            <Chapters pages={this.state.oldPages}
               sendNewPages={(pages) => this.achieveNewPages(pages)} />
            <Pages pages={this.state.pages}
               updatePages={(pages) => this.updatePages(pages)}
            />
         </div>
      );
   }
}