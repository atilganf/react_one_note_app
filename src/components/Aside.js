import React from "react";
import Chapters from "./Chapters";
import Pages from "./Pages";

export default class Aside extends React.Component {
   render() {
      return (
         <div className="Aside">
            <Chapters/>
            <Pages />
         </div>
      );
   }
}