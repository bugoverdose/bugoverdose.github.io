"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[823],{4189:function(e,t,n){n.d(t,{H:function(){return C}});var o=n(7294),a=n(5444),r=n(9),i=n(3258),c=(0,r.default)(i.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1g16ucx-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),l=(0,r.default)(a.Link).withConfig({displayName:"link__PostLink",componentId:"sc-53hhi5-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:minmax(100px,1fr);}"]),d=n(6125),s=r.default.article.withConfig({displayName:"wrapper__PostWrapper",componentId:"sc-wvoput-0"})(["border-top:1px solid ",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayTranslucent})),p=r.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-19otf45-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:10px;img{height:75px;width:75px;}"]),u=r.default.div.withConfig({displayName:"container__PostInfoContainer",componentId:"sc-51koo2-0"})(["padding:15px 10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),f=(0,r.default)(i.nv).withConfig({displayName:"date__PostDate",componentId:"sc-w3bdsn-0"})(["margin:0 0 10px 0;padding:0px;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),m=(0,r.default)(i.H3).withConfig({displayName:"title__PostTitle",componentId:"sc-1bj7gxq-0"})(["font-size:",";font-weight:",";line-height:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.lineHeight.big})),g=n(6072),h=n(9070),b=r.default.div.withConfig({displayName:"container__PostTagsContainer",componentId:"sc-1qx2z1r-0"})(["display:flex;flex-wrap:wrap;& > *{margin-right:5px;}"]),x=r.default.div.withConfig({displayName:"wrapper__PostTagsWrapper",componentId:"sc-zm8lu6-0"})(["display:grid;grid-template-columns:20px 1fr;gap:5px;width:100%;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),w=function(e){var t=e.tags,n=(0,o.useState)(!0),a=n[0],r=n[1],i=(0,o.useState)({}),c=i[0],l=i[1];return(0,o.useEffect)((function(){l((0,g._D)()),r(!1)}),[]),a?o.createElement(o.Fragment,null):o.createElement(x,null,o.createElement(h.Ou,{size:20}),o.createElement(b,null,null==t?void 0:t.map((function(e,t,n){return o.createElement("span",{key:t},c[e].ko,t<n.length-1?",":"")}))))},y={borderRadius:"10px"},v=function(e){var t=e.article,n=t.id,a=t.slug,r=t.frontmatter,i=r.hero_image,c=r.hero_image_alt,g=r.date,h=r.title,b=r.tags;return o.createElement(s,{key:n},o.createElement(l,{to:"/"+a},o.createElement(p,null,o.createElement(d.G,{image:(0,d.d)(i),alt:c,imgStyle:y})),o.createElement(u,null,o.createElement(f,null,g),o.createElement(m,null,h),o.createElement(w,{tags:b}))))},_=r.default.ul.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1ba59mt-0"})(["padding:20px;"]),C=function(){var e=(0,a.useStaticQuery)(E).allMdx.nodes;return o.createElement(o.Fragment,null,o.createElement(c,null,"최근 글"),o.createElement(_,null,e.map((function(e){return o.createElement(v,{key:e.id,article:e})}))))},E="4224236963"},3568:function(e,t,n){n.d(t,{U:function(){return l}});var o=n(7294),a=n(4189),r=n(9),i=n(5160),c=r.default.section.withConfig({displayName:"wrapper__RecentPostsWrapper",componentId:"sc-imcv1a-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 20px 0 0;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),i.Uh.maxScreenWidth,i.Rk+5),l=function(){return o.createElement(c,null,o.createElement(a.H,null))}},5779:function(e,t,n){n.d(t,{z:function(){return f}});var o=n(7294),a=n(6125),r=n(9),i=r.default.section.withConfig({displayName:"wrapper__ProfileWrapper",componentId:"sc-1x26j10-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:30px;padding:50px 20px;"]),c={borderRadius:"50%"},l=r.default.h2.withConfig({displayName:"container__TextContainer",componentId:"sc-1a440o9-0"})(["display:flex;flex-wrap:wrap;margin-left:20px;"]),d=n(3258),s=(0,r.default)(d.H2).attrs({as:"span"}).withConfig({displayName:"block__TextBlock",componentId:"sc-12w4ww0-0"})(["font-size:",";font-family:",";font-weight:",";padding-right:15px;"],(function(e){return e.theme.fontSize.xl3}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),p=(0,r.default)(s).attrs({as:"a"}).withConfig({displayName:"link__ProfileLink",componentId:"sc-v14fjk-0"})(["color:",";text-decoration:underline;text-underline-position:under;&:hover{text-decoration:none;}"],(function(e){return e.theme.colors.highlightColor})),u=function(){return o.createElement(l,null,o.createElement(s,null,"Dev blog by"),o.createElement(p,{href:"https://github.com/bugoverdose",target:"_blank"},"Jeong Jinwoo"))},f=function(){return o.createElement(i,null,o.createElement(a.S,{src:"./assets/bugoverdose-profile.jpeg",alt:"profile image of bugoverdose",height:80,aspectRatio:1,imgStyle:c,placeholder:"dominantColor",__imageData:n(1286)}),o.createElement(u,null))}},953:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var o=n(7294),a=n(5779),r=n(3568),i=n(9),c=n(5160),l=i.default.section.withConfig({displayName:"wrapper__CategoryNavigationWrapper",componentId:"sc-17lmpm1-0"})(["display:flex;flex-direction:column;margin:0px 20px 20px 20px;border:1px solid ",";border-radius:15px;@media ","{max-width:","px;margin-bottom:0px;}"],(function(e){return e.theme.colors.grayBorder}),c.Uh.maxScreenWidth,c.Tl-c.av),d=n(3258),s=(0,i.default)(d.H2).attrs({as:"nav"}).withConfig({displayName:"text__TextContainer",componentId:"sc-18b1b3-0"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),p=i.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-11a9pn8-0"})(["padding:20px 0;margin:0 20px;position:relative;"]),u=i.default.ul.withConfig({displayName:"container__ToggleContainer",componentId:"sc-1apd0uw-0"})(["position:absolute;bottom:0;right:0;display:flex;justify-content:center;align-items:flex-end;padding-right:5px;height:100%;"]),f=(0,i.default)(d.H3).attrs({as:"span"}).withConfig({displayName:"button__ToggleButton",componentId:"sc-1n0b9lv-0"})(["color:",";background-color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.colors.backgroundColor}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),m=n(7193),g=i.default.li.withConfig({displayName:"list__ButtonContainer",componentId:"sc-1n6dg4u-0"})([""," cursor:pointer;z-index:",";background-color:",";padding:7px;border:1px solid ",";border-bottom:none;margin-bottom:-1px;padding-bottom:",";margin-left:2px;border-radius:12px 12px 0 0;&:hover{padding-bottom:12px;z-index:50;}"],(0,m.TF)(["padding"]),(function(e){return"true"===e.chosen?"50":"10"}),(function(e){return e.theme.colors.backgroundColor}),(function(e){return e.theme.colors.grayBorder}),(function(e){return"true"===e.chosen?"9px":"5px"})),h=n(6072),b=function(e){var t=e.curIdx,n=e.setIdx;return o.createElement(p,null,o.createElement(s,null,"카테고리 목차",o.createElement(u,null,h.eb.map((function(e,a){return o.createElement(g,{chosen:""+(t===a),key:a},o.createElement(f,{onClick:function(){return n(a)}},e.ko))})))))},x=i.default.section.withConfig({displayName:"wrapper__CategoryInfoWrapper",componentId:"sc-1fq4ce-0"})(["padding:30px 10px 40px 10px;margin:0 20px;z-index:30;border-top:1px solid ",";background-color:",";"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.backgroundColor})),w=n(6125),y={borderRadius:"15px"},v=function(e){var t=e.curIdx;return o.createElement(o.Fragment,null,"computer-science"===h.eb[t].slug&&o.createElement(w.S,{src:"./assets/computer-science.jpg",alt:"image for "+h.eb[t].en,height:900,aspectRatio:2,imgStyle:y,placeholder:"dominantColor",__imageData:n(7298)}),"development"===h.eb[t].slug&&o.createElement(w.S,{src:"./assets/development.jpg",alt:"image for "+h.eb[t].en,height:900,aspectRatio:2,imgStyle:y,placeholder:"dominantColor",__imageData:n(3641)}),"essay"===h.eb[t].slug&&o.createElement(w.S,{src:"./assets/essay.jpg",alt:"image for "+h.eb[t].en,height:900,aspectRatio:2,imgStyle:y,placeholder:"dominantColor",__imageData:n(8412)}))},_=(0,i.default)(d.H2).withConfig({displayName:"title__Title",componentId:"sc-e74uq8-0"})(["font-size:",";padding-bottom:35px;"],(function(e){return e.theme.fontSize.xl4})),C=i.default.div.withConfig({displayName:"wrapper__DescriptionWrapper",componentId:"sc-l3ezn1-0"})(["padding:0 10px 30px 10px;"]),E=(0,i.default)(d.nv).withConfig({displayName:"text__DescriptionText",componentId:"sc-1cjgqgp-0"})(["padding-bottom:20px;"]),k=function(e){var t=e.descriptions;return o.createElement(C,null,t.map((function(e,t){return o.createElement(E,{key:t},e)})))},I=i.default.div.withConfig({displayName:"wrapper__CategoryLinkWrapper",componentId:"sc-rrige2-0"})(["padding-bottom:60px;display:flex;justify-content:center;align-items:center;"]),S=n(5444),z=(0,i.default)(S.Link).withConfig({displayName:"link__CategoryLink",componentId:"sc-qk2b5h-0"})(["font-size:",";padding:10px;padding:15px;font-weight:",";font-size:",";color:white;background-color:",";border-radius:20px;&:hover{background-color:",";}"],(function(e){return e.theme.fontSize.xl}),(function(e){return e.theme.fontWeight.medium}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.colors.thickHighlightColor}),(function(e){return e.theme.colors.highlightColor})),N=function(e){var t=e.curIdx;return o.createElement(I,null,o.createElement(z,{to:"/category/"+h.eb[t].slug},h.eb[t].ko," 글들 보러가기"))},j=function(e){var t=e.curIdx;return o.createElement(x,null,o.createElement(_,null,h.eb[t].ko),o.createElement(k,{descriptions:h.eb[t].description}),o.createElement(N,{curIdx:t}),o.createElement(v,{curIdx:t}))},W=function(){var e=(0,o.useState)(0),t=e[0],n=e[1];return o.createElement(l,null,o.createElement(b,{curIdx:t,setIdx:n}),o.createElement(j,{curIdx:t}))},T=i.default.div.withConfig({displayName:"wrapper__CategoriesOverviewWrapper",componentId:"sc-1wrkpxx-0"})(["display:flex;flex-direction:column;@media ","{display:grid;grid-template-columns:1fr ","px;}"],c.Uh.maxScreenWidth,c.av),H=function(){return o.createElement(T,null,o.createElement(W,null),o.createElement(r.U,null))},P=n(1443),R=n(6397),B=function(){return o.createElement(o.Fragment,null,o.createElement(P.Z,{title:"카테고리 정보",pathname:"/categories"}),o.createElement(R.Z,null,o.createElement(a.z,null),o.createElement(H,null)))}},3641:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a83e8f32b8841db91d83d5996a291155/30d23/development.png","srcSet":"/static/a83e8f32b8841db91d83d5996a291155/50ff6/development.png 266w,\\n/static/a83e8f32b8841db91d83d5996a291155/52ab1/development.png 532w,\\n/static/a83e8f32b8841db91d83d5996a291155/30d23/development.png 1063w","sizes":"(min-width: 1063px) 1063px, 100vw"},"sources":[{"srcSet":"/static/a83e8f32b8841db91d83d5996a291155/cd899/development.webp 266w,\\n/static/a83e8f32b8841db91d83d5996a291155/f0699/development.webp 532w,\\n/static/a83e8f32b8841db91d83d5996a291155/111cc/development.webp 1063w","type":"image/webp","sizes":"(min-width: 1063px) 1063px, 100vw"}]},"width":1800,"height":900.8466603951082}')},8412:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/b228cad13f74709e018444914e3f41f9/7be0f/essay.jpg","srcSet":"/static/b228cad13f74709e018444914e3f41f9/1b9ec/essay.jpg 450w,\\n/static/b228cad13f74709e018444914e3f41f9/b0c7a/essay.jpg 900w,\\n/static/b228cad13f74709e018444914e3f41f9/7be0f/essay.jpg 1800w","sizes":"(min-width: 1800px) 1800px, 100vw"},"sources":[{"srcSet":"/static/b228cad13f74709e018444914e3f41f9/ba134/essay.webp 450w,\\n/static/b228cad13f74709e018444914e3f41f9/e7f7d/essay.webp 900w,\\n/static/b228cad13f74709e018444914e3f41f9/fc420/essay.webp 1800w","type":"image/webp","sizes":"(min-width: 1800px) 1800px, 100vw"}]},"width":1800,"height":900}')},1286:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg","srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/f4935/bugoverdose-profile.jpg 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/2f28c/bugoverdose-profile.jpg 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/41624/bugoverdose-profile.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/264f2/bugoverdose-profile.webp 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/e73fe/bugoverdose-profile.webp 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/61ca6/bugoverdose-profile.webp 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/60b4d/bugoverdose-profile.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')},7298:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d490b484a2903bfc86e00da6d19db2e3/11be6/computer-science.jpg","srcSet":"/static/d490b484a2903bfc86e00da6d19db2e3/75170/computer-science.jpg 213w,\\n/static/d490b484a2903bfc86e00da6d19db2e3/3027b/computer-science.jpg 426w,\\n/static/d490b484a2903bfc86e00da6d19db2e3/11be6/computer-science.jpg 852w","sizes":"(min-width: 852px) 852px, 100vw"},"sources":[{"srcSet":"/static/d490b484a2903bfc86e00da6d19db2e3/a250d/computer-science.webp 213w,\\n/static/d490b484a2903bfc86e00da6d19db2e3/33243/computer-science.webp 426w,\\n/static/d490b484a2903bfc86e00da6d19db2e3/0cbbd/computer-science.webp 852w","type":"image/webp","sizes":"(min-width: 852px) 852px, 100vw"}]},"width":1800,"height":900}')}}]);
//# sourceMappingURL=component---src-pages-categories-js-14a056ae7603c31297b2.js.map