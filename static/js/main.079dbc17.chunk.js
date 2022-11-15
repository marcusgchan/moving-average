(this["webpackJsonpmoving-avg-mvp"]=this["webpackJsonpmoving-avg-mvp"]||[]).push([[0],{175:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(58),i=n.n(a),s=(n(66),n(2)),o=n(3),l=(n(67),n(1)),u=function(e){var t=e.tickerSymbols,n=e.setCurrentSymbol,c=Object(r.useState)(""),a=Object(o.a)(c,2),i=a[0],s=a[1],u=Object(r.useState)([]),m=Object(o.a)(u,2),b=m[0],j=m[1];return Object(l.jsxs)("aside",{className:"stock-symbols-container",children:[Object(l.jsxs)("div",{className:"stock-symbol-header-container",children:[Object(l.jsx)("h3",{className:"stock-symbol-header",children:"Symbols"}),Object(l.jsx)("form",{className:"query-form",children:Object(l.jsxs)("div",{className:"input-container ",children:[Object(l.jsx)("input",{type:"text",value:i,onChange:function(e){var n=e.target.value;s(n);var r=t.filter((function(e){var t=e.symbol;return n.length<=t.length&&n.toLowerCase()===t.substr(0,n.length).toLowerCase()}));j(r)}}),Object(l.jsx)("span",{className:"input-arrow"})]})})]}),Object(l.jsx)("ul",{className:"stock-symbol-list",children:i?b.map((function(e){var t=e.symbol,r=e.id;return Object(l.jsx)("li",{className:"stock-symbol-list-item",children:Object(l.jsx)("button",{className:"ticker-symbol",onClick:function(){return n(t)},children:t})},r)})):t.map((function(e){var t=e.symbol,r=e.id;return Object(l.jsx)("li",{className:"stock-symbol-list-item",children:Object(l.jsx)("button",{className:"ticker-symbol",onClick:function(){return n(t)},children:t})},r)}))})]})},m=function(){return Object(l.jsx)("header",{className:"header-container",children:Object(l.jsx)("h1",{className:"header-title",children:"20 Day Tracker"})})},b=n(61),j=c.a.memo((function(e){var t=e.stockData,n={labels:e.dates,datasets:[{label:"Price",data:t,backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,pointRadius:1,pointHoverRadius:1,pointBackgroundColor:"rgba(255, 99, 132, 1)",autoSkip:!0},{label:"Moving Average",data:e.movingAverage,backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,pointRadius:1,pointHoverRadius:1,pointBackgroundColor:"rgba(54, 162, 235, 1)",autoSkip:!0}]};return Object(l.jsx)("div",{className:"chart-container",children:Object(l.jsx)(b.a,{data:n,options:{maintainAspectRatio:!1,responsive:!0}})})})),f={currentTimeframe:126},d=function(e,t){switch(t.type){case"1M":return{currentTimeframe:21};case"3M":return{currentTimeframe:63};case"6M":return{currentTimeframe:126};case"1Y":return{currentTimeframe:252};case"3Y":return{currentTimeframe:756};default:throw new Error("Invalid initial state for timeline!")}},h=function(e){var t=e.currentSymbol,n=Object(r.useState)({}),c=Object(o.a)(n,2),a=c[0],i=c[1],s=Object(r.useReducer)(d,f),u=Object(o.a)(s,2),m=u[0],b=u[1],h=Object(r.useState)([]),O=Object(o.a)(h,2),v=O[0],p=O[1],y=Object(r.useState)([]),g=Object(o.a)(y,2),C=g[0],S=g[1],x=Object(r.useState)([]),N=Object(o.a)(x,2),k=N[0],T=N[1],M={f:"TIME_SERIES_DAILY_ADJUSTED",symbol:t,outputSize:"full",apiKey:"IBA86A2CGCBIGGHP"},A=function(e){if(e=e["Time Series (Daily)"]){var t,n,r,c=Object.entries(e),a=c.map((function(e){return e[0]}));return(t=m.currentTimeframe+19<=a.length?a.slice(0,m.currentTimeframe):a.slice(0,a.length-19)).reverse(),S(t),(c=c.map((function(e){return e[1]["4. close"]}))).reverse(),c.length-m.currentTimeframe>=19?(n=c.slice(c.length-m.currentTimeframe,c.length),r=c.slice(c.length-m.currentTimeframe-19,c.length)):(n=c.slice(19,c.length),r=c),B(r),n}},B=function(e){for(var t=[],n=0,r=0;r<e.length-19;r++){for(var c=0;c<20;c++)n+=parseInt(e[r+c]);t.push(n/20),n=0}T(t)};return Object(r.useEffect)((function(){fetch("".concat("https://www.alphavantage.co/query?","function=").concat(M.f,"&symbol=").concat(M.symbol,"&outputsize=").concat(M.outputSize,"&apikey=").concat(M.apiKey)).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){var t=A(e);i(e),p(t)})).catch((function(e){return console.log(e)}))}),[t,M.apiKey,M.f,M.outputSize,M.symbol]),Object(r.useEffect)((function(){v&&p(A(a))}),[m]),Object(l.jsxs)("section",{className:"content-container",children:[Object(l.jsx)("h3",{className:"active-ticker-symbol",children:t}),Object(l.jsxs)("div",{className:"time-frame-container",children:[Object(l.jsx)("h6",{className:21===m.currentTimeframe?"active-timeframe":void 0,onClick:function(){return b({type:"1M"})},children:"1M"}),Object(l.jsx)("h6",{className:63===m.currentTimeframe?"active-timeframe":void 0,onClick:function(){return b({type:"3M"})},children:"3M"}),Object(l.jsx)("h6",{className:126===m.currentTimeframe?"active-timeframe":void 0,onClick:function(){return b({type:"6M"})},children:"6M"}),Object(l.jsx)("h6",{className:252===m.currentTimeframe?"active-timeframe":void 0,onClick:function(){return b({type:"1Y"})},children:"1Y"}),Object(l.jsx)("h6",{className:756===m.currentTimeframe?"active-timeframe":void 0,onClick:function(){return b({type:"3Y"})},children:"3Y"})]}),Object(l.jsx)(j,{stockData:v,dates:C,movingAverage:k})]})},O="AAPL\nABBV\nABT \nAGNC\nAMD\nAMGN\nAPL\nARLP\nBAC\nBCE\nBMY \nCCJ \nCOP\nCOST\nCS\nCSX\nCU\nCVX\nCXW \nDLTR\nENB\nFCX \nGDX \nGILD\nGLD\nGOLD\nHCC \nHD\nIBM\nINTC\nJNJ\nKL\nKO\nKMB \nMSFT\nMGA\nMMP \nMRK\nNEM \nNIO \nNLY \nOVV \nPFE\nPG\nPSX\nQCOM\nSBUX\nSLV \nSNY\nSPY\nSU\nT\nTSLA\nTSM\nU\nVTRS\nVZ\nWFC\nWMT \nXLU\nXOM\nXOP",v=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(o.a)(a,2),b=i[0],j=i[1];return Object(r.useEffect)((function(){!function(){for(var e=1,t="",n=0;n<O.length;n++)"\n"===O[n]?function(){1===e&&c(t);var n={id:e,symbol:t};e++,j((function(e){return[].concat(Object(s.a)(e),[n])})),t=""}():" "!==O[n]&&(t+=O[n])}()}),[]),Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(m,{}),Object(l.jsx)(h,{currentSymbol:n}),Object(l.jsx)(u,{tickerSymbols:b,setCurrentSymbol:c})]})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))},66:function(e,t,n){},67:function(e,t,n){}},[[175,1,2]]]);
//# sourceMappingURL=main.079dbc17.chunk.js.map