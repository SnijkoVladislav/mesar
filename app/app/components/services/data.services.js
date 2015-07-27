(function() {
	'use strict';

	angular
		.module('mesar')
		.service('dataServices', dataServices);

		//** @ngInject */

		function dataServices() {
			return {
				logo:{
					title:"MESAR"
				},
				nav:{
					menu:["intro", "portfolio", "about", "services", "blog", "contact"]
				},
				desc:{
					title: "Hi, I'm John Doe",
					text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
					img: "descImg.jpg"
				},
				portfolio:{
					title:"Portfolio",
					articles:[
						{name:"Iphones", previewImg:"2.jpg", img:"2.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Speaker", previewImg:"1.jpg", img:"1.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Disk", previewImg:"3.jpg", img:"3.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Keyboard", previewImg:"4.jpg", img:"4.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Notebook", previewImg:"5.jpg", img:"5.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Notebook1", previewImg:"6.jpg", img:"6.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Canon", previewImg:"8.jpg", img:"8.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
						{name:"Macbook", previewImg:"7.jpg", img:"7.jpg", title:"PROJECT TITLE HERE", text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},
					]
				},
				about:{
					title:{main:"about", story:"story", info:"info`s", skills:"skills"},
					text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
					info:[{question:"Fullname", answer:"John Doe"},{question:"Birthday", answer:"21 June 1987"},{question:"Job", answer:"Freelancer"},{question:"Website", answer:"www.johndoe.com"},{question:"E-mail", answer:"johndoe@domain.com"}],
					button:"DOWNLOAD CV",
					skills:[{skill:"HTML5 & CSS3", study:"85"}, {skill:"JAVASCRIPT & JQUERY", study:"70"}, {skill:"PHOTOSHOP", study:"90"}, {skill:"PHP", study:"60"}]
				},
				services:{
					title:"services",
					items:[
						{img:"1.jpg", title:"IDEAS", desc:"help you start"},
						{img:"2.jpg", title:"SKETCHES", desc:"see different looks"},
						{img:"3.jpg", title:"GRAPHICS", desc:"get a design"},
						{img:"4.jpg", title:"CUSTOMIZE", desc:"more customization"},
						{img:"5.jpg", title:"DEVELOP", desc:"build your project"},
						{img:"6.jpg", title:"PUBLISH", desc:"get your project online"},
						{img:"7.jpg", title:"ANALYTICS", desc:"analyse your project"},
						{img:"8.jpg", title:"SUPPORT", desc:"fast and friedly"},
					]
				},
				blog:{
					title:"blog",
					posts:[
						{title:"Hey, what's up?!", date:"18 MAY", text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},						{title:"I went to London last week", date:"21 APRIL", text:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},
						{title:"Just a quick update", date:"6 APRIL", text:"Qe porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquamcorporis."},
						{title:"I would buy this template", date:"1 APRIL", text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "},
						{title:"So yea...I'm batman", date:"30 MARCH", text:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ."},
						{title:"This is what happend", date:"23 FEBRUARY", text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "},
					]
				},
				footer:{
					copywrite:"© Yoursite.",
					toTop:"BACK TO TOP",
					social:["fasebook", "twitter", "dribbble", "deviantart"]
				}


			};
		}

})();