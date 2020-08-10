(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),i=(a(14),a(8)),o=a(1),u=function(e,t){switch(t.type){case"NEXT":return e+1;case"PREV":return e>0?e-1:e;case"RESTART":return 0;default:return e}},s=function(e){var t,a,n=e.length;if(n)for(;--n;)t=e[a=Math.floor(Math.random()*(n+1))],e[a]=e[n],e[n]=t;return e},m=Object(n.createContext)(),v=function(e){var t=Object(n.useState)({trivia_amount:"10",trivia_category:"any",trivia_difficulty:"any",trivia_type:"any"}),a=Object(o.a)(t,2),c=a[0],l=a[1],v=Object(n.useState)(!1),p=Object(o.a)(v,2),E=p[0],f=p[1],d=Object(n.useState)([]),y=Object(o.a)(d,2),b=y[0],h=y[1],g=Object(n.useState)({}),N=Object(o.a)(g,2),_=N[0],S=N[1],j=Object(n.useReducer)(u,0),w=Object(o.a)(j,2),O=w[0],C=w[1],A=Object(n.useState)([]),x=Object(o.a)(A,2),R=x[0],T=x[1],k=Object(n.useState)(!1),q=Object(o.a)(k,2),M=q[0],z=q[1],F=Object(n.useState)(0),P=Object(o.a)(F,2),B=P[0],Q=P[1],D=Object(n.useState)(!1),G=Object(o.a)(D,2),H=G[0],I=G[1],L=function(){var e=c.trivia_amount,t=c.trivia_category,a=c.trivia_difficulty,n=c.trivia_type;return"https://opentdb.com/api.php?amount="+e+("any"!==t?"&category="+t:"")+("any"!==a?"&difficulty="+a:"")+("any"!==n?"&type="+n:"")};Object(n.useEffect)((function(){var e=b.map((function(e){return[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer])}));e.map((function(e){return s(e)}));for(var t=[],a=0;a<b.length;a++)t.push({category:b[a].category,correct_answer:b[a].correct_answer,difficulty:b[a].difficulty,question:b[a].question,answers:e[a]});T(t)}),[b]);return r.a.createElement(m.Provider,{value:{reviewMode:H,setReviewMode:I,quizResults:B,handleAgainBtn:function(){z(!1),f(!1),S(!1),T([]),C({type:"RESTART"}),I(!1)},handleReviewBtn:function(){z(!1),C({type:"RESTART"}),I(!0)},quizCards:R,setQuizCards:T,fetchApi:function(){fetch(L()).then((function(e){return e.json()})).then((function(e){return h(e.results)}))},apiSelection:c,setApiSelection:l,getApi:L,apiStatus:E,setApiStatus:f,quizArr:b,setQuizArr:h,userSelection:_,setUserSelection:S,navPosition:O,dispatchNavDir:C,setResultPercentage:function(){b.reduce((function(e){return 0===e.correct_answer}));for(var e=0,t=0;t<b.length;t++)b[t].correct_answer===_[t]&&e++;z(!0),Q({percentage:e/b.length*100,total:b.length,correctAnswers:e})},quizfinished:M,setQuizfinished:z}},e.children)},p=a(5),E=a(2),f=function(){var e=Object(n.useContext)(m),t=e.quizCards,a=e.navPosition,c=e.userSelection,l=e.setUserSelection,i=e.reviewMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-between "},r.a.createElement("div",null,r.a.createElement("p",{className:"m-0",dangerouslySetInnerHTML:{__html:"".concat(t[a].category)}}),r.a.createElement("p",{className:"h5 question-title",dangerouslySetInnerHTML:{__html:"".concat(t[a].question)}})),r.a.createElement("p",{className:"counter ml-2"},window.innerWidth>=400?"".concat(a+1," out of ").concat(t.length):"".concat(a+1,"/").concat(t.length))),r.a.createElement("form",{className:i?"pointer-events-none":""},t[a].answers.map((function(e){return r.a.createElement("div",{className:"form-check p-0",key:t[a].question+"-"+e},r.a.createElement("input",{className:"form-check-input",type:"radio",style:{display:"none"},name:e,checked:!!c[a]&&c[a]===e,readOnly:!0}),r.a.createElement("label",{onClick:function(){return function(e,t){c[e]||l(Object(E.a)({},c,Object(p.a)({},e,t)))}(a,e)},className:c[a]?e===t[a].correct_answer?"form-check-label btn btn-outline-secondary w-100 my-1 correct":"form-check-label btn btn-outline-secondary w-100 my-1 incorrect":"form-check-label btn btn-outline-secondary w-100 my-1",htmlFor:e,dangerouslySetInnerHTML:{__html:"".concat(e)}}))}))))},d=function(){var e=Object(n.useContext)(m),t=e.handleReviewBtn,a=e.handleAgainBtn,c=e.quizResults,l=c.percentage,i=c.total,o=c.correctAnswers;return r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"h4 my-4"},"You finished the Quiz!"),r.a.createElement("div",{className:"h5"},"You're result was:"," ",r.a.createElement("span",{className:l>=50?"text-success":"text-danger"},Math.round(100*l)/100,"%,")),r.a.createElement("div",{className:"p"},"or ".concat(o," ").concat(1===o?"correct answer":"correct answers"," out of ").concat(i," questions")),r.a.createElement("button",{className:"btn btn-info text-white m-3",onClick:function(){t()}},"Review Results!"),r.a.createElement("button",{className:"btn btn-info text-white m-3",onClick:function(){a()}},"Try again!"))},y=function(){var e=Object(n.useContext)(m),t=e.navPosition,a=e.dispatchNavDir,c=e.quizCards,l=e.setResultPercentage,i=e.reviewMode;return r.a.createElement("div",{className:"navdir mt-3"},0!==t?r.a.createElement("button",{className:"prev",onClick:function(){a({type:"PREV"})}},"Previous"):r.a.createElement(r.a.Fragment,null),t<c.length-1?r.a.createElement("button",{className:"next",onClick:function(){a({type:"NEXT"})}},"Next"):r.a.createElement("button",{className:"next",onClick:function(){l()}},i?"Return":"Submit"))},b=function(){var e=Object(n.useContext)(m),t=e.quizCards,a=e.quizfinished;return r.a.createElement("div",{className:"card",style:{}},r.a.createElement("div",{className:"card-body"},t.length>0?r.a.createElement(r.a.Fragment,null,a?r.a.createElement(d,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(y,null))):r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"spinner-border text-primary text-center",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))))},h=function(){var e=Object(n.useContext)(m),t=e.fetchApi,a=e.apiSelection,c=e.setApiSelection,l=e.setApiStatus;return r.a.createElement("div",{className:"card",style:{}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"trivia_amount"},"Number of Questions:"),r.a.createElement("input",{type:"number",name:"trivia_amount",className:"form-control",min:"1",max:"50",value:a.trivia_amount,onChange:function(e){return c(Object(E.a)({},a,{trivia_amount:e.target.value}))}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"trivia_category"},"Select Category:"),r.a.createElement("select",{className:"form-control",name:"trivia_category",value:a.trivia_category,onChange:function(e){return c(Object(E.a)({},a,{trivia_category:e.target.value}))}},r.a.createElement("option",{value:"any"},"Any Category"),r.a.createElement("option",{value:"9"},"General Knowledge"),r.a.createElement("option",{value:"10"},"Entertainment: Books"),r.a.createElement("option",{value:"11"},"Entertainment: Film"),r.a.createElement("option",{value:"12"},"Entertainment: Music"),r.a.createElement("option",{value:"13"},"Entertainment: Musicals & Theatres"),r.a.createElement("option",{value:"14"},"Entertainment: Television"),r.a.createElement("option",{value:"15"},"Entertainment: Video Games"),r.a.createElement("option",{value:"16"},"Entertainment: Board Games"),r.a.createElement("option",{value:"17"},"Science & Nature"),r.a.createElement("option",{value:"18"},"Science: Computers"),r.a.createElement("option",{value:"19"},"Science: Mathematics"),r.a.createElement("option",{value:"20"},"Mythology"),r.a.createElement("option",{value:"21"},"Sports"),r.a.createElement("option",{value:"22"},"Geography"),r.a.createElement("option",{value:"23"},"History"),r.a.createElement("option",{value:"24"},"Politics"),r.a.createElement("option",{value:"25"},"Art"),r.a.createElement("option",{value:"26"},"Celebrities"),r.a.createElement("option",{value:"27"},"Animals"),r.a.createElement("option",{value:"28"},"Vehicles"),r.a.createElement("option",{value:"29"},"Entertainment: Comics"),r.a.createElement("option",{value:"30"},"Science: Gadgets"),r.a.createElement("option",{value:"31"},"Entertainment: Japanese Anime & Manga"),r.a.createElement("option",{value:"32"},"Entertainment: Cartoon & Animations"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"trivia_difficulty"},"Select Difficulty: "),r.a.createElement("select",{name:"trivia_difficulty",className:"form-control",value:a.trivia_difficulty,onChange:function(e){return c(Object(E.a)({},a,{trivia_difficulty:e.target.value}))}},r.a.createElement("option",{value:"any"},"Any Difficulty"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"trivia_type"},"Select Type: "),r.a.createElement("select",{name:"trivia_type",className:"form-control",value:a.trivia_type,onChange:function(e){return c(Object(E.a)({},a,{trivia_type:e.target.value}))}},">",r.a.createElement("option",{value:"any"},"Any Type"),r.a.createElement("option",{value:"multiple"},"Multiple Choice"),r.a.createElement("option",{value:"boolean"},"True / False"))),r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("input",{className:"w-100 button",type:"submit",value:"START!",onClick:function(e){e.preventDefault(),l(!0),t()}})))))},g=function(){var e=Object(n.useContext)(m).apiStatus;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-4  mt-3 text-center"},"Quiz App"),e?r.a.createElement(b,null):r.a.createElement(h,null))},N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null,r.a.createElement(g,null)))};l.a.render(r.a.createElement(N,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.b4805832.chunk.js.map