(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1365:function(e,t,a){},1367:function(e,t,a){e.exports=a.p+"static/media/favicon.011201ab.ico"},1368:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),i=a.n(r),o=a(51),c=a(31),l=a(5),s=a(8),m=a(18),d=a(16),u=a(17),p=a(67),h=a(29),g=a(94),f=a.n(g),b=a(11),y=a(1409),v=a(1413),E=a(234),w=a.n(E),k=a(235),x=a.n(k),O=a(236),D=a.n(O),M=a(1412),C=a(95),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleProfileMenuOpen=function(e){a.setState({anchorEl:e.currentTarget})},a.handleMenuClose=function(){a.setState({anchorEl:null}),a.handleMobileMenuClose()},a.handleMobileMenuOpen=function(e){a.setState({mobileMoreAnchorEl:e.currentTarget})},a.handleMobileMenuClose=function(){a.setState({mobileMoreAnchorEl:null})},a.state={anchorEl:null,mobileMoreAnchorEl:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChangeNavDrawer,a=e.classes,n=e.navDrawerOpen,r=this.state.anchorEl,o=Boolean(r);return i.a.createElement("div",null,i.a.createElement(y.a,{className:f()(a.appBar,Object(h.a)({},a.appBarShift,n))},i.a.createElement(M.a,null,i.a.createElement(v.a,{className:a.menuButton,color:"inherit","aria-label":"Open drawer",onClick:t},i.a.createElement(w.a,null)),i.a.createElement("div",{className:a.grow}),i.a.createElement("div",{className:a.sectionDesktop},i.a.createElement(v.a,{"aria-owns":o?"material-appbar":null,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.a.createElement(x.a,null))),i.a.createElement("div",{className:a.sectionMobile},i.a.createElement(v.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},i.a.createElement(D.a,null))))))}}]),t}(i.a.Component),j=Object(b.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(e.drawer.width,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},root:{width:"100%"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},title:Object(h.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.fade)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(9),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(h.a)({paddingTop:e.spacing(1),paddingRight:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(10),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),sectionDesktop:Object(h.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(h.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})(S),L=a(1446),T=a(1442),N=a(254),B=a(1414),I=a(1369),R=a(1415),_=a(1417),z=a(1416),P=a(237),W=a.n(P),A=a(238),Y=a.n(A),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,open:!1},a.anchor=null,a.handleClick=function(e){e.stopPropagation(),a.setState({open:!a.state.open,anchorEl:a.anchor})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"renderMiniMenus",value:function(){var e=this,t=this.props,a=t.menu,n=t.key,r=t.classes,c=this.state,l=c.open,s=c.anchorEl;return a.subMenus&&a.subMenus.length?i.a.createElement(B.a,{key:n,classes:{root:r.miniMenuItem},onClick:this.handleClick},i.a.createElement(R.a,{className:r.miniIcon},a.icon),i.a.createElement("div",{ref:function(t){e.anchor=t},style:{position:"absolute",right:0}}),i.a.createElement(N.a,{classes:{paper:r.popupSubMenus},open:l,anchorEl:s},a.subMenus.map(function(e,t){return i.a.createElement(o.b,{key:t,to:e.link},i.a.createElement(B.a,{key:t,classes:{root:r.menuItem}},i.a.createElement(R.a,{style:{color:"white"}},e.icon),i.a.createElement("span",null,e.text)))}))):i.a.createElement(o.b,{key:n,to:a.link},i.a.createElement(B.a,{classes:{root:r.miniMenuItem}},i.a.createElement(R.a,{className:r.miniIcon},a.icon)))}},{key:"renderLargeMenus",value:function(){var e=this.props,t=e.menu,a=e.key,n=e.classes,r=this.state.open;return t.subMenus&&t.subMenus.length?i.a.createElement("div",null,i.a.createElement(I.a,{key:a,classes:{root:n.menuItem},onClick:this.handleClick},i.a.createElement(R.a,{style:{color:"white"}},t.icon),i.a.createElement("span",null,t.text),r?i.a.createElement(W.a,{className:n.chevronIcon}):i.a.createElement(Y.a,{className:n.chevronIcon})),i.a.createElement(_.a,{in:this.state.open,timeout:"auto",unmountOnExit:!0},i.a.createElement(z.a,{component:"div",disablePadding:!0,classes:{root:n.subMenus}},t.subMenus.map(function(e,t){return i.a.createElement(o.b,{key:t,to:e.link},i.a.createElement(B.a,{key:t,classes:{root:n.menuItem}},i.a.createElement(R.a,{style:{color:"white"}},e.icon),i.a.createElement("span",null,e.text)))})))):i.a.createElement(o.b,{key:a,to:t.link},i.a.createElement(B.a,{classes:{root:n.menuItem}},i.a.createElement(R.a,{style:{color:"white"}},t.icon),i.a.createElement("span",null,t.text)))}},{key:"render",value:function(){return this.props.navDrawerOpen?this.renderLargeMenus():this.renderMiniMenus()}}]),t}(i.a.Component),G=Object(b.a)(function(e){return{chevronIcon:{float:"right",marginLeft:"auto"},subMenus:{paddingLeft:20},popupSubMenus:{backgroundColor:"rgb(33, 33, 33)",color:"white",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"},menuItem:{padding:"10px 16px",color:"white",fontSize:14,"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}},miniMenuItem:{color:"white",margin:"10px 0",fontSize:14,"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}},miniIcon:{margin:"0 auto",color:"white","&:hover":{backgroundColor:Object(C.fade)(e.palette.common.white,.5)},minWidth:"24px"}}},{withTheme:!0})(F),H=function(e){return e.menus.map(function(t,a){return i.a.createElement(G,{key:a,menu:t,navDrawerOpen:e.navDrawerOpen})})},U=Object(b.a)(function(e){return{drawerPaper:{width:e.drawer.width,backgroundColor:"rgb(33, 33, 33)",color:"white",borderRight:"0px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px"},drawerPaperClose:{overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.drawer.miniWidth},logo:{cursor:"pointer",fontSize:22,color:"white",lineHeight:"64px",fontWeight:300,backgroundColor:e.palette.primary[500],paddingLeft:40,height:64},avatarRoot:{padding:"16px 0 10px 15px",backgroundImage:"url("+a(284)+")",height:45,display:"flex"},avatarRootMini:{padding:"15px 0 10px 10px"},avatarIcon:{float:"left",display:"block",boxShadow:"0px 0px 0px 8px rgba(0,0,0,0.2)"},avatarSpan:{paddingTop:8,paddingLeft:24,display:"block",color:"white",fontWeight:300,textShadow:"1px 1px #444"},menuItem:{color:"white",fontSize:14}}},{withTheme:!0})(function(e){var t=e.navDrawerOpen,a=e.classes,n=e.theme,r=e.handleChangeNavDrawer,o=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:a.logo},"Engagement Tracker"),i.a.createElement(H,{menus:e.menus,navDrawerOpen:t}))};return i.a.createElement("div",null,i.a.createElement(T.a,{mdUp:!0},i.a.createElement(L.a,{variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:t,onClose:r,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},o())),i.a.createElement(T.a,{smDown:!0},i.a.createElement(L.a,{open:t,variant:"permanent",classes:{paper:f()(a.drawerPaper,!t&&a.drawerPaperClose)}},o())))}),K=a(1424),J=a(52),V=a(189),q=a.n(V),Q=a(162),Z=a(159),X=a(1419),$=a(161),ee=a(1420),te=a(163),ae=a(158),ne=a(1421),re=a(1422),ie=a(1423),oe=a(160),ce=[{title:"Default",primary:Q.a,secondary:Z.a},{title:"Sunset",primary:X.a,secondary:$.a},{title:"Greeny",primary:ee.a,secondary:te.a},{title:"Beach",primary:ae.a,secondary:ne.a},{title:"Tech",primary:Q.a,secondary:re.a},{title:"Deep Ocean",primary:ie.a,secondary:Z.a}],le={palette:{primary:Q.a,secondary:Z.a},error:oe.a,appBar:{height:57,color:Q.a[600]},drawer:{width:240,color:ae.a[900],backgroundColor:ae.a[900],miniWidth:56},raisedButton:{primaryColor:Q.a[600]},typography:{}},se=q()(le),me=se,de=Object(b.a)(function(){return{BackdropRoot:{backgroundColor:"transparent"},selectThemeBtn:{backgroundColor:"rgb(250, 250, 250)",color:"rgba(0, 0, 0, 0.87)",border:"1px solid rgba(0, 0, 0, 0.12)",height:"40px",margin:"16px 0",cursor:"pointer","&.hover":{boxShadow:"inset 0 0 0 20px rgba(0,0,0,.24)"}}}})(function(e){var t=e.rightDrawerOpen,a=e.handleChangeRightDrawer,n=e.handleChangeTheme,r=e.classes;return i.a.createElement(L.a,{variant:"temporary",anchor:"right",open:t,onClose:a,ModalProps:{BackdropProps:{classes:{root:r.BackdropRoot}}}},i.a.createElement("div",{style:{width:240,padding:16}},i.a.createElement("h6",{style:{paddingBottom:"10px"}},"Theme Setting"),ce.map(function(e){return i.a.createElement("div",{style:{paddingLeft:"5px"},key:e.title,onClick:function(){return n(e)},className:r.selectThemeBtn},i.a.createElement("em",null,e.title),i.a.createElement(K.a,{container:!0},i.a.createElement(K.a,{item:!0,xs:5},i.a.createElement("div",{style:{height:"10px",background:e.primary[500]}})),i.a.createElement(K.a,{item:!0,xs:5},i.a.createElement("div",{style:{height:"10px",background:e.secondary[500]}}))))})))}),ue=a(89),pe=a.n(ue),he=a(146),ge=a.n(he),fe=a(239),be=a.n(fe),ye={menus:[{text:"DashBoard",icon:i.a.createElement(ge.a,null),link:"/dashboard"},{text:"GBE Zoom Summary",icon:i.a.createElement(be.a,null),link:"/reports/gbezoomsummary"}],user:{userName:"".concat(pe.a.name.firstName()," ").concat(pe.a.name.lastName()),avatar:pe.a.image.avatar()},tablePage:{items:Array.from({length:105},function(e,t){return{id:t,name:pe.a.commerce.productName(),price:pe.a.commerce.price(),category:pe.a.commerce.productMaterial()}})},dashBoardPage:{chronicAbsence:[{id:1,title:"J. Smith",text:"Last engaged: 10/01/2020"},{id:2,title:"S. Pipps",text:"Last engaged: 10/20/2020"},{id:3,title:"W. Slate",text:"Last engaged: never"}],dayPeriod:[{name:"8:30",uv:3700},{name:"9:30",uv:3e3},{name:"13:30",uv:2e3},{name:"14:30",uv:2780}],engagementByDay:[{pv:2400},{pv:1398},{pv:9800},{pv:3908},{pv:4800},{pv:3490},{pv:4300}]}},ve=a(241),Ee=a.n(ve),we=a(240),ke=a.n(we),xe=a(255),Oe=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.color,a=e.title,n=e.value,r=e.Icon,o={content:{padding:"5px 10px",marginLeft:90,height:80},number:{display:"block",fontWeight:400,fontSize:18,color:ae.a[800]},text:{fontSize:20,fontWeight:300,color:ae.a[800]},iconSpan:{float:"left",height:90,width:90,textAlign:"center",backgroundColor:t},icon:{height:48,width:48,marginTop:20,maxWidth:"100%"}};return i.a.createElement(xe.a,null,i.a.createElement("span",{style:o.iconSpan},i.a.createElement("div",{style:{color:"white"}},i.a.createElement(r,{style:o.icon}))),i.a.createElement("div",{style:o.content},i.a.createElement("span",{style:o.text},a),i.a.createElement("div",{style:o.number},i.a.createElement(ke.a,{end:parseInt(n),separator:",",duration:2}))))}}]),t}(i.a.Component),De={navigation:{fontSize:15,fontWeight:300,color:ae.a[600],paddingBottom:15,display:"block"},title:{fontSize:24,fontWeight:300,marginBottom:20},paper:{padding:30},clear:{clear:"both"}},Me=function(){return i.a.createElement("div",null,i.a.createElement("h3",{style:De.navigation},"Dashboard (not real data)"),i.a.createElement(K.a,{container:!0,spacing:3},i.a.createElement(K.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(Oe,{Icon:ge.a,color:ie.a[600],title:"Engaged",value:"332"})),i.a.createElement(K.a,{item:!0,xs:12,sm:6,md:6},i.a.createElement(Oe,{Icon:Ee.a,color:$.a[600],title:"Absent",value:"50"}))))},Ce=a(192),Se=a(2),je=a.n(Se),Le=a(88),Te=a(1431),Ne=a(1433),Be=a(1429),Ie=a(1430),Re=a(1432),_e=a(1434),ze=a(1435),Pe=a(1436),We=a(147),Ae=a(1447),Ye=a(1425),Fe=a(1443),Ge=a(253),He=a(41),Ue=a(1439),Ke=a(147),Je=a(1355).CosmosClient,Ve=Ke.endpoint,qe=Ke.key,Qe=Ke.databaseId,Ze=new Je({endpoint:Ve,key:qe}).database(Qe).container("meetings"),Xe=a(226),$e=a(227),et=a(228);Xe.extend($e),Xe.extend(et);var tt={meetingsFetch:function(){var e=Object(Le.a)(je.a.mark(function e(t){var a,n,r;return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={query:t},e.prev=1,e.next=4,Ze.items.query(a).fetchAll();case 4:return n=e.sent,r=n.resources,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}(),getAllItems:function(){var e=Object(Le.a)(je.a.mark(function e(){var t,n,r,i,o;return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={query:"SELECT * from c"},n=a(207),e.next=4,Ze.items.query(t).fetchAll();case 4:r=e.sent,i=r.resources,o=[],i.forEach(function(e){o.push(e),console.log(e)});try{n.writeFileSync("./alldata.json",JSON.stringify(o))}catch(c){console.error(c)}case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},at=a(226),nt=a(227),rt=a(228);function it(e,t,a,n){var r=[],i=1+at(a).diff(t,"day"),o=at(t).utc().format("YYYY-MM-DD");n.forEach(function(e){var t=function(e,t){for(var a,n={day:-1,zoom:-1},r=at(e).tz("America/Los_Angeles"),i=60*r.hour()+r.minute(),o=[510,570,810,870],c=0;c<o.length;c++)(a=i-o[c])>=-5&&a<=15&&(n.zoom=c),"5"===r.format("d")&&i>=505&&i<=625&&(n.zoom=4,console.log("Friday zoom!"));return n.day=at(e).diff(t,"day"),n}(e.start_time,o);e.pos=t;var a=e.participants;t.zoom>=0&&t.day>=0&&a.forEach(function(e){var a;if(r.length>0&&(a=r.find(function(t){return t.name===e.name})),a)a.days[t.day].zooms[t.zoom]+=e.duration/60;else if(e.duration>90){var n=Object(J.a)({},e);n.days=new Array(i);for(var o=0;o<i;o++){n.days[o]={zooms:[0,0,0,0,0]}}n.days[t.day].zooms[t.zoom]+=e.duration/60,r.push(n)}})});var c=r.findIndex(function(t){return t.name===e});if(c>0){var l=r[c];r=[l].concat(r.slice(0,c).concat(r.slice(c+1,r.length)))}return{participants:r.slice(0,1).concat(r.slice(1,r.length).sort(function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})),numDays:i}}at.extend(nt),at.extend(rt);var ot=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={meetings:[],participants:[],host:"",endDate:at().format("YYYY-MM-DD"),startDate:at().add(-4,"day").format("YYYY-MM-DD"),numDays:5},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"fetchTheData",value:function(){var e=Object(Le.a)(je.a.mark(function e(){var t,a,n,r,i,o,c,l,s;return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.host,n=t.startDate,r=t.endDate,""!==a){e.next=3;break}return e.abrupt("return");case 3:return o=this.composeQuery(a,n,r),e.next=6,tt.meetingsFetch(o);case 6:(i=e.sent)?(c=it(a,n,r,i),l=c.numDays,s=c.participants,this.setState(Object(J.a)({},this.state,{participants:s,meetings:i,numDays:l}))):this.setState(Object(J.a)({},this.state,{participants:null,meetings:i,numDays:0}));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(Le.a)(je.a.mark(function e(){return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.fetchTheData();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(Le.a)(je.a.mark(function e(t,a){return je.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.host!==a.host||this.state.startDate!==a.startDate||this.state.endDate!==a.endDate){e.next=3;break}e.next=5;break;case 3:return e.next=5,this.fetchTheData();case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"renderMeetingList",value:function(){var e=this.state.meetings,t=[];if(!(e.length<=0))return t.push(i.a.createElement("h2",{key:1001},"Meetings")),t.push(i.a.createElement("p",{key:1002})),t.push(i.a.createElement("em",{key:1003},i.a.createElement("p",null,"If an instructional Zoom does not appear on this list, please contact Mark "))),e.forEach(function(e){var a=e.participants?e.participants.length:0,n=at(e.start_time).tz("America/Los_Angeles").format("ddd MM-DD hh:mm"),r=Math.round(e.duration/60),o="".concat(n," (").concat(e.pos.zoom>=0?We.zoomTimesShort[e.pos.zoom]:"other",") ").concat(a," participants for ").concat(r,"m");t.push(i.a.createElement("p",{key:e.id},o))}),t}},{key:"composeQuery",value:function(e,t,a){var n=at(t).utc().format("YYYY-MM-DDThh:mm:ss"),r=at(a).utc().add(1,"day").format("YYYY-MM-DDThh:mm:ss");return"SELECT * FROM meetings m WHERE m.start_time >= '".concat(n,"' and m.end_time <= '").concat(r,"' and startswith(m.topic, '").concat(e,"')")}},{key:"renderForm",value:function(){var e=this,t=this.state,a=t.host,n=t.startDate,r=t.endDate,o=[];return o.push(i.a.createElement("option",{value:""},"")),We.gbeStaff.forEach(function(e){var t=i.a.createElement("option",{value:e.name},e.name);o.push(t)}),i.a.createElement("div",null,i.a.createElement(K.a,{container:!0,justify:"space-around"},i.a.createElement(Ye.a,null,i.a.createElement(Ae.a,{htmlFor:"host-native-simple"},"Teacher"),i.a.createElement(Fe.a,{native:!0,value:a,onChange:function(t){e.setState(Object(J.a)({},e.state,{host:t.target.value}))},inputProps:{name:"host",id:"host-native-simple"}},o)),i.a.createElement(He.a,{utils:Ge.a},i.a.createElement(Ue.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"startDate",label:"Start Date",value:at(n).utc(),onChange:function(t){var a=at(t).format("YYYY-MM-DD");e.setState(Object(J.a)({},e.state,{startDate:a}))},autoOk:!0,disableFuture:!0,maxDate:at(r).utc(),KeyboardButtonProps:{"aria-label":"change date"}}),i.a.createElement(Ue.a,{disableToolbar:!0,variant:"inline",format:"yyyy-MM-dd",margin:"normal",id:"endDate",label:"End Date",value:at(r).utc(),onChange:function(t){var a=at(t).format("YYYY-MM-DD");e.setState(Object(J.a)({},e.state,{endDate:a}))},autoOk:!0,disableFuture:!0,minDate:at(n).utc(),KeyboardButtonProps:{"aria-label":"change date"}}))))}},{key:"renderHeadings",value:function(){var e=[],t=this.state,a=t.numDays,n=t.startDate,r=at(n);if(!(a<=0)){e.push(i.a.createElement(Be.a,{key:-1},"Participant"));for(var o=0;o<a;o++){var c=r.add(o,"day");e.push(i.a.createElement(Be.a,{key:o},c.format("ddd"),i.a.createElement("br",null),c.format("MM-DD")))}return e}}},{key:"renderParticipant",value:function(e){var t=this.state.startDate,a=[];e.days||console.log("blek");for(var n=0;n<this.state.numDays;n++){var r="";if("Fri"===at(t+"T00:00:00").add(n,"day").format("ddd"))r+=Math.round(e.days[n].zooms[4]);else{r="";for(var o=0;o<e.days[n].zooms.length-1;o++)r+=Math.round(e.days[n].zooms[o]).toString().padStart(3," ")+" "}a.push(i.a.createElement(Be.a,null,r))}return e&&0!==this.state.numDays?i.a.createElement(Ie.a,{key:e.name,hover:!0},i.a.createElement(Be.a,null,e.name),a):(e=i.a.createElement("p",null,"No meetings"),i.a.createElement(Ie.a,{key:e.name,hover:!0},i.a.createElement(Be.a,null,"No regular meetings found.")))}},{key:"renderSummary",value:function(e){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Te.a,null,i.a.createElement(Re.a,null,i.a.createElement(Ie.a,null,this.renderHeadings())),i.a.createElement(Ne.a,null,e.map(function(e){return t.renderParticipant(e)}))),this.renderMeetingList())}},{key:"render",value:function(){var e=this.state,t=e.meetings,a=e.participants,n=e.loading,r=e.hasError;return i.a.createElement(_e.a,null,i.a.createElement(ze.a,null,this.renderForm(),i.a.createElement(Pe.a,null),n?i.a.createElement("div",null,"Loading..."):r?i.a.createElement("div",null,"Error occured."):this.renderSummary(a,t)))}}]),t}(i.a.Component),ct=function(){return i.a.createElement("div",null,i.a.createElement("div",null,"404 Page Not Found"))},lt=a(1437),st=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={theme:me,rightDrawerOpen:!1,navDrawerOpen:!!(window&&window.innerWidth&&window.innerWidth>=me.breakpoints.values.md)},a.handleChangeRightDrawer=a.handleChangeRightDrawer.bind(Object(p.a)(Object(p.a)(a))),a.handleChangeNavDrawer=a.handleChangeNavDrawer.bind(Object(p.a)(Object(p.a)(a))),a.handleChangeTheme=a.handleChangeTheme.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChangeNavDrawer",value:function(){this.setState({navDrawerOpen:!this.state.navDrawerOpen})}},{key:"handleChangeRightDrawer",value:function(){this.setState({rightDrawerOpen:!this.state.rightDrawerOpen})}},{key:"handleChangeTheme",value:function(e){var t,a=(t={palette:e},q()(Object(J.a)({},le,t)));this.setState({theme:a})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.navDrawerOpen,n=t.rightDrawerOpen,r=t.theme;return i.a.createElement(lt.a,{theme:r},i.a.createElement(j,{handleChangeNavDrawer:this.handleChangeNavDrawer,navDrawerOpen:a}),i.a.createElement(U,{navDrawerOpen:a,handleChangeNavDrawer:this.handleChangeNavDrawer,menus:ye.menus}),i.a.createElement(Ce.a,{color:"inherit",classes:{root:e.settingBtn},onClick:this.handleChangeRightDrawer},i.a.createElement("i",{className:"fa fa-cog fa-3x"})),i.a.createElement(de,{rightDrawerOpen:n,handleChangeRightDrawer:this.handleChangeRightDrawer,handleChangeTheme:this.handleChangeTheme}),i.a.createElement("div",{className:f()(e.container,!a&&e.containerFull)},i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:Me}),i.a.createElement(c.a,{path:"/dashboard",component:Me}),i.a.createElement(c.a,{path:"/reports/gbezoomsummary",component:ot}),i.a.createElement(c.a,{component:ct}))))}}]),t}(i.a.Component),mt=Object(b.a)(function(){return{container:Object(h.a)({margin:"80px 20px 20px 15px",paddingLeft:me.drawer.width},me.breakpoints.down("sm"),{paddingLeft:0}),containerFull:Object(h.a)({paddingLeft:me.drawer.miniWidth},me.breakpoints.down("sm"),{paddingLeft:0}),settingBtn:{top:80,backgroundColor:"rgba(0, 0, 0, 0.3)",color:"white",width:48,right:0,height:48,opacity:.9,padding:0,zIndex:999,position:"fixed",minWidth:48,borderTopRightRadius:0,borderBottomRightRadius:0}}})(st),dt=a(1428),ut=a(1441),pt=a(251),ht=a.n(pt),gt=a(252),ft=a.n(gt),bt=a(1445),yt=a(1438),vt=function(){var e={loginContainer:{minWidth:320,maxWidth:400,height:"auto",position:"absolute",top:"20%",left:0,right:0,margin:"auto"},paper:{padding:20,overflow:"auto"},buttonsDiv:{textAlign:"center",padding:10},flatButton:{color:ae.a[500],margin:5},checkRemember:{style:{float:"left",maxWidth:180,paddingTop:5},labelStyle:{color:ae.a[500]},iconStyle:{color:ae.a[500],borderColor:ae.a[500],fill:ae.a[500]}},loginBtn:{float:"right"},btn:{background:"#4f81e9",color:"white",padding:7,borderRadius:2,margin:2,fontSize:13},btnFacebook:{background:"#4f81e9"},btnGoogle:{background:"#e14441"},btnSpan:{marginLeft:5}};return i.a.createElement(lt.a,{theme:me},i.a.createElement("div",null,i.a.createElement("div",{style:e.loginContainer},i.a.createElement(xe.a,{style:e.paper},i.a.createElement("form",null,i.a.createElement(bt.a,{hintText:"E-mail",label:"E-mail",fullWidth:!0}),i.a.createElement("div",{style:{marginTop:16}},i.a.createElement(bt.a,{hintText:"Password",label:"Password",fullWidth:!0,type:"password"})),i.a.createElement("div",{style:{marginTop:10}},i.a.createElement(yt.a,{control:i.a.createElement(ut.a,{label:"Remember me",style:e.checkRemember.style,labelStyle:e.checkRemember.labelStyle,iconStyle:e.checkRemember.iconStyle}),label:"Remember me"}),i.a.createElement(o.b,{to:"/"},i.a.createElement(dt.a,{variant:"contained",color:"primary",style:e.loginBtn},"Login"))))),i.a.createElement("div",{style:e.buttonsDiv},i.a.createElement(dt.a,{href:"/",style:e.flatButton},i.a.createElement(ht.a,null),i.a.createElement("span",{style:{margin:5}},"Register")),i.a.createElement(dt.a,{href:"/",style:e.flatButton},i.a.createElement(ft.a,null),i.a.createElement("span",{style:{margin:5}},"Forgot Password?"))),i.a.createElement("div",{style:e.buttonsDiv},i.a.createElement(o.b,{to:"/",style:Object(J.a)({},e.btn,e.btnFacebook)},i.a.createElement("i",{className:"fa fa-facebook fa-lg"}),i.a.createElement("span",{style:e.btnSpan},"Log in with Facebook")),i.a.createElement(o.b,{to:"/",style:Object(J.a)({},e.btn,e.btnGoogle)},i.a.createElement("i",{className:"fa fa-google-plus fa-lg"}),i.a.createElement("span",{style:e.btnSpan},"Log in with Google"))))))},Et=i.a.createElement(o.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/login",component:vt}),i.a.createElement(c.a,{path:"/",component:mt}))),wt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function kt(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(1365),a(1366);a(1367),Object(n.render)(Et,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/engagement-tracker",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/engagement-tracker","/service-worker.js");wt?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):kt(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):kt(e)})}}()},147:function(e,t,a){a(1353).config(),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/engagement-tracker"})),e.exports={NODE_ENV:"production",HOST:Object({NODE_ENV:"production",PUBLIC_URL:"/engagement-tracker"}).HOST||"127.0.0.1",PORT:Object({NODE_ENV:"production",PUBLIC_URL:"/engagement-tracker"}).PORT||3e3,endpoint:"https://ssd.documents.azure.com:443/",key:"x5WDW0rW4jGz6QWxWrwfxNLbgwig58TzJIwgBcRWvfTn1UIWGY1WiH2hH0sTVEjFOh2aEGvmMAuUNPc55AJ82w==",databaseId:"ssddb",partitionKey:{kind:"Hash",paths:["/ssdpk"]},gbeStaff:[{name:"Alania Solada",grade:"2/3",meeting_id:"8652580903"},{name:"Carlene Crossman",grade:"5",course:"Science",meeting_id:"4682427828"},{name:"David Monson",grade:"C",meeting_id:"5676717067"},{name:"Gail Bowers",grade:"Music",meeting_id:"2225508614"},{name:"Kimberly Skadan",grade:"5",meeting_id:"9887799526"},{name:"Leslie Best",grade:"5",course:"ELA",meeting_id:"6887151159"},{name:"Leslie Neville",grade:"3",meeting_id:"3798415486"},{name:"Lacey Blue",grade:"P",meeting_id:"9770935917"},{name:"Linda Michael",grade:"SE",meeting_id:"3740908194 "},{name:"Lindsey Haworth",grade:"ELA",course:"ELA",meeting_id:"9321149699"},{name:"Lisa Thebo",grade:"P",meeting_id:"8372589523"},{name:"Madison Berry",grade:"4",meeting_id:"9362066639"},{name:"Margaret Frame",grade:"2",meeting_id:"9321149699"},{name:"Meagan Hughes",grade:"K",meeting_id:"8357546134"},{name:"Melisa Amundson",grade:"K",meeting_id:"2775969009"},{name:"Melissa Jones",grade:"2",meeting_id:"9380236575"},{name:"Nicole Comfort",grade:"P",meeting_id:"3610177132"},{name:"Patti Bowers",grade:"1",meeting_id:"4800124624"},{name:"Phyllis Tubbs",grade:"1",meeting_id:"9994515344"},{name:"Rachel Gossett",grade:"3",meeting_id:"4273112841"},{name:"Robin Morrill-Briganti",grade:"SE",meeting_id:"2461500739"},{name:"Sandy Peers",grade:"P",meeting_id:"4854704398"},{name:"Shannon Clune",grade:"P",meeting_id:"2185623350"},{name:"Sheryl Klennert",grade:"4",meeting_id:"9399313327"},{name:"Stormy Evans",grade:"Library",meeting_id:"3875245472"},{name:"Tamara McNew",grade:"3",meeting_id:"5076650048"},{name:"Tanya Christian",grade:"1",meeting_id:"9823336501"},{name:"Tiffany Kerr",grade:"K",meeting_id:"7619200780"}],zoomTimesShort:["8:30a","9:30a","1:30p","2:30p","Fri"],zoomTimes:[{grade:3,zooms:[{topic:"Math",start:"08:30",minutes:30},{topic:"Language Arts",start:"09:30",minutes:30},{topic:"Math",start:"13:30",minutes:30},{topic:"Language Arts",start:"14:30",minutes:30},{topic:"Friday Office",start:"08:30",minutes:90}]},{grade:4,zooms:[{topic:"Math",start:"08:30",minutes:30},{topic:"Language Arts",start:"09:30",minutes:30},{topic:"Math",start:"13:30",minutes:30},{topic:"Math",start:"14:30",minutes:30},{topic:"Friday Office",start:"08:30",minutes:90}]},{grade:5,zooms:[{topic:"Reading",start:"08:30",minutes:30},{topic:"Language Arts",start:"09:30",minutes:30},{topic:"Math",start:"13:30",minutes:30},{topic:"Math",start:"14:30",minutes:30},{topic:"Friday Office",start:"08:30",minutes:90}]}]}},275:function(e,t,a){e.exports=a(1368)},284:function(e,t,a){e.exports=a.p+"static/media/material_bg.abe4a318.png"}},[[275,1,2]]]);
//# sourceMappingURL=main.f1343776.chunk.js.map