!function(){var t,e=void 0!==self.DOMParser?function(t){return(new self.DOMParser).parseFromString(t,"application/xml")}:void 0!==self.ActiveXObject&&new self.ActiveXObject("Microsoft.XMLDOM")?function(t){var e=new self.ActiveXObject("Microsoft.XMLDOM");return e.async="false",e.loadXML(t),e}:function(t){var e=document.createElement("div");return e.innerHTML=t,e};function n(t){if("string"==typeof t&&(t=e(t)),!t||"function"!=typeof t.getElementsByTagName)throw new Error("could not get an XML document from the specified SVG contents");return Array.prototype.slice.call(t.getElementsByTagName("path")).reduce((function(t,e){return t+" "+(e.getAttribute("d")||"").replace(/\s+/g," ").trim()}),"").trim()}(t=function(){throw new Error("use extract-svg-path/transform to inline SVG contents into your bundle")}).parse=n,t.fromString=n;var r={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},o=/([astvzqmhlc])([^astvzqmhlc]*)/gi,s=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function a(t){return[t[0],t[1]]}function i(t,e){return[t,e]}var u,h,l,f,c,p,d,v=(h="number"==typeof(u=u||{}).recursion?u.recursion:8,l="number"==typeof u.epsilon?u.epsilon:1.1920929e-7,f="number"==typeof u.pathEpsilon?u.pathEpsilon:1,c="number"==typeof u.angleEpsilon?u.angleEpsilon:.01,p=u.angleTolerance||0,d=u.cuspLimit||0,function(t,e,n,r,o,s){s||(s=[]);var u=f/(o="number"==typeof o?o:1);return function(t,e,n,r,o,s){o.push(a(t)),function t(e,n,r,o,s,a,u,f,v,g,m){if(!(m>h)){var y=Math.PI,b=(e+r)/2,w=(n+o)/2,M=(r+s)/2,x=(o+a)/2,E=(s+u)/2,S=(a+f)/2,T=(b+M)/2,C=(w+x)/2,k=(M+E)/2,$=(x+S)/2,A=(T+k)/2,q=(C+$)/2;if(m>0){var L,R,H=u-e,O=f-n,X=Math.abs((r-u)*O-(o-f)*H),j=Math.abs((s-u)*O-(a-f)*H);if(X>l&&j>l){if((X+j)*(X+j)<=g*(H*H+O*O)){if(p<c)return void v.push(i(A,q));var P=Math.atan2(a-o,s-r);if((L=Math.abs(P-Math.atan2(o-n,r-e)))>=y&&(L=2*y-L),(R=Math.abs(Math.atan2(f-a,u-s)-P))>=y&&(R=2*y-R),L+R<p)return void v.push(i(A,q));if(0!==d){if(L>d)return void v.push(i(r,o));if(R>d)return void v.push(i(s,a))}}}else if(X>l){if(X*X<=g*(H*H+O*O)){if(p<c)return void v.push(i(A,q));if((L=Math.abs(Math.atan2(a-o,s-r)-Math.atan2(o-n,r-e)))>=y&&(L=2*y-L),L<p)return v.push(i(r,o)),void v.push(i(s,a));if(0!==d&&L>d)return void v.push(i(r,o))}}else if(j>l){if(j*j<=g*(H*H+O*O)){if(p<c)return void v.push(i(A,q));if((L=Math.abs(Math.atan2(f-a,u-s)-Math.atan2(a-o,s-r)))>=y&&(L=2*y-L),L<p)return v.push(i(r,o)),void v.push(i(s,a));if(0!==d&&L>d)return void v.push(i(s,a))}}else if((H=A-(e+u)/2)*H+(O=q-(n+f)/2)*O<=g)return void v.push(i(A,q))}t(e,n,b,w,T,C,A,q,v,g,m+1),t(A,q,k,$,E,S,u,f,v,g,m+1)}}(t[0],t[1],e[0],e[1],n[0],n[1],r[0],r[1],o,s,0),o.push(a(r))}(t,e,n,r,s,u*=u),s}),g=Math.PI,m=x(120);function y(t,e,n,r){return["C",t,e,n,r,n,r]}function b(t,e,n,r,o,s){return["C",t/3+2/3*n,e/3+2/3*r,o/3+2/3*n,s/3+2/3*r,o,s]}function w(t,e,n,r,o,s,a,i,u,h){if(h)E=h[0],S=h[1],b=h[2],x=h[3];else{var l=M(t,e,-o);t=l.x,e=l.y;var f=(t-(i=(l=M(i,u,-o)).x))/2,c=(e-(u=l.y))/2,p=f*f/(n*n)+c*c/(r*r);p>1&&(n*=p=Math.sqrt(p),r*=p);var d=n*n,v=r*r,y=(s==a?-1:1)*Math.sqrt(Math.abs((d*v-d*c*c-v*f*f)/(d*c*c+v*f*f)));y==1/0&&(y=1);var b=y*n*c/r+(t+i)/2,x=y*-r*f/n+(e+u)/2,E=Math.asin(((e-x)/r).toFixed(9)),S=Math.asin(((u-x)/r).toFixed(9));(E=t<b?g-E:E)<0&&(E=2*g+E),(S=i<b?g-S:S)<0&&(S=2*g+S),a&&E>S&&(E-=2*g),!a&&S>E&&(S-=2*g)}if(Math.abs(S-E)>m){var T=S,C=i,k=u;S=E+m*(a&&S>E?1:-1);var $=w(i=b+n*Math.cos(S),u=x+r*Math.sin(S),n,r,o,0,a,C,k,[S,T,b,x])}var A=Math.tan((S-E)/4),q=4/3*n*A,L=4/3*r*A,R=[2*t-(t+q*Math.sin(E)),2*e-(e-L*Math.cos(E)),i+q*Math.sin(S),u-L*Math.cos(S),i,u];if(h)return R;$&&(R=R.concat($));for(var H=0;H<R.length;){var O=M(R[H],R[H+1],o);R[H++]=O.x,R[H++]=O.y}return R}function M(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}}function x(t){return t*(g/180)}function E(t,e,n){return t[0]=e,t[1]=n,t}var S=[0,0],T=[0,0],C=[0,0],k=function(t,e){var n,r,o,s,a,i=[],u=[],h=[0,0];return function(t){for(var e,n=[],r=0,o=0,s=0,a=0,i=null,u=null,h=0,l=0,f=0,c=t.length;f<c;f++){var p=t[f],d=p[0];switch(d){case"M":s=p[1],a=p[2];break;case"A":(p=w(h,l,p[1],p[2],x(p[3]),p[4],p[5],p[6],p[7])).unshift("C"),p.length>7&&(n.push(p.splice(0,7)),p.unshift("C"));break;case"S":var v=h,g=l;"C"!=e&&"S"!=e||(v+=v-r,g+=g-o),p=["C",v,g,p[1],p[2],p[3],p[4]];break;case"T":"Q"==e||"T"==e?(i=2*h-i,u=2*l-u):(i=h,u=l),p=b(h,l,i,u,p[1],p[2]);break;case"Q":i=p[1],u=p[2],p=b(h,l,p[1],p[2],p[3],p[4]);break;case"L":p=y(h,l,p[1],p[2]);break;case"H":p=y(h,l,p[1],l);break;case"V":p=y(h,l,h,p[1]);break;case"Z":p=y(h,l,s,a)}e=d,h=p[p.length-2],l=p[p.length-1],p.length>4?(r=p[p.length-4],o=p[p.length-3]):(r=h,o=l),n.push(p)}return n}((n=t,r=0,o=0,s=0,a=0,n.map((function(t){var e=(t=t.slice())[0],n=e.toUpperCase();if(e!=n)switch(t[0]=n,e){case"a":t[6]+=s,t[7]+=a;break;case"v":t[1]+=a;break;case"h":t[1]+=s;break;default:for(var i=1;i<t.length;)t[i++]+=s,t[i++]+=a}switch(n){case"Z":s=r,a=o;break;case"H":s=t[1];break;case"V":a=t[1];break;case"M":s=r=t[1],a=o=t[2];break;default:s=t[t.length-2],a=t[t.length-1]}return t})))).forEach((function(t,n,r){if("M"===t[0])o=h,s=t.slice(1),o[0]=s[0],o[1]=s[1],u.length>0&&(i.push(u),u=[]);else{if("C"!==t[0])throw new Error("illegal type in SVG: "+t[0]);!function(t,e,n,r){v(n,E(S,r[1],r[2]),E(T,r[3],r[4]),E(C,r[5],r[6]),e,t)}(u,e,h,t),E(h,t[5],t[6])}var o,s})),u.length>0&&i.push(u),i},$=function(t,e){if(t.length<=1)return t;for(var n,r,o,s,a,i=(e="number"==typeof e?e:1)*e,u=t[0],h=[u],l=1,f=t.length;l<f;l++)o=u,void 0,void 0,(s=(r=n=t[l])[0]-o[0])*s+(a=r[1]-o[1])*a>i&&(h.push(n),u=n);return u!==n&&h.push(n),h};function A(t,e,n){var r=e[0],o=e[1],s=n[0]-r,a=n[1]-o;if(0!==s||0!==a){var i=((t[0]-r)*s+(t[1]-o)*a)/(s*s+a*a);i>1?(r=n[0],o=n[1]):i>0&&(r+=s*i,o+=a*i)}return(s=t[0]-r)*s+(a=t[1]-o)*a}var q,L=function(t,e){if(t.length<=1)return t;var n=(e="number"==typeof e?e:1)*e,r=t.length-1,o=[t[0]];return function t(e,n,r,o,s){for(var a,i=o,u=n+1;u<r;u++){var h=A(e[u],e[n],e[r]);h>i&&(a=u,i=h)}i>o&&(a-n>1&&t(e,n,a,o,s),s.push(e[a]),r-a>1&&t(e,a,r,o,s))}(t,0,r,n,o),o.push(t[r]),o};(q=function(t,e){return t=$(t,e),L(t,e)}).radialDistance=$,q.douglasPeucker=L;var R,H,O=function(t,e){for(var n=t[0],r=t[1],o=!1,s=0,a=e.length-1;s<e.length;a=s++){var i=e[s][0],u=e[s][1],h=e[a][0],l=e[a][1];u>r!=l>r&&n<(h-i)*(r-u)/(l-u)+i&&(o=!o)}return o},X={exports:{}};R=this,H=function(){"use strict";var t=function(t,n){if(void 0===t&&(t=[]),void 0===n&&(n=e),this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(var r=(this.length>>1)-1;r>=0;r--)this._down(r)};function e(t,e){return t<e?-1:t>e?1:0}return t.prototype.push=function(t){this.data.push(t),this.length++,this._up(this.length-1)},t.prototype.pop=function(){if(0!==this.length){var t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}},t.prototype.peek=function(){return this.data[0]},t.prototype._up=function(t){for(var e=this.data,n=this.compare,r=e[t];t>0;){var o=t-1>>1,s=e[o];if(n(r,s)>=0)break;e[t]=s,t=o}e[t]=r},t.prototype._down=function(t){for(var e=this.data,n=this.compare,r=this.length>>1,o=e[t];t<r;){var s=1+(t<<1),a=e[s],i=s+1;if(i<this.length&&n(e[i],a)<0&&(s=i,a=e[i]),n(a,o)>=0)break;e[t]=a,t=s}e[t]=o},t},"object"==typeof X.exports?X.exports=H():"function"==typeof define&&define.amd?define(H):(R=R||self).TinyQueue=H(),X=X.exports;var j={};function P(t,e,n){var r,o,s,a;e=e||1;for(var i=0;i<t[0].length;i++){var u=t[0][i];(!i||u[0]<r)&&(r=u[0]),(!i||u[1]<o)&&(o=u[1]),(!i||u[0]>s)&&(s=u[0]),(!i||u[1]>a)&&(a=u[1])}var h=s-r,l=a-o,f=Math.min(h,l),c=f/2;if(0===f){var p=[r,o];return p.distance=0,p}for(var d=new X(void 0,D),v=r;v<s;v+=f)for(var g=o;g<a;g+=f)d.push(new I(v+c,g+c,c,t));var m=function(t){for(var e=0,n=0,r=0,o=t[0],s=0,a=o.length,i=a-1;s<a;i=s++){var u=o[s],h=o[i],l=u[0]*h[1]-h[0]*u[1];n+=(u[0]+h[0])*l,r+=(u[1]+h[1])*l,e+=3*l}return 0===e?new I(o[0][0],o[0][1],0,t):new I(n/e,r/e,0,t)}(t),y=new I(r+h/2,o+l/2,0,t);y.d>m.d&&(m=y);for(var b=d.length;d.length;){var w=d.pop();w.d>m.d&&(m=w,n&&console.log("found best %d after %d probes",Math.round(1e4*w.d)/1e4,b)),w.max-m.d<=e||(c=w.h/2,d.push(new I(w.x-c,w.y-c,c,t)),d.push(new I(w.x+c,w.y-c,c,t)),d.push(new I(w.x-c,w.y+c,c,t)),d.push(new I(w.x+c,w.y+c,c,t)),b+=4)}n&&(console.log("num probes: "+b),console.log("best distance: "+m.d));var M=[m.x,m.y];return M.distance=m.d,M}function D(t,e){return e.max-t.max}function I(t,e,n,r){this.x=t,this.y=e,this.h=n,this.d=function(t,e,n){for(var r=!1,o=1/0,s=0;s<n.length;s++)for(var a=n[s],i=0,u=a.length,h=u-1;i<u;h=i++){var l=a[i],f=a[h];l[1]>e!=f[1]>e&&t<(f[0]-l[0])*(e-l[1])/(f[1]-l[1])+l[0]&&(r=!r),o=Math.min(o,z(t,e,l,f))}return 0===o?0:(r?1:-1)*Math.sqrt(o)}(t,e,r),this.max=this.d+this.h*Math.SQRT2}function z(t,e,n,r){var o=n[0],s=n[1],a=r[0]-o,i=r[1]-s;if(0!==a||0!==i){var u=((t-o)*a+(e-s)*i)/(a*a+i*i);u>1?(o=r[0],s=r[1]):u>0&&(o+=a*u,s+=i*u)}return(a=t-o)*a+(i=e-s)*i}X.default&&(X=X.default),(j=P).default=P;var F=function(t){var e=t.length;if(0===e)return[[],[]];for(var n=t[0].length,r=t[0].slice(),o=t[0].slice(),s=1;s<e;++s)for(var a=t[s],i=0;i<n;++i){var u=a[i];r[i]=Math.min(r[i],u),o[i]=Math.max(o[i],u)}return[r,o]},G=function(t,e,n){return(n-t)/(e-t)},N=function(t,e){if(!Array.isArray(t))throw new TypeError("must specify positions as first argument");Array.isArray(e)||(e=F(t));var n=e[0],r=e[1],o=r[0]-n[0],s=r[1]-n[1],a=o>s?1:s/o,i=o>s?o/s:1;if(r[0]-n[0]==0||r[1]-n[1]==0)return t;for(var u=0;u<t.length;u++){var h=t[u];h[0]=(2*G(n[0],r[0],h[0])-1)/a,h[1]=(2*G(n[1],r[1],h[1])-1)/i}return t},V={};const _=t.parse,Q=(t,{flat:e=!1,normalize:n=!1,threshold:a=.2}={})=>{const i=function(t){var e=[];return t.replace(o,(function(t,n,o){var a=n.toLowerCase();for(o=function(t){var e=t.match(s);return e?e.map(Number):[]}(o),"m"==a&&o.length>2&&(e.push([n].concat(o.splice(0,2))),a="l",n="m"==n?"l":"L");;){if(o.length==r[a])return o.unshift(n),e.push(o);if(o.length<r[a])throw new Error("malformed path data");e.push([n].concat(o.splice(0,r[a])))}})),e}(_(t)),u=k(i).map((function(t){return q(t,a)})),h=[];let l,f,c,p,d,v;u.forEach(t=>{h.push({points:t,segments:[],holes:[],closed:!1,winding:0})});let g,m=0;for(let r=0;r<h.length;r++){d=(v=h[r]).points,segments=v.segments,l=d[0][0],f=d[0][1],c=d[d.length-1][0],p=d[d.length-1][1],l===c&&f===p&&(v.closed=!0,d.pop());for(let t=0;t<d.length-1;t++)segments.push([m+t+0,m+t+1]);v.closed&&segments.push([m+d.length-1,m]),m+=d.length}for(var y=0;y<h.length;y++){v=h[y];for(var b=0;b<h.length;b++)v!==(g=h[b])&&O(v.points[0],g.points)&&v.winding++}let w=0;h.forEach(t=>{t.winding>w&&(w=t.winding)});let M=1;for(;M<=w;){const t=h.filter(t=>t.winding===M),e=h.filter(t=>t.winding===M+1);t.forEach(t=>{const n=[t.points];e.forEach(t=>{n.push(t.points)});const r=j(n);t.holes.push([r[0],r[1]])}),M+=2}let x=B(h,"points"),E=B(h,"segments"),S=B(h,"holes");const T=x.length,C=E.length,$=S.length;if(n){const t=F(x);N(x,t),N(S,t)}return e&&(x=x.flat(),E=E.flat(),S=S.flat()),{pointlist:x,numberofpoints:T,segmentlist:E,numberofsegments:C,holelist:S,numberofholes:$}},B=(t,e,n)=>{const r=[];return t.forEach(t=>r.push(t[e])),r.flat()};(V=Q).format=(t,e={})=>{const n=Q(t,{...e,flat:!1});let r="";r=`${r+="# points\n"}${n.numberofpoints} 2 0 0\n`;for(let o=0;o<n.numberofpoints;o++)r=`${r}${o} ${n.pointlist[o][0]} ${n.pointlist[o][1]}\n`;r=`${r+="# segments\n"}${n.numberofsegments} 0\n`;for(let o=0;o<n.numberofsegments;o++)r=`${r}${o} ${n.segmentlist[o][0]} ${n.segmentlist[o][1]}\n`;r=`${r+="# holes\n"}${n.numberofholes}\n`;for(let o=0;o<n.numberofholes;o++)r=`${r}${o} ${n.holelist[o][0]} ${n.holelist[o][1]}\n`;return r};var J={};(function(t){(function(){var e;e="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},J=e}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Z={};function U(t){var e=!1;return function(){if(!e)return e=!0,t.apply(this,arguments)}}Z=U,U.proto=U((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return U(this)},configurable:!0})}));var W=function(t){return t.replace(/^\s+|\s+$/g,"")},K=function(t){if(!t)return{};for(var e,n={},r=W(t).split("\n"),o=0;o<r.length;o++){var s=r[o],a=s.indexOf(":"),i=W(s.slice(0,a)).toLowerCase(),u=W(s.slice(a+1));void 0===n[i]?n[i]=u:(e=n[i],"[object Array]"===Object.prototype.toString.call(e)?n[i].push(u):n[i]=[n[i],u])}return n},Y={0:"Internal XMLHttpRequest Error",4:"4xx Client Error",5:"5xx Server Error"},tt=J.XMLHttpRequest||nt,et="withCredentials"in new tt?tt:J.XDomainRequest;function nt(){}var rt=function(t,e){"string"==typeof t&&(t={uri:t}),function(t,e){"string"==typeof t&&(t={uri:t}),t=t||{},e=Z(e);var n=t.xhr||null;n||(n=t.cors||t.useXDR?new et:new tt);var r,o=n.url=t.uri||t.url,s=n.method=t.method||"GET",a=t.body||t.data,i=n.headers=t.headers||{},u=!!t.sync,h=!1,l=t.response?function(){var t=c(),r=f(),o=p(t,r),s={body:r,statusCode:t,statusText:n.statusText,raw:n};n.getAllResponseHeaders?s.headers=K(n.getAllResponseHeaders()):s.headers={},e(o,s,s.body)}:function(){var t=c(),r=p(t);n.status=n.statusCode=t,n.body=f(),n.headers=K(n.getAllResponseHeaders()),e(r,n,n.body)};if("json"in t&&(h=!0,i.Accept="application/json","GET"!==s&&"HEAD"!==s&&(i["Content-Type"]="application/json",a=JSON.stringify(t.json))),n.onreadystatechange=function(){4===n.readyState&&l()},n.onload=l,n.onerror=function(t){e(t,n)},n.onprogress=function(){},n.ontimeout=nt,n.open(s,o,!u),(t.withCredentials||t.cors&&!1!==t.withCredentials)&&(n.withCredentials=!0),u||(n.timeout="timeout"in t?t.timeout:5e3),n.setRequestHeader)for(r in i)i.hasOwnProperty(r)&&n.setRequestHeader(r,i[r]);else if(t.headers)throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(n.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(n),n.send(a),n;function f(){var t=null;if(n.response?t=n.response:"text"!==n.responseType&&n.responseType||(t=n.responseText||n.responseXML),h)try{t=JSON.parse(t)}catch(e){}return t}function c(){return 1223===n.status?204:n.status}function p(t,e){var n=null;if(0===t||t>=400&&t<600){var r="string"==typeof e&&e||Y[String(t).charAt(0)];(n=new Error(r)).statusCode=t}return n}}(t,(function(t,n,r){if(t)return e(t);if(!/^2/.test(n.statusCode))return e(new Error("http status code: "+n.statusCode));var o=document.createElement("div");o.innerHTML=r;var s=o.querySelector("svg");if(!s)return e(new Error("svg not present in resource"));e(null,s)}))};let ot;const st=document.querySelector("canvas");st.width=640,st.height=640;const at=st.getContext("2d"),it=document.querySelector("select");it.addEventListener("change",t=>{ht(t.target.value)});const ut=document.querySelector("#threshold");ut.addEventListener("input",t=>{ft()});const ht=t=>{rt(t,(t,e)=>{if(t)throw t;ot=e,ft(!0)})},lt=(t,e,n)=>{if(t)for(let r=0;r<t.length;r++)t[r][0]*=e,t[r][1]*=n},ft=(t=!1)=>{const e=V(ot,{normalize:!0,threshold:parseFloat(ut.value)});ct(e),t&&console.log(e)},ct=t=>{const e=t.pointlist,n=t.segmentlist,r=t.holelist;let o,s;lt(e,.4*st.width,.4*st.height),lt(r,.4*st.width,.4*st.height),at.fillStyle="#eee",at.fillRect(0,0,st.width,st.height),at.save(),at.translate(.5*st.width,.5*st.height),at.fillStyle="#000",at.lineWidth=2;for(let a=0;a<e.length;a++)o=e[a][0],s=e[a][1],at.beginPath(),at.arc(o,s,3,0,2*Math.PI),at.fill();if(n){let t,r;for(let o=0;o<n.length;o++)t=n[o][0],r=n[o][1],at.beginPath(),at.moveTo(e[t][0],e[t][1]),at.lineTo(e[r][0],e[r][1]),at.stroke()}if(r){at.fillStyle="red";for(let t=0;t<r.length;t++)o=r[t][0],s=r[t][1],at.save(),at.translate(o,s),at.rotate(-.25*Math.PI),at.fillRect(-1,-6,2,12),at.rotate(.5*Math.PI),at.fillRect(-1,-6,2,12),at.restore()}at.restore()};ht(it.value)}();