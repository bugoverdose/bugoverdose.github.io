"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[159],{4189:function(e,t,n){n.d(t,{H:function(){return v}});var o=n(7294),r=n(5444),i=n(9),a=n(2269),l=(0,i.default)(a.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1g16ucx-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),c=(0,i.default)(r.Link).withConfig({displayName:"link__PostLink",componentId:"sc-53hhi5-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:minmax(100px,1fr);}"]),d=n(6125),u=i.default.article.withConfig({displayName:"wrapper__PostWrapper",componentId:"sc-wvoput-0"})(["border-top:1px solid ",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayTranslucent})),p=i.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-19otf45-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:10px;img{height:75px;width:75px;}"]),s=i.default.div.withConfig({displayName:"container__PostInfoContainer",componentId:"sc-51koo2-0"})(["padding:15px 10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),f=(0,i.default)(a.nv).withConfig({displayName:"date__PostDate",componentId:"sc-w3bdsn-0"})(["margin:0 0 10px 0;padding:0px;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),m=(0,i.default)(a.H3).withConfig({displayName:"title__PostTitle",componentId:"sc-1bj7gxq-0"})(["font-size:",";font-weight:",";line-height:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.lineHeight.big})),g=n(6072),h=n(9070),x=i.default.div.withConfig({displayName:"container__PostTagsContainer",componentId:"sc-1qx2z1r-0"})(["display:flex;flex-wrap:wrap;& > *{margin-right:5px;}"]),w=i.default.div.withConfig({displayName:"wrapper__PostTagsWrapper",componentId:"sc-zm8lu6-0"})(["display:grid;grid-template-columns:20px 1fr;gap:5px;width:100%;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),b=function(e){var t=e.tags,n=(0,o.useState)(!0),r=n[0],i=n[1],a=(0,o.useState)({}),l=a[0],c=a[1];return(0,o.useEffect)((function(){c((0,g._D)()),i(!1)}),[]),r?o.createElement(o.Fragment,null):o.createElement(w,null,o.createElement(h.Ou,{size:20}),o.createElement(x,null,null==t?void 0:t.map((function(e,t,n){return o.createElement("span",{key:t},l[e].ko,t<n.length-1?",":"")}))))},y={borderRadius:"10px"},_=function(e){var t=e.article,n=t.id,r=t.slug,i=t.frontmatter,a=i.hero_image,l=i.hero_image_alt,g=i.date,h=i.title,x=i.tags;return o.createElement(u,{key:n},o.createElement(c,{to:"/"+r},o.createElement(p,null,o.createElement(d.G,{image:(0,d.d)(a),alt:l,imgStyle:y})),o.createElement(s,null,o.createElement(f,null,g),o.createElement(m,null,h),o.createElement(b,{tags:x}))))},E=i.default.ul.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1ba59mt-0"})(["padding:20px;"]),v=function(){var e=(0,r.useStaticQuery)(C).allMdx.nodes;return o.createElement(o.Fragment,null,o.createElement(l,null,"최근 글"),o.createElement(E,null,e.map((function(e){return o.createElement(_,{key:e.id,article:e})}))))},C="1450866185"},3568:function(e,t,n){n.d(t,{U:function(){return c}});var o=n(7294),r=n(4189),i=n(9),a=n(5160),l=i.default.section.withConfig({displayName:"wrapper__RecentPostsWrapper",componentId:"sc-imcv1a-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 20px 0 0;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),a.Uh.maxScreenWidth,a.Rk+5),c=function(){return o.createElement(l,null,o.createElement(r.H,null))}},5779:function(e,t,n){n.d(t,{z:function(){return f}});var o=n(7294),r=n(6125),i=n(9),a=i.default.section.withConfig({displayName:"wrapper__ProfileWrapper",componentId:"sc-1x26j10-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:30px;padding:50px 20px;"]),l={borderRadius:"50%"},c=i.default.h2.withConfig({displayName:"container__TextContainer",componentId:"sc-1a440o9-0"})(["display:flex;flex-wrap:wrap;margin-left:20px;"]),d=n(2269),u=(0,i.default)(d.H2).attrs({as:"span"}).withConfig({displayName:"block__TextBlock",componentId:"sc-12w4ww0-0"})(["font-size:",";font-family:",";font-weight:",";padding-right:15px;"],(function(e){return e.theme.fontSize.xl3}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),p=(0,i.default)(u).attrs({as:"a"}).withConfig({displayName:"link__ProfileLink",componentId:"sc-v14fjk-0"})(["color:",";text-decoration:underline;text-underline-position:under;&:hover{text-decoration:none;}"],(function(e){return e.theme.colors.highlightColor})),s=function(){return o.createElement(c,null,o.createElement(u,null,"Dev blog by"),o.createElement(p,{href:"https://github.com/bugoverdose",target:"_blank"},"Jeong Jinwoo"))},f=function(){return o.createElement(a,null,o.createElement(r.S,{src:"./assets/bugoverdose-profile.jpeg",alt:"profile image of bugoverdose",height:80,aspectRatio:1,imgStyle:l,placeholder:"dominantColor",__imageData:n(1286)}),o.createElement(s,null))}},2901:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var o=n(7294),r=n(5779),i=n(7570),a=n(1544),l=n(3568),c=n(9),d=n(5160),u=c.default.section.withConfig({displayName:"wrapper__TagNavigationWrapper",componentId:"sc-1j1tetu-0"})(["display:flex;flex-direction:column;margin:0px 20px 20px 20px;border:1px solid ",";border-radius:15px;@media ","{max-width:","px;margin-bottom:0px;}"],(function(e){return e.theme.colors.grayBorder}),d.Uh.maxScreenWidth,d.Tl-d.av),p=n(9499),s=n(5444),f=c.default.section.withConfig({displayName:"wrapper__TagDictionaryWrapper",componentId:"sc-1tp71v2-0"})(["margin:0px 20px 30px 20px;display:flex;z-index:30;border-top:1px solid ",";background-color:",";"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.backgroundColor})),m=c.default.div.withConfig({displayName:"container__DictionaryContainer",componentId:"sc-1jt90qc-0"})(["width:100%;& > div:last-child{border:none;}"]),g=(0,c.default)(s.Link).withConfig({displayName:"link__TagLink",componentId:"sc-1tn344c-0"})(["display:flex;height:30px;padding:5px 10px;border:1px solid ",";border-radius:15px;margin:0 10px 10px 0;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayBorder})),h=n(2269),x=(0,c.default)(h.H4).withConfig({displayName:"name__TagName",componentId:"sc-1p9zjrh-0"})(["height:100%;margin-right:10px;color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.medium})),w=c.default.div.withConfig({displayName:"wrapper__CountBoxWrapper",componentId:"sc-vjj4uq-0"})(["display:flex;justify-content:center;align-items:center;background-color:",";border-radius:5px;padding:5px;height:100%;min-width:20px;"],(function(e){return e.theme.colors.grayBoxTranslucent})),b=(0,c.default)(h.H4).attrs({as:"span"}).withConfig({displayName:"box__CountBox",componentId:"sc-1b8riwu-0"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular})),y=c.default.div.withConfig({displayName:"wrapper__TagDivisionWrapper",componentId:"sc-1egvxch-0"})(["padding:15px 0px;border-bottom:1px solid ",";@media ","{display:grid;grid-template-columns:100px 1fr;}"],(function(e){return e.theme.colors.grayBorder}),d.Uh.maxScreenWidth),_=(0,c.default)(h.H3).withConfig({displayName:"caption__Caption",componentId:"sc-mbatbu-0"})(["padding-left:10px;padding-bottom:20px;color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),E=c.default.div.withConfig({displayName:"container__TagListContainer",componentId:"sc-sx9djm-0"})(["display:flex;flex-wrap:wrap;width:100%;padding-left:20px;@media ","{padding-left:0px;}"],d.Uh.maxScreenWidth),v=function(e){var t=e.division,n=e.language;return o.createElement(y,null,o.createElement(_,null,t.caption),o.createElement(E,null,t.data.map((function(e,t){return o.createElement(g,{to:"/tag/"+e.slug,key:t},o.createElement(x,null,e[n]),o.createElement(w,null,o.createElement(b,null,e.count)))}))))},C=n(6072),k=function(){var e=(0,o.useState)(!0),t=e[0],n=e[1],r=(0,o.useState)([]),i=r[0],a=r[1],l=(0,o.useState)(d.ad.KO),c=l[0],u=l[1],g=(0,p.useLocation)().search,h=(0,s.useStaticQuery)(N).allMdx.nodes;return(0,o.useEffect)((function(){(0,C.ie)(g)&&u(g.slice(8))}),[g]),(0,o.useEffect)((function(){a((0,C.sj)(h.map((function(e){return e.frontmatter.tags})),c)),n(!1)}),[h,c]),t?o.createElement(o.Fragment,null):o.createElement(f,null,o.createElement(m,null,i.map((function(e,t){return e.data.length>0&&o.createElement(v,{key:t,division:e,language:c})}))))},N="1734415262",I=(0,c.default)(h.H2).attrs({as:"nav"}).withConfig({displayName:"text__TextContainer",componentId:"sc-jhgr2z-0"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),z=c.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-1hc3sb0-0"})(["padding:20px 0;margin:0 20px;position:relative;"]),S=c.default.ul.withConfig({displayName:"container__ToggleContainer",componentId:"sc-179x1jj-0"})(["position:absolute;bottom:0;right:0;display:flex;justify-content:center;align-items:flex-end;padding-right:5px;height:100%;"]),W=(0,c.default)(s.Link).withConfig({displayName:"link__ToggleLink",componentId:"sc-5s7yg5-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),j=n(4629),T=c.default.li.withConfig({displayName:"list__LinkContainer",componentId:"sc-ryxcw-0"})([""," z-index:",";background-color:",";padding:7px;border:1px solid ",";border-bottom:none;margin-bottom:-1px;padding-bottom:",";margin-left:2px;border-radius:12px 12px 0 0;&:hover{padding-bottom:12px;z-index:50;}"],(0,j.T)(["padding"]),(function(e){return"true"===e.chosen?"50":"10"}),(function(e){return e.theme.colors.backgroundColor}),(function(e){return e.theme.colors.grayBorder}),(function(e){return"true"===e.chosen?"9px":"5px"})),B=function(){var e=(0,o.useState)(d.ad.KO),t=e[0],n=e[1],r=(0,p.useLocation)(),i=r.pathname,a=r.search;return(0,o.useEffect)((function(){(0,C.ie)(a)&&n(a.slice(8))}),[a]),o.createElement(z,null,o.createElement(I,null,"전체 태그",o.createElement(S,null,o.createElement(T,{chosen:""+(0,C.sO)(t)},o.createElement(W,{to:i+"?sortBy="+d.ad.KO},"한글")),o.createElement(T,{chosen:""+(0,C.a1)(t)},o.createElement(W,{to:i+"?sortBy="+d.ad.EN},"ENG")))))},H=function(){return o.createElement(u,null,o.createElement(B,null),o.createElement(k,null))},P=c.default.div.withConfig({displayName:"wrapper__AllTagsPageWrapper",componentId:"sc-iixtcq-0"})(["display:flex;flex-direction:column;@media ","{display:grid;grid-template-columns:1fr ","px;}"],d.Uh.maxScreenWidth,d.av),L=function(){return o.createElement(P,null,o.createElement(H,null),o.createElement(l.U,null))},D=function(){return o.createElement(o.Fragment,null,o.createElement(a.Z,{title:"태그 사전",pathname:"/tags"}),o.createElement(i.Z,null,o.createElement(r.z,null),o.createElement(L,null)))}},1286:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg","srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/f4935/bugoverdose-profile.jpg 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/2f28c/bugoverdose-profile.jpg 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/41624/bugoverdose-profile.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/264f2/bugoverdose-profile.webp 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/e73fe/bugoverdose-profile.webp 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/61ca6/bugoverdose-profile.webp 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/60b4d/bugoverdose-profile.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')}}]);
//# sourceMappingURL=component---src-pages-tags-js-9eafcce9f7396a2b7a0c.js.map