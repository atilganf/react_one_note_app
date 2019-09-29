import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shortid from "shortid";
import Chapter from "./Chapter"

export default class Chapters extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         chapters: [],
         clr_num: 0,
         chapter_num: 1,
      }
   }
   addChapter = () => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });
      chapters.forEach(chp => chp.active = false)
      chapters = [...chapters, {
         id: shortid.generate(),
         pages: [],
         clr_num: this.state.clr_num,
         num: this.state.chapter_num,
         active: true,
      }];
      //sending new active chapters' pages to the Aside
      let pages = chapters[chapters.length - 1].pages;
      this.props.sendNewPages(pages);
      
      this.setState({
         chapters: chapters,
         clr_num: (this.state.clr_num === 10) ? 0 : this.state.clr_num + 1,
         chapter_num: this.state.chapter_num + 1,
      });
   }
   deleteChapter = (id) => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });
      let index = chapters.findIndex(chp => chp.id === id);
      chapters.splice(index, 1);
      this.setState({
         chapters: chapters,
      });
   }
   onActive = (id) => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });
      chapters.forEach((chp) => {
         if (chp.id !== id) {
            chp.active = false
         } else if (chp.id === id){
            chp.active = true;
         }
      });
      //Sending new pages
      let pages = chapters.find(chp => chp.id==id).pages;
      this.props.sendNewPages(pages)
      this.setState({
         chapters: chapters,
      })
   }
   componentWillMount(){
      this.addChapter();
   }
   componentWillReceiveProps(){
      if(this.props.pages){
         let chapters = this.state.chapters.map((chp) => {
            return { ...chp }
         });
         chapters.find(chp => chp.active === true).pages = this.props.pages
         this.setState({
            chapters: chapters,
         })
      }
   }
   render() {
      let chapters = this.state.chapters;
      return (
         <div className="Chapters">
            {chapters.map(chapter => (
               <Chapter active={chapter.active} onActive={() => this.onActive(chapter.id)}
                  onDelete={() => this.deleteChapter(chapter.id)}
                  num={chapter.num} clr_num={chapter.clr_num} key={chapter.id} />
            )
            )}
            <button
               onClick={() => this.addChapter()} className="addBtn ab_c">
               <FontAwesomeIcon className="add_icon"
                  icon={["fas", "plus"]} /> Add Section
            </button>
         </div>
      )
   }
}