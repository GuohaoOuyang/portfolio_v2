(this.webpackJsonpportfolio_v2=this.webpackJsonpportfolio_v2||[]).push([[0],{120:function(e,n,t){},199:function(e,n,t){"use strict";t.r(n);var a,i,o,r,s,c,l,d,j,p,b,h,x,m,g=t(1),f=t.n(g),u=t(19),O=t.n(u),v=(t(120),t(7)),y=t(23),w=t(206),k=t(202),z=t(201),A=t(52),I=t(24),S=t(81),N=t(5),T=I.a.div(a||(a=Object(y.a)(["\n  position: absolute;\n  width: 100%;\n  overflow-x: hidden;\n  z-index: 9;\n  .sticky {\n    background-color: transparent;\n    padding: 0px 100px;\n    width: 100vw;\n  }\n  @media (max-width: 900px) {\n    display: none;\n  }\n"]))),E=function(e){var n=e.height,t=e.content;return Object(N.jsx)(T,{children:Object(N.jsx)(S.a,{children:Object(N.jsx)(S.b,{duration:n,pin:!0,enabled:!0,offset:350,children:Object(N.jsx)("div",{className:"sticky",children:t})})})})},L=function(){var e=I.a.div(i||(i=Object(y.a)(["\n    background: linear-gradient(to bottom, #c2e59c, #64b3f4);\n  "]))),n=Object(I.a)(w.a)(o||(o=Object(y.a)(["\n    position: relative;\n    // padding-bottom: 1000px;\n    li {\n      padding-top: 50px;\n      padding-bottom: 100px;\n      &:nth-last-child(2) {\n        .ant-timeline-item-tail {\n          border-left: 6px dotted white;\n        }\n      }\n    }\n    .ant-timeline-item-tail {\n      border-left: 6px solid white;\n      top: 0px;\n      height: 100%;\n      @media (max-width: 900px) {\n        position: absolute;\n        left: 15px !important;\n      }\n    }\n    .ant-timeline-item-last {\n      .ant-timeline-item-content {\n        background: transparent;\n        box-shadow: none;\n      }\n      //   .ant-timeline-item-tail {\n      //       display: flex;\n      //   }\n    }\n    .ant-timeline-item-head {\n      background-color: transparent;\n    }\n    .ant-timeline-item-head-custom {\n      padding: 0;\n      margin-left: 3px !important;\n      top: 12px;\n      @media (max-width: 900px) {\n        position: absolute;\n        left: 15px !important;\n      }\n    }\n    .ant-timeline-item-content {\n      position: relative;\n      bottom: 0;\n      width: 400px !important;\n      padding: 20px;\n      background: #fff;\n      box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);\n      border-radius: 5px;\n      time {\n        position: absolute;\n        background: #f4a564;\n        width: 80px;\n        height: 30px;\n        top: -15px;\n        font-family: 'Roboto', sans-serif;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        letter-spacing: 2px;\n      }\n    }\n\n    .ant-timeline-item-left .ant-timeline-item-content {\n      @media (max-width: 900px) {\n        left: 10% !important;\n        margin: 0;\n        width: 80% !important;\n      }\n    }\n\n    .ant-timeline-item-right .ant-timeline-item-content {\n      left: calc(50% - 400px - 23px);\n      text-align: left !important;\n      @media (max-width: 900px) {\n        left: 10% !important;\n        width: 80% !important;\n      }\n    }\n\n    // ANIMATION\n    li {\n      .ant-timeline-item-content {\n        visibility: hidden;\n        opacity: 0;\n        transition: all 0.5s ease-in-out;\n      }\n\n      &:nth-of-type(odd) {\n        .ant-timeline-item-content {\n          transform: translate3d(100px, -10px, 0) rotate(10deg);\n        }\n      }\n      &:nth-of-type(even) {\n        .ant-timeline-item-content {\n          transform: translate3d(-100px, -10px, 0) rotate(10deg);\n        }\n      }\n      &.in-view {\n        .ant-timeline-item-content {\n          transform: none;\n          visibility: visible;\n          opacity: 1;\n        }\n      }\n    }\n  "]))),t=k.a.Title,a=k.a.Text,s=Object(I.a)(t)(r||(r=Object(y.a)(["\n    display: none;\n    @media (max-width: 900px) {\n      display: block;\n      text-align: center;\n      padding-top: 1rem;\n    }\n  "])));Object(g.useEffect)((function(){var e=document.querySelectorAll(".ant-timeline li");function n(e){var n=e.getBoundingClientRect();return n.top>=0&&n.left>=0&&n.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&n.right<=(window.innerWidth||document.documentElement.clientWidth)}function t(){for(var t=0;t<e.length;t++)n(e[t])?e[t].classList.contains("in-view")||e[t].classList.add("in-view"):e[t].classList.contains("in-view")&&e[t].classList.remove("in-view")}return window.addEventListener("load",t),window.addEventListener("scroll",t),function(){window.removeEventListener("load",t),window.removeEventListener("scroll",t)}}),[]);var c=Object(g.useState)(1430),l=Object(v.a)(c,2),d=l[0];l[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(e,{children:[Object(N.jsx)(E,{height:d,content:Object(N.jsx)(t,{level:2,children:"My Journey"})}),Object(N.jsx)(s,{level:2,children:"My Journey"}),Object(N.jsxs)(n,{mode:"alternate",id:"time-line",children:[Object(N.jsxs)(w.a.Item,{dot:Object(N.jsx)(A.a,{style:{fontSize:"24px"}}),children:[Object(N.jsx)("time",{children:"2015"}),Object(N.jsxs)("div",{className:"right",children:[Object(N.jsx)(t,{level:4,children:"Study"}),Object(N.jsx)(a,{children:"St Clair College, Diploma of Fashion Design"})]})]}),Object(N.jsxs)(w.a.Item,{dot:Object(N.jsx)(A.a,{style:{fontSize:"24px"}}),children:[Object(N.jsx)("time",{children:"2016"}),Object(N.jsxs)("div",{className:"left",children:[Object(N.jsx)(t,{level:4,children:"Graduated"}),Object(N.jsx)(a,{children:"Niagara College, Diploma of Automotive Technician"})]})]}),Object(N.jsxs)(w.a.Item,{dot:Object(N.jsx)(A.a,{style:{fontSize:"24px"}}),children:[Object(N.jsx)("time",{children:"2016"}),Object(N.jsxs)("div",{className:"right",children:[Object(N.jsx)(t,{level:4,children:"Work"}),Object(N.jsx)(a,{children:"Technician, Nissan Waterloo"})]})]}),Object(N.jsxs)(w.a.Item,{dot:Object(N.jsx)(A.a,{style:{fontSize:"24px"}}),children:[Object(N.jsx)("time",{children:"2020"}),Object(N.jsxs)("div",{className:"left",children:[Object(N.jsx)(t,{level:4,children:"Graduated"}),Object(N.jsx)(a,{children:"York University, Bachelor's degree of Computer Science"})]})]}),Object(N.jsxs)(w.a.Item,{dot:Object(N.jsx)(A.a,{style:{fontSize:"24px"}}),children:[Object(N.jsx)("time",{children:"2021"}),Object(N.jsxs)("div",{className:"right",children:[Object(N.jsx)(t,{level:4,children:"Work"}),Object(N.jsx)(a,{children:"Front end developer, Fyelabs Hamilton"})]})]}),Object(N.jsx)(w.a.Item,{dot:Object(N.jsx)(z.a,{})})]})]})})},M=t(207),R=t(204),F=t(205),_=t.p+"static/media/mockup.194ed912.png",C=function(){var e=I.a.div(s||(s=Object(y.a)(["\n    position: relative;\n    z-index: 0;\n    min-height: 100vh;\n    &:before {\n      content: '';\n      position: absolute;\n      z-index: -1;\n      top: 0;\n      left: 0;\n      right: 0;\n      min-height: 100vh;\n      background: url(",") center no-repeat;\n      background-size: cover;\n      -webkit-mask-image: linear-gradient(\n        to bottom,\n        transparent 10%,\n        black 75%\n      );\n      mask-image: linear-gradient(to bottom, transparent 10%, black 75%);\n    }\n  "])),_),n=k.a.Title,t=k.a.Text,a=Object(I.a)(n)(c||(c=Object(y.a)(["\n    padding: 10px 0;\n    text-align: center;\n    margin-bottom: 0 !important;\n    font-weight: 600;\n  "]))),i=Object(I.a)(t)(l||(l=Object(y.a)(["\n    text-align: center;\n  "]))),o=Object(I.a)(M.a)(d||(d=Object(y.a)(["\n    margin: 50px 100px;\n  "]))),r=Object(I.a)(M.a)(j||(j=Object(y.a)(["\n    margin: 50px 0px;\n    display: flex;\n    justify-content: center;\n  "]))),b=Object(I.a)(R.a)(p||(p=Object(y.a)(["\n    position: relative;\n    transition: color 0.5s ease;\n    border: 2px solid rgba(79, 79, 79, 0.7);\n    background: transparent;\n    height: 50px;\n    padding: 0;\n    display: flex;\n    line-height: auto !important;\n    padding-left: 20px;\n    padding-right: 20px;\n    justify-content: center;\n    align-items: center;\n    :focus {\n      background: transparent;\n      color: black;\n      border-color: rgba(79, 79, 79, 0.7);\n    }\n    :hover  {\n      background: transparent;\n      color: #64b3f4;\n      border-color: #64b3f4;\n    }\n    span {\n      cursor: pointer;\n      display: inline-block;\n      position: relative;\n      transition: 0.5s;\n    }\n    span: after {\n      content: '\\20D7';\n      position: absolute;\n      opacity: 0;\n      font-size: 2em;\n      top: 0.6rem;\n      right: -0.4em;\n      transition: 0.5s;\n    }\n    :hover span {\n      transform: translate3d(-0.5em, 0, 0);\n      color: #64b3f4;\n    }\n    :hover span: after {\n      opacity: 1;\n      right: -0.8em;\n      color: #64b3f4;\n    }\n  "],["\n    position: relative;\n    transition: color 0.5s ease;\n    border: 2px solid rgba(79, 79, 79, 0.7);\n    background: transparent;\n    height: 50px;\n    padding: 0;\n    display: flex;\n    line-height: auto !important;\n    padding-left: 20px;\n    padding-right: 20px;\n    justify-content: center;\n    align-items: center;\n    :focus {\n      background: transparent;\n      color: black;\n      border-color: rgba(79, 79, 79, 0.7);\n    }\n    :hover  {\n      background: transparent;\n      color: #64b3f4;\n      border-color: #64b3f4;\n    }\n    span {\n      cursor: pointer;\n      display: inline-block;\n      position: relative;\n      transition: 0.5s;\n    }\n    span: after {\n      content: '\\\\20D7';\n      position: absolute;\n      opacity: 0;\n      font-size: 2em;\n      top: 0.6rem;\n      right: -0.4em;\n      transition: 0.5s;\n    }\n    :hover span {\n      transform: translate3d(-0.5em, 0, 0);\n      color: #64b3f4;\n    }\n    :hover span: after {\n      opacity: 1;\n      right: -0.8em;\n      color: #64b3f4;\n    }\n  "])));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(F.a,{justify:"center",children:Object(N.jsxs)(o,{"data-aos":"fade-up","data-aos-duration":"1000","data-aos-offset":"200","data-aos-easing":"ease",xs:15,children:[Object(N.jsx)(a,{children:"About Me"}),Object(N.jsx)(i,{children:"Software engineer based in Toronto, I love to bring beautiful design to life - designs that can make people's lives better. Talk to me in English or Mandarin!"})]})}),Object(N.jsxs)(F.a,{justify:"center",align:"top",gutter:[16,30],children:[Object(N.jsxs)(M.a,{lg:5,xs:16,"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"400","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:[Object(N.jsx)(n,{level:5,style:{textAlign:"center"},children:"I do"}),Object(N.jsx)(t,{style:{textAlign:"center"},children:"Designed and prototyped web-based, desktop, and mobile applications, implemented solutions using modern architectures"})]}),Object(N.jsxs)(M.a,{lg:5,xs:16,"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"450","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:[Object(N.jsx)(n,{level:5,style:{textAlign:"center"},children:"I sepcialize"}),Object(N.jsx)(t,{style:{textAlign:"center"},children:"Various web development stacks including Vue, React and Typescript. Writing logical & maintainable code."})]}),Object(N.jsxs)(M.a,{lg:5,xs:16,"data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"500","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:[Object(N.jsx)(n,{level:5,style:{textAlign:"center"},children:"I appreciate"}),Object(N.jsx)(t,{style:{textAlign:"center"},children:"Professional and hardworking workplace culture, the endeavour of making useful and enjoyable application"})]})]}),Object(N.jsx)(F.a,{children:Object(N.jsx)(r,{"data-aos":"fade-in","data-aos-duration":"500","data-aos-delay":"500","data-aos-easing":"ease",xs:24,children:Object(N.jsx)(b,{href:"https://drive.google.com/file/d/1qKTMU8zRlO6z-eKjfPqvanXesAFRHvQz/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)("span",{children:"View Resume"})})})}),Object(N.jsx)(e,{})]})},D=t.p+"static/media/bookstore.344df4fd.jpeg",W=t.p+"static/media/mip.0f62c771.jpeg",G=function(){var e=Object(I.a)(F.a)(b||(b=Object(y.a)(["\n    min-height: 80vh;\n    background: white;\n    overflow: hidden;\n    padding: 10px 0;\n  "]))),n=Object(I.a)(M.a)(h||(h=Object(y.a)(["\n    overflow: hidden;\n    height: 250px;\n    & > a {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: grey;\n      cursor: pointer;\n      width: 100%;\n      // background: url(",") center no-repeat;\n      background-size: cover;\n      height: 100%;\n      transition: all 0.5s ease;\n      & > span {\n        color: white;\n        font-size: 1.2rem;\n      }\n      &:hover {\n        transform: scale(1.2);\n      }\n    }\n  "])),D),t=Object(I.a)(M.a)(x||(x=Object(y.a)(["\n  overflow: hidden;\n  height: 250px;\n  & > a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: grey;\n    cursor: pointer;\n    width: 100%;\n    // background: url(",") center no-repeat;\n    background-size: cover;\n    height: 100%;\n    transition: all 0.5s ease;\n    & > span {\n      color: white;\n      font-size: 1.2rem;\n    }\n    &:hover {\n      transform: scale(1.2);\n    }\n  }\n"])),W),a=Object(I.a)(M.a)(m||(m=Object(y.a)(["\n    height: 510px;\n    overflow: hidden !important;\n    @media(max-width: 900px) {\n      height: 250px;\n    }\n    & > a {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: grey;\n      height: 100%;\n      cursor: pointer;\n      transition: all 0.5s ease;\n      & > span {\n        color: white;\n        font-size: 1.2rem;\n      }\n      &:hover {\n        transform: scale(1.2);\n      }\n    }\n  "]))),i=k.a.Text;return Object(N.jsxs)(e,{justify:"center",align:"middle",gutter:[8,8],id:"projects",children:[Object(N.jsx)(M.a,{lg:6,xs:16,children:Object(N.jsxs)(F.a,{gutter:[0,8],children:[Object(N.jsx)(n,{span:24,"data-aos":"fade-in","data-aos-duration":"500","data-aos-delay":"100","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:Object(N.jsx)("a",{href:"https://github.com/GuohaoOuyang/ebook-store",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(i,{children:"Ebook Store"})})}),Object(N.jsx)(t,{span:24,"data-aos":"fade-in","data-aos-duration":"500","data-aos-delay":"150","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:Object(N.jsx)("a",{href:"#projects",children:Object(N.jsx)(i,{children:"MIP"})})})]})}),Object(N.jsx)(M.a,{lg:6,xs:16,children:Object(N.jsx)(F.a,{children:Object(N.jsx)(a,{span:24,"data-aos":"fade-in","data-aos-duration":"500","data-aos-delay":"200","data-aos-easing":"ease","data-aos-anchor-placement":"top-bottom",children:Object(N.jsx)("a",{href:"#projects",children:Object(N.jsx)(i,{children:"Nebras"})})})})})]})},H=t(203),J=t(84),q=t.n(J),B=t(208),P=t(209),V=t(210),K=t(110),U=function(){return Object(N.jsx)("div",{children:Object(N.jsxs)(F.a,{align:"middle",justify:"space-between",children:[Object(N.jsx)(M.a,{span:8,offset:8,style:{textAlign:"center"},children:"\xa9 2022 Aidan Ouyang. All Rights Reserved"}),Object(N.jsx)(M.a,{span:6,children:Object(N.jsxs)(F.a,{justify:"space-around",children:[Object(N.jsx)(M.a,{children:Object(N.jsx)(R.a,{type:"text",href:"https://github.com/GuohaoOuyang",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(B.a,{})})}),Object(N.jsx)(M.a,{children:Object(N.jsx)(R.a,{type:"text",href:"https://www.linkedin.com/in/guohao-aidan-ouyang-13451619a/",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(P.a,{})})}),Object(N.jsx)(M.a,{children:Object(N.jsx)(R.a,{type:"text",href:"mailto:guohao.ouyang@gmail.com",children:Object(N.jsx)(V.a,{})})}),Object(N.jsx)(M.a,{children:Object(N.jsx)(R.a,{type:"text",href:"https://gojsblog.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",children:Object(N.jsx)(K.a,{})})})]})})]})})},Q=(t(197),t(198),function(){Object(g.useEffect)((function(){q.a.init(),q.a.refresh()}),[]);var e=H.a.Footer,n=H.a.Content;return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(H.a,{children:[Object(N.jsxs)(n,{children:[Object(N.jsx)(L,{}),Object(N.jsx)(C,{}),Object(N.jsx)(G,{})]}),Object(N.jsx)(e,{children:Object(N.jsx)(U,{})})]})})});O.a.render(Object(N.jsx)(f.a.StrictMode,{children:Object(N.jsx)(Q,{})}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.a05750a8.chunk.js.map