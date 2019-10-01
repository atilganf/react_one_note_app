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
         num: (this.state.chapters.length) ? this.state.chapter_num : 1,
         active: true,
      }];
      //sending new active chapters' pages to the Aside: working
      let pages = chapters[chapters.length - 1].pages;
      let num = chapters[chapters.length - 1].num
      this.props.sendNewPages(pages, num);

      this.setState({
         chapters: chapters,
         clr_num: (this.state.clr_num === 10) ? 0 : this.state.clr_num + 1,
         chapter_num: (this.state.chapters.length) ? this.state.chapter_num + 1 : 2,
      });
   }
   deleteChapter = (id) => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });

      let delChpIndex = chapters.findIndex(chp => chp.id === id);
      chapters[delChpIndex].num = -1;
      //Changing active chapter when chapter deleted
      let newActiveIndex = (delChpIndex === chapters.length - 1) ?
         delChpIndex - 1 : delChpIndex + 1;
      let newActiveChp = chapters[newActiveIndex];
      if(newActiveChp){
      chapters[newActiveIndex].active = true;

      let newActiveNum = chapters[newActiveIndex].num;
      let newActivePages = chapters[newActiveIndex].pages;
      this.props.sendNewPages(newActivePages, newActiveNum);
      }else{
         this.props.sendNewPages([], -1);
      }
      chapters.splice(delChpIndex, 1);
      this.setState({
         chapters: chapters,
      });
   }
   onActive = (id) => {
      let chapters = this.state.chapters.map((chp) => {
         return { ...chp }
      });
      let same = (chapters.find(chp => chp.id === id).active === true);
      chapters.forEach((chp) => {
         if (chp.id !== id) {
            chp.active = false
         } else if (chp.id === id) {
            chp.active = true;
         }
      });
      //Sending new pages: working
      if (!same) {
         let chp = chapters.find(chp => chp.id === id);
         this.props.sendNewPages(chp.pages, chp.num);
      }
      let activeChp = chapters.find(chp => chp.active === true);

      let pageToUpdate = chapters.find(chp => chp.num === this.props.num);
      if (activeChp.num !== this.props.num && this.props.num && pageToUpdate) {
         pageToUpdate.pages = this.props.pages
      }
      //Sıkıntı burda onActive in içinde devam ediyor.
      this.setState({
         chapters: chapters,
      })
   }
   componentDidUpdate(prevProps) {
      if (prevProps.num !== this.props.num && this.props.num
         && this.state.chapters.find(chp => chp.num === this.props.num)) {
         let chapters = this.state.chapters.map((chp) => {
            return { ...chp }
         });
         chapters.find(chp => chp.num === this.props.num).pages = this.props.pages;
         this.setState({
            chapters: chapters,
         });
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