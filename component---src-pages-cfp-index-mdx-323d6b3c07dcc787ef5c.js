(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),n=a("q1tI"),i=a.n(n),o=a("NmYn"),c=a.n(o),s=a("OKom"),b=a("k4MR"),l=a("TSYQ"),p=a.n(l),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("pEPl"),O=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,n=a||r,i=n.baseUrl,o=n.subDirectory,c=i+"/edit/"+n.branch+o+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),g=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=c()(e,{lower:!0}),i=n===r,o=new RegExp(r+"(?!-)"),s=a.replace(o,n);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(d.b)(g.Link,{className:v.link,to:""+s},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},n))))))},r}(i.a.Component),x=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,l=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,h=l.tabs,O=l.title,g=l.theme,v=l.description,w=l.keywords,N=r.data.site.pathPrefix,P=N?n.pathname.replace(N,""):n.pathname,T=h?P.split("/").filter(Boolean).slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:h,homepage:!1,theme:g,pageTitle:O,pageDescription:v,pageKeywords:w,titleType:u},Object(d.b)(m,{title:i?Object(d.b)(i,null):O,label:"label",tabs:h}),h&&Object(d.b)(y,{slug:P,tabs:h,currentTab:T}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:n,slug:P,tabs:h,currentTab:T}),Object(d.b)(s.a,null))}},jurx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},s=c("PageDescription"),b=c("AnchorLinks"),l=c("AnchorLink"),p={_frontmatter:o},u=n.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(u,i({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(s,{mdxType:"PageDescription"},Object(r.b)("p",null,"We welcome original research papers no longer than 5 pages in total: 4 pages for the body of the paper (including all figures), plus up to one additional page with references that do not fit within the six body pages."),Object(r.b)("p",null,"Papers must be formatted according to the ",Object(r.b)("a",i({parentName:"p"},{href:"https://www.ijcai.org/authors_kit"}),"IJCAI guidelines"),". Submissions should be in .pdf format."),Object(r.b)("p",null,"Submission Website: ",Object(r.b)("a",i({parentName:"p"},{href:"https://cmt3.research.microsoft.com/DCM2020"}),"CMT"))),Object(r.b)("h2",null,"Important Dates"),Object(r.b)(b,{mdxType:"AnchorLinks"},Object(r.b)(l,{mdxType:"AnchorLink"},"Submission deadline: Sunday, 26 April 2020 (23:59 Pacific Time)"),Object(r.b)(l,{mdxType:"AnchorLink"},"Author notification: Sunday, 17 May 2020 (23:59 Pacific Time)"),Object(r.b)(l,{mdxType:"AnchorLink"},"Camera ready deadline: Sunday, 31 May 2020 (23:59 Pacific Time)")))}d.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://github.com/dcm-2020/dcm-2020.github.io","subDirectory":"","branch":"src"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/pages"}}}')}}]);
//# sourceMappingURL=component---src-pages-cfp-index-mdx-323d6b3c07dcc787ef5c.js.map