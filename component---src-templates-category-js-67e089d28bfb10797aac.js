"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[102],{9854:function(e,t,n){n.d(t,{Z:function(){return J}});var r=n(7294),o=n(9),i=n(5160),a=o.default.section.withConfig({displayName:"wrapper__ArticleWrapper",componentId:"sc-1vavaqx-0"})(["margin:0px 20px;display:flex;flex-wrap:wrap;flex-direction:column;& > article{margin-bottom:15px;}@media ","{max-width:","px;}"],i.Uh.maxScreenWidth,i.Tl-i.aD),l=n(9499),c=n(6072),u=n(9070),p=o.default.ul.withConfig({displayName:"container__PaginationContainer",componentId:"sc-1e13422-0"})(["display:grid;grid-auto-rows:45px;grid-auto-columns:45px;grid-auto-flow:column;gap:5px;"]),m=o.default.span.withConfig({displayName:"wrapper__CurrentPageWrapper",componentId:"sc-1nvfyf-0"})(["border-radius:50%;color:white;display:flex;justify-content:center;align-items:center;background-color:",";"],(function(e){return e.theme.colors.highlightColor})),d=n(3258),f=(0,o.default)(d.H3).withConfig({displayName:"text__CurrentPageText",componentId:"sc-1dm3r3b-0"})(["color:white;"]),s=function(e){var t=e.idx;return r.createElement(m,{key:t},r.createElement(f,null,t+1))},g=n(5444),h=(0,o.default)(g.Link).withConfig({displayName:"wrapper__PageLinkWrapper",componentId:"sc-1sre710-0"})(["border-radius:50%;display:flex;justify-content:center;align-items:center;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder})),x=(0,o.default)(d.H3).withConfig({displayName:"text__PageLinkText",componentId:"sc-x7vkob-0"})(["color:",";"],(function(e){return e.theme.colors.textColor})),y=function(e){var t=e.to,n=e.innerText;return r.createElement(h,{to:t},r.createElement(x,null,n))},w=o.default.nav.withConfig({displayName:"wrapper__PaginationWrapper",componentId:"sc-vkgaxk-0"})(["display:flex;justify-content:center;align-items:center;margin:10px 0 50px 0;@media ","{margin-bottom:0;}"],i.Uh.maxScreenWidth),E=function(e){var t=e.pageInfo,n=t.currentPage,o=t.hasNextPage,i=t.pageCount,a=t.hasPreviousPage,m=(0,l.useLocation)().pathname,d=(0,r.useState)(m),f=d[0],g=d[1];return(0,r.useEffect)((function(){m.endsWith(n)&&g((0,c.do)(m,n))}),[m,n]),r.createElement(w,null,r.createElement(p,null,a&&r.createElement(y,{to:(0,c.ko)(f,n-1),innerText:r.createElement(u.s$,{size:24})}),Array(i).fill(null).map((function(e,t){return n===t+1?r.createElement(s,{key:t,idx:t}):r.createElement(y,{to:(0,c.ko)(f,t+1),key:t,innerText:t+1})})),o&&r.createElement(y,{to:(0,c.ko)(f,n+1),innerText:r.createElement(u._Q,{size:24})})))},_=n(6125),C=n(7827),v=o.default.article.withConfig({displayName:"container__ArticleContainer",componentId:"sc-orl0ma-0"})([""," &:hover{transform:scale(1.01);}"],(0,C.TF)(["transform"])),k=(0,o.default)(g.Link).withConfig({displayName:"link__BlogLink",componentId:"sc-1g125xt-0"})(["display:flex;flex-direction:column;padding:5px;border:1px solid ",";border-radius:15px;@media ","{display:grid;grid-template-columns:180px 1fr;grid-template-rows:minmax(180px,1fr);}"],(function(e){return e.theme.colors.grayBorder}),i.Uh.desktop),I={borderRadius:"15px"},b=o.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-1xs630a-0"})(["padding:10px;@media ","{display:flex;justify-content:center;align-items:center;height:100%;width:100%;img{height:150px;width:150px;}}"],i.Uh.desktop),N=o.default.div.withConfig({displayName:"wrapper__ArticleInfoWrapper",componentId:"sc-wpeqle-0"})(["padding:10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),W=(0,o.default)(d.nv).withConfig({displayName:"description__ArticleDescription",componentId:"sc-vs1blh-0"})(["margin:0px 0px 10px 0px;padding:0px;line-height:",";font-size:",";font-weight:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),z=(0,o.default)(W).withConfig({displayName:"date__ArticleDate",componentId:"sc-mfr7rg-0"})(["margin:0px;font-weight:",";color:",";"],(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayThick})),S=(0,o.default)(d.H3).withConfig({displayName:"title__ArticleTitle",componentId:"sc-1urvnrb-0"})(["font-size:",";font-weight:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),T=function(e){var t=e.title,n=e.description,o=e.date;return r.createElement(N,null,r.createElement(S,null,t),r.createElement(W,null,n),r.createElement(z,null,o))},P=function(e){var t=e.node,n=t.slug,o=t.frontmatter,i=o.hero_image,a=o.hero_image_alt,l=o.title,c=o.description,u=o.date;return r.createElement(v,null,r.createElement(k,{to:"/"+n},r.createElement(b,null,r.createElement(_.G,{image:(0,_.d)(i),alt:a,imgStyle:I})),r.createElement(T,{title:l,description:c,date:u})))},j=function(e){var t=e.articlesInfoProps,n=t.nodes,o=t.pageInfo;return r.createElement(r.Fragment,null,r.createElement(a,null,n.map((function(e){return r.createElement(P,{key:e.id,node:e})})),r.createElement(E,{pageInfo:o})))},L=(0,o.default)(d.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1gkxigi-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),A=(0,o.default)(d.H4).attrs({as:"span"}).withConfig({displayName:"box__CountBox",componentId:"sc-1t5r9ip-0"})(["font-size:",";font-weight:",";padding:5px 10px;min-width:35px;text-align:center;background-color:",";border-radius:5px;"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayBoxTranslucent})),F=o.default.div.withConfig({displayName:"wrapper__CountBoxWrapper",componentId:"sc-182djr4-0"})(["position:absolute;top:0px;right:0px;height:100%;padding:0 5px;display:flex;justify-content:center;align-items:center;"]),B=function(e){var t=e.count;return r.createElement(F,null,r.createElement(A,null,t))},H=(0,o.default)(g.Link).withConfig({displayName:"link__TagetLink",componentId:"sc-94arpa-0"})(["position:relative;padding:10px 0 10px 10px;border-radius:10px;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayTranslucent})),U=(0,o.default)(d.H3).withConfig({displayName:"name__Name",componentId:"sc-19ahkd8-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.medium})),q=function(e){var t=e.name,n=e.count,o=e.pathTo;return r.createElement(H,{to:o},r.createElement(U,null,t),r.createElement(B,{count:n}))},D=o.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-1mumlog-0"})(["display:flex;flex-direction:column;padding:20px;color:",";"],(function(e){return e.theme.colors.textColor})),R=function(e){var t=e.articles,n=(0,r.useState)(!0),o=n[0],i=n[1],a=(0,r.useState)([]),l=a[0],u=a[1];return(0,r.useEffect)((function(){u((0,c.Uv)(t.map((function(e){return e.frontmatter.category})))),i(!1)}),[t]),o?r.createElement(r.Fragment,null):r.createElement(D,null,l.map((function(e,t){return r.createElement(q,{name:e.ko,count:e.count,pathTo:e.slug?"/category/"+e.slug:"/",key:t})})))},Z=function(e){var t=e.articles,n=(0,r.useState)(!0),o=n[0],i=n[1],a=(0,r.useState)([]),l=a[0],u=a[1];return(0,r.useEffect)((function(){u((0,c.lF)(t.map((function(e){return e.frontmatter.tags})))),i(!1)}),[t]),o?r.createElement(r.Fragment,null):r.createElement(D,null,l.slice(0,10).map((function(e,t){return r.createElement(q,{name:e.ko,count:e.count,pathTo:"/tag/"+e.slug,key:t})})))},M=o.default.section.withConfig({displayName:"wrapper__NavigatorWrapper",componentId:"sc-co2v2g-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 0 0 20px;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),i.Uh.maxScreenWidth,i.Rk+5),Q=function(){var e=(0,g.useStaticQuery)(G).allMdx.nodes;return r.createElement(M,null,r.createElement(L,null,"카테고리"),r.createElement(R,{articles:e}),r.createElement(L,null,"주요 태그"),r.createElement(Z,{articles:e}))},G="1903006949",$=o.default.div.withConfig({displayName:"wrapper__ArticleNavWrapper",componentId:"sc-5zq0fl-0"})(["display:flex;flex-direction:column-reverse;@media ","{display:grid;grid-template-columns:","px 1fr;}"],i.Uh.maxScreenWidth,i.aD),J=function(e){var t=e.articlesInfoProps;return r.createElement($,null,r.createElement(Q,null),r.createElement(j,{articlesInfoProps:t}))}},1227:function(e,t,n){n.d(t,{L:function(){return p}});var r=n(7294),o=n(9),i=o.default.div.withConfig({displayName:"container__FilterContainer",componentId:"sc-j4j67t-0"})(["display:flex;align-items:center;flex-direction:column;margin:0 20px;"]),a=n(3258),l=(0,o.default)(a.H2).withConfig({displayName:"condition__FilterCondition",componentId:"sc-10tamqy-0"})(["font-size:",";font-family:",";font-weight:",";"],(function(e){return e.theme.fontSize.xl4}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),c=(0,o.default)(a.nv).withConfig({displayName:"count__TotalCount",componentId:"sc-1tokupl-0"})(["font-size:",";margin-top:10px;"],(function(e){return e.theme.fontSize.base})),u=o.default.section.withConfig({displayName:"wrapper__FilterWrapper",componentId:"sc-1wazkdj-0"})(["display:flex;justify-content:center;align-items:center;padding:50px 20px;height:210px;"]),p=function(e){var t=e.condition,n=e.totalCount;return r.createElement(u,null,r.createElement(i,null,r.createElement(l,null,t),r.createElement(c,null,"총 ",n,"개의 게시글")))}},6371:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),o=n(9854),i=n(1227),a=function(e){var t=e.searchResultInfo,n=t.filterCondition,o=t.totalCount;return r.createElement(i.L,{condition:n,totalCount:o})},l=n(1443),c=n(6397),u=function(e){var t=e.data,n=e.pageContext,i={filterCondition:n.ko,totalCount:t.allMdx.pageInfo.totalCount},u=t.allMdx,p=n.skip,m=n.slug,d=n.ko,f=n.en,s=0===p?"/category/"+m:"/category/"+m+"/page/"+(p/10+1);return r.createElement(r.Fragment,null,r.createElement(l.Z,{title:d,description:"All articles for the "+f+" category",pathname:s}),r.createElement(c.Z,null,r.createElement(a,{searchResultInfo:i}),r.createElement(o.Z,{articlesInfoProps:u})))}}}]);
//# sourceMappingURL=component---src-templates-category-js-67e089d28bfb10797aac.js.map