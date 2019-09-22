import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class Nav extends React.Component {
   render() {
      return (
         <div className="Nav">
            <button className="books_btn active" ><FontAwesomeIcon
               className="book icon" icon={["far", "address-book"]} /></button>
            <button className="search_btn"><FontAwesomeIcon
               className="search icon" icon={["fas", "search"]} /></button>
            <button className="last_btn"><FontAwesomeIcon
               className="clock icon" icon={["far", "clock"]} /></button>
         </div>
      );
   }
}