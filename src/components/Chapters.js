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
      this.setState({
         chapters: [...this.state.chapters, {
            id: shortid.generate(),
            text: "",
            pages: [],
            clr_num: this.state.clr_num,
            num: this.state.chapter_num,
         }],
         clr_num: (this.state.clr_num === 10) ? 0 : this.state.clr_num + 1,
         chapter_num: this.state.chapter_num + 1,
      });
   }
   componentDidUpdate() {
      this.clr_num++;
   }
   render() {
      let chapters = this.state.chapters;
      return (
         <div className="Chapters">
            {chapters.map(chapter => (
               <Chapter named = {chapter.named} num={chapter.num} clr_num={chapter.clr_num}
                  key={chapter.id} />
            )
            )}
            <button
               onClick={() => this.addChapter()} className="addBtn">
               <FontAwesomeIcon className="add_icon"
                  icon={["fas", "plus"]} /> Add Section
            </button>
         </div>
      )
   }
}