import React from "react";
import Chapters from "./Chapters";
import Pages from "./Pages";

export default class Aside extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         activePages: [],
      };
   }
   changeActiveChp = (pages) =>{
      this.setState({
         activePages: pages,
      })
   }
   render() {
      return (
         <div className="Aside">
            <Chapters onActiveChp = {(pages) => this.changeActiveChp(pages)}/>
            <Pages activePages={this.state.activePages}/>
         </div>
      );
   }
}