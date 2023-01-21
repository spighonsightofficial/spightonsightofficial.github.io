"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{1162:function(e,t,r){r.d(t,{xu:function(){return d},M5:function(){return g},kC:function(){return h},rj:function(){return x},P4:function(){return v},Ug:function(){return T},X6:function(){return b},y$:function(){return w},rU:function(){return E},aV:function(){return S},DE:function(){return L},HC:function(){return $},MI:function(){return W},xv:function(){return q},gC:function(){return B}});var n=r(7294),a=r(594);function i(e){const t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function s(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):i(e)?Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}var o=r(5336),c=r(4520),l=r(6076),m=r(2494),p=r(8387),u=r(4031);(0,a.Gp)((function(e,t){const{ratio:r=4/3,children:i,className:c,...l}=e,m=n.Children.only(i),p=(0,o.cx)("chakra-aspect-ratio",c);return n.createElement(a.m$.div,{ref:t,position:"relative",className:p,_before:{height:0,content:'""',display:"block",paddingBottom:s(r,(e=>1/e*100+"%"))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...l},m)})).displayName="AspectRatio",(0,a.Gp)((function(e,t){const r=(0,a.mq)("Badge",e),{className:i,...s}=(0,c.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,o.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})})).displayName="Badge";var d=(0,a.m$)("div");d.displayName="Box";var f=(0,a.Gp)((function(e,t){const{size:r,centerContent:a=!0,...i}=e,s=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return n.createElement(d,{ref:t,boxSize:r,__css:{...s,flexShrink:0,flexGrow:0},...i})}));f.displayName="Square",(0,a.Gp)((function(e,t){const{size:r,...a}=e;return n.createElement(f,{size:r,ref:t,borderRadius:"9999px",...a})})).displayName="Circle";var g=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});g.displayName="Center";var y={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)((function(e,t){const{axis:r="both",...i}=e;return n.createElement(a.m$.div,{ref:t,__css:y[r],...i,position:"absolute"})}));(0,a.Gp)((function(e,t){const r=(0,a.mq)("Code",e),{className:i,...s}=(0,c.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,o.cx)("chakra-code",e.className),...s,__css:{display:"inline-block",...r}})})).displayName="Code",(0,a.Gp)((function(e,t){const{className:r,centerContent:i,...s}=(0,c.Lr)(e),l=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-container",r),...s,__css:{...l,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})})).displayName="Container",(0,a.Gp)((function(e,t){const{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:s,borderRightWidth:l,borderWidth:m,borderStyle:p,borderColor:u,...d}=(0,a.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:y,...h}=(0,c.Lr)(e),x={vertical:{borderLeftWidth:r||l||m||"1px",height:"100%"},horizontal:{borderBottomWidth:i||s||m||"1px",width:"100%"}};return n.createElement(a.m$.hr,{ref:t,"aria-orientation":g,...h,__css:{...d,border:"0",borderColor:u,borderStyle:p,...x[g],...y},className:(0,o.cx)("chakra-divider",f)})})).displayName="Divider";var h=(0,a.Gp)((function(e,t){const{direction:r,align:i,justify:s,wrap:o,basis:c,grow:l,shrink:m,...p}=e,u={display:"flex",flexDirection:r,alignItems:i,justifyContent:s,flexWrap:o,flexBasis:c,flexGrow:l,flexShrink:m};return n.createElement(a.m$.div,{ref:t,__css:u,...p})}));h.displayName="Flex";var x=(0,a.Gp)((function(e,t){const{templateAreas:r,gap:i,rowGap:s,columnGap:o,column:c,row:l,autoFlow:m,autoRows:p,templateRows:u,autoColumns:d,templateColumns:f,...g}=e,y={display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:s,gridColumnGap:o,gridAutoColumns:d,gridColumn:c,gridRow:l,gridAutoFlow:m,gridAutoRows:p,gridTemplateRows:u,gridTemplateColumns:f};return n.createElement(a.m$.div,{ref:t,__css:y,...g})}));function _(e){return s(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}x.displayName="Grid";var v=(0,a.Gp)((function(e,t){const{area:r,colSpan:i,colStart:s,colEnd:o,rowEnd:c,rowSpan:m,rowStart:p,...u}=e,d=(0,l.oA)({gridArea:r,gridColumn:_(i),gridRow:_(m),gridColumnStart:s,gridColumnEnd:o,gridRowStart:p,gridRowEnd:c});return n.createElement(a.m$.div,{ref:t,__css:d,...u})}));v.displayName="GridItem";var b=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Heading",e),{className:i,...s}=(0,c.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...s,__css:r})}));b.displayName="Heading";function N({text:e,query:t}){const r=function(e){const t=e.filter((e=>0!==e.length)).map((e=>e.trim().replace(/[|\\{}()[\]^$+*?.-]/g,(e=>`\\${e}`))));return t.length?new RegExp(`(${t.join("|")})`,"ig"):null}(Array.isArray(t)?t:[t]);if(!r)return[{text:e,match:!1}];return e.split(r).filter(Boolean).map((e=>({text:e,match:r.test(e)})))}var k=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Mark",e),i=(0,c.Lr)(e);return n.createElement(d,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}));function w(e){const{children:t,query:r,styles:a}=e;if("string"!=typeof t)throw new Error("The children prop of Highlight must be a string");const i=function(e){const{text:t,query:r}=e;return(0,n.useMemo)((()=>N({text:t,query:r})),[t,r])}({query:r,text:t});return n.createElement(n.Fragment,null,i.map(((e,t)=>e.match?n.createElement(k,{key:t,sx:a},e.text):n.createElement(n.Fragment,{key:t},e.text))))}(0,a.Gp)((function(e,t){const r=(0,a.mq)("Kbd",e),{className:i,...s}=(0,c.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,o.cx)("chakra-kbd",i),...s,__css:{fontFamily:"mono",...r}})})).displayName="Kbd";var E=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Link",e),{className:i,isExternal:s,...l}=(0,c.Lr)(e);return n.createElement(a.m$.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",i),...l,__css:r})}));E.displayName="Link";(0,a.Gp)((function(e,t){const{isExternal:r,target:i,rel:s,className:c,...l}=e;return n.createElement(a.m$.a,{...l,ref:t,className:(0,o.cx)("chakra-linkbox__overlay",c),rel:r?"noopener noreferrer":s,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})})),(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,o.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})}));var[G,C]=(0,p.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),S=(0,a.Gp)((function(e,t){const r=(0,a.jC)("List",e),{children:i,styleType:s="none",stylePosition:o,spacing:l,...m}=(0,c.Lr)(e),p=(0,u.W)(i),d=l?{"& > *:not(style) ~ *:not(style)":{mt:l}}:{};return n.createElement(G,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:s,listStylePosition:o,role:"list",__css:{...r.container,...d},...m},p))}));S.displayName="List",(0,a.Gp)(((e,t)=>{const{as:r,...a}=e;return n.createElement(S,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})})).displayName="OrderedList",(0,a.Gp)((function(e,t){const{as:r,...a}=e;return n.createElement(S,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})})).displayName="UnorderedList";var $=(0,a.Gp)((function(e,t){const r=C();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})}));$.displayName="ListItem";var L=(0,a.Gp)((function(e,t){const r=C();return n.createElement(m.JO,{ref:t,role:"presentation",...e,__css:r.icon})}));L.displayName="ListIcon";var W=(0,a.Gp)((function(e,t){const{columns:r,spacingX:i,spacingY:o,spacing:c,minChildWidth:l,...m}=e,p=(0,a.Fg)(),u=l?function(e,t){return s(e,(e=>{const r=(0,a.LP)("sizes",e,"number"==typeof(n=e)?`${n}px`:n)(t);var n;return null===e?null:`repeat(auto-fit, minmax(${r}, 1fr))`}))}(l,p):s(r,(e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return n.createElement(x,{ref:t,gap:c,columnGap:i,rowGap:o,templateColumns:u,...m})}));W.displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var A="& > *:not(style) ~ *:not(style)";var j=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});j.displayName="StackItem";var I=(0,a.Gp)(((e,t)=>{const{isInline:r,direction:i,align:c,justify:l,spacing:m="0.5rem",wrap:p,children:d,divider:f,className:g,shouldWrapChildren:y,...h}=e,x=r?"row":i??"column",_=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[A]:s(r,(e=>n[e]))}}({direction:x,spacing:m})),[x,m]),v=(0,n.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":s(r,(e=>n[e]))}}({spacing:m,direction:x})),[m,x]),b=!!f,N=!y&&!b,k=(0,n.useMemo)((()=>{const e=(0,u.W)(d);return N?e:e.map(((t,r)=>{const a=void 0!==t.key?t.key:r,i=r+1===e.length,s=y?n.createElement(j,{key:a},t):t;if(!b)return s;const o=(0,n.cloneElement)(f,{__css:v}),c=i?null:o;return n.createElement(n.Fragment,{key:a},s,c)}))}),[f,v,b,N,y,d]),w=(0,o.cx)("chakra-stack",g);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:l,flexDirection:_.flexDirection,flexWrap:p,className:w,__css:b?{}:{[A]:_[A]},...h},k)}));I.displayName="Stack";var T=(0,a.Gp)(((e,t)=>n.createElement(I,{align:"center",...e,direction:"row",ref:t})));T.displayName="HStack";var B=(0,a.Gp)(((e,t)=>n.createElement(I,{align:"center",...e,direction:"column",ref:t})));B.displayName="VStack";var q=(0,a.Gp)((function(e,t){const r=(0,a.mq)("Text",e),{className:i,align:s,decoration:m,casing:p,...u}=(0,c.Lr)(e),d=(0,l.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...d,...u,__css:r})}));function R(e){return"number"==typeof e?`${e}px`:e}q.displayName="Text",(0,a.Gp)((function(e,t){const{spacing:r="0.5rem",spacingX:i,spacingY:l,children:m,justify:p,direction:u,align:d,className:f,shouldWrapChildren:g,...y}=e,h=(0,n.useMemo)((()=>{const{spacingX:e=r,spacingY:t=r}={spacingX:i,spacingY:l};return{"--chakra-wrap-x-spacing":t=>s(e,(e=>R((0,c.fr)("space",e)(t)))),"--chakra-wrap-y-spacing":e=>s(t,(t=>R((0,c.fr)("space",t)(e)))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:p,alignItems:d,flexDirection:u,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[r,i,l,p,d,u]),x=(0,n.useMemo)((()=>g?n.Children.map(m,((e,t)=>n.createElement(z,{key:t},e))):m),[m,g]);return n.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-wrap",f),overflow:"hidden",...y},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:h},x))})).displayName="Wrap";var z=(0,a.Gp)((function(e,t){const{className:r,...i}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,o.cx)("chakra-wrap__listitem",r),...i})}));z.displayName="WrapItem"},6076:function(e,t,r){function n(e){const t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}r.d(t,{oA:function(){return n}})},4031:function(e,t,r){r.d(t,{W:function(){return a}});var n=r(7294);function a(e){return n.Children.toArray(e).filter((e=>(0,n.isValidElement)(e)))}}}]);
//# sourceMappingURL=commons-5a93c8e11a35372befd6.js.map