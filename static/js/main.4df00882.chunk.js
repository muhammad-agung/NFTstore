(this.webpackJsonpauthwebreact=this.webpackJsonpauthwebreact||[]).push([[0],{103:function(e,t,i){},108:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(19),c=i.n(r),o=(i(68),i(69),i(3)),s=i(16),d=i(17),l=i(23),b=i(22),h=i(111),p=i(57),g=i.n(p),f=i(58),j=i(36),x=i.n(j),m=(i(47),i(43)),u=i.n(m),k=i(59),O=i(60),y=i(1),v=function(e){Object(l.a)(i,e);var t=Object(b.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pageOneDatas:[],pageTwoDatas:[],pageThreeDatasHalf:[]},e}return Object(d.a)(i,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://api.opensea.io/api/v1/assets?limit=3").then((function(t){var i=t.data.assets;e.setState({pageOneDatas:i})})),u.a.get("https://api.opensea.io/api/v1/collections?limit=300").then((function(t){for(var i=[],n=0;n<t.data.collections.length&&10!=i.length;n++)null!=t.data.collections[n].large_image_url&&i.push(t.data.collections[n]);e.setState({pageTwoDatas:i})}))}},{key:"render",value:function(){var e=k.data.nfts.map((function(e){return Object(y.jsxs)("div",{style:{width:"120%",display:"flex",flexDirection:"row",marginBottom:"5%",paddingTop:"0.5%",height:"14.4%",borderColor:"grey",borderStyle:"solid",borderWidth:"1px",boxShadow:"5px",borderRadius:25,backgroundColor:"hsl(260, 38%, 95%)"},children:[Object(y.jsx)("div",{style:{fontSize:"20px",width:"20%",height:"100%"},children:Object(y.jsx)("img",{src:e.image,style:{maxHeight:"90%",width:"50%",borderRadius:100}})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",fontSize:"20px",width:"50%",height:"100%"},children:[Object(y.jsx)("div",{style:{flex:1,fontWeight:"bold"},title:e.name,children:e.name.length<20?e.name:e.name.substring(0,18)+"..."}),Object(y.jsxs)("div",{style:{flex:1},children:[e.price," ETH"]})]}),Object(y.jsx)("div",{style:{fontSize:"20px",width:"30%",height:"100%",paddingTop:"3%",fontWeight:"bold"},children:"20%"})]})})),t=O.data.nfts.map((function(e){return Object(y.jsxs)("div",{style:{width:"120%",display:"flex",flexDirection:"row",marginBottom:"5%",paddingTop:"0.5%",height:"14.4%",borderColor:"grey",borderStyle:"solid",borderWidth:"1px",boxShadow:"5px",borderRadius:25,backgroundColor:"hsl(260, 38%, 95%)"},children:[Object(y.jsx)("div",{style:{fontSize:"20px",width:"20%",height:"100%"},children:Object(y.jsx)("img",{src:e.image,style:{maxHeight:"90%",width:"50%",borderRadius:100}})}),Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column",fontSize:"20px",width:"50%",height:"100%"},children:[Object(y.jsx)("div",{style:{flex:1,fontWeight:"bold"},title:e.name,children:e.name.length<20?e.name:e.name.substring(0,18)+"..."}),Object(y.jsxs)("div",{style:{flex:1},children:[e.price," ETH"]})]}),Object(y.jsx)("div",{style:{fontSize:"20px",width:"30%",height:"100%",paddingTop:"3%",fontWeight:"bold"},children:"20%"})]})}));return Object(y.jsx)("div",{children:Object(y.jsxs)(f.a,{children:[Object(y.jsxs)("section",{id:"main",style:w.pageOneContainer,children:[Object(y.jsx)(g.a,{autoplay:!0,autoplay_speed:3500,children:this.state.pageOneDatas.map((function(e){return Object(y.jsx)("div",{style:i.CARD_STYLE,children:Object(y.jsx)("img",{src:e.image_url,style:w.image})})}))}),Object(y.jsxs)("div",{style:w.textBody,children:[Object(y.jsx)("div",{style:w.title,children:"Discover, collect, and sell extraordinary NFTs"}),Object(y.jsx)("div",{style:w.info,children:"Discover, collect, and sell extraordinary NFTs"}),Object(y.jsx)("div",{children:Object(y.jsx)(h.a,{style:w.direction,children:"Scroll below to explore!"})})]})]}),Object(y.jsx)("section",{id:"nftCreators",children:Object(y.jsxs)("div",{style:C.container,children:[Object(y.jsx)("div",{style:C.title,children:Object(y.jsx)("div",{children:"Top Creators"})}),Object(y.jsx)("div",{style:{flex:2},children:Object(y.jsx)(x.a,{autoPlay:!0,responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},sliderClass:{width:"5%"},children:this.state.pageTwoDatas.map((function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{style:{height:"300px",width:"500px",borderRadius:10},src:e.large_image_url}),Object(y.jsxs)("p",{style:{color:"black",fontSize:"25%",fontWeight:"bold"},title:e.name,children:[" Artist: ",e.name.length<68?e.name:e.name.substring(0,68)]})]})}))})})]})}),Object(y.jsx)("section",{id:"nftList",style:D.container,children:Object(y.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(y.jsx)("div",{style:D.title,children:"Top NFT Collection"}),Object(y.jsxs)("div",{style:{flex:1},children:[window.innerWidth<1500?Object(y.jsx)("div",{style:{color:"black",marginTop:"5%",flex:1},children:Object(y.jsx)("div",{style:{flex:1},children:e})}):Object(y.jsxs)("div",{style:{color:"black",marginTop:"5%",flex:1,flexDirection:"row",display:"flex"},children:[Object(y.jsx)("div",{style:{flex:1},children:e}),Object(y.jsx)("div",{style:{margin:"5%"}}),Object(y.jsx)("div",{style:{flex:1},children:t})]}),Object(y.jsxs)("div",{style:{color:"black",marginTop:"10%",fontSize:"35%",backgroundColor:"transparent",borderColor:"transparent"},children:["Click ",Object(y.jsx)("a",{href:"/home",children:"here"})," to explore more NFTs!"]})]})]})})]})})}}],[{key:"CARD_STYLE",get:function(){return{marginTop:"-300px",height:"500px",width:"500px",textAlign:"center",background:"#52C0F5",color:"#FFF",fontSize:"12px",borderRadius:"10px"}}}]),i}(n.Component),w={pageOneContainer:{height:"100%",textTransform:"none",backgroundImage:'url("https://thumbs.dreamstime.com/b/multi-colored-watercolor-splash-abstract-vintage-canvas-background-multi-colored-watercolor-splash-abstract-colorful-vintage-115576968.jpg")',backgroundSize:"cover"},textBody:{height:"40%"},title:{paddingTop:"400px",fontSize:"35%",fontWeight:"bold",color:"black"},info:{fontSize:"20px",color:"black"},image:{width:"500px",height:"500px",borderRadius:"10px"},direction:{fontSize:"20px",color:"grey",border:"none",backgroundColor:"transparent"}},C={container:{height:"100%",margin:"auto",width:"100%",display:"flex",flexDirection:"column",backgroundImage:'url("https://c.neh.tw/thumb/f/720/5469586900123648.jpg")',backgroundSize:"cover"},title:{flex:1,width:"100%",marginTop:"10%",fontSize:"70%",color:"black",fontWeight:"bold"},artistName:{color:"black",fontSize:"15%"},creatorImage:{flex:1,width:"80%",height:"80%"}},D={container:{height:"100%",backgroundSize:"cover"},title:{color:"black",fontSize:"70%",fontWeight:"bold",flex:1},cards:{flex:1,flexDirection:"column",color:"black",backgroundColor:"silver",fontSize:"10px",height:"70%",margin:"0.5%"}},S=v,A=(i(56),function(e){Object(l.a)(i,e);var t=Object(b.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(d.a)(i,[{key:"render",value:function(){return Object(y.jsxs)(x.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},children:[Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=5"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"500px",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=6"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=7"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=8"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=9"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=10"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=11"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{src:"https://picsum.photos/500/500?random=12"}),Object(y.jsx)("p",{style:{color:"black",fontSize:"15%",position:"fixed",width:"10%",maxWidth:"10%",backgroundColor:"grey"},children:" Artist: wangan midnight"})]})]})}}]),i}(a.a.Component));var T=function(){return Object(y.jsx)("div",{className:"Register",children:Object(y.jsx)("header",{className:"App-header",children:Object(y.jsx)("p",{children:"Register page."})})})},z=i(44),F=i(113),I=i(112),N=i(114),R=(i(103),function(e){Object(l.a)(i,e);var t=Object(b.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).state={visible:!1,visible2:!1},n}return Object(d.a)(i,[{key:"show",value:function(){this.setState({visible:!0})}},{key:"show2",value:function(){this.setState({visible2:!0})}},{key:"hide",value:function(){this.setState({visible:!1})}},{key:"hide2",value:function(){this.setState({visible2:!1})}},{key:"render",value:function(){var e=20*window.innerWidth/100,t=60*window.innerHeight/100;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(z.a,{width:e,height:t,customStyles:{borderRadius:10},visible:this.state.visible,onClose:this.hide.bind(this),children:Object(y.jsx)("div",{children:Object(y.jsxs)("form",{style:{display:"flex",flexDirection:"column",position:"inherit",fontSize:"200%"},children:[Object(y.jsx)("label",{style:{fontWeight:"bold"},children:"Login"}),Object(y.jsx)("label",{children:"Email"}),Object(y.jsx)("input",{style:{borderRadius:10}}),Object(y.jsx)("label",{style:{marginTop:"5%"},children:"Password"}),Object(y.jsx)("input",{style:{borderRadius:10}}),Object(y.jsx)(h.a,{style:{marginTop:"5%"},children:"Login"}),Object(y.jsx)(h.a,{style:{marginTop:"5%",backgroundColor:"#4267B2",borderColor:"#4267B2"},children:"Facebook"}),Object(y.jsx)(h.a,{style:{marginTop:"5%",backgroundColor:"#DE5246",borderColor:"#DE5246"},children:"Google"}),Object(y.jsx)("a",{style:{marginTop:"5%",color:"#0d6efd"},onClick:this.show2.bind(this),children:Object(y.jsx)("u",{children:"Register"})}),Object(y.jsx)("a",{style:{marginTop:"5%"},href:"/recovery",children:"Forgot Password"})]})})}),Object(y.jsx)(z.a,{width:e,height:t,customStyles:{borderRadius:10},visible:this.state.visible2,onClose:this.hide2.bind(this),children:Object(y.jsx)("div",{children:Object(y.jsxs)("form",{style:{display:"flex",flexDirection:"column",position:"inherit",fontSize:"200%"},children:[Object(y.jsx)("label",{style:{fontWeight:"bold"},children:"Register"}),Object(y.jsx)("label",{children:"Email"}),Object(y.jsx)("input",{style:{borderRadius:10}}),Object(y.jsx)("label",{style:{marginTop:"5%"},children:"Password"}),Object(y.jsx)("input",{style:{borderRadius:10}}),Object(y.jsx)(h.a,{style:{marginTop:"5%"},children:"Register"}),Object(y.jsx)(h.a,{style:{marginTop:"5%",backgroundColor:"#4267B2",borderColor:"#4267B2"},children:"Facebook"}),Object(y.jsx)(h.a,{style:{marginTop:"5%",backgroundColor:"#DE5246",borderColor:"#DE5246"},children:"Google"})]})})}),Object(y.jsx)(F.a,{collapseOnSelect:!0,fixed:"top",expand:"sm",bg:"transparent",variant:"light",children:Object(y.jsxs)(I.a,{children:[Object(y.jsx)(F.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(y.jsx)(F.a.Collapse,{className:"justify-content-end",children:Object(y.jsx)(N.a,{children:Object(y.jsx)(N.a.Link,{onClick:this.show.bind(this),className:"title",style:{fontSize:"30px"},children:" LOGIN"})})})]})})]})}}]),i}(a.a.Component));var W=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(R,{}),Object(y.jsxs)(o.c,{children:[Object(y.jsx)(o.a,{path:"/NFTstore/welcome",element:Object(y.jsx)(S,{})}),Object(y.jsx)(o.a,{path:"/login",element:Object(y.jsx)(A,{})}),Object(y.jsx)(o.a,{path:"/register",element:Object(y.jsx)(T,{})})]})]})},U=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,115)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),r(e),c(e)}))},B=i(42);i(107);c.a.render(Object(y.jsx)(B.a,{children:Object(y.jsx)(W,{})}),document.getElementById("root")),U()},59:function(e){e.exports=JSON.parse('{"status":"success","stats":{"total":1437880,"firstSeen":1593698813},"data":{"stats":{"total":1437880,"firstSeen":1593698813},"nfts":[{"id":"74b316ffa4c268db68bc62f4b64a00d15fb966d49ffc7e6847537f393364482a","createdAt":1638746213,"registryId":"9efe97819a371dce7d34b39e805539fe76213cc60ae6071a40b44d1860f42cec","dappSlug":"superrare","dappName":"SuperRare","tokenId":"2123","name":"Some Other Asshole","image":"https://cdn.coinranking.com/nft/0x41A322b28D0fF354040e2CbC676F0320d8c8850d/2123.gif","video":null,"price":"550","priceInDollar":"2282758.50000000014025","auctionCreatedAt":1638746213,"externalUrl":"https://superrare.co/artwork/2123","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/74b316ffa4-superrare-some-other-asshole"},{"id":"fa12d105dbff3af8d6061562b087387ba1ac8a104d317173ca70f68462817898","createdAt":1616589206,"registryId":"9efe97819a371dce7d34b39e805539fe76213cc60ae6071a40b44d1860f42cec","dappSlug":"superrare","dappName":"SuperRare","tokenId":"14","name":"Death Dip","image":"https://cdn.coinranking.com/nft/0x41A322b28D0fF354040e2CbC676F0320d8c8850d/14.gif","video":null,"price":"1000","priceInDollar":"1791430.000000000063665","auctionCreatedAt":1616589207,"externalUrl":"https://superrare.co/artwork/14","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/fa12d105db-superrare-death-dip"},{"id":"df38d6c31ce422b0ada9961f475fa61f3dbed16ab2b071a5149e39c2d7511a81","createdAt":1623427269,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"78000135","name":"Fidenza #135","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/78000135.png","video":null,"price":"437.5","priceInDollar":"1533126.87499999998425","auctionCreatedAt":1631140921,"externalUrl":"https://www.artblocks.io/token/78000135","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/df38d6c31c-art-blocks-fidenza-135"},{"id":"556d080618886867786caaa402ce9039448070fccbad40fb56d026b9d0fd59aa","createdAt":1623427638,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"78000718","name":"Fidenza #718","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/78000718.png","video":null,"price":"240","priceInDollar":"1121580","auctionCreatedAt":1636831834,"externalUrl":"https://www.artblocks.io/token/78000718","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/556d080618-art-blocks-fidenza-718"},{"id":"01ee066c07a62293792c8a30e3029ada8edbae4a45ec632e67a7e39488abac75","createdAt":1629984420,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"13000789","name":"Ringers #789","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/13000789.png","video":null,"price":"350","priceInDollar":"1083970.99999999998075","auctionCreatedAt":1629984421,"externalUrl":"https://www.artblocks.io/token/13000789","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/01ee066c07-art-blocks-ringers-789"}]}}')},60:function(e){e.exports=JSON.parse('{"status":"success","stats":{"total":1437880,"firstSeen":1593698813},"data":{"stats":{"total":1437880,"firstSeen":1593698813},"nfts":[{"id":"14de2413405b15801f8357fc6c29de847d06b4ee791fcb7bf296af1137333a3c","createdAt":1629509065,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"22000009","name":"The Eternal Pump #9","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/22000009.png","video":null,"price":"320","priceInDollar":"1039862.40000000005248","auctionCreatedAt":1629509065,"externalUrl":"https://www.artblocks.io/token/22000009","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/14de241340-art-blocks-the-eternal-pump-9"},{"id":"f48514abbb7ae9ecf789ba6cc571f7c419a703505333ad650f255798917c4de6","createdAt":1623428242,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"78000913","name":"Fidenza #913","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/78000913.png","video":null,"price":"250","priceInDollar":"944157.50000000002725","auctionCreatedAt":1630594285,"externalUrl":"https://www.artblocks.io/token/78000913","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/f48514abbb-art-blocks-fidenza-913"},{"id":"53a5cfae042fcbd98e13301bcac4afdf97139822b91f486fc8a8ffe41a950dc0","createdAt":1623427494,"registryId":"b457dc64ec3401460652f74ca8bac8dcd5215649e6c5902d5c1ab0d3852344c3","dappSlug":"art-blocks","dappName":"Art Blocks","tokenId":"78000607","name":"Fidenza #607","image":"https://cdn.coinranking.com/nft/0xa7d8d9ef8D8Ce8992Df33D8b8CF4Aebabd5bD270/78000607.png","video":null,"price":"300","priceInDollar":"914301.0000000000219","auctionCreatedAt":1628787175,"externalUrl":"https://www.artblocks.io/token/78000607","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/53a5cfae04-art-blocks-fidenza-607"},{"id":"78242e433c0d2d6b345d55066cb36979d26bbb121859ecd529181ab15d588cac","createdAt":1630612105,"registryId":"9efe97819a371dce7d34b39e805539fe76213cc60ae6071a40b44d1860f42cec","dappSlug":"superrare","dappName":"SuperRare","tokenId":"383","name":"AI Generated Nude Portrait #7 Frame #193","image":"https://cdn.coinranking.com/nft/0x41A322b28D0fF354040e2CbC676F0320d8c8850d/383.png","video":null,"price":"200","priceInDollar":"754814.0000000000328","auctionCreatedAt":1630612105,"externalUrl":"https://superrare.co/artwork/383","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/78242e433c-superrare-ai-generated-nude-portrait-7-frame-193"},{"id":"ebcc4f6f49c4816a2e357a6457cd27a0623cfc369193deb86ea14981d27867cd","createdAt":1616268873,"registryId":"d7926fa0a6ccb4adf34f87a1f73683853f3e3128de0a839a1d3a95c3488dcb37","dappSlug":"makersplace","dappName":"MakersPlace","tokenId":"48289","name":"Metarift","image":"https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.jpeg","video":"https://cdn.coinranking.com/nft/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289.mp4","price":"489","priceInDollar":"905236.800000000022237275","auctionCreatedAt":1616268874,"externalUrl":"https://makersplace.com/product/token/0x2A46f2fFD99e19a89476E2f62270e0a35bBf0756/48289","backgroundColor":null,"coinrankingUrl":"https://coinranking.com/nft/ebcc4f6f49-makersplace-metarift"}]}}')},68:function(e,t,i){},69:function(e,t,i){}},[[108,1,2]]]);
//# sourceMappingURL=main.4df00882.chunk.js.map