(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),c=(n(18),n(19),n(20),n(21),n(3)),i=n(4),u=n(6),l=n(5),h=n(10),p=(n(22),n(1)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputChange=function(t){e.setState({inputValue:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.inputValue.trim())return h.b.error("Please do not use empty string, you have to write something");e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)("header",{className:"Searchbar",children:Object(p.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(p.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(p.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleInputChange})]})})}}]),n}(a.Component),m=n(8),j=n.n(m),b=n(11),g=n(9),f=n(13),O=n.n(f),y=function(e){var t=e.onClick;return Object(p.jsx)("button",{className:"Button",onClick:t,children:"Load more"})},v=function(e){var t=e.images,n=e.onClick;return t.map((function(e){return Object(p.jsx)("li",{className:"ImageGalleryItem",children:Object(p.jsx)("img",{onClick:function(){return n(e)},src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image"})},e.id)}))};function x(e,t){return w.apply(this,arguments)}function w(){return(w=Object(g.a)(j.a.mark((function e(t,n){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=22394687-5b263f11c9e1c3bf9700990e1&image_type=photo&orientation=horizontal&per_page=12"));case 2:if(!(a=e.sent).ok){e.next=5;break}return e.abrupt("return",a.json());case 5:return e.next=7,Promise.reject(new Error("Sorry, but something was wrong,"));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],error:null,pages:0,page:1,status:"idle"},e.autoScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.resetPage=function(){e.setState({page:1})},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=Object(g.a)(j.a.mark((function e(t,n){var a,r,o,s,c=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.query,r=n.page,o=this.props.query,s=this.state.page,a===o){e.next=10;break}return this.resetPage(),this.setState({status:"pending",page:1}),e.next=9,x(o,1).then((function(e){if(0===e.totalHits)throw new Error("Nothing with name ".concat(o," was not found"));c.setState((function(t){return{images:Object(b.a)(e.hits),status:"resolved",pages:e.totalHits/12}}))})).catch((function(e){return c.setState({error:e,status:"rejected"})}));case 9:this.autoScroll();case 10:if(!(r!==s&&s>1)){e.next=15;break}return this.setState({status:"another-pending"}),e.next=14,x(o,s).then((function(e){c.setState((function(t){return{images:[].concat(Object(b.a)(t.images),Object(b.a)(e.hits)),status:"resolved"}}))})).catch((function(e){return c.setState({error:e,status:"rejected"})}));case 14:this.autoScroll();case 15:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,n=e.error,a=e.status,r=e.pages,o=e.page;return"idle"===a?Object(p.jsx)("h1",{children:"Please, enter something"}):"pending"===a?Object(p.jsx)(O.a,{type:"ThreeDots",color:"#3f51b5",height:280,width:280}):"another-pending"===a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:"ImageGallery",children:Object(p.jsx)(v,{images:t,onClick:this.props.onClick})}),Object(p.jsx)(O.a,{type:"ThreeDots",color:"#3f51b5",height:280,width:280})]}):"rejected"===a?Object(p.jsx)("h1",{children:n.message}):"resolved"===a?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ul",{className:"ImageGallery",children:Object(p.jsx)(v,{images:t,onClick:this.props.onClick})}),r>=o?Object(p.jsx)(y,{onClick:this.handleLoadMore}):Object(p.jsx)(p.Fragment,{})]}):void 0}}]),n}(a.Component),S=document.querySelector("#modal-root"),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.modalImage;return Object(o.createPortal)(Object(p.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(p.jsx)("div",{className:"Modal",children:Object(p.jsx)("img",{src:e.largeImageURL,alt:e.tags})})}),S)}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",showModal:!1,modalImage:""},e.openModal=function(t){e.setState({showModal:!0,modalImage:t})},e.closeModal=function(){e.setState({showModal:!1})},e.getQuery=function(t){e.setState({query:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.query,n=e.showModal,a=e.modalImage;return Object(p.jsxs)("div",{children:[n&&Object(p.jsx)(C,{modalImage:a,onClose:this.closeModal}),Object(p.jsx)(d,{onSubmit:this.getQuery}),Object(p.jsx)(k,{query:t,onClick:this.openModal}),Object(p.jsx)(h.a,{})]})}}]),n}(a.Component);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cd2641e3.chunk.js.map