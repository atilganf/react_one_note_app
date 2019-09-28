import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Pages extends React.Component {
   render() {
      return (
         <div className="Pages">
            <button className="addBtn ab_p"><FontAwesomeIcon
               className="add_icon" icon={["fas", "plus"]} /> Add Page</button>
         </div>
      )
   }
}