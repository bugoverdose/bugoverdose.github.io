"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[998],{3875:function(e,t,n){n.d(t,{Z:function(){return M}});var r=n(7294),a=n(6125),o=n(9),i=n(5160),l=o.default.section.withConfig({displayName:"wrapper__ArticleWrapper",componentId:"sc-1vavaqx-0"})(["margin:0px 20px;display:flex;flex-wrap:wrap;flex-direction:column;& > article{margin-bottom:15px;}@media ","{max-width:","px;}"],i.Uh.maxScreenWidth,i.Tl-i.aD),c=n(4629),p=o.default.article.withConfig({displayName:"container__ArticleContainer",componentId:"sc-iu6e77-0"})([""," &:hover{transform:scale(1.01);}"],(0,c.T)(["transform"])),d=n(5444),u=(0,o.default)(d.rU).withConfig({displayName:"link__BlogLink",componentId:"sc-fghkda-0"})(["display:flex;flex-direction:column;padding:5px;border:1px solid ",";border-radius:15px;@media ","{display:grid;grid-template-columns:180px 1fr;grid-template-rows:minmax(180px,1fr);}"],(function(e){return e.theme.colors.grayBorder}),i.Uh.desktop),f=o.default.div.withConfig({displayName:"wrapper__ArticleInfoWrapper",componentId:"sc-1r42yhp-0"})(["padding:10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),s=n(2269),m=(0,o.default)(s.nv).withConfig({displayName:"description__ArticleDescription",componentId:"sc-yo6lr8-0"})(["margin:0px 0px 10px 0px;padding:0px;line-height:",";font-size:",";font-weight:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),g=(0,o.default)(m).withConfig({displayName:"date__ArticleDate",componentId:"sc-1dhog6x-0"})(["margin:0px;font-weight:",";color:",";"],(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayThick})),h=(0,o.default)(s.H3).withConfig({displayName:"title__ArticleTitle",componentId:"sc-9snkl2-0"})(["font-size:",";font-weight:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),x={borderRadius:"15px"},w=o.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-1xs630a-0"})(["padding:10px;@media ","{display:flex;justify-content:center;align-items:center;height:100%;width:100%;img{height:150px;width:150px;}}"],i.Uh.desktop),y=n(9499),b=n(6072),_=n(9070),v=o.default.ul.withConfig({displayName:"container__PaginationContainer",componentId:"sc-1e13422-0"})(["display:grid;grid-auto-rows:45px;grid-auto-columns:45px;grid-auto-flow:column;gap:5px;"]),E=o.default.span.withConfig({displayName:"wrapper__CurrentPageWrapper",componentId:"sc-1nvfyf-0"})(["border-radius:50%;color:white;display:flex;justify-content:center;align-items:center;background-color:",";"],(function(e){return e.theme.colors.highlightColor})),k=(0,o.default)(s.H3).withConfig({displayName:"text__CurrentPageText",componentId:"sc-1dm3r3b-0"})(["color:white;"]),C=function(e){var t=e.idx;return r.createElement(E,{key:t},r.createElement(k,null,t+1))},I=(0,o.default)(d.rU).withConfig({displayName:"wrapper__PageLinkWrapper",componentId:"sc-1sre710-0"})(["border-radius:50%;display:flex;justify-content:center;align-items:center;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder})),N=(0,o.default)(s.H3).withConfig({displayName:"text__PageLinkText",componentId:"sc-x7vkob-0"})(["color:",";"],(function(e){return e.theme.colors.textColor})),W=function(e){var t=e.to,n=e.innerText;return r.createElement(I,{to:t},r.createElement(N,null,n))},S=o.default.nav.withConfig({displayName:"wrapper__PaginationWrapper",componentId:"sc-vkgaxk-0"})(["display:flex;justify-content:center;align-items:center;margin:10px 0 50px 0;@media ","{margin-bottom:0;}"],i.Uh.maxScreenWidth),z=function(e){var t=e.pageInfo,n=t.currentPage,a=t.hasNextPage,o=t.pageCount,i=t.hasPreviousPage,l=(0,y.useLocation)().pathname,c=(0,r.useState)(l),p=c[0],d=c[1];return(0,r.useEffect)((function(){l.endsWith(n)&&d((0,b.do)(l,n))}),[l,n]),r.createElement(S,null,r.createElement(v,null,i&&r.createElement(W,{to:(0,b.ko)(p,n-1),innerText:r.createElement(_.s$,{size:24})}),Array(o).fill(null).map((function(e,t){return n===t+1?r.createElement(C,{key:t,idx:t}):r.createElement(W,{to:(0,b.ko)(p,t+1),key:t,innerText:t+1})})),a&&r.createElement(W,{to:(0,b.ko)(p,n+1),innerText:r.createElement(_._Q,{size:24})})))},P=function(e){var t=e.articlesInfoProps,n=t.nodes,o=t.pageInfo;return r.createElement(r.Fragment,null,r.createElement(l,null,n.map((function(e){return r.createElement(p,{key:e.id},r.createElement(u,{to:"/"+e.slug},r.createElement(w,null,r.createElement(a.G,{image:(0,a.d)(e.frontmatter.hero_image),alt:e.frontmatter.hero_image_alt,imgStyle:x})),r.createElement(f,null,r.createElement(h,null,e.frontmatter.title),r.createElement(m,null,e.frontmatter.description),r.createElement(g,null,e.frontmatter.date))))})),r.createElement(z,{pageInfo:o})))},j=(0,o.default)(s.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1gkxigi-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),T=(0,o.default)(s.H4).attrs({as:"span"}).withConfig({displayName:"count-box__CountBox",componentId:"sc-1d4tbba-0"})(["font-size:",";font-weight:",";padding:5px;min-width:25px;text-align:center;background-color:",";border-radius:5px;"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.colors.grayBoxTranslucent})),U=o.default.div.withConfig({displayName:"count-box-wrapper__CountBoxWrapper",componentId:"sc-53c5yp-0"})(["position:absolute;top:0px;right:0px;height:100%;padding:0 5px;display:flex;justify-content:center;align-items:center;"]),B=(0,o.default)(d.rU).withConfig({displayName:"link__TagetLink",componentId:"sc-94arpa-0"})(["position:relative;padding:10px 0 10px 10px;border-radius:10px;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayTranslucent})),A=(0,o.default)(s.H3).withConfig({displayName:"name__Name",componentId:"sc-19ahkd8-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.medium})),H=o.default.div.withConfig({displayName:"nav-wrapper__NavWrapper",componentId:"sc-fhde15-0"})(["display:flex;flex-direction:column;padding:20px;color:",";"],(function(e){return e.theme.colors.textColor})),D=function(e){var t=e.articles,n=(0,r.useState)(!0),a=n[0],o=n[1],i=(0,r.useState)([]),l=i[0],c=i[1];return(0,r.useEffect)((function(){c((0,b.Uv)(t.map((function(e){return e.frontmatter.category})))),o(!1)}),[t]),a?r.createElement(r.Fragment,null):r.createElement(H,null,l.map((function(e,t){return r.createElement(B,{to:e.slug?"/category/"+e.slug:"/",key:t},r.createElement(A,null,e.ko),r.createElement(U,null,r.createElement(T,null,e.count)))})))},L=function(e){var t=e.articles,n=(0,r.useState)(!0),a=n[0],o=n[1],i=(0,r.useState)([]),l=i[0],c=i[1];return(0,r.useEffect)((function(){c((0,b.lF)(t.map((function(e){return e.frontmatter.tags})))),o(!1)}),[t]),a?r.createElement(r.Fragment,null):r.createElement(H,null,l.slice(0,10).map((function(e,t){return r.createElement(B,{to:"/tag/"+e.slug,key:t},r.createElement(A,null,e.ko),r.createElement(U,null,r.createElement(T,null,e.count)))})))},F=o.default.section.withConfig({displayName:"wrapper__NavigatorWrapper",componentId:"sc-co2v2g-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 0 0 20px;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),i.Uh.maxScreenWidth,i.Rk+5),R=function(){var e=(0,d.K2)(J).allMdx.nodes;return r.createElement(F,null,r.createElement(j,null,"카테고리"),r.createElement(D,{articles:e}),r.createElement(j,null,"주요 태그"),r.createElement(L,{articles:e}))},J="1903006949",q=o.default.div.withConfig({displayName:"wrapper__ArticleNavWrapper",componentId:"sc-5zq0fl-0"})(["display:flex;flex-direction:column-reverse;@media ","{display:grid;grid-template-columns:","px 1fr;}"],i.Uh.maxScreenWidth,i.aD),M=function(e){var t=e.articlesInfoProps;return r.createElement(q,null,r.createElement(R,null),r.createElement(P,{articlesInfoProps:t}))}},5779:function(e,t,n){n.d(t,{z:function(){return s}});var r=n(7294),a=n(6125),o=n(9),i=o.default.section.withConfig({displayName:"wrapper__ProfileWrapper",componentId:"sc-1x26j10-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:30px;padding:50px 20px;"]),l={borderRadius:"50%"},c=o.default.h2.withConfig({displayName:"container__TextContainer",componentId:"sc-1a440o9-0"})(["display:flex;flex-wrap:wrap;margin-left:20px;"]),p=n(2269),d=(0,o.default)(p.H2).attrs({as:"span"}).withConfig({displayName:"block__TextBlock",componentId:"sc-12w4ww0-0"})(["font-size:",";font-family:",";font-weight:",";padding-right:15px;"],(function(e){return e.theme.fontSize.xl3}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),u=(0,o.default)(d).attrs({as:"a"}).withConfig({displayName:"link__ProfileLink",componentId:"sc-v14fjk-0"})(["color:",";text-decoration:underline;text-underline-position:under;&:hover{text-decoration:none;}"],(function(e){return e.theme.colors.highlightColor})),f=function(){return r.createElement(c,null,r.createElement(d,null,"Dev blog by"),r.createElement(u,{href:"https://github.com/bugoverdose",target:"_blank"},"Jeong Jinwoo"))},s=function(){return r.createElement(i,null,r.createElement(a.S,{src:"./assets/bugoverdose-profile.jpeg",alt:"profile image of bugoverdose",height:80,aspectRatio:1,imgStyle:l,placeholder:"dominantColor",__imageData:n(1286)}),r.createElement(f,null))}},8112:function(e,t,n){n.r(t);var r=n(7294),a=n(5779),o=n(3875);t.default=function(e){var t=e.data,n=e.pageContext,i=t.allMdx,l=n.skip;n.skip;return r.createElement(r.Fragment,null,r.createElement(a.z,null),r.createElement(o.Z,{articlesInfoProps:i}))}},1286:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg","srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/f4935/bugoverdose-profile.jpg 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/2f28c/bugoverdose-profile.jpg 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/41624/bugoverdose-profile.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/264f2/bugoverdose-profile.webp 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/e73fe/bugoverdose-profile.webp 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/61ca6/bugoverdose-profile.webp 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/60b4d/bugoverdose-profile.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')}}]);
//# sourceMappingURL=component---src-templates-home-js-d4a17759d727431b6d99.js.map