"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[883],{4189:function(e,t,n){n.d(t,{H:function(){return C}});var i=n(7294),o=n(5444),r=n(9),l=n(419),a=(0,r.default)(l.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1g16ucx-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),c=(0,r.default)(o.Link).withConfig({displayName:"link__PostLink",componentId:"sc-53hhi5-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:minmax(100px,1fr);}"]),u=n(6125),m=r.default.article.withConfig({displayName:"wrapper__PostWrapper",componentId:"sc-wvoput-0"})(["border-top:1px solid ",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayTranslucent})),d=r.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-19otf45-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:10px;img{height:75px;width:75px;}"]),f=r.default.div.withConfig({displayName:"container__PostInfoContainer",componentId:"sc-51koo2-0"})(["padding:15px 10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),s=(0,r.default)(l.nv).withConfig({displayName:"date__PostDate",componentId:"sc-w3bdsn-0"})(["margin:0 0 10px 0;padding:0px;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),p=(0,r.default)(l.H3).withConfig({displayName:"title__PostTitle",componentId:"sc-1bj7gxq-0"})(["font-size:",";font-weight:",";line-height:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.lineHeight.big})),g=n(6072),h=n(6692),x=r.default.div.withConfig({displayName:"container__PostTagsContainer",componentId:"sc-1qx2z1r-0"})(["display:flex;flex-wrap:wrap;& > *{margin-right:5px;}"]),w=r.default.div.withConfig({displayName:"wrapper__PostTagsWrapper",componentId:"sc-zm8lu6-0"})(["display:grid;grid-template-columns:20px 1fr;gap:5px;width:100%;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),y=function(e){var t=e.tags,n=(0,i.useState)(!0),o=n[0],r=n[1],l=(0,i.useState)({}),a=l[0],c=l[1];return(0,i.useEffect)((function(){c((0,g._D)()),r(!1)}),[]),o?i.createElement(i.Fragment,null):i.createElement(w,null,i.createElement(h.Ou,{size:20}),i.createElement(x,null,null==t?void 0:t.map((function(e,t,n){return i.createElement("span",{key:t},a[e].ko,t<n.length-1?",":"")})).slice(0,3),(null==t?void 0:t.length)>3&&i.createElement("span",null,"...")))},_={borderRadius:"10px"},E=function(e){var t=e.article,n=t.id,o=t.slug,r=t.frontmatter,l=r.hero_image,a=r.hero_image_alt,h=r.date,x=r.title,w=r.category,E=r.tags,b=(0,g.t4)();return i.createElement(m,{key:n},i.createElement(c,{to:"/"+o},i.createElement(d,null,i.createElement(u.G,{image:(0,u.d)(l),alt:a,imgStyle:_})),i.createElement(f,null,i.createElement(s,null,h," | ",b[w].ko),i.createElement(p,null,x),i.createElement(y,{tags:E}))))},b=r.default.ul.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1ba59mt-0"})(["padding:20px;"]),C=function(){var e=(0,o.useStaticQuery)(z).allMdx.nodes;return i.createElement(i.Fragment,null,i.createElement(a,null,"최근 글"),i.createElement(b,null,e.map((function(e){return i.createElement(E,{key:e.id,article:e})}))))},z="2248097681"},1925:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(7294),o=n(9),r=o.default.div.withConfig({displayName:"wrapper__NotFoundWrapper",componentId:"sc-cqi4z8-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;margin-bottom:40px;"]),l=n(5160),a=n(419),c=(0,o.default)(a.H2).withConfig({displayName:"main-text__FourZeroFour",componentId:"sc-ax4csd-0"})(["font-size:",";font-weight:",";@media ","{font-size:",";}"],(function(e){return e.theme.fontSize.xl7}),(function(e){return e.theme.fontWeight.bold}),l.Uh.mobile,(function(e){return e.theme.fontSize.xl9})),u=(0,o.default)(a.nv).withConfig({displayName:"main-text__PageNotFound",componentId:"sc-ax4csd-1"})(["font-size:",";font-weight:",";margin-bottom:30px;@media ","{font-size:",";}"],(function(e){return e.theme.fontSize.xl2}),(function(e){return e.theme.fontWeight.bold}),l.Uh.mobile,(function(e){return e.theme.fontSize.xl4})),m=n(5444),d=(0,o.default)(m.Link).withConfig({displayName:"link__HomeLink",componentId:"sc-z2zigb-0"})(["padding:15px;font-weight:",";font-size:",";line-height:",";color:white;background-color:",";border-radius:20px;&:hover{background-color:",";}"],(function(e){return e.theme.fontWeight.medium}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.lineHeight.normal}),(function(e){return e.theme.colors.thickHighlightColor}),(function(e){return e.theme.colors.highlightColor})),f=function(){return i.createElement(r,null,i.createElement(c,null,"404"),i.createElement(u,null,"Page Not Found"),i.createElement(d,{to:"/"},"블로그 구경가기"))},s=n(4189),p=o.default.div.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1vat937-0"})(["display:flex;flex-direction:column;margin:0px 20px;border:1px solid ",";border-radius:15px;"],(function(e){return e.theme.colors.grayBorder})),g=o.default.div.withConfig({displayName:"wrapper__RecentPostsWrapper",componentId:"sc-x4gm1-0"})(["width:100%;display:flex;justify-content:center;"]),h=function(){return i.createElement(g,null,i.createElement(p,null,i.createElement(s.H,null)))},x=n(6397),w=n(7291),y=function(){return i.createElement(i.Fragment,null,i.createElement(w.Z,{title:"404 Page Not Found",pathname:"/404"}),i.createElement(x.Z,null,i.createElement(f,null),i.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-f044ab496d40981aa6ad.js.map