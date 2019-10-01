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
      if (this.props.num !== -1) {
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
   }
   deletepage = (id) => {
      let pages = this.state.pages.map((page) => {
         return { ...page }
      });
      let delPageIndex = pages.findIndex(page => page.id === id);
      //Changing active page when page deleted
      (delPageIndex === pages.length - 1) ?
         pages[delPageIndex - 1].active = true :
         pages[delPageIndex + 1].active = true

      pages.splice(delPageIndex, 1);
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
         if (prevProps.num) {
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
               <Page allNamed={pages === this.props.pages} active={page.active}
                  onActive={() => this.onActive(page.id)} key={page.id}
                  onDelete={() => this.deletepage(page.id)} />
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