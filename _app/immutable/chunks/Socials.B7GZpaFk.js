import{s as _,e as f,c as m,b as d,f as h,o as S,m as o,y as q,i as p,h as w,n as b,D as V,a as B,l as G,g as H}from"./scheduler.DCTacmqj.js";import{S as v,i as k,c as I,a as $,m as x,t as u,b as g,d as y,g as N,e as j}from"./index.DpwPvxh6.js";import{e as D}from"./each.D6YF6ztN.js";function A(r){let e,s,n;return{c(){e=f("div"),s=f("img"),this.h()},l(t){e=m(t,"DIV",{class:!0,style:!0});var a=d(e);s=m(a,"IMG",{src:!0,class:!0,width:!0,height:!0}),a.forEach(h),this.h()},h(){S(s.src,n=r[1])||o(s,"src",n),o(s,"class","aspect-square opacity-0"),o(s,"width","100vh"),o(s,"height","100vh"),o(e,"class",r[0]),q(e,"mask","url("+r[1]+") no-repeat center")},m(t,a){p(t,e,a),w(e,s)},p(t,[a]){a&2&&!S(s.src,n=t[1])&&o(s,"src",n),a&1&&o(e,"class",t[0]),a&2&&q(e,"mask","url("+t[1]+") no-repeat center")},i:b,o:b,d(t){t&&h(e)}}}function F(r,e,s){let{class:n}=e,{path:t}=e;return r.$$set=a=>{"class"in a&&s(0,n=a.class),"path"in a&&s(1,t=a.path)},[n,t]}class M extends v{constructor(e){super(),k(this,e,F,A,_,{class:0,path:1})}}function z(r){let e,s,n,t;return s=new M({props:{path:r[0],class:"aspect-square bg-white"}}),{c(){e=f("a"),I(s.$$.fragment),this.h()},l(a){e=m(a,"A",{class:!0,href:!0});var l=d(e);$(s.$$.fragment,l),l.forEach(h),this.h()},h(){o(e,"class",n="w-12 "+r[2]+" [&_div]:hover:bg-primary"),o(e,"href",r[1])},m(a,l){p(a,e,l),x(s,e,null),t=!0},p(a,[l]){const c={};l&1&&(c.path=a[0]),s.$set(c),(!t||l&4&&n!==(n="w-12 "+a[2]+" [&_div]:hover:bg-primary"))&&o(e,"class",n),(!t||l&2)&&o(e,"href",a[1])},i(a){t||(u(s.$$.fragment,a),t=!0)},o(a){g(s.$$.fragment,a),t=!1},d(a){a&&h(e),y(s)}}}function J(r,e,s){let{path:n}=e,{link:t}=e,{class:a=""}=e;return r.$$set=l=>{"path"in l&&s(0,n=l.path),"link"in l&&s(1,t=l.link),"class"in l&&s(2,a=l.class)},[n,t,a]}class K extends v{constructor(e){super(),k(this,e,J,z,_,{path:0,link:1,class:2})}}function E(r,e,s){const n=r.slice();return n[1]=e[s],n}function P(r){let e,s;return e=new K({props:{path:"/logos/"+r[1].svgPath,link:r[1].link}}),{c(){I(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,t){x(e,n,t),s=!0},p(n,t){const a={};t&1&&(a.path="/logos/"+n[1].svgPath),t&1&&(a.link=n[1].link),e.$set(a)},i(n){s||(u(e.$$.fragment,n),s=!0)},o(n){g(e.$$.fragment,n),s=!1},d(n){y(e,n)}}}function O(r){let e,s,n=D(r[0]),t=[];for(let l=0;l<n.length;l+=1)t[l]=P(E(r,n,l));const a=l=>g(t[l],1,1,()=>{t[l]=null});return{c(){e=f("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=m(l,"DIV",{class:!0});var c=d(e);for(let i=0;i<t.length;i+=1)t[i].l(c);c.forEach(h),this.h()},h(){o(e,"class","flex max-w-48 flex-wrap justify-center gap-x-4 gap-y-4 sm:max-w-full")},m(l,c){p(l,e,c);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(e,null);s=!0},p(l,[c]){if(c&1){n=D(l[0]);let i;for(i=0;i<n.length;i+=1){const C=E(l,n,i);t[i]?(t[i].p(C,c),u(t[i],1)):(t[i]=P(C),t[i].c(),u(t[i],1),t[i].m(e,null))}for(N(),i=n.length;i<t.length;i+=1)a(i);j()}},i(l){if(!s){for(let c=0;c<n.length;c+=1)u(t[c]);s=!0}},o(l){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)g(t[c]);s=!1},d(l){l&&h(e),V(t,l)}}}function Q(r,e,s){let{icons:n}=e;return r.$$set=t=>{"icons"in t&&s(0,n=t.icons)},[n]}class R extends v{constructor(e){super(),k(this,e,Q,O,_,{icons:0})}}const T={title:"LinkedIn",svgPath:"socials/linkedin.svg",link:"https://www.linkedin.com/in/kamiel-de-visser/"},U={title:"GitHub",svgPath:"socials/github.svg",link:"https://www.github.com/codevogel"},L={linkedIn:T,github:U};function W(r){let e,s,n="Find me on",t,a,l;return a=new R({props:{icons:r[0]}}),{c(){e=f("div"),s=f("h2"),s.textContent=n,t=B(),I(a.$$.fragment),this.h()},l(c){e=m(c,"DIV",{class:!0});var i=d(e);s=m(i,"H2",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-507li3"&&(s.textContent=n),t=H(i),$(a.$$.fragment,i),i.forEach(h),this.h()},h(){o(s,"class","mb-4"),o(e,"class","flex flex-col items-center")},m(c,i){p(c,e,i),w(e,s),w(e,t),x(a,e,null),l=!0},p:b,i(c){l||(u(a.$$.fragment,c),l=!0)},o(c){g(a.$$.fragment,c),l=!1},d(c){c&&h(e),y(a)}}}function X(r){const e=[];return e.push(L.github),e.push(L.linkedIn),[e]}class te extends v{constructor(e){super(),k(this,e,X,W,_,{})}}export{R as I,K as L,te as S};
