"use strict";(self.webpackChunktoptalentproject=self.webpackChunktoptalentproject||[]).push([[55],{3728:function(e,n,t){t.d(n,{Z:function(){return R}});var r=t(885),o=t(1413),a=t(2791),i=t(2065),c=t(4554),l=t(9836),s=t(3382),u=t(3994),d=t(9281),f=t(6890),m=t(6282),p=t(5855),v=t(720),h=t(4663),g=t(890),x=t(703),Z=t(5573),b=t(8181),y=t(184),j=[];function S(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}function k(e,n){return"desc"===e?function(e,t){return S(e,t,n)}:function(e,t){return-S(e,t,n)}}function w(e,n){var t=e.map((function(e,n){return[e,n]}));return t.sort((function(e,t){var r=n(e[0],t[0]);return 0!==r?r:e[1]-t[1]})),t.map((function(e){return e[0]}))}var D=[{id:"name",label:"name"},{id:"stargazers_count",label:"stars"},{id:"forks_count",label:"fork"},{id:"updated_at",type:Date,label:"lastUpdate"}];function C(e){e.onSelectAllClick;var n=e.order,t=e.orderBy,r=(e.numSelected,e.rowCount,e.onRequestSort);return(0,y.jsx)(f.Z,{children:(0,y.jsx)(p.Z,{children:D.map((function(e){return(0,y.jsx)(u.Z,{align:"left",padding:"normal",sortDirection:t===e.id&&n,children:(0,y.jsxs)(v.Z,{active:t===e.id,direction:t===e.id?n:"asc",onClick:(o=e.id,function(e){r(e,o)}),children:[e.label,t===e.id?(0,y.jsx)(c.Z,{component:"span",sx:Z.Z,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var o}))})})}var P=function(e){var n=e.numSelected;return(0,y.jsx)(h.Z,{sx:(0,o.Z)({pl:{sm:2},pr:{xs:1,sm:1}},n>0&&{bgcolor:function(e){return(0,i.Fq)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:n>0?(0,y.jsxs)(g.Z,{sx:{flex:"1 1 100%"},color:"inherit",variant:"subtitle1",component:"div",children:[n," selected"]}):(0,y.jsx)(g.Z,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Table of repositories"})})};function R(e){var n,t=e.repos;j=t,console.log(j);var o=a.useState("asc"),i=(0,r.Z)(o,2),f=i[0],v=i[1],h=a.useState("calories"),g=(0,r.Z)(h,2),Z=g[0],S=g[1],R=a.useState([]),A=(0,r.Z)(R,2),M=A[0],B=A[1],F=a.useState(0),z=(0,r.Z)(F,2),N=z[0],I=z[1],O=a.useState(5),T=(0,r.Z)(O,2),_=T[0],q=T[1],H=N>0?Math.max(0,(1+N)*_-j.length):0;return(0,y.jsx)(c.Z,{sx:{width:"100%"},children:(0,y.jsxs)(x.Z,{sx:{width:"100%",mb:2},children:[(0,y.jsx)(P,{numSelected:M.length}),(0,y.jsx)(d.Z,{children:(0,y.jsxs)(l.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,y.jsx)(C,{numSelected:M.length,order:f,orderBy:Z,onSelectAllClick:function(e){if(e.target.checked){var n=j.map((function(e){return e.name}));B(n)}else B([])},onRequestSort:function(e,n){v(Z===n&&"asc"===f?"desc":"asc"),S(n)},rowCount:null===(n=j)||void 0===n?void 0:n.length}),(0,y.jsxs)(s.Z,{children:[w(j,k(f,Z)).slice(N*_,N*_+_).map((function(e,n){var t,r=(t=e.name,-1!==M.indexOf(t));"enhanced-table-checkbox-".concat(n);return(0,y.jsx)(p.Z,{hover:!0,onClick:function(n){return function(e,n){var t=M.indexOf(n),r=[];-1===t?r=r.concat(M,n):0===t?r=r.concat(M.slice(1)):t===M.length-1?r=r.concat(M.slice(0,-1)):t>0&&(r=r.concat(M.slice(0,t),M.slice(t+1))),B(r)}(0,e.name)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:D.map((function(n){return(0,y.jsx)(y.Fragment,{children:n.type===Date?(0,y.jsx)(u.Z,{align:"left",children:(0,b.Z)(new Date(e[n.id]),"yyyy/MM/dd HH:mm")}):(0,y.jsx)(u.Z,{align:"left",children:e[n.id]})})}))},e.name)})),H>0&&(0,y.jsx)(p.Z,{style:{height:53*H},children:(0,y.jsx)(u.Z,{colSpan:6})})]})]})}),(0,y.jsx)(m.Z,{rowsPerPageOptions:[5,10,25],component:"div",count:j.length,rowsPerPage:_,page:N,onPageChange:function(e,n){I(n)},onRowsPerPageChange:function(e){q(parseInt(e.target.value,10)),I(0)}})]})})}},8055:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var r=t(885),o=t(2791),a=t(6871),i=t(4554),c=t(3728),l=t(3366),s=t(7462),u=t(8182),d=t(4419),f=t(7630),m=t(551),p=t(9201),v=t(184),h=(0,p.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),g=t(1217),x=t(5878);function Z(e){return(0,g.Z)("MuiAvatar",e)}(0,x.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],y=(0,f.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],t.colorDefault&&n.colorDefault]}})((function(e){var n=e.theme,t=e.ownerState;return(0,s.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:n.typography.fontFamily,fontSize:n.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(n.vars||n).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,s.Z)({color:(n.vars||n).palette.background.default},n.vars?{backgroundColor:n.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===n.palette.mode?n.palette.grey[400]:n.palette.grey[600]}))})),j=(0,f.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,n){return n.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),S=(0,f.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,n){return n.fallback}})({width:"75%",height:"75%"});var k=o.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiAvatar"}),a=t.alt,i=t.children,c=t.className,f=t.component,p=void 0===f?"div":f,h=t.imgProps,g=t.sizes,x=t.src,k=t.srcSet,w=t.variant,D=void 0===w?"circular":w,C=(0,l.Z)(t,b),P=null,R=function(e){var n=e.crossOrigin,t=e.referrerPolicy,a=e.src,i=e.srcSet,c=o.useState(!1),l=(0,r.Z)(c,2),s=l[0],u=l[1];return o.useEffect((function(){if(a||i){u(!1);var e=!0,r=new Image;return r.onload=function(){e&&u("loaded")},r.onerror=function(){e&&u("error")},r.crossOrigin=n,r.referrerPolicy=t,r.src=a,i&&(r.srcset=i),function(){e=!1}}}),[n,t,a,i]),s}((0,s.Z)({},h,{src:x,srcSet:k})),A=x||k,M=A&&"error"!==R,B=(0,s.Z)({},t,{colorDefault:!M,component:p,variant:D}),F=function(e){var n=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,d.Z)(t,Z,n)}(B);return P=M?(0,v.jsx)(j,(0,s.Z)({alt:a,src:x,srcSet:k,sizes:g,ownerState:B,className:F.img},h)):null!=i?i:A&&a?a[0]:(0,v.jsx)(S,{className:F.fallback}),(0,v.jsx)(y,(0,s.Z)({as:p,ownerState:B,className:(0,u.Z)(F.root,c),ref:n},C,{children:P}))})),w=t(890),D=t(2982),C=t(4942),P=t(4036),R=t(3031),A=t(2071);function M(e){return(0,g.Z)("MuiLink",e)}var B=(0,x.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),F=t(8529),z=t(2065),N={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},I=function(e){var n=e.theme,t=e.ownerState,r=function(e){return N[e]||e}(t.color),o=(0,F.D)(n,"palette.".concat(r),!1)||t.color,a=(0,F.D)(n,"palette.".concat(r,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,z.Fq)(o,.4)},O=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],T=(0,f.ZP)(w.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["underline".concat((0,P.Z)(t.underline))],"button"===t.component&&n.button]}})((function(e){var n=e.theme,t=e.ownerState;return(0,s.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,s.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:I({theme:n,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&(0,C.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(B.focusVisible),{outline:"auto"}))})),_=o.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiLink"}),a=t.className,i=t.color,c=void 0===i?"primary":i,f=t.component,p=void 0===f?"a":f,h=t.onBlur,g=t.onFocus,x=t.TypographyClasses,Z=t.underline,b=void 0===Z?"always":Z,y=t.variant,j=void 0===y?"inherit":y,S=t.sx,k=(0,l.Z)(t,O),w=(0,R.Z)(),C=w.isFocusVisibleRef,B=w.onBlur,F=w.onFocus,z=w.ref,I=o.useState(!1),_=(0,r.Z)(I,2),q=_[0],H=_[1],V=(0,A.Z)(n,z),L=(0,s.Z)({},t,{color:c,component:p,focusVisible:q,underline:b,variant:j}),E=function(e){var n=e.classes,t=e.component,r=e.focusVisible,o=e.underline,a={root:["root","underline".concat((0,P.Z)(o)),"button"===t&&"button",r&&"focusVisible"]};return(0,d.Z)(a,M,n)}(L);return(0,v.jsx)(T,(0,s.Z)({color:c,className:(0,u.Z)(E.root,a),classes:x,component:p,onBlur:function(e){B(e),!1===C.current&&H(!1),h&&h(e)},onFocus:function(e){F(e),!0===C.current&&H(!0),g&&g(e)},ref:V,ownerState:L,variant:j,sx:[].concat((0,D.Z)(Object.keys(N).includes(c)?[]:[{color:c}]),(0,D.Z)(Array.isArray(S)?S:[S]))},k))})),q=function(e){var n=e.userData;return console.log(n),(0,v.jsxs)(i.Z,{style:{display:"flex",flexDirection:"column",gap:"12px",justifyContent:"center",alignItems:"center"},children:[(0,v.jsx)(k,{alt:"user profile",src:n.avatar_url,sx:{width:200,mb:8,height:200}}),(0,v.jsx)(w.Z,{color:"blue",variant:"h5",component:"div",gutterBottom:!0,children:n.name}),(0,v.jsxs)(w.Z,{variant:"Body2",component:"div",gutterBottom:!0,children:["Public repo: ",n.public_repos]}),(0,v.jsx)(_,{href:n.html_url,children:(0,v.jsx)(w.Z,{color:"gray",variant:"Body1",component:"div",gutterBottom:!0,children:n.html_url})})]})},H=function(){var e,n,t=(0,a.UO)(),l=(0,o.useState)({}),s=(0,r.Z)(l,2),u=s[0],d=s[1],f=(0,o.useState)([]),m=(0,r.Z)(f,2),p=m[0],h=m[1],g=(0,a.TH)();console.log(t);var x=null===g||void 0===g||null===(e=g.state)||void 0===e?void 0:e.userData;return(0,o.useEffect)((function(){x?d(x):fetch("https://api.github.com/users/".concat(t.username)).then((function(e){return e.json()})).then((function(e){return d(e)}))}),[t.username]),console.log(null===g||void 0===g||null===(n=g.state)||void 0===n?void 0:n.userData),(0,o.useEffect)((function(){fetch("https://api.github.com/users/".concat(t.username,"/repos")).then((function(e){return e.json()})).then((function(e){return h(e)}))}),[t.username]),console.log(u),console.log(p),(0,v.jsxs)(i.Z,{style:{display:"flex",gap:"48px",justifyContent:"center",alignItems:"center",padding:"48px"},children:[(0,v.jsx)(q,{userData:u}),(0,v.jsx)(c.Z,{repos:p})]})}}}]);
//# sourceMappingURL=55.9b6b7067.chunk.js.map