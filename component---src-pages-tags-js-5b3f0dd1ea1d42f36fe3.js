"use strict";(self.webpackChunkbugoverdose=self.webpackChunkbugoverdose||[]).push([[159],{4189:function(e,t,n){n.d(t,{H:function(){return E}});var o=n(7294),r=n(5444),i=n(9),a=n(419),l=(0,i.default)(a.H3).withConfig({displayName:"caption__CaptionBox",componentId:"sc-1g16ucx-0"})(["padding:20px 0 0 20px;font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),c=(0,i.default)(r.Link).withConfig({displayName:"link__PostLink",componentId:"sc-53hhi5-0"})(["display:grid;grid-template-columns:100px 1fr;grid-template-rows:minmax(100px,1fr);}"]),u=n(6125),d=i.default.article.withConfig({displayName:"wrapper__PostWrapper",componentId:"sc-wvoput-0"})(["border-top:1px solid ",";&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayTranslucent})),p=i.default.div.withConfig({displayName:"wrapper__ImageWrapper",componentId:"sc-19otf45-0"})(["display:flex;justify-content:center;align-items:center;height:100%;width:100%;padding:10px;img{height:75px;width:75px;}"]),s=i.default.div.withConfig({displayName:"container__PostInfoContainer",componentId:"sc-51koo2-0"})(["padding:15px 10px;color:",";display:flex;flex-direction:column;justify-content:center;"],(function(e){return e.theme.colors.textColor})),f=(0,i.default)(a.nv).withConfig({displayName:"date__PostDate",componentId:"sc-w3bdsn-0"})(["margin:0 0 10px 0;padding:0px;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),m=(0,i.default)(a.H3).withConfig({displayName:"title__PostTitle",componentId:"sc-1bj7gxq-0"})(["font-size:",";font-weight:",";line-height:",";margin-bottom:10px;"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.normal}),(function(e){return e.theme.lineHeight.big})),g=n(6072),h=n(6692),x=i.default.div.withConfig({displayName:"container__PostTagsContainer",componentId:"sc-1qx2z1r-0"})(["display:flex;flex-wrap:wrap;& > *{margin-right:5px;}"]),b=i.default.div.withConfig({displayName:"wrapper__PostTagsWrapper",componentId:"sc-zm8lu6-0"})(["display:grid;grid-template-columns:20px 1fr;gap:5px;width:100%;line-height:",";font-weight:",";font-size:",";color:",";"],(function(e){return e.theme.lineHeight.big}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.colors.grayThick})),w=function(e){var t=e.tags,n=(0,o.useState)(!0),r=n[0],i=n[1],a=(0,o.useState)({}),l=a[0],c=a[1];return(0,o.useEffect)((function(){c((0,g._D)()),i(!1)}),[]),r?o.createElement(o.Fragment,null):o.createElement(b,null,o.createElement(h.Ou,{size:20}),o.createElement(x,null,null==t?void 0:t.map((function(e,t,n){return o.createElement("span",{key:t},l[e].ko,t<n.length-1?",":"")})).slice(0,3),(null==t?void 0:t.length)>3&&o.createElement("span",null,"...")))},y={borderRadius:"10px"},_=function(e){var t=e.article,n=t.id,r=t.slug,i=t.frontmatter,a=i.hero_image,l=i.hero_image_alt,h=i.date,x=i.title,b=i.category,_=i.tags,v=(0,g.t4)();return o.createElement(d,{key:n},o.createElement(c,{to:"/"+r},o.createElement(p,null,o.createElement(u.G,{image:(0,u.d)(a),alt:l,imgStyle:y})),o.createElement(s,null,o.createElement(f,null,h," | ",v[b].ko),o.createElement(m,null,x),o.createElement(w,{tags:_}))))},v=i.default.ul.withConfig({displayName:"container__RecentPostsContainer",componentId:"sc-1ba59mt-0"})(["padding:20px;"]),E=function(){var e=(0,r.useStaticQuery)(C).allMdx.nodes;return o.createElement(o.Fragment,null,o.createElement(l,null,"최근 글"),o.createElement(v,null,e.map((function(e){return o.createElement(_,{key:e.id,article:e})}))))},C="2248097681"},3568:function(e,t,n){n.d(t,{U:function(){return c}});var o=n(7294),r=n(4189),i=n(9),a=n(5160),l=i.default.section.withConfig({displayName:"wrapper__RecentPostsWrapper",componentId:"sc-imcv1a-0"})(["margin:0px 20px;border:1px solid ",";border-radius:15px;@media ","{margin:0 20px 0 0;position:-webkit-sticky;position:sticky;top:","px;align-self:start;}"],(function(e){return e.theme.colors.grayBorder}),a.Uh.maxScreenWidth,a.Rk+5),c=function(){return o.createElement(l,null,o.createElement(r.H,null))}},5164:function(e,t,n){n.d(t,{z:function(){return f}});var o=n(7294),r=n(6125),i=n(9),a=i.default.section.withConfig({displayName:"wrapper__ProfileWrapper",componentId:"sc-s5nbtz-0"})(["display:flex;justify-content:center;align-items:center;margin-bottom:30px;padding:50px 20px;"]),l={borderRadius:"50%"},c=i.default.h2.withConfig({displayName:"container__TextContainer",componentId:"sc-tehb5b-0"})(["display:flex;flex-wrap:wrap;margin-left:20px;"]),u=n(419),d=(0,i.default)(u.H2).attrs({as:"span"}).withConfig({displayName:"block__TextBlock",componentId:"sc-14tbgz3-0"})(["font-size:",";font-family:",";font-weight:",";padding-right:15px;"],(function(e){return e.theme.fontSize.xl3}),(function(e){return e.theme.font.monospace}),(function(e){return e.theme.fontWeight.bold})),p=(0,i.default)(d).attrs({as:"a"}).withConfig({displayName:"link__ProfileLink",componentId:"sc-8q7gnz-0"})(["color:",";text-decoration:underline;text-underline-position:under;&:hover{text-decoration:none;}"],(function(e){return e.theme.colors.highlightColor})),s=function(){return o.createElement(c,null,o.createElement(d,null,"Dev blog by"),o.createElement(p,{href:"https://github.com/bugoverdose",target:"_blank"},"Jeong Jinwoo"))},f=function(){return o.createElement(a,null,o.createElement(r.S,{src:"./assets/bugoverdose-profile.jpeg",alt:"profile image of bugoverdose",height:80,aspectRatio:1,imgStyle:l,placeholder:"dominantColor",__imageData:n(1286)}),o.createElement(s,null))}},8257:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var o=n(7294),r=n(5164),i=n(6397),a=n(1443),l=n(3568),c=n(9),u=n(5160),d=c.default.section.withConfig({displayName:"wrapper__TagNavigationWrapper",componentId:"sc-1j1tetu-0"})(["display:flex;flex-direction:column;margin:0px 20px 20px 20px;border:1px solid ",";border-radius:15px;@media ","{max-width:","px;margin-bottom:0px;}"],(function(e){return e.theme.colors.grayBorder}),u.Uh.maxScreenWidth,u.Tl-u.av),p=n(9499),s=n(5444),f=c.default.section.withConfig({displayName:"wrapper__TagDictionaryWrapper",componentId:"sc-1tp71v2-0"})(["margin:0px 20px 10px 20px;display:flex;z-index:30;border-top:1px solid ",";background-color:",";"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.backgroundColor})),m=c.default.div.withConfig({displayName:"container__DictionaryContainer",componentId:"sc-1jt90qc-0"})(["width:100%;& > div:last-child{border:none;}"]),g=c.default.div.withConfig({displayName:"wrapper__TagDivisionWrapper",componentId:"sc-1egvxch-0"})(["padding:15px 0px;border-bottom:1px solid ",";@media ","{display:grid;grid-template-columns:100px 1fr;}"],(function(e){return e.theme.colors.grayBorder}),u.Uh.maxScreenWidth),h=n(419),x=(0,c.default)(h.H3).withConfig({displayName:"caption__Caption",componentId:"sc-mbatbu-0"})(["padding-left:10px;padding-bottom:20px;color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.lg}),(function(e){return e.theme.fontWeight.bold})),b=c.default.div.withConfig({displayName:"container__TagListContainer",componentId:"sc-sx9djm-0"})(["display:flex;flex-wrap:wrap;width:100%;padding-left:10px;@media ","{padding-left:0px;}"],u.Uh.maxScreenWidth),w=(0,c.default)(h.H4).attrs({as:"span"}).withConfig({displayName:"box__CountBox",componentId:"sc-1xi0tge-0"})(["font-size:",";font-weight:",";line-height:",";"],(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.regular}),(function(e){return e.theme.lineHeight.normal})),y=c.default.div.withConfig({displayName:"wrapper__CountBoxWrapper",componentId:"sc-1l3r21k-0"})(["display:flex;justify-content:center;align-items:center;background-color:",";border-radius:5px;padding:5px;height:100%;min-width:20px;"],(function(e){return e.theme.colors.grayBoxTranslucent})),_=function(e){var t=e.count;return o.createElement(y,null,o.createElement(w,null,t))},v=(0,c.default)(s.Link).withConfig({displayName:"link__TagLink",componentId:"sc-vy8uzw-0"})(["display:flex;height:30px;padding:5px 10px;border:1px solid ",";border-radius:15px;margin:0 10px 10px 0;&:hover{background-color:",";}"],(function(e){return e.theme.colors.grayBorder}),(function(e){return e.theme.colors.grayBorder})),E=(0,c.default)(h.H4).withConfig({displayName:"name__TagName",componentId:"sc-1k4227g-0"})(["height:100%;margin-right:10px;line-height:",";color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.lineHeight.normal}),(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.medium})),C=function(e){var t=e.tag,n=e.language;return o.createElement(v,{to:"/tag/"+t.slug},o.createElement(E,null,t[n]),o.createElement(_,{count:t.count}))},k=function(e){var t=e.division,n=e.language;return o.createElement(g,null,o.createElement(x,null,t.caption),o.createElement(b,null,t.data.map((function(e,t){return o.createElement(C,{tag:e,language:n,key:t})}))))},N=n(6072),z=function(){var e=(0,o.useState)(!0),t=e[0],n=e[1],r=(0,o.useState)([]),i=r[0],a=r[1],l=(0,o.useState)(u.ad.KO),c=l[0],d=l[1],g=(0,p.useLocation)().search,h=(0,s.useStaticQuery)(I).allMdx.nodes;return(0,o.useEffect)((function(){(0,N.ie)(g)&&d(g.slice(8))}),[g]),(0,o.useEffect)((function(){a((0,N.sj)(h.map((function(e){return e.frontmatter.tags})),c)),n(!1)}),[h,c]),t?o.createElement(o.Fragment,null):o.createElement(f,null,o.createElement(m,null,i.map((function(e,t){return e.data.length>0&&o.createElement(k,{key:t,division:e,language:c})}))))},I="1734415262",S=c.default.div.withConfig({displayName:"wrapper__NavWrapper",componentId:"sc-1hc3sb0-0"})(["padding:20px 0;margin:0 20px;position:relative;"]),T=c.default.ul.withConfig({displayName:"switch__ToggleSwitchBox",componentId:"sc-npe0wn-0"})(["position:absolute;bottom:0;right:0;display:flex;justify-content:center;align-items:flex-end;padding-right:5px;height:100%;"]),W=(0,c.default)(s.Link).withConfig({displayName:"link__ToggleLink",componentId:"sc-3asmfd-0"})(["color:",";font-size:",";font-weight:",";"],(function(e){return e.theme.colors.textColor}),(function(e){return e.theme.fontSize.sm}),(function(e){return e.theme.fontWeight.medium})),B=n(2316),j=c.default.li.withConfig({displayName:"container__LinkContainer",componentId:"sc-1ix3do3-0"})([""," z-index:",";background-color:",";padding:7px;border:1px solid ",";border-bottom:none;margin-bottom:-1px;padding-bottom:",";margin-left:2px;border-radius:12px 12px 0 0;&:hover{padding-bottom:12px;z-index:50;}"],(0,B.TF)(["padding"]),(function(e){return"true"===e.chosen?"50":"10"}),(function(e){return e.theme.colors.backgroundColor}),(function(e){return e.theme.colors.grayBorder}),(function(e){return"true"===e.chosen?"9px":"5px"})),H=function(e){var t=e.innerText,n=e.chosen,r=e.pathToSortBy;return o.createElement(j,{chosen:n},o.createElement(W,{to:r},t))},P=(0,c.default)(h.H2).attrs({as:"nav"}).withConfig({displayName:"container__NavContainer",componentId:"sc-179x1jj-0"})(["font-size:",";font-weight:",";"],(function(e){return e.theme.fontSize.base}),(function(e){return e.theme.fontWeight.bold})),L=function(){var e=(0,o.useState)(u.ad.KO),t=e[0],n=e[1],r=(0,p.useLocation)(),i=r.pathname,a=r.search;return(0,o.useEffect)((function(){(0,N.ie)(a)&&n(a.slice(8))}),[a]),o.createElement(S,null,o.createElement(P,null,"전체 태그",o.createElement(T,null,o.createElement(H,{innerText:"한글",chosen:""+(0,N.sO)(t),pathToSortBy:i+"?sortBy="+u.ad.KO}),o.createElement(H,{innerText:"ENG",chosen:""+(0,N.a1)(t),pathToSortBy:i+"?sortBy="+u.ad.EN}))))},D=function(){return o.createElement(d,null,o.createElement(L,null),o.createElement(z,null))},U=c.default.div.withConfig({displayName:"wrapper__AllTagsPageWrapper",componentId:"sc-iixtcq-0"})(["display:flex;flex-direction:column;@media ","{display:grid;grid-template-columns:1fr ","px;}"],u.Uh.maxScreenWidth,u.av),O=function(){return o.createElement(U,null,o.createElement(D,null),o.createElement(l.U,null))},R=function(){return o.createElement(o.Fragment,null,o.createElement(a.Z,{title:"태그 사전",description:"해당 페이지는 해당 블로그의 모든 게시글에 적용된 태그들에 대한 정보를 한국어와 영어 태그명을 기준으로 정렬한 결과입니다.",pathname:"/tags"}),o.createElement(i.Z,null,o.createElement(r.z,null),o.createElement(O,null)))}},1286:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg","srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/f4935/bugoverdose-profile.jpg 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/2f28c/bugoverdose-profile.jpg 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/499f6/bugoverdose-profile.jpg 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/41624/bugoverdose-profile.jpg 160w","sizes":"(min-width: 80px) 80px, 100vw"},"sources":[{"srcSet":"/static/aadc9e6754eb1f587aa3f278463188de/264f2/bugoverdose-profile.webp 20w,\\n/static/aadc9e6754eb1f587aa3f278463188de/e73fe/bugoverdose-profile.webp 40w,\\n/static/aadc9e6754eb1f587aa3f278463188de/61ca6/bugoverdose-profile.webp 80w,\\n/static/aadc9e6754eb1f587aa3f278463188de/60b4d/bugoverdose-profile.webp 160w","type":"image/webp","sizes":"(min-width: 80px) 80px, 100vw"}]},"width":80,"height":80}')}}]);
//# sourceMappingURL=component---src-pages-tags-js-5b3f0dd1ea1d42f36fe3.js.map