"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[998],{3923:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(7294),a=n(9),o=n(5160),i=a.default.section.withConfig({displayName:"wrapper__ArticleWrapper",componentId:"sc-1haoi0k-0"})(["margin:0px 20px;display:flex;flex-wrap:wrap;flex-direction:column;& > article{margin-bottom:15px;}@media ","{max-width:","px;}"],o.Uh.maxScreenWidth,o.Tl-o.aD),l=n(9499),c=n(6072),u=n(9070),p=a.default.ul.withConfig({displayName:"container__PaginationContainer",componentId:"sc-7xyv36-0"})(["display:grid;grid-auto-rows:45px;grid-auto-columns:45px;grid-auto-flow:column;gap:5px;"]),d=a.default.span.withConfig({displayName:"wrapper__CurrentPageWrapper",componentId:"sc-elz3pv-0"})(["border-radius:50%;color:white;display:flex;justify-content:center;align-items:center;background-color:",";"],(function(e){return e.theme.colors.highlightColor})),s=n(419),f=(0,a.default)(s.H3).withConfig({displayName:"text__CurrentPageText",componentId:"sc-1nvkei3-0"})(["color:white;"]),m=function(e){var t=e.idx;return r.createElement(d,{key:t},r.createElement(f,null,t+1))},g=n(5444),h=(0,a.default)(g.Link).withConfig({displayName:"wrapper__PageLinkWrapper",componentId:"sc-8gj7n1-0"})(["border-radius:50%;display:flex;justify-content:center;align-items:center;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder})),x=(0,a.default)(s.H3).withConfig({displayName:"text__PageLinkText",componentId:"sc-osaxbg-0"})(["color:",";"],(function(e){return e.theme.colors.textColor})),w=function(e){var t=e.to,n=e.innerText;return r.createElement(h,{to:t},r.createElement(x,null,n))},y=a.default.nav.withConfig({displayName:"wrapper__PaginationWrapper",componentId:"sc-1y9xh06-0"})(["display:flex;justify-content:center;align-items:center;margin:10px 0 50px 0;@media ","{margin-bottom:0;}"],o.Uh.maxScreenWidth),b=function(e){var t=e.pageInfo,n=t.currentPage,a=t.hasNextPage,o=t.pageCount,i=t.hasPreviousPage,d=(0,l.useLocation)().pathname,s=(0,r.useState)(d),f=s[0],g=s[1];return(0,r.useEffect)((function(){d.endsWith(n)&&g((0,c.do)(d,n))}),[d,n]),r.createElement(y,null,r.createElement(p,null,i&&r.createElement(w,{to:(0,c.ko)(f,n-1),innerText:r.createElement(u.s$,{size:24})}),Array(o).fill(null).map((function(e,t){return n===t+1?r.createElement(m,{key:t,idx:t}):r.createElement(w,{to:(0,c.ko)(f,t+1),key:t,innerText:t+1})})),a&&r.createElement(w,{to:(0,c.ko)(f,n+1),innerText:r.createElement(u._Q,{size:24})})))},v=n(6125),_=n(2316),E=a.default.article.withConfig({displayName:"container__ArticleContainer",componentId:"sc-ch3w67-0"})([""," &:hover{transform:scale(1.01);}"],(0,_.TF)(["transform"])),k=(0,a.default)(g.Link).withConfig({displayName:"link__BlogLink",componentId:"sc-18332kc-0"})(["display:flex;flex-direction:column;padding:5px;border:1px solid ",";border-radius:15px;@media ","{display:grid;grid-template-columns:180px 1fr;grid-template-rows:minmax(180px,1fr);}"],(function(e){return e.theme.colors.grayBorder}),o.Uh.desktop),C={borderRadius:"15px"},I=a.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-16fbs27-0"})(["padding:10px;@media ","{display:flex;justify-content:center;align-items:center;height:100%;width:100%;img{height:150px;width:150px;}}"],o.Uh.desktop),N=a.default.div.withConfig({displayName:"wrapper__ArticleInfoWrapper",componentId:"sc-37qker-0"})(["padding:10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),z=(0,a.default)(s.nv).withConfig({displayName:"description__ArticleDescription",componentId:"sc-ikwuor-0"})(["margin:0px 0px 10px 0px;padding:0px;line-height:",";font-size:",";font-weight:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),W=(0,a.default)(z).withConfig({displayName:"date__ArticleDate",componentId:"sc-1jw688u-0"})(["margin:0px;font-weight:",";color:",";"],(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayThick})),S=(0,a.default)(s.H3).withConfig({displayName:"title__ArticleTitle",componentId:"sc-1if5twv-0"})(["font-size:",";font-weight:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),T=function(e){var t=e.title,n=e.description,a=e.date;return r.createElement(N,null,r.createElement(S,null,t),r.createElement(z,null,n),r.createElement(W,null,a))},j=function(e){var t=e.node,n=t.slug,a=t.frontmatter,o=a.hero_image,i=a.hero_image_alt,l=a.title,c=a.description,u=a.date;return r.createElement(E,null,r.createElement(k,{to:"/"+n},r.createElement(I,null,r.createElement(v.G,{image:(0,v.d)(o),alt:i,imgStyle:C})),r.createElement(T,{title:l,description:c,date:u})))},P=function(e){var t=e.articlesInfoProps,n=t.nodes,a=t.pageInfo;return r.createElement(r.Fragment,null,r.createElement(i,null,n.map((function(e){return r.createElement(j,{key:e.id,node:e})})),r.createElement(b,{pageInfo:a})))},B=(0,a.default)(s.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-sq37bl-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),L=(0,a.default)(s.H4).attrs({as:"span"}).withConfig({displayName:"box__CountBox",componentId:"sc-yaqfwk-0"})(["font-size:",";font-weight:",";padding:5px 10px;min-width:35px;text-align:center;background-color:",";border-radius:5px;"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayBoxTranslucent})),A=a.default.div.withConfig({displayName:"wrapper__CountBoxWrapper",componentId:"sc-vbu8kk-0"})(["position:absolute;top:0px;right:0px;height:100%;padding:0 5px;display:flex;justify-content:center;align-items:center;"]),H=function(e){var t=e.count;return r.createElement(A,null,r.createElement(L,null,t))},U=(0,a.default)(g.Link).withConfig({displayName:"link__TagetLink",componentId:"sc-f3piv6-0"})(["position:relative;padding:10px 0 10px 10px;border-radius:10px;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayTranslucent})),D=(0,a.default)(s.H3).withConfig({displayName:"name__Name",componentId:"sc-1wwvz9-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.medium})),F=function(e){var t=e.name,n=e.count,a=e.pathTo;return r.createElement(U,{to:a},r.createElement(D,null,t),r.createElement(H,{count:n}))},q=a.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-149o5xr-0"})(["display:flex;flex-direction:column;padding:20px;color:",";"],(function(e){return e.theme.colors.textColor})),R=function(e){var t=e.articles,n=(0,r.useState)(!0),a=n[0],o=n[1],i=(0,r.useState)([]),l=i[0],u=i[1];return(0,r.useEffect)((function(){u((0,c.Uv)(t.map((function(e){return e.frontmatter.category})))),o(!1)}),[t]),a?r.createElement(r.Fragment,null):r.createElement(q,null,l.map((function(e,t){return r.createElement(F,{name:e.ko,count:e.count,pathTo:e.slug?"/category/"+e.slug:"/",key:t})})))},Z=function(e){var t=e.articles,n=(0,r.useState)(!0),a=n[0],o=n[1],i=(0,r.useState)([]),l=i[0],u=i[1];return(0,r.useEffect)((function(){u((0,c.lF)(t.map((function(e){return e.frontmatter.tags})))),o(!1)}),[t]),a?r.createElement(r.Fragment,null):r.createElement(q,null,l.slice(0,10).map((function(e,t){return r.createElement(F,{name:e.ko,count:e.count,pathTo:"/tag/"+e.slug,key:t})})))},J=a.default.section.withConfig({displayName:"wrapper__NavigatorWrapper",componentId:"sc-1wkit98-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 0 0 20px;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),o.Uh.maxScreenWidth,o.Rk+5),M=function(){var e=(0,g.useStaticQuery)(Q).allMdx.nodes;return r.createElement(J,null,r.createElement(B,null,"카테고리"),r.createElement(R,{articles:e}),r.createElement(B,null,"주요 태그"),r.createElement(Z,{articles:e}))},Q="1903006949",G=a.default.div.withConfig({displayName:"wrapper__ArticleNavWrapper",componentId:"sc-1styvjg-0"})(["display:flex;flex-direction:column-reverse;@media ","{display:grid;grid-template-columns:","px 1fr;}"],o.Uh.maxScreenWidth,o.aD),O=function(e){var t=e.articlesInfoProps;return r.createElement(G,null,r.createElement(M,null),r.createElement(P,{articlesInfoProps:t}))}},5164:function(e,t,n){n.d(t,{z:function(){return f}});var r=n(7294),a=n(6125),o=n(9),i=o.default.section.withConfig({displayName:"wrapper__ProfileWrapper",componentId:"sc-s5nbtz-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:30px;padding:50px 20px;"]),l={borderRadius:"50%"},c=o.default.h2.withConfig({displayName:"container__TextContainer",componentId:"sc-tehb5b-0"})(["display:flex;flex-wrap:wrap;margin-left:20px;"]),u=n(419),p=(0,o.default)(u.H2).attrs({as:"span"}).withConfig({displayName:"block__TextBlock",componentId:"sc-14tbgz3-0"})(["font-size:",";font-family:",";font-weight:",";padding-right:15px;"],(function(e){return e.theme.fontSize.xl3}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),d=(0,o.default)(p).attrs({as:"a"}).withConfig({displayName:"link__ProfileLink",componentId:"sc-8q7gnz-0"})(["color:",";text-decoration:underline;text-underline-position:under;&:hover{text-decoration:none;}"],(function(e){return e.theme.colors.highlightColor})),s=function(){return r.createElement(c,null,r.createElement(p,null,"Dev blog by"),r.createElement(d,{href:"https://github.com/bugoverdose",target:"_blank"},"Jeong Jinwoo"))},f=function(){return r.createElement(i,null,r.createElement(a.S,{src:"./assets/bugoverdose-profile.jpeg",alt:"profile image of bugoverdose",height:80,aspectRatio:1,imgStyle:l,placeholder:"dominantColor",__imageData:n(1286)}),r.createElement(s,null))}},8112:function(e,t,n){n.r(t);var r=n(7294),a=n(5164),o=n(3923),i=n(6397),l=n(1443);t.default=function(e){var t=e.data,n=e.pageContext,c=t.allMdx,u=n.skip,p=n.skip>0?"/page/"+(u/10+1):null;return r.createElement(r.Fragment,null,r.createElement(l.Z,{pathname:p}),r.createElement(i.Z,null,r.createElement(a.z,null),r.createElement(o.Z,{articlesInfoProps:c})))}},1286:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg","srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/f4935/bugoverdose-profile.jpg 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/2f28c/bugoverdose-profile.jpg 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/41624/bugoverdose-profile.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/264f2/bugoverdose-profile.webp 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/e73fe/bugoverdose-profile.webp 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/61ca6/bugoverdose-profile.webp 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/60b4d/bugoverdose-profile.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')}}]);
//# sourceMappingURL=component---src-templates-home-js-f78d14aad2a53d548b97.js.map