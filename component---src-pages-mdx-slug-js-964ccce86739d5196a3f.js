(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[711],{6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9213),o=n(3515),i=n(8416),a=n(7071),l=["scope","children"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(7294),p=n(4983).mdx,d=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,i=a(e,l),c=d(t),f=s.useMemo((function(){if(!n)return null;var e=u({React:s,mdx:p},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(i)))}),[n,t]);return s.createElement(f,u({},i))}},9746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r=n(7294),o=n(1664),i=n(8603),a=n(480),l=n(4744),c=n(3699),u=n(3494),s=u.default.section.withConfig({displayName:"wrapper__ContentWrapper",componentId:"sc-161rsrf-0"})(["padding:0px 20px;width:100%;"]),p=n(6725),d=u.default.div.withConfig({displayName:"wrapper__TitleWrapper",componentId:"sc-jul0ac-0"})(["padding:10px 0px;border-bottom:1px solid ",";margin-bottom:40px;box-shadow:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.colors.boxShadowBottomOnly})),f=n(419),m=(0,u.default)(f.H1).withConfig({displayName:"title__BlogTitle",componentId:"sc-yyfcq0-0"})(["padding:40px 0 0 5px;margin-bottom:30px;line-height:",";"],(function(e){return e.theme.lineHeight.xl})),g=u.default.div.withConfig({displayName:"container__SideInfoContainer",componentId:"sc-14e9vg8-0"})(["padding:0 10px;"]),h=(0,u.default)(f.H3).attrs({as:"span"}).withConfig({displayName:"text__SText",componentId:"sc-1c1feu6-0"})(["font-size:",";"],(function(e){return e.theme.fontSize.base})),x=function(){var e=(0,i.Qd)(),t=e[0],n=e[1];return t?r.createElement(r.Fragment,null):r.createElement(h,null,n," views | ")},y=u.default.div.withConfig({displayName:"wrapper__SideInfoWrapper",componentId:"sc-gshzfl-0"})(["display:flex;justify-content:flex-end;"]),v=function(e){var t=e.date;return r.createElement(y,null,r.createElement(g,null,r.createElement(x,null),r.createElement(h,null,t)))},b=function(e){var t=e.title,n=e.date;return r.createElement(d,null,r.createElement(m,null,t),r.createElement(v,{date:n}))},_=u.default.div.withConfig({displayName:"container__ContentContainer",componentId:"sc-rsnhu5-0"})(["width:100%;"]),w=u.default.div.withConfig({displayName:"container__TagContainer",componentId:"sc-82i2vo-0"})(["display:flex;flex-wrap:wrap;"]),E=n(6072),C=n(5444),S=(0,u.default)(C.Link).withConfig({displayName:"link__TagLink",componentId:"sc-177vns9-0"})(["height:30px;padding:4px 8px;border-radius:16px;margin-left:5px;margin-bottom:5px;background-color:",";white-space:nowrap;display:flex;justify-content:center;align-items:center;&:hover{background-color:",";}"],(function(e){return e.theme.colors.gray}),(function(e){return e.theme.colors.highlightColor})),k=u.default.span.withConfig({displayName:"text__TagText",componentId:"sc-qa5b70-0"})(["color:white;line-height:",";"],(function(e){return e.theme.lineHeight.big})),I=function(e){var t=e.tag,n=(0,E.cx)(t).ko;return r.createElement(S,{to:"/tag/"+t,title:(0,c.Su)(n)},r.createElement(k,null,n))},N=u.default.div.withConfig({displayName:"wrapper__TagWrapper",componentId:"sc-l9tgl0-0"})(["padding:30px 0 5px 0;display:flex;justify-content:flex-end;& > svg{margin-top:2.5px;min-width:25px;color:",";}",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.preventUserSelect})),O=function(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement(N,null,r.createElement(f.Ou,{size:25}),r.createElement(w,null,null==t?void 0:t.map((function(e,t){return r.createElement(I,{key:t,tag:e})})))),r.createElement("hr",null))},j=function(e){var t=e.body,n=e.title,o=e.date,i=e.tags;return r.createElement(s,null,r.createElement(b,{title:n,date:o}),r.createElement(_,null,r.createElement(p.MDXRenderer,null,t)),r.createElement(O,{tags:i}))},H=u.default.button.withConfig({displayName:"button__Button",componentId:"sc-f4k24a-0"})(["all:unset;",";position:relative;height:100%;width:100%;padding:0 10px;display:flex;align-items:center;border-left:",";cursor:pointer;color:",";background-color:",";&:hover{background-color:",";border-left:",";& > div{background:",";border-top:1px solid ",";border-left:1px solid ",";}}"],(function(e){return e.theme.baseStyles()}),(function(e){var t=e.level,n=e.theme;return t>0?"2px solid "+n.colors.grayBorder:""}),(function(e){return e.theme.colors.textColor}),(function(e){var t=e.isCurrentPage,n=e.theme;return t?n.colors.minimumHighlight:n.colors.backgroundColor}),(function(e){return e.theme.colors.minimumHighlight}),(function(e){var t=e.level,n=e.theme;return t>0?"2px solid "+n.colors.minimumHighlight:""}),(function(e){var t=e.theme.colors;return"linear-gradient(to right bottom, "+t.highlightColor+" 50%, "+t.backgroundColor+" 50%);"}),(function(e){return e.theme.colors.thickHighlightColor}),(function(e){return e.theme.colors.thickHighlightColor})),M=u.default.div.withConfig({displayName:"diagonal-box__DiagonalBox",componentId:"sc-1gn3r4x-0"})(["position:absolute;bottom:0px;right:0px;height:12px;width:12px;",";"],(function(e){return e.theme.transitionStyles("none")})),P=u.default.li.withConfig({displayName:"li__Li",componentId:"sc-z5iibg-0"})(["height:35px;padding-left:","px;"],(function(e){return 15*e.level})),T=function(e){var t=e.element,n=e.rootHeaderLevel,o=e.isCurrentPositionList,i=e.idx,a=t.tagName,l=t.id,c=t.innerText;if(["H1","H2","H3","H4"].includes(a)){var u=parseInt(a.substring(1))-n;return r.createElement(P,{level:u},r.createElement(H,{level:u,isCurrentPage:o[i],onClick:function(){return e=l,window.location.hash=(0,E.eM)(e),void(0,E.Yt)(e);var e}},r.createElement("span",null,c),r.createElement(M,null)))}},A=u.default.section.withConfig({displayName:"section__NavSection",componentId:"sc-f1mcce-0"})(["display:none;@media ","{display:block;}",";"],(function(e){return e.theme.device.maxScreenWidth}),(function(e){return e.theme.preventUserSelect})),R=u.default.nav.withConfig({displayName:"wrapper__Nav",componentId:"sc-1d55xw0-0"})(["position:-webkit-sticky;position:sticky;top:","px;align-self:start;margin-top:40px;"],(function(e){return e.theme.heightSize.HEADER_HEIGHT_COVERAGE+5})),B=u.default.ul.withConfig({displayName:"container__Ul",componentId:"sc-qmird0-0"})(["width:100%;"]),D=n(858),z=function(){var e=(0,r.useState)(),t=e[0],n=e[1],o=(0,r.useState)(4),i=o[0],a=o[1],l=(0,r.useState)(!0),c=l[0],u=l[1],s=(0,r.useState)([]),p=s[0],d=s[1],f=(0,r.useState)([]),m=f[0],g=f[1],h=(0,E.zj)();return(0,r.useEffect)((function(){var e=(0,E.Sl)();n(e),d((0,E.dH)(e)),g(Array(e.length).fill(!1));var t=e.map((function(e){return e.tagName}));a((0,E.us)(t)),u(!1)}),[]),(0,r.useEffect)((function(){if(!c){var e=(0,E.k2)(p,m.length,h);g(e)}}),[c,h,p,m.length]),c?r.createElement(r.Fragment,null):r.createElement(A,null,r.createElement(R,null,r.createElement(B,null,t.map((function(e,t){return r.createElement(T,{key:t,element:e,rootHeaderLevel:i,idx:t,isCurrentPositionList:m})}))),r.createElement(D.o,{dataAdSlot:"4542003988"})))},L=u.default.div.withConfig({displayName:"wrapper__BlogWrapper",componentId:"sc-ns56ou-0"})(["display:block;@media ","{display:grid;gap:5px;grid-template-columns:7fr 3fr;}img{display:block;max-width:100%;margin:0 auto;}"],(function(e){return e.theme.device.maxScreenWidth})),U=n(9499),W=function(e){var t=e.blogProps,n=t.title,o=t.siteUrlNoTrailingSlash,a=t.date,l=t.tags,u=t.body,s=o+(0,U.useLocation)().pathname;return(0,i.zR)(n,s),r.createElement(L,{className:c.e9},r.createElement(j,{title:n,date:a,tags:l,body:u}),r.createElement(z,null))},F=function(e){var t=e.data,n=t.site.siteMetadata.siteUrlNoTrailingSlash,c=t.mdx,u=c.frontmatter,s=u.title,p=u.description,d=u.short_description,f=u.date,m=u.hero_image,g=u.hero_image_alt,h=u.category,x=u.tags,y=c.parent.modifiedTime,v=c.body,b=c.slug,_=(0,o.c)(m),w=(0,o.d)(m);(0,i.Bu)();var E={published_time:f,modified_time:y,category:h,tags:x,mainImageAlt:g},C={title:s,siteUrlNoTrailingSlash:n,date:f,tags:x,body:v};return r.createElement(r.Fragment,null,r.createElement(a.Z,{title:s,description:d||p,mainImageSrc:w,articleInfo:E,pathname:"/"+b}),r.createElement(l.Z,null,r.createElement(o.G,{image:_,alt:g}),r.createElement(D.o,{dataAdSlot:"8392800842"}),r.createElement(W,{blogProps:C})))}},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var r=n(3897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},3515:function(e,t,n){var r=n(6015),o=n(9617);function i(t,n,a){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},9617:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},9213:function(e,t,n){var r=n(3405),o=n(9498),i=n(6116),a=n(2281);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var r=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-mdx-slug-js-964ccce86739d5196a3f.js.map