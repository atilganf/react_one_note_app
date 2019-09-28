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
      this.chapterRef = React.createRef();
   }
   addChapter = () => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });
      chapters = [...this.state.chapters, {
         id: shortid.generate(),
         pages: [],
         clr_num: this.state.clr_num,
         num: this.state.chapter_num,
         active: false,
      }];
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
      let index = chapters.filter(chp => chp.id === id)[0].num - 1;
      chapters.splice(index, 1);
      chapters.forEach(chp => {
         if (chp.num > index) {
            chp.num--;
         }
      });
      this.setState({
         chapters: chapters,
         chapter_num: this.state.chapter_num - 1,

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
      this.setState({
         chapters: chapters,
      })
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