(this["webpackJsonpgoit-react-hw-02-bank-account"]=this["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{10:function(e,t,n){e.exports={controls:"Controls_controls__HIVBt",input:"Controls_input__1PVh1",button:"Controls_button__1F_15"}},12:function(e,t,n){e.exports={balance:"Balance_balance__1tKah",row__income:"Balance_row__income__KZfl9",row__expenses:"Balance_row__expenses__3eBN9"}},17:function(e,t,n){e.exports={history:"TransactionHistory_history__Mf9bg"}},18:function(e,t,n){e.exports={dashboard:"Dashboard_dashboard__2ph23"}},19:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=n(4),s=n(5),u=n(7),i=n(6),m=n(8),b=n(14),p=n(2),h=(n(24),n(13)),d=n.n(h),_=n(16),f=n(10),E=n.n(f),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={amount:""},n.handleInputChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(_.a)({},r,a))},n.onDeposit=function(){(0,n.props.onDeposit)(n.state.amount),n.setState({amount:""})},n.onWithdraw=function(){(0,n.props.onWithdraw)(n.state.amount),n.setState({amount:""})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.amount;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{className:E.a.input,onChange:this.handleInputChange,type:"number",name:"amount",value:e}),r.a.createElement("button",{className:E.a.button,onClick:this.onDeposit,type:"button"},"Deposit"),r.a.createElement("button",{className:E.a.button,onClick:this.onWithdraw,type:"button"},"Withdraw"))}}]),t}(a.Component),O=n(12),y=n.n(O),N=function(e){var t=e.balance,n=e.income,a=e.expenses;return r.a.createElement("section",{className:y.a.balance},r.a.createElement("span",null,r.a.createElement("span",{className:y.a.row__income},"\u2191"),n,"$"),r.a.createElement("span",null,r.a.createElement("span",{className:y.a.row__expenses},"\u2193"),a,"$"),r.a.createElement("span",null,"Balance: ",t,"$"))},v=n(17),j=n.n(v),g=function(e){var t=e.items;return r.a.createElement("table",{className:j.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.amount),r.a.createElement("td",null,e.date))}))))},I=n(18),C=n.n(I),D=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:[],balance:0},n.onDeposit=function(e){if(0===Number(e)||Number(e)<0)return p.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 !",{position:p.b.POSITION.TOP_RIGHT});var t={id:d()(),type:"deposit",amount:Number(e),date:(new Date).toLocaleString()};return n.setState((function(n){return{transactions:[t].concat(Object(b.a)(n.transactions)),balance:Number(n.balance)+Number(e)}})),""},n.onWithdraw=function(e){if(0===Number(e))return p.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 !",{position:p.b.POSITION.TOP_RIGHT});if(Number(e)>n.state.balance)return p.b.error("\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0441\u0447\u0435\u0442 !",{position:p.b.POSITION.TOP_RIGHT});var t={id:d()(),type:"withdraw",amount:Number(e),date:(new Date).toLocaleString()};n.setState((function(n){return{transactions:[t].concat(Object(b.a)(n.transactions)),balance:Number(n.balance)-Number(e)}}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.transactions,n=e.balance,a=t.reduce((function(e,t){return"deposit"===t.type?e+t.amount:e}),0),o=t.reduce((function(e,t){return"withdraw"===t.type?e+t.amount:e}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.dashboard},r.a.createElement(w,{onDeposit:this.onDeposit,onWithdraw:this.onWithdraw}),r.a.createElement(N,{balance:n,income:a,expenses:o}),r.a.createElement(g,{items:t}),r.a.createElement(p.a,null)))}}]),t}(a.Component),T=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null))}}]),t}(a.Component);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7cc9d98c.chunk.js.map