(window.webpackJsonpreact_one_note=window.webpackJsonpreact_one_note||[]).push([[0],{18:function(e,t,n){e.exports=n(38)},23:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),o=n.n(r),i=(n(23),n(2)),s=n(3),u=n(5),l=n(4),p=n(6),m=n(7),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Nav"},c.a.createElement("button",{className:"books_btn active"},c.a.createElement(m.a,{className:"book icon",icon:["far","address-book"]})),c.a.createElement("button",{className:"search_btn"},c.a.createElement(m.a,{className:"search icon",icon:["fas","search"]})),c.a.createElement("button",{className:"last_btn"},c.a.createElement(m.a,{className:"clock icon",icon:["far","clock"]})))}}]),t}(c.a.Component),d=n(14),h=n(12),v=n(13),O=n.n(v),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).checkNamed=function(e){13===e.keyCode&&n.setState({named:!0})},n.setchapterRef=function(e){n.chapterRef=e},n.handleClickOutside=function(e){!n.chapterRef||n.chapterRef.contains(e.target)||n.state.named&&!n.state.showOpt||n.setState({named:!0,showOpt:!1}),n.chapterRef&&n.chapterRef.contains(e.target)&&n.props.onActive()},n.rename=function(){n.setState({named:!1,showOpt:!1}),n.inptxt.current.select()},n.showOptions=function(e){e.preventDefault(e),n.setState({showOpt:!0}),n.optRef&&!n.optRef.current.contains(e.target)&&(n.optRef.current.style.top=e.clientY+"px",n.optRef.current.style.left=e.clientX-50+"px")},n.state={clrs:["#5B2D90","#D20078","#0069AF","#00A0D7","#004F8B","#008C3A","#00B44B","#C10052","#E71224","#F6630D","#C6A377"],named:!1,showOpt:!1},n.inptxt=c.a.createRef(),n.optRef=c.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousedown",(function(t){return e.handleClickOutside(t)})),this.inptxt.current.select()}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousedown",(function(t){return e.handleClickOutside(t)}))}},{key:"componentDidUpdate",value:function(){var e=this.inptxt.current;this.state.named&&""===e.value&&(e.value=e.defaultValue)}},{key:"render",value:function(){var e=this,t=this.state.clrs;return c.a.createElement("div",{className:"Chapter "+(this.props.active?"active_chp":""),onContextMenu:function(t){return e.showOptions(t)},ref:function(t){return e.setchapterRef(t)}},c.a.createElement("div",{className:"mark_cnt"},c.a.createElement("div",{className:"mark"},c.a.createElement("div",{className:"mark_1",style:{backgroundColor:t[this.props.clr_num]}}),c.a.createElement("div",{className:"mark_2",style:{backgroundColor:t[this.props.clr_num]}}))),c.a.createElement("div",{className:"txtCont"},c.a.createElement("div",{className:"txt"},c.a.createElement("input",{ref:this.inptxt,className:"input_txt",type:"text",onKeyUp:function(t){return e.checkNamed(t)},maxLength:"15",defaultValue:"New Section "+this.props.num,readOnly:this.state.named,autoFocus:!0,style:{borderWidth:this.state.named?"0":"2px",backgroundColor:this.state.named?"inherit":"white",cursor:this.state.named?"default":"auto",marginLeft:this.state.named?"0":"12px"}})),c.a.createElement("div",{ref:this.optRef,className:"options",style:{opacity:this.state.showOpt?"1":"0",pointerEvents:this.state.showOpt?"auto":"none"}},c.a.createElement("button",{onClick:function(){return e.rename()}},c.a.createElement(m.a,{className:"rename_icon icon",icon:["fas","edit"]}),"Rename"),c.a.createElement("button",{onClick:this.props.onDelete},c.a.createElement(m.a,{className:"del_icon icon",icon:["fas","trash-alt"]})," Delete"))))}}]),t}(c.a.Component);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).addChapter=function(){var e=n.state.chapters.map((function(e){return y({},e)}));e.forEach((function(e){return e.active=!1}));var t=(e=[].concat(Object(d.a)(e),[{id:O.a.generate(),pages:[],clr_num:n.state.clr_num,num:n.state.chapter_num,active:!0}]))[e.length-1].pages;n.props.onActiveChp(t),n.setState({chapters:e,clr_num:10===n.state.clr_num?0:n.state.clr_num+1,chapter_num:n.state.chapter_num+1})},n.deleteChapter=function(e){var t=n.state.chapters.map((function(e){return y({},e)})),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),n.setState({chapters:t})},n.onActive=function(e){var t=n.state.chapters.map((function(e){return y({},e)}));t.forEach((function(t){t.id!==e?t.active=!1:t.id===e&&(t.active=!0)}));var a=t.find((function(t){return t.id==e})).pages;n.props.onActiveChp(a),n.setState({chapters:t})},n.state={chapters:[],clr_num:0,chapter_num:1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.chapters;return c.a.createElement("div",{className:"Chapters"},t.map((function(t){return c.a.createElement(b,{active:t.active,onActive:function(){return e.onActive(t.id)},onDelete:function(){return e.deleteChapter(t.id)},num:t.num,clr_num:t.clr_num,key:t.id})})),c.a.createElement("button",{onClick:function(){return e.addChapter()},className:"addBtn ab_c"},c.a.createElement(m.a,{className:"add_icon",icon:["fas","plus"]})," Add Section"))}}]),t}(c.a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).checkNamed=function(e){13===e.keyCode&&n.setState({named:!0})},n.setpageRef=function(e){n.pageRef=e},n.handleClickOutside=function(e){!n.pageRef||n.pageRef.contains(e.target)||n.state.named&&!n.state.showOpt||n.setState({named:!0,showOpt:!1}),n.pageRef&&n.pageRef.contains(e.target)&&n.props.onActive()},n.rename=function(){n.setState({named:!1,showOpt:!1}),n.inptxt.current.select()},n.showOptions=function(e){e.preventDefault(e),n.setState({showOpt:!0}),n.optRef&&!n.optRef.current.contains(e.target)&&(n.optRef.current.style.top=e.pageY+"px",n.optRef.current.style.left=e.pageX-260+"px")},n.state={named:!1,showOpt:!1},n.inptxt=c.a.createRef(),n.optRef=c.a.createRef(),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("mousedown",(function(t){return e.handleClickOutside(t)})),this.inptxt.current.select()}},{key:"componentWillUnmount",value:function(){var e=this;document.removeEventListener("mousedown",(function(t){return e.handleClickOutside(t)}))}},{key:"componentDidUpdate",value:function(){var e=this.inptxt.current;this.state.named&&""===e.value&&(e.value=e.defaultValue)}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Page "+(this.props.active?"active_page":""),onContextMenu:function(t){return e.showOptions(t)},ref:function(t){return e.setpageRef(t)}},c.a.createElement("div",{className:"txtCont"},c.a.createElement("div",{className:"txt"},c.a.createElement("input",{ref:this.inptxt,className:"input_txt",type:"text",onKeyUp:function(t){return e.checkNamed(t)},maxLength:"15",defaultValue:"Untitled Page",readOnly:this.state.named,autoFocus:!0,style:{borderWidth:this.state.named?"0":"2px",backgroundColor:this.state.named?"inherit":"white",cursor:this.state.named?"default":"auto",marginLeft:this.state.named?"0":"12px"}})),c.a.createElement("div",{ref:this.optRef,className:"options",style:{opacity:this.state.showOpt?"1":"0",pointerEvents:this.state.showOpt?"auto":"none"}},c.a.createElement("button",{onClick:function(){return e.rename()}},c.a.createElement(m.a,{className:"rename_icon icon",icon:["fas","edit"]}),"Rename"),c.a.createElement("button",{onClick:this.props.onDelete},c.a.createElement(m.a,{className:"del_icon icon",icon:["fas","trash-alt"]})," Delete"))))}}]),t}(c.a.Component);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).addPage=function(){var e=n.state.pages.map((function(e){return w({},e)}));e.forEach((function(e){return e.active=!1})),e=[].concat(Object(d.a)(e),[{id:O.a.generate(),active:!0}]),n.setState({pages:e})},n.deletepage=function(e){var t=n.state.pages.map((function(e){return w({},e)})),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),n.setState({pages:t})},n.onActive=function(e){var t=n.state.pages.map((function(e){return w({},e)}));t.forEach((function(t){t.id!==e?t.active=!1:t.id===e&&(t.active=!0)})),n.setState({pages:t})},n.state={pages:n.props.activePages},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.pages;return c.a.createElement("div",{className:"Pages"},t.map((function(t){return c.a.createElement(j,{active:t.active,onActive:function(){return e.onActive(t.id)},onDelete:function(){return e.deletepage(t.id)},key:t.id})})),c.a.createElement("button",{onClick:function(){return e.addPage()},className:"addBtn ab_c"},c.a.createElement(m.a,{className:"add_icon",icon:["fas","plus"]})," Add Page"))}}]),t}(c.a.Component),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).changeActiveChp=function(e){n.setState({activePages:e})},n.state={activePages:[]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"Aside"},c.a.createElement(E,{onActiveChp:function(t){return e.changeActiveChp(t)}}),c.a.createElement(C,{activePages:this.state.activePages}))}}]),t}(c.a.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Main"})}}]),t}(c.a.Component),x=n(8),R=n(15),P=n(9);x.b.add(P.b,P.c,R.a,R.b,P.d,P.a);var D=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement(N,null),c.a.createElement(_,null))}}]),t}(c.a.Component);n(37);var A=function(){return c.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.e8f7e11d.chunk.js.map