"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[883],{8401:function(e,t,n){n.d(t,{H:function(){return E}});var i=n(7294),o=n(5444),r=n(3494),l=n(419),a=(0,r.default)(l.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1g16ucx-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),u=(0,r.default)(o.Link).withConfig({displayName:"link__PostLink",componentId:"sc-53hhi5-0"})(["display:grid;grid-template-columns:1fr;grid-template-rows:minmax(100px,1fr);@media ","{grid-template-columns:100px 1fr;}"],(function(e){return e.theme.device.mobile})),c=n(1664),m=r.default.article.withConfig({displayName:"wrapper__PostWrapper",componentId:"sc-wvoput-0"})(["border-top:1px solid ",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayTranslucent})),f=r.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-19otf45-0"})(["display:none;@media ","{display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:10px;img{height:75px;width:75px;}}"],(function(e){return e.theme.device.mobile})),d=r.default.div.withConfig({displayName:"container__PostInfoContainer",componentId:"sc-51koo2-0"})(["padding:15px 10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),s=(0,r.default)(l.nv).withConfig({displayName:"date__PostDate",componentId:"sc-w3bdsn-0"})(["margin:0 0 10px 0;padding:0px;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),p=(0,r.default)(l.H3).withConfig({displayName:"title__PostTitle",componentId:"sc-1bj7gxq-0"})(["font-size:",";font-weight:",";line-height:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.lineHeight.big})),h=n(6072),g=n(6228),x=r.default.div.withConfig({displayName:"wrapper__PostTagsWrapper",componentId:"sc-zm8lu6-0"})(["display:grid;grid-template-columns:20px 1fr;gap:5px;width:100%;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),w=function(e){var t=e.tags,n=(0,i.useState)(!0),o=n[0],r=n[1],l=(0,i.useState)({}),a=l[0],u=l[1];if((0,i.useEffect)((function(){u((0,h._D)()),r(!1)}),[]),o)return i.createElement(i.Fragment,null);var c=null==t?void 0:t.map((function(e){return a[e].ko})).join(", ");return c.length>28&&(c=c.substring(0,25)+"..."),i.createElement(x,null,i.createElement(g.Ou,{size:20}),i.createElement("span",null,c))},y={borderRadius:"10px"},_=function(e){var t=e.article,n=t.slug,o=t.frontmatter,r=o.hero_image,l=o.hero_image_alt,a=o.date,g=o.title,x=o.category,_=o.tags,b=(0,h.t4)();return i.createElement(m,{title:g},i.createElement(u,{to:"/"+n},i.createElement(f,null,i.createElement(c.G,{image:(0,c.c)(r),alt:l,imgStyle:y})),i.createElement(d,null,i.createElement(s,null,a," | ",b[x].ko),i.createElement(p,null,g),i.createElement(w,{tags:_}))))},b=r.default.ul.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1ba59mt-0"})(["padding:20px;"]),E=function(){var e=(0,o.useStaticQuery)(v).allMdx.nodes;return i.createElement(i.Fragment,null,i.createElement(a,null,"최근 글"),i.createElement(b,null,e.map((function(e){return i.createElement(_,{key:e.id,article:e})}))))},v="2248097681"},1925:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(7294),o=n(3494),r=o.default.div.withConfig({displayName:"wrapper__NotFoundWrapper",componentId:"sc-cqi4z8-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;margin-bottom:40px;",";"],(function(e){return e.theme.preventUserSelect})),l=n(419),a=(0,o.default)(l.H2).withConfig({displayName:"main-text__FourZeroFour",componentId:"sc-ax4csd-0"})(["font-size:",";font-weight:",";@media ","{font-size:",";}"],(function(e){return e.theme.fontSize.xl7}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.fontSize.xl9})),u=(0,o.default)(l.nv).withConfig({displayName:"main-text__PageNotFound",componentId:"sc-ax4csd-1"})(["font-size:",";font-weight:",";margin-bottom:30px;@media ","{font-size:",";}"],(function(e){return e.theme.fontSize.xl2}),(function(e){return e.theme.fontWeight.bold}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.fontSize.xl4})),c=n(5444),m=(0,o.default)(c.Link).withConfig({displayName:"link__HomeLink",componentId:"sc-z2zigb-0"})(["padding:15px;font-weight:",";font-size:",";line-height:",";color:white;background-color:",";border-radius:20px;&:hover{background-color:",";}"],(function(e){return e.theme.fontWeight.medium}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.lineHeight.normal}),(function(e){return e.theme.colors.thickHighlightColor}),(function(e){return e.theme.colors.highlightColor})),f=function(){return i.createElement(r,null,i.createElement(a,null,"404"),i.createElement(u,null,"Page Not Found"),i.createElement(m,{to:"/"},"블로그 구경가기"))},d=n(8401),s=o.default.div.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1vat937-0"})(["display:flex;flex-direction:column;margin:0px 20px;border:1px solid ",";border-radius:15px;"],(function(e){return e.theme.colors.grayBorder})),p=o.default.div.withConfig({displayName:"wrapper__RecentPostsWrapper",componentId:"sc-x4gm1-0"})(["width:100%;display:flex;justify-content:center;",";"],(function(e){return e.theme.preventUserSelect})),h=function(){return i.createElement(p,null,i.createElement(s,null,i.createElement(d.H,null)))},g=n(4744),x=n(480),w=function(){return i.createElement(i.Fragment,null,i.createElement(x.Z,{title:"404 Page Not Found",pathname:"/404"}),i.createElement(g.Z,{addDefaultMainAd:!1},i.createElement(f,null),i.createElement(h,null)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-6d92431b6769dcfde103.js.map