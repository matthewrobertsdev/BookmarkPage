(this["webpackJsonpbookmark-page"]=this["webpackJsonpbookmark-page"]||[]).push([[0],{19:function(e,t,n){},40:function(e,t,n){e.exports=n(65)},45:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(20),i=n.n(r),l=(n(45),n(17)),s=n(4),c=n(6),u=n(8),d=n(3),p=n(10),h=n(9),m=(n(19),n(36)),k=n(37),g=n(69),b=n(68),f=n(13),y=function e(t,n){Object(s.a)(this,e),this.index=void 0,this.bookmark=void 0,this.index=t,this.bookmark=n},E=function(e){return{type:"SET_MODE",payload:e}},v=function(e){return{type:"SET_BOOKMARKS",payload:e}},O=function(e){return{type:"SET_UPDATING_NAME",payload:e}},C=function(e){return{type:"SET_UPDATING_URL",payload:e}};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={bookmarks:function(){if(null===localStorage.getItem("savedBookmarks")||void 0===localStorage.getItem("savedBookmarks"))return[];try{var e=localStorage.getItem("savedBookmarks");return null==e&&(e=""),JSON.parse(e)}catch(t){return[]}}(),mode:"none",checkedArray:[],numChecked:0,updateingBookmark:null,needsPassBookmark:!1,updatingURL:"",updatingName:"",updatingIndex:null},w=function(e){for(var t=[],n=0;n<e.length;n++)e[n].name&&null!==e[n].name&&void 0!==e[n].name&&""!==e[n].name&&e[n].URL&&null!==e[n].URL&&void 0!==e[n].URL&&""!==e[n].URL&&t.push(e[n]);return t},B=function(e){localStorage.setItem("savedBookmarks",JSON.stringify(e))};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_UPDATING_NAME":return j({},e,{updatingName:t.payload});case"SET_UPDATING_URL":return j({},e,{updatingURL:t.payload});case"SET_MODE":return j({},e,{mode:t.payload});case"SET_BOOKMARKS":var n=w(t.payload);return B(n),j({},e,{bookmarks:n});case"ADD_BOOKMARK":console.log("hello");var a=[];return null!==e.bookmarks?((a=e.bookmarks.slice(0)).unshift(t.payload),console.log(a)):a=[t.payload],B(a),j({},e,{bookmarks:a});case"CREATE_UNCHECKED_ARRAY":for(var o=[],r=0;r<e.bookmarks.length;r++)o.push(!1);return j({},e,{checkedArray:o,numChecked:0});case"TOGGLED_CHECKED_STATE":var i=e.checkedArray.slice(0);i[t.payload]=!i[t.payload];for(var l=0,s=0;s<i.length;s++)i[s]&&(l+=1);return j({},e,{checkedArray:i,numChecked:l});case"DELETE_CHECKED":for(var c=[],u=0;u<e.bookmarks.length;u++)e.checkedArray[u]||c.push(e.bookmarks[u]);return B(c),j({},e,{bookmarks:c,numChecked:0});case"SET_UPDATING_INDEX":return j({},e,{index:t.payload});case"UPDATE_BOOKMARK":var d=e.bookmarks;return d[t.payload.index]=t.payload.bookmark,B(d),j({},e,{bookmarks:d});case"APPEND_BOOKMARKS":var p=e.bookmarks.concat(w(t.payload));return B(p),j({},e,{bookmarks:p});default:return e}};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).changeIndices=n.changeIndices.bind(Object(p.a)(n)),n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,{numColumns:Math.floor(window.innerWidth/400)+1}),n.resizeFunction=n.resizeFunction.bind(Object(p.a)(n)),window.addEventListener("resize",n.resizeFunction),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"resizeFunction",value:function(){var e=Math.floor(window.innerWidth/400)+1;this.state.numColumns!==e&&this.setState({numColumns:e})}},{key:"changeIndices",value:function(e,t,n,a){var o=Object(m.a)(this.props.bookmarks,t,n);this.props.setBookmarks(o),B(o)}},{key:"render",value:function(){return o.a.createElement(k.b,{onChange:this.changeIndices},o.a.createElement(g.a,{id:"items",boxesPerRow:this.state.numColumns,rowHeight:40,style:{height:this.getHeightString(),width:"80%",touchAction:this.getTouchActionString(),cursor:"default",textAlign:"center",marginLeft:"10%",marginRight:"10%"},disableDrag:!this.isRearrangeMode(),disableDrop:!this.isRearrangeMode(),className:"bookmark-grid"},this.getBookmarkGrid()))}},{key:"getBookmarkGrid",value:function(){var e=this;return this.props.bookmarks.map((function(t,n){return"rearrange"===e.props.mode?o.a.createElement(b.a,{key:n},o.a.createElement("label",{style:e.getGridItemStyleObject("none","default"),className:"link-button"},t.name)," "):"edit"===e.props.mode||"update"===e.props.mode?o.a.createElement(b.a,{key:n},o.a.createElement("label",{style:e.getGridItemStyleObject("none","default"),className:"link-button",onClick:function(){e.updateBookmark(n,t)}},t.name)," "):o.a.createElement(b.a,{key:n},e.addForDelete(n),o.a.createElement("a",{href:t.URL,style:e.getGridItemStyleObject("default","pointer"),className:"link-button"},t.name)," ")}))}},{key:"getHeightString",value:function(){return((this.props.bookmarks.length%this.state.numColumns!==0?this.props.bookmarks.length+(this.state.numColumns-this.props.bookmarks.length%this.state.numColumns):this.props.bookmarks.length)*(40/this.state.numColumns)).toString()+"px"}},{key:"getTouchActionString",value:function(){return this.isRearrangeMode()?"none":"default"}},{key:"getCursorString",value:function(){return this.isRearrangeMode()?"default":"pointer"}},{key:"isRearrangeMode",value:function(){return"rearrange"===this.props.mode}},{key:"addForDelete",value:function(e){var t=this;if("delete"===this.props.mode)return o.a.createElement("input",{type:"checkbox",checked:this.props.checkedArray[e],onChange:function(){return t.props.toggleCheckedState(e)},className:"delete-check-box"})}},{key:"updateBookmark",value:function(e,t){this.props.setMode("update"),this.props.setUpdatingIndex(e),this.props.setUpdatingName(t.name),this.props.setUpdatingURL(t.URL)}},{key:"getGridItemStyleObject",value:function(e,t){return{height:"50%",display:"inline-block",touchAction:e,cursor:t,borderRadius:"10px",padding:"3px 11px",marginTop:"8px"}}}]),t}(o.a.Component),M=Object(f.b)((function(e){return{bookmarks:e.bookmarks,mode:e.mode,checkedArray:e.checkedArray}}),(function(e){return{setBookmarks:function(t){e(v(t))},toggleCheckedState:function(t){e({type:"TOGGLED_CHECKED_STATE",payload:t})},setMode:function(t){e(E(t))},setUpdatingIndex:function(t){e({type:"SET_UPDATING_INDEX",payload:t})},setUpdatingName:function(t){e(O(t))},setUpdatingURL:function(t){e(C(t))}}}))(D),U=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("nav",{className:"tool-bar"},o.a.createElement("button",{className:"tool-item "+this.getRearrangeButtonColorStyle(),onClick:function(){return e.toggleRearrangeMode()}},"Rearrange"),o.a.createElement("button",{className:"tool-item "+this.getDeleteButtonColorStyle(),onClick:function(){return e.handleDeleteClick()}},this.getDeleteString()),this.addCancelButton(),o.a.createElement("button",{className:"tool-item "+this.getEditButtonColorStyle(),onClick:function(){return e.handleEditClicked()}},"Edit"),o.a.createElement("button",{className:"tool-item "+this.getAddButtonColorStyle(),onClick:function(){return e.toggleAddMode()}},"Add"),o.a.createElement("button",{className:"tool-item "+this.getMoreButtonColorStyle(),onClick:function(){return e.toggleMoreMode()}},"More"))}},{key:"getAddButtonColorStyle",value:function(){return"add"===this.props.mode?"tool-item-selected add-button-selected":"add-button"}},{key:"getRearrangeButtonColorStyle",value:function(){return"rearrange"===this.props.mode?"tool-item-selected rearrange-button-selected":"rearrange-button"}},{key:"getDeleteButtonColorStyle",value:function(){return"delete"===this.props.mode?"tool-item-selected delete-button-selected":"delete-button"}},{key:"getEditButtonColorStyle",value:function(){return"edit"===this.props.mode||"update"===this.props.mode?"tool-item-selected edit-button-selected":"edit-button"}},{key:"getMoreButtonColorStyle",value:function(){return"more"===this.props.mode?"tool-item-selected more-button-selected":"more-button"}},{key:"toggleAddMode",value:function(){"add"===this.props.mode?this.props.setMode("none"):this.props.setMode("add")}},{key:"toggleMoreMode",value:function(){"more"===this.props.mode?this.props.setMode("none"):this.props.setMode("more")}},{key:"toggleRearrangeMode",value:function(){"rearrange"===this.props.mode?this.props.setMode("none"):this.props.setMode("rearrange")}},{key:"changeEditMode",value:function(){"edit"===this.props.mode?this.props.setMode("none"):"update"===this.props.mode?this.props.setMode("edit"):(this.props.mode,this.props.setMode("edit"))}},{key:"addCancelButton",value:function(){var e=this;if("delete"===this.props.mode)return o.a.createElement("li",{className:"tool-item cancel-button",onClick:function(){e.handleCancelClick()}},"Cancel")}},{key:"handleCancelClick",value:function(){this.props.setMode("none"),this.props.createUncheckedArray()}},{key:"handleDeleteClick",value:function(){"delete"!==this.props.mode?(this.props.createUncheckedArray(),this.props.setMode("delete")):(this.props.numChecked>0&&this.props.deleteChecked(),this.props.setMode("none"))}},{key:"handleEditClicked",value:function(){this.changeEditMode()}},{key:"getDeleteString",value:function(){return 0===this.props.numChecked?"Delete":"Delete ("+this.props.numChecked.toString()+")"}}]),t}(o.a.Component),L=Object(f.b)((function(e){return{mode:e.mode,bookmarks:e.bookmarks,numChecked:e.numChecked}}),(function(e){return{setMode:function(t){e(E(t))},createUncheckedArray:function(){e({type:"CREATE_UNCHECKED_ARRAY",payload:""})},deleteChecked:function(){e({type:"DELETE_CHECKED",payload:""})}}}))(U),T=n(18),x=n.n(T),P=function e(t,n){Object(s.a)(this,e),this.name=void 0,this.URL=void 0,this.name=t,this.URL=n};x.a.setAppElement("#root");var I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleNameChange=n.handleNameChange.bind(Object(p.a)(n)),n.handleURLChange=n.handleURLChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleNameChange",value:function(e){this.props.setUpdatingName(e.target.value)}},{key:"clearUpdatingBookmark",value:function(){this.props.setUpdatingName(""),this.props.setUpdatingURL("")}},{key:"handleURLChange",value:function(e){this.props.setUpdatingURL(e.target.value)}},{key:"handleSubmit",value:function(){""!==this.props.updatingName&&""!==this.props.updatingURL&&("add"===this.props.mode?(this.props.addBookmark(new P(this.props.updatingName,this.props.updatingURL)),this.props.setMode("none")):"update"===this.props.mode&&(this.props.updateBookmark(this.props.index,new P(this.props.updatingName,this.props.updatingURL)),this.props.setMode("edit")),this.clearUpdatingBookmark())}},{key:"handleCancel",value:function(){"add"===this.props.mode?this.props.setMode("none"):"update"===this.props.mode&&this.props.setMode("edit"),this.clearUpdatingBookmark()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(x.a,{className:"action-modal",isOpen:"add"===this.props.mode||"update"===this.props.mode},o.a.createElement("h1",{className:"modal-text-size"},this.getTitleString()),o.a.createElement("label",{className:"modal-text-size"},"Name:"),o.a.createElement("br",null),o.a.createElement("input",{className:"modal-small-input",value:this.props.updatingName,onChange:this.handleNameChange}),o.a.createElement("br",null),o.a.createElement("label",{className:"modal-text-size"},"URL:"),o.a.createElement("br",null),o.a.createElement("input",{className:"modal-input",type:"url",value:this.props.updatingURL,onChange:this.handleURLChange}),o.a.createElement("br",null),o.a.createElement("button",{className:"link-button action-button",onClick:function(){return e.handleSubmit()}},this.getSubmitString()),o.a.createElement("button",{className:"link-button action-button",onClick:function(){return e.handleCancel()}},"Cancel")))}},{key:"getTitleString",value:function(){return"add"===this.props.mode?"Add Bookmark:":"update"===this.props.mode?"Update Bookmark:":void 0}},{key:"getSubmitString",value:function(){return"add"===this.props.mode?"Add":"update"===this.props.mode?"Update":void 0}}]),t}(o.a.Component),_=Object(f.b)((function(e){return{mode:e.mode,updatingURL:e.updatingURL,updatingName:e.updatingName,index:e.index,updateBookmark:e.updateBookmark,bookmarks:e.bookmarks}}),(function(e){return{setMode:function(t){e(E(t))},addBookmark:function(t){e({type:"ADD_BOOKMARK",payload:t})},setUpdatingName:function(t){e(O(t))},setUpdatingURL:function(t){e(C(t))},updateBookmark:function(t,n){e({type:"UPDATE_BOOKMARK",payload:new y(t,n)})}}}))(I);x.a.setAppElement("#root");var K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(x.a,{className:"action-modal",isOpen:"more"===this.props.mode},o.a.createElement("h1",{className:"modal-text-size-2"},"More"),o.a.createElement("button",{id:"downloadButton",className:"link-button action-button",onClick:function(){return e.handleSaveClick()}},"Download as JSON Text File"),o.a.createElement("br",null),o.a.createElement("button",{className:"link-button action-button",onClick:function(){return e.handleLoadMoreClick()}},"Load More from JSON Text"),o.a.createElement("input",{id:"loadMoreButton",type:"file"}),o.a.createElement("br",null),o.a.createElement("button",{className:"link-button action-button",onClick:function(){return e.handleLoadAndReplaceClick()}},"Load and Replace from JSON Text"),o.a.createElement("input",{id:"loadAndReplaceButton",type:"file"}),o.a.createElement("br",null),o.a.createElement("button",{className:"link-button action-button",onClick:function(){return e.props.setMode("none")}},"Done"),o.a.createElement("a",{href:"save",id:"downloadLink",style:{display:"none"}},"No Show with CSS")))}},{key:"handleFileChosen",value:function(e,t){var n=new FileReader,a=null;if(e){var o=document.getElementById("loadMoreButton");null!==o&&(a=o.files[0])}else{a=document.getElementById("loadAndReplaceButton").files[0]}n.addEventListener("loadend",(function(){var a=JSON.parse(n.result);e?t.appendBookmarks(a):t.setBookmarks(a)})),n.readAsText(a)}},{key:"handleSaveClick",value:function(){var e=document.getElementById("downloadLink"),t=new Blob([JSON.stringify(this.props.bookmarks)],{type:"text/plain"});e.download="bookmarks.txt",e.href=URL.createObjectURL(t),e.click()}},{key:"handleLoadMoreClick",value:function(){var e=this,t=document.getElementById("loadMoreButton");t.addEventListener("change",(function(){return e.handleFileChosen(!0,e.props)})),t.click()}},{key:"handleLoadAndReplaceClick",value:function(){var e=this,t=document.getElementById("loadAndReplaceButton");t.addEventListener("change",(function(){return e.handleFileChosen(!1,e.props)})),t.click()}}]),t}(o.a.Component),G=Object(f.b)((function(e){return{mode:e.mode,bookmarks:e.bookmarks}}),(function(e){return{setMode:function(t){e(E(t))},appendBookmarks:function(t){e({type:"APPEND_BOOKMARKS",payload:t})},setBookmarks:function(t){e(v(t))}}}))(K);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var z=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).handleKeyDown=function(e){"Enter"===e.key&&n.handleSearch(e)},n.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n.state,{searchText:"",searchEngine:n.getInitialSearchEngine()}),n.handleSearchEngineChange=n.handleSearchEngineChange.bind(Object(p.a)(n)),n.handleSearchChange=n.handleSearchChange.bind(Object(p.a)(n)),n.handleSearch=n.handleSearch.bind(Object(p.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSearchChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSearchEngineChange",value:function(e){this.setState({searchEngine:e.target.value}),localStorage.setItem("searchEngine",e.target.value)}},{key:"handleSearch",value:function(e){switch(this.state.searchEngine){case"google":window.open("https://www.google.com/search?q="+this.state.searchText,"_self");break;case"duckduckgo":window.open("https://www.duckduckgo.com/?q="+this.state.searchText+"&t=h_&ia=web","_self");break;case"bing":window.open("https://www.bing.com/search?q="+this.state.searchText,"_self");break;default:console.log("Invalid Search Engine")}e.preventDefault()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,null),o.a.createElement(_,null),o.a.createElement(G,null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"center"},o.a.createElement("select",{name:"searchEngine",id:"searchEngine",className:"search-select",value:this.state.searchEngine,onChange:this.handleSearchEngineChange},o.a.createElement("option",{value:"google"},"Google"),o.a.createElement("option",{value:"duckduckgo"},"Duck Duck Go"),o.a.createElement("option",{value:"bing"},"Bing")),o.a.createElement("span",{className:"spacer"}),o.a.createElement("input",{className:"search-input",tabIndex:1,value:this.state.searchText,onChange:this.handleSearchChange,onKeyDown:this.handleKeyDown}),o.a.createElement("span",{className:"spacer"}),o.a.createElement("button",{tabIndex:2,onClick:this.handleSearch,className:"search-button"},"Search")),o.a.createElement("h1",{className:"text-on-background"},"Bookmarks"),o.a.createElement("br",null),this.getBookmarkContent(),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null))}},{key:"getBookmarkContent",value:function(){return null!=this.props.bookmarks&&this.props.bookmarks.length>0?o.a.createElement(M,null):o.a.createElement("h1",{className:"text-on-background"},'Tap or click the "Add" button to add a bookmark')}},{key:"getInitialSearchEngine",value:function(){var e=localStorage.getItem("searchEngine");return"google"===e||"duckduckgo"===e||"bing"===e?e:"google"}}]),t}(o.a.Component),H=Object(f.b)((function(e){return{bookmarks:e.bookmarks}}),null)(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(21),W=function(){return Object(J.b)(R)};document.title="Bookmark Page";var q=o.a.createElement(f.a,{store:W()},o.a.createElement(H,null));i.a.render(q,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.5aac1dea.chunk.js.map