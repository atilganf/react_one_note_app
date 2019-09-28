import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import Main from "./Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressBook, faClock } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faPlus, faEllipsisV, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faSearch, faAddressBook, faClock, faEllipsisV, faTrashAlt,faEdit);
export default class OneNoteApp extends React.Component{
   render(){
      return (
         <div className="App">
            <Nav/>
            <Aside/>
            <Main/>
         </div>
      )
   }
}