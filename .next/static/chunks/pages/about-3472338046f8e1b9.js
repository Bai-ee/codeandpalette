(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6515:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return a(6907)}])},5677:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){let a=t.default,l={loading:e=>{let{error:s,isLoading:a,pastDelay:i}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=i({},l,e)),l=i({},l,s);let c=l.loader,o=()=>null!=c?c().then(r):Promise.resolve(r(()=>null));return(l.loadableGenerated&&(l=i({},l,l.loadableGenerated),delete l.loadableGenerated),"boolean"!=typeof l.ssr||l.ssr)?a(i({},l,{loader:o})):(delete l.webpack,delete l.modules,n(a,l))},s.noSSR=n;var i=a(6495).Z,l=a(2648).Z,t=(l(a(7294)),l(a(8976)));function r(e){return{default:(null==e?void 0:e.default)||e}}function n(e,s){return delete s.webpack,delete s.modules,e(s)}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},2254:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var i=(0,a(2648).Z)(a(7294));let l=i.default.createContext(null);s.LoadableContext=l},8976:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=a(6495).Z,l=(0,a(2648).Z)(a(7294)),t=a(2254);let r=[],n=[],c=!1;function o(e){let s=e(),a={loading:!0,loaded:null,error:null};return a.promise=s.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,s){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s),i=null;function r(){if(!i){let s=new d(e,a);i={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return i.promise()}if(!c){let e=a.webpack?a.webpack():a.modules;e&&n.push(s=>{for(let a of e)if(-1!==s.indexOf(a))return r()})}function o(e,s){!function(){r();let e=l.default.useContext(t.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(s=>{e(s)})}();let n=l.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return l.default.useImperativeHandle(s,()=>({retry:i.retry}),[]),l.default.useMemo(()=>{var s;return n.loading||n.error?l.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?l.default.createElement((s=n.loaded)&&s.default?s.default:s,e):null},[e,n])}return o.preload=()=>r(),o.displayName="LoadableComponent",l.default.forwardRef(o)}(o,e)}function h(e,s){let a=[];for(;e.length;){let i=e.pop();a.push(i(s))}return Promise.all(a).then(()=>{if(e.length)return h(e,s)})}m.preloadAll=()=>new Promise((e,s)=>{h(r).then(e,s)}),m.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(s=>{let a=()=>(c=!0,s());h(n,e).then(a,a)})},window.__NEXT_PRELOADREADY=m.preloadReady,s.default=m},6907:function(e,s,a){"use strict";a.r(s);var i=a(5893),l=a(5152),t=a.n(l),r=a(9656),n=a(2226),c=a(1664),o=a.n(c),d=a(2546);let m=t()(()=>Promise.all([a.e(655),a.e(339)]).then(a.bind(a,4339)),{loadableGenerated:{webpack:()=>[4339]},ssr:!1}),h=()=>(0,i.jsxs)(r.Z,{children:[(0,i.jsx)("section",{className:"page-banner pt-210 rpt-150 pb-45 rpb-50 rel z-1",style:{backgroundImage:"url(assets/images/hero/hero-two-bg.png)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-10 col-lg-11",children:(0,i.jsxs)("h1",{className:"hero-title mb-100 rmb-50 wow fadeInUp delay-0-2s",children:["We’re Digital Web",(0,i.jsx)("img",{className:"mxw-20",src:"assets/images/banner/inside-title1.png",alt:"title"}),(0,i.jsx)("img",{className:"mxw-40",src:"assets/images/banner/inside-title2.png",alt:"title"}),"Development Agency",(0,i.jsx)("span",{className:"arrow",children:(0,i.jsx)("img",{className:"wow fadeInLeft delay-0-6s",src:"assets/images/hero/title-arrow.png",alt:"Arrow"})})]})})})})}),(0,i.jsxs)("div",{className:"video-area-two rel z-1",children:[(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"video-part style-two mb-40 wow fadeInUp delay-0-2s",children:[(0,i.jsx)("img",{src:"assets/images/video/video-two-bg.jpg",alt:"Video"}),(0,i.jsx)("a",{href:"https://www.youtube.com/watch?v=9Y7ma241N8k",className:"mfp-iframe video-play",children:(0,i.jsx)("i",{className:"fas fa-play"})})]})}),(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"col-lg-6 wow fadeInLeft delay-0-2s",children:[(0,i.jsx)("div",{className:"client-text text-lg-start text-center mt-40 pb-50",children:"Sed ut perspiciatis unde omnis iste natus error sit voluptat emey accusantium doloremque laudantium totam aperiam eaque quabillo inventore veritatisey quasi architecto beatae dictasunt"}),(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-xl-10",children:(0,i.jsxs)("div",{className:"client-logo-wrap",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo-two1.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo-two2.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo-two3.png",alt:"Client Logo"})})})]})})})]}),(0,i.jsx)("div",{className:"col-lg-6 wow fadeInRight delay-0-2s",children:(0,i.jsxs)("div",{className:"video-year text-lg-end text-center rel",children:["1980",(0,i.jsx)("img",{className:"leaf-shape",src:"assets/images/video/leaf.png",alt:"Leaf"})]})})]})})]}),(0,i.jsx)("section",{className:"who-we-are-area pt-100 rpt-80 pb-75 rpb-45 rel z-1",children:(0,i.jsxs)("div",{className:"container container-1290",children:[(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-lg-7",children:(0,i.jsxs)("div",{className:"section-title text-center mb-70 wow fadeInUp delay-0-2s",children:[(0,i.jsx)("span",{className:"sub-title mb-15",children:"Who We Are"}),(0,i.jsx)("h2",{children:"We are Professional and Experience Team "})]})})}),(0,i.jsxs)("div",{className:"row gap-90",children:[(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"why-choose-item style-two wow fadeInUp delay-0-2s",children:[(0,i.jsxs)("div",{className:"why-choose-header",children:[(0,i.jsx)("i",{className:"flaticon-creativity"}),(0,i.jsx)("h5",{children:"Customize your site"})]}),(0,i.jsx)("p",{children:"At vero eos et accusamus iusto dignissim ducimuse blanditiis praesentiue"})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"why-choose-item style-two wow fadeInUp delay-0-4s",children:[(0,i.jsxs)("div",{className:"why-choose-header",children:[(0,i.jsx)("i",{className:"flaticon-mobile-banking"}),(0,i.jsx)("h5",{children:"Edit your mobile view"})]}),(0,i.jsx)("p",{children:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit"})]})}),(0,i.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,i.jsxs)("div",{className:"why-choose-item style-two wow fadeInUp delay-0-6s",children:[(0,i.jsxs)("div",{className:"why-choose-header",children:[(0,i.jsx)("i",{className:"flaticon-optimization-1"}),(0,i.jsx)("h5",{children:"Optimize search engines"})]}),(0,i.jsx)("p",{children:"Quis autem vel eum iure reprehenderi qui ea voluptate velit esse quam nihile"})]})})]})]})}),(0,i.jsx)("div",{className:"headline-area bgc-primary pt-80 pb-65",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"headline-wrap marquee",children:(0,i.jsxs)("span",{children:[(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Design & Branding"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Web Development"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Mobile Apps"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Design & Branding"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Web Development"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Mobile Apps"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Design & Branding"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Web Development"})]}),(0,i.jsxs)("span",{className:"marquee-item",children:[(0,i.jsx)("i",{className:"fas fa-star-of-life"}),(0,i.jsx)("b",{children:"Mobile Apps"})]})]})})})}),(0,i.jsx)("section",{className:"team-area pt-130 rpt-100",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsxs)("div",{className:"row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center",children:[(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"team-member wow fadeInUp delay-0-2s",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"assets/images/team/member6.jpg",alt:"Team Member"})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h4",{children:"Patrick V. Schroeder"}),(0,i.jsx)("span",{children:"UI/UX Designer"}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsx)("a",{className:"read-more",children:(0,i.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,i.jsxs)("div",{className:"btn-social",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsxs)("a",{className:"read-more",children:[(0,i.jsx)("span",{children:"View Details"})," ",(0,i.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,i.jsxs)("div",{className:"social-style-two",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"team-member wow fadeInUp delay-0-3s",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"assets/images/team/member7.jpg",alt:"Team Member"})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h4",{children:"Michael A. Braun"}),(0,i.jsx)("span",{children:"UI/UX Designer"}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsx)("a",{className:"read-more",children:(0,i.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,i.jsxs)("div",{className:"btn-social",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsxs)("a",{className:"read-more",children:[(0,i.jsx)("span",{children:"View Details"})," ",(0,i.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,i.jsxs)("div",{className:"social-style-two",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"team-member wow fadeInUp delay-0-4s",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"assets/images/team/member8.jpg",alt:"Team Member"})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h4",{children:"James V. Decastro"}),(0,i.jsx)("span",{children:"Senior Marketer"}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsx)("a",{className:"read-more",children:(0,i.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,i.jsxs)("div",{className:"btn-social",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsxs)("a",{className:"read-more",children:[(0,i.jsx)("span",{children:"View Details"})," ",(0,i.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,i.jsxs)("div",{className:"social-style-two",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"team-member wow fadeInUp delay-0-5s",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"assets/images/team/member9.jpg",alt:"Team Member"})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h4",{children:"Troy V. Richardson"}),(0,i.jsx)("span",{children:"Web Designer"}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsx)("a",{className:"read-more",children:(0,i.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,i.jsxs)("div",{className:"btn-social",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsxs)("a",{className:"read-more",children:[(0,i.jsx)("span",{children:"View Details"})," ",(0,i.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,i.jsxs)("div",{className:"social-style-two",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,i.jsx)("div",{className:"col",children:(0,i.jsxs)("div",{className:"team-member wow fadeInUp delay-0-6s",children:[(0,i.jsx)("div",{className:"image",children:(0,i.jsx)("img",{src:"assets/images/team/member10.jpg",alt:"Team Member"})}),(0,i.jsxs)("div",{className:"content",children:[(0,i.jsx)("h4",{children:"Michael A. Braun"}),(0,i.jsx)("span",{children:"Apps Designer"}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsx)("a",{className:"read-more",children:(0,i.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,i.jsxs)("div",{className:"btn-social",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/team-details",children:(0,i.jsxs)("a",{className:"read-more",children:[(0,i.jsx)("span",{children:"View Details"})," ",(0,i.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,i.jsxs)("div",{className:"social-style-two",children:[(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-facebook-f"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-twitter"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-instagram"})}),(0,i.jsx)("a",{href:"#",children:(0,i.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})})]})})}),(0,i.jsx)("div",{className:"statistics-area pt-100 rpt-70 rel z-1",style:{backgroundImage:"url(assets/images/hero/hero-two-bg.png)"},children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row justify-content-between",children:[(0,i.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,i.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInRight delay-0-2s",children:[(0,i.jsx)("i",{className:"fal fa-check-circle"}),(0,i.jsx)(m,{end:25}),(0,i.jsx)("span",{className:"counter-title",children:"Years Of Experience"})]})}),(0,i.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,i.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInRight delay-0-3s",children:[(0,i.jsx)("i",{className:"fal fa-check-circle"}),(0,i.jsx)(m,{end:3,extraClass:"k"}),(0,i.jsx)("span",{className:"counter-title",children:"Project’s Complete"})]})}),(0,i.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,i.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInRight delay-0-4s",children:[(0,i.jsx)("i",{className:"fal fa-check-circle"}),(0,i.jsx)(m,{end:48}),(0,i.jsx)("span",{className:"counter-title",children:"Professionals Team Member"})]})}),(0,i.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,i.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInRight delay-0-5s",children:[(0,i.jsx)("i",{className:"fal fa-check-circle"}),(0,i.jsx)(m,{end:92}),(0,i.jsx)("span",{className:"counter-title",children:"Awards Winning"})]})})]})})}),(0,i.jsx)("section",{className:"testimonial-section pt-70 rpt-30",children:(0,i.jsx)("div",{className:"container container-1210",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"image-border-shape rmb-20 wow fadeInRight delay-0-2s",children:[(0,i.jsx)("img",{src:"assets/images/testimonials/testimonials-four.jpg",alt:"Testimonial Left Image"}),(0,i.jsx)("div",{className:"bottom-border"})]})}),(0,i.jsx)("div",{className:"col-lg-6",children:(0,i.jsxs)("div",{className:"testimonial-one-right-part wow fadeInLeft delay-0-2s",children:[(0,i.jsxs)(d.tq,{...n.b.testimonialsActiveSwiper,className:"testimonials-active",children:[(0,i.jsxs)(d.o5,{className:"testimonial-item",children:[(0,i.jsx)("div",{className:"author-speech",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"quote",children:"“"})," On the other hand we denounce with see righteous indignation and dislike men who are beguiled and demoralized by the charms offset pleasure moments line desire that they cannot foresee pain and trouble that are bound ensue and equal blame belongs their duty"," ",(0,i.jsx)("span",{className:"quote right-quote",children:"“"})]})}),(0,i.jsxs)("div",{className:"testimonial-footer",children:[(0,i.jsxs)("div",{className:"testimonial-author",children:[(0,i.jsx)("div",{className:"author-image",children:(0,i.jsx)("img",{src:"assets/images/testimonials/author1.png",alt:"Author Image"})}),(0,i.jsxs)("div",{className:"author-info",children:[(0,i.jsx)("h4",{children:"James N. Johnson"}),(0,i.jsx)("span",{className:"designation",children:"CEO & Founder"})]})]}),(0,i.jsxs)("div",{className:"ratting style-two",children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star-half-alt"})]})]})]}),(0,i.jsxs)(d.o5,{className:"testimonial-item",children:[(0,i.jsx)("div",{className:"author-speech",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"quote",children:"“"})," On the other hand we denounce with see righteous indignation and dislike men who are beguiled and demoralized by the charms offset pleasure moments line desire that they cannot foresee pain and trouble that are bound ensue and equal blame belongs their duty"," ",(0,i.jsx)("span",{className:"quote right-quote",children:"“"})]})}),(0,i.jsxs)("div",{className:"testimonial-footer",children:[(0,i.jsxs)("div",{className:"testimonial-author",children:[(0,i.jsx)("div",{className:"author-image",children:(0,i.jsx)("img",{src:"assets/images/testimonials/author1.png",alt:"Author Image"})}),(0,i.jsxs)("div",{className:"author-info",children:[(0,i.jsx)("h4",{children:"James N. Johnson"}),(0,i.jsx)("span",{className:"designation",children:"CEO & Founder"})]})]}),(0,i.jsxs)("div",{className:"ratting style-two",children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star-half-alt"})]})]})]}),(0,i.jsxs)(d.o5,{className:"testimonial-item",children:[(0,i.jsx)("div",{className:"author-speech",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"quote",children:"“"})," On the other hand we denounce with see righteous indignation and dislike men who are beguiled and demoralized by the charms offset pleasure moments line desire that they cannot foresee pain and trouble that are bound ensue and equal blame belongs their duty"," ",(0,i.jsx)("span",{className:"quote right-quote",children:"“"})]})}),(0,i.jsxs)("div",{className:"testimonial-footer",children:[(0,i.jsxs)("div",{className:"testimonial-author",children:[(0,i.jsx)("div",{className:"author-image",children:(0,i.jsx)("img",{src:"assets/images/testimonials/author1.png",alt:"Author Image"})}),(0,i.jsxs)("div",{className:"author-info",children:[(0,i.jsx)("h4",{children:"James N. Johnson"}),(0,i.jsx)("span",{className:"designation",children:"CEO & Founder"})]})]}),(0,i.jsxs)("div",{className:"ratting style-two",children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star-half-alt"})]})]})]}),(0,i.jsxs)(d.o5,{className:"testimonial-item",children:[(0,i.jsx)("div",{className:"author-speech",children:(0,i.jsxs)("p",{children:[(0,i.jsx)("span",{className:"quote",children:"“"})," On the other hand we denounce with see righteous indignation and dislike men who are beguiled and demoralized by the charms offset pleasure moments line desire that they cannot foresee pain and trouble that are bound ensue and equal blame belongs their duty"," ",(0,i.jsx)("span",{className:"quote right-quote",children:"“"})]})}),(0,i.jsxs)("div",{className:"testimonial-footer",children:[(0,i.jsxs)("div",{className:"testimonial-author",children:[(0,i.jsx)("div",{className:"author-image",children:(0,i.jsx)("img",{src:"assets/images/testimonials/author1.png",alt:"Author Image"})}),(0,i.jsxs)("div",{className:"author-info",children:[(0,i.jsx)("h4",{children:"James N. Johnson"}),(0,i.jsx)("span",{className:"designation",children:"CEO & Founder"})]})]}),(0,i.jsxs)("div",{className:"ratting style-two",children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("i",{className:"fas fa-star-half-alt"})]})]})]})]}),(0,i.jsxs)("div",{className:"testimonial-controls mt-75 rmt-40",children:[(0,i.jsx)("button",{className:"testimonial-prev slick-arrow",children:(0,i.jsx)("i",{className:"far fa-chevron-left"})}),(0,i.jsx)("div",{className:"testimonial-dots",children:(0,i.jsx)("div",{className:"slick-dots"})}),(0,i.jsx)("button",{className:"testimonial-next slick-arrow",children:(0,i.jsx)("i",{className:"far fa-chevron-right"})})]})]})})]})})}),(0,i.jsx)("section",{className:"client-logo-area pt-130 rpt-100 pb-100 rpb-70",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"section-title text-center mb-60",children:(0,i.jsx)("h4",{children:"We Have 1520+Global Clients"})}),(0,i.jsxs)("div",{className:"client-logo-wrap",children:[(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-2s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo1.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-3s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo2.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-4s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo3.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-5s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo4.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-6s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo5.png",alt:"Client Logo"})})}),(0,i.jsx)(o(),{legacyBehavior:!0,href:"/contact",children:(0,i.jsx)("a",{className:"client-logo-item wow fadeInUp delay-0-7s",children:(0,i.jsx)("img",{src:"assets/images/client-logos/client-logo6.png",alt:"Client Logo"})})})]})]})})]});s.default=h},2226:function(e,s,a){"use strict";a.d(s,{b:function(){return r}});var i=a(5893),l=a(9360);function t(e){let{className:s,extraClass:a,onClick:l,icon:t}=e;return(0,i.jsx)("button",{className:"".concat(s,"  ").concat(a),onClick:l,children:(0,i.jsx)("i",{className:t})})}l.ZP.use([l.Gk,l.tl,l.W_,l.xW,l.pt,l.rj,l.gI,l.oM]);let r={mainSlider:{slidesToShow:1,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!1,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3},galleryFiveActive:{loop:!0,slidesPerView:1,spaceBetween:15,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".work-gallery-dots",clickable:!0},navigation:{nextEl:".work-gallery-next",prevEl:".work-gallery-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:15},1400:{slidesPerView:4,spaceBetween:15}}},testimonialsThreeActive:{slidesToShow:1,slidesToScroll:1,infinite:!1,speed:400,dots:!0,arrows:!1,focusOnSelect:!0,autoplay:!1,autoplaySpeed:5e3,appendDots:e=>(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:e.map((e,s)=>(0,i.jsx)("li",{children:e.props.children},s))})}),responsive:[{breakpoint:1200,settings:{slidesToShow:1}}]},testimonialsTwoActive:{slidesToShow:1,slidesToScroll:1,infinite:!0,speed:400,arrows:!0,dots:!0,focusOnSelect:!0,autoplay:!1,autoplaySpeed:5e3,prevArrow:(0,i.jsx)(t,{extraClass:"prev-arrow",icon:"fal fa-chevron-left"}),nextArrow:(0,i.jsx)(t,{extraClass:"next-arrow",icon:"fal fa-chevron-right"}),responsive:[{breakpoint:1200,settings:{slidesToShow:1}}]},testimonialsThreeActiveSwiper:{loop:!0,spaceBetween:30,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".testimonial-three-dots .slick-dots",clickable:!0},navigation:{nextEl:".testimonial-three-next",prevEl:".testimonial-three-prev"}},testimonialsActiveSwiper:{loop:!0,spaceBetween:30,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".testimonial-dots .slick-dots",clickable:!0},navigation:{nextEl:".testimonial-next",prevEl:".testimonial-prev"}},projectSliderActiveSwiper:{loop:!0,spaceBetween:30,slidesPerView:1,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".project-next",prevEl:".project-prev"},breakpoints:{1200:{slidesPerView:2,spaceBetween:30}}},workGallerySliderActiveSwiper:{loop:!0,spaceBetween:30,slidesPerView:1,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".work-gallery-next",prevEl:".work-gallery-prev"},pagination:{el:".work-gallery-dots .slick-dots",clickable:!0},breakpoints:{767:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:30}}}}},5152:function(e,s,a){e.exports=a(5677)}},function(e){e.O(0,[854,546,656,774,888,179],function(){return e(e.s=6515)}),_N_E=e.O()}]);