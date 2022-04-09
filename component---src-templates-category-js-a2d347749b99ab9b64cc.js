"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[102],{3923:function(e,t,n){n.d(t,{Z:function(){return U}});var r=n(7294),i=n(1074),o=i.default.section.withConfig({displayName:"wrapper__ArticleWrapper",componentId:"sc-1haoi0k-0"})(["margin:0px 20px;display:flex;flex-wrap:wrap;flex-direction:column;& > article{margin-bottom:15px;}@media ","{max-width:",";}"],(function(e){return e.theme.device.maxScreenWidth}),(function(e){var t=e.theme.widthSize;return t.MAX_SCREEN_WIDTH-t.HOME_NAV_WIDTH+"px"})),a=n(9499),l=n(6072),c=n(6692),u=i.default.ul.withConfig({displayName:"container__PaginationContainer",componentId:"sc-7xyv36-0"})(["display:grid;grid-auto-rows:45px;grid-auto-columns:45px;grid-auto-flow:column;gap:5px;"]),m=i.default.span.withConfig({displayName:"wrapper__CurrentPageWrapper",componentId:"sc-elz3pv-0"})(["border-radius:50%;color:white;display:flex;justify-content:center;align-items:center;background-color:",";"],(function(e){return e.theme.colors.highlightColor})),p=n(419),d=(0,i.default)(p.H3).withConfig({displayName:"text__CurrentPageText",componentId:"sc-1nvkei3-0"})(["color:white;"]),f=function(e){var t=e.idx;return r.createElement(m,{key:t},r.createElement(d,null,t+1))},s=n(5444),g=(0,i.default)(s.Link).withConfig({displayName:"wrapper__PageLinkWrapper",componentId:"sc-8gj7n1-0"})(["border-radius:50%;display:flex;justify-content:center;align-items:center;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder})),h=(0,i.default)(p.H3).withConfig({displayName:"text__PageLinkText",componentId:"sc-osaxbg-0"})(["color:",";"],(function(e){return e.theme.colors.textColor})),x=function(e){var t=e.to,n=e.innerText;return r.createElement(g,{to:t},r.createElement(h,null,n))},y=i.default.nav.withConfig({displayName:"wrapper__PaginationWrapper",componentId:"sc-1y9xh06-0"})(["display:flex;justify-content:center;align-items:center;margin:10px 0 50px 0;@media ","{margin-bottom:0;}"],(function(e){return e.theme.device.maxScreenWidth})),w=function(e){var t=e.pageInfo,n=t.currentPage,i=t.hasNextPage,o=t.pageCount,m=t.hasPreviousPage,p=(0,a.useLocation)().pathname,d=(0,r.useState)(p),s=d[0],g=d[1];return(0,r.useEffect)((function(){p.endsWith(n)&&g((0,l.do)(p,n))}),[p,n]),r.createElement(y,null,r.createElement(u,null,m&&r.createElement(x,{to:(0,l.ko)(s,n-1),innerText:r.createElement(c.s$,{size:24})}),Array(o).fill(null).map((function(e,t){return n===t+1?r.createElement(f,{key:t,idx:t}):r.createElement(x,{to:(0,l.ko)(s,t+1),key:t,innerText:t+1})})),i&&r.createElement(x,{to:(0,l.ko)(s,n+1),innerText:r.createElement(c._Q,{size:24})})))},E=n(2906),_=i.default.article.withConfig({displayName:"container__ArticleContainer",componentId:"sc-ch3w67-0"})(["",";&:hover{transform:scale(1.01);}"],(function(e){return e.theme.baseStyles(["transform"])})),v=(0,i.default)(s.Link).withConfig({displayName:"link__BlogLink",componentId:"sc-18332kc-0"})(["display:flex;flex-direction:column;padding:5px;border:1px solid ",";border-radius:15px;@media ","{display:grid;grid-template-columns:180px 1fr;grid-template-rows:minmax(180px,1fr);}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.device.desktop})),C={borderRadius:"15px"},k=i.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-16fbs27-0"})(["padding:10px;@media ","{display:flex;justify-content:center;align-items:center;height:100%;width:100%;img{height:150px;width:150px;}}"],(function(e){return e.theme.device.desktop})),I=i.default.div.withConfig({displayName:"wrapper__ArticleInfoWrapper",componentId:"sc-37qker-0"})(["padding:10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),b=(0,i.default)(p.nv).withConfig({displayName:"description__ArticleDescription",componentId:"sc-ikwuor-0"})(["margin:0px 0px 10px 0px;padding:0px;line-height:",";font-size:",";font-weight:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),N=(0,i.default)(b).withConfig({displayName:"date__ArticleDate",componentId:"sc-1jw688u-0"})(["margin:0px;font-weight:",";color:",";"],(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayThick})),W=(0,i.default)(p.H3).withConfig({displayName:"title__ArticleTitle",componentId:"sc-1if5twv-0"})(["font-size:",";font-weight:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),S=function(e){var t=e.title,n=e.description,i=e.date;return r.createElement(I,null,r.createElement(W,null,t),r.createElement(b,null,n),r.createElement(N,null,i))},z=function(e){var t=e.node,n=t.slug,i=t.frontmatter,o=i.hero_image,a=i.hero_image_alt,l=i.title,c=i.description,u=i.date;return r.createElement(_,{title:l},r.createElement(v,{to:"/"+n},r.createElement(k,null,r.createElement(E.G,{image:(0,E.d)(o),alt:a,imgStyle:C})),r.createElement(S,{title:l,description:c,date:u})))},T=function(e){var t=e.articlesInfoProps,n=t.nodes,i=t.pageInfo;return r.createElement(o,null,n.map((function(e){return r.createElement(z,{key:e.id,node:e})})),r.createElement(w,{pageInfo:i}))},H=(0,i.default)(p.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-sq37bl-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),A=(0,i.default)(p.H4).attrs({as:"span"}).withConfig({displayName:"box__CountBox",componentId:"sc-yaqfwk-0"})(["font-size:",";font-weight:",";padding:5px 10px;min-width:35px;text-align:center;background-color:",";border-radius:5px;"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayBoxTranslucent})),P=i.default.div.withConfig({displayName:"wrapper__CountBoxWrapper",componentId:"sc-vbu8kk-0"})(["position:absolute;top:0px;right:0px;height:100%;padding:0 5px;display:flex;justify-content:center;align-items:center;"]),j=function(e){var t=e.count;return r.createElement(P,null,r.createElement(A,null,t))},L=(0,i.default)(s.Link).withConfig({displayName:"link__TagetLink",componentId:"sc-f3piv6-0"})(["position:relative;padding:10px 0 10px 10px;border-radius:10px;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayTranslucent})),B=(0,i.default)(p.H3).withConfig({displayName:"name__Name",componentId:"sc-1wwvz9-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.medium})),F=function(e){var t=e.name,n=e.count,i=e.pathTo;return r.createElement(L,{to:i},r.createElement(B,null,t),r.createElement(j,{count:n}))},D=i.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-149o5xr-0"})(["display:flex;flex-direction:column;padding:20px;color:",";"],(function(e){return e.theme.colors.textColor})),M=function(e){var t=e.articles,n=(0,r.useState)(!0),i=n[0],o=n[1],a=(0,r.useState)([]),c=a[0],u=a[1];return(0,r.useEffect)((function(){u((0,l.Uv)(t.map((function(e){return e.frontmatter.category})))),o(!1)}),[t]),i?r.createElement(r.Fragment,null):r.createElement(D,null,c.map((function(e,t){return r.createElement(F,{name:e.ko,count:e.count,pathTo:e.slug?"/category/"+e.slug:"/",key:t})})))},R=function(e){var t=e.articles,n=(0,r.useState)(!0),i=n[0],o=n[1],a=(0,r.useState)([]),c=a[0],u=a[1];return(0,r.useEffect)((function(){u((0,l.lF)(t.map((function(e){return e.frontmatter.tags})))),o(!1)}),[t]),i?r.createElement(r.Fragment,null):r.createElement(D,null,c.slice(0,10).map((function(e,t){return r.createElement(F,{name:e.ko,count:e.count,pathTo:"/tag/"+e.slug,key:t})})))},q=i.default.section.withConfig({displayName:"wrapper__NavigatorWrapper",componentId:"sc-1wkit98-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 0 0 20px;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.device.maxScreenWidth}),(function(e){return e.theme.heightSize.HEADER_HEIGHT_COVERAGE+5})),Z=function(){var e=(0,s.useStaticQuery)(G).allMdx.nodes;return r.createElement(q,null,r.createElement(H,null,"카테고리"),r.createElement(M,{articles:e}),r.createElement(H,null,"주요 태그"),r.createElement(R,{articles:e}))},G="1903006949",O=i.default.div.withConfig({displayName:"wrapper__ArticleNavWrapper",componentId:"sc-1styvjg-0"})(["display:flex;flex-direction:column-reverse;@media ","{display:grid;grid-template-columns:","px 1fr;}",";"],(function(e){return e.theme.device.maxScreenWidth}),(function(e){return e.theme.widthSize.HOME_NAV_WIDTH}),(function(e){return e.theme.preventUserSelect})),U=function(e){var t=e.articlesInfoProps;return r.createElement(O,null,r.createElement(Z,null),r.createElement(T,{articlesInfoProps:t}))}},365:function(e,t,n){n.d(t,{L:function(){return m}});var r=n(7294),i=n(1074),o=i.default.div.withConfig({displayName:"container__FilterContainer",componentId:"sc-8cumz2-0"})(["display:flex;align-items:center;flex-direction:column;margin:0 20px;"]),a=n(419),l=(0,i.default)(a.H2).withConfig({displayName:"condition__FilterCondition",componentId:"sc-99qghv-0"})(["font-size:",";font-family:",";font-weight:",";"],(function(e){return e.theme.fontSize.xl4}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),c=(0,i.default)(a.nv).withConfig({displayName:"count__TotalCount",componentId:"sc-wgxgcz-0"})(["font-size:",";margin-top:10px;"],(function(e){return e.theme.fontSize.base})),u=i.default.section.withConfig({displayName:"wrapper__FilterWrapper",componentId:"sc-l5m63r-0"})(["display:flex;justify-content:center;align-items:center;padding:50px 20px;height:210px;",";"],(function(e){return e.theme.preventUserSelect})),m=function(e){var t=e.condition,n=e.totalCount;return r.createElement(u,null,r.createElement(o,null,r.createElement(l,null,t),r.createElement(c,null,"총 ",n,"개의 게시글")))}},1453:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),i=n(3923),o=n(365),a=function(e){var t=e.searchResultInfo,n=t.filterCondition,i=t.totalCount;return r.createElement(o.L,{condition:n,totalCount:i})},l=n(480),c=n(5015),u=function(e){var t=e.data,n=e.pageContext,o={filterCondition:n.ko,totalCount:t.allMdx.pageInfo.totalCount},u=t.allMdx,m=n.skip,p=n.slug,d=n.ko,f=n.en,s=0===m?"/category/"+p:"/category/"+p+"/page/"+(m/10+1);return r.createElement(r.Fragment,null,r.createElement(l.Z,{title:d,description:"All "+o.totalCount+" articles on the "+f+" category.",pathname:s}),r.createElement(c.Z,null,r.createElement(a,{searchResultInfo:o}),r.createElement(i.Z,{articlesInfoProps:u})))}}}]);
//# sourceMappingURL=component---src-templates-category-js-a2d347749b99ab9b64cc.js.map