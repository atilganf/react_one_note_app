import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";
import Page from "./Page"

export default class Pages extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         pages: [],
         num: undefined,
      }
   }
   addPage = () => {
      let pages = this.state.pages ? this.state.pages.map((page) => {
         return { ...page }
      }) : [];
      pages.forEach(pg => pg.active = false);
      pages = [...pages, {
         id: shortid.generate(),
         active: true,
      }];
      this.setState({
         pages: pages,
      });
   }
   deletepage = (id) => {
      let pages = this.state.pages.map((page) => {
         return { ...page }
      });
      let index = pages.findIndex(page => page.id === id);
      pages.splice(index, 1);

      this.setState({
         pages: pages,
      });
   }
   onActive = (id) => {
      let pages = this.state.pages.map((page) => {
         return { ...page }
      });
      pages.forEach((page) => {
         if (page.id !== id) {
            page.active = false
         } else if (page.id === id) {
            page.active = true;
         }
      });
      this.setState({
         pages: pages,
      })
   }
   componentDidUpdate(prevProps) {
      if (prevProps.num !== this.props.num) {
         if(prevProps.num){
            this.props.updatePages(this.state.pages, this.state.num);
         }
         this.setState({
            pages: this.props.pages,
            num: this.props.num,
         });
      }
   }

   render() {
      let pages = this.state.pages;
      if (pages === undefined) { pages = [] }
      return (
         <div className="Pages">
            {pages.map(page => (
               <Page active={page.active} onActive={() => this.onActive(page.id)}
                  onDelete={() => this.deletepage(page.id)} key={page.id} />
            ))}
            <button
               onClick={() => this.addPage()} className="addBtn ab_c">
               <FontAwesomeIcon className="add_icon"
                  icon={["fas", "plus"]} /> Add Page
            </button>
         </div>
      )
   }
}