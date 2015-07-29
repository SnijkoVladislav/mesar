!function(){"use strict";angular.module("mesar",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.router","ngScrollSpy"])}(),function(){"use strict";function t(){}angular.module("mesar").controller("MainController",t)}(),function(){"use strict";function t(t){var e=this;e.title=t.services.title,e.items=t.services.items}angular.module("mesar").controller("servicesController",t),t.$inject=["dataServices"]}(),function(){"use strict";function t(t,e,i,s,o){var a=this;a.title=t.portfolio.title,a.articleDisc={},a.active=function(t){a.articleDisc[t]===!1&&(a.articleDisc[t]=!0,document.body.style.overflowY="hidden",afeApply(s)),a.articleDisc[t]=!1,document.body.style.overflowY="visible",afeApply(s)};var l=t.portfolio.articles,n=0,r=l.length,c=4;a.articles=e(l,c,n,r)}angular.module("mesar").controller("portfolioController",t),t.$inject=["dataServices","colomnizServices","safeApply","$scope","$rootScope"]}(),function(){"use strict";function t(t,e){var i=this;i.visible=!1,i.menu=t.nav.menu,i.gotoElement=function(t){e(t)}}angular.module("mesar").controller("navController",t),t.$inject=["dataServices","anchorSmoothScrollServices"]}(),function(){"use strict";function t(t){var e=this;e.title=t.logo.title}angular.module("mesar").controller("logoController",t),t.$inject=["dataServices"]}(),function(){"use strict";function t(t){return function(t,e){var i=t.$root.$$phase;"$apply"===i||"$digest"===i?e&&t.$eval(e):e?t.$apply(e):t.$apply()}}angular.module("mesar").factory("safeApply",t),t.$inject=["$rootScope"]}(),function(){"use strict";function t(){return{logo:{title:"MESAR"},nav:{menu:["intro","portfolio","about","services","blog","contact"]},desc:{title:"Hi, I'm John Doe",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",img:"descImg.jpg"},portfolio:{title:"Portfolio",articles:[{name:"Iphones",previewImg:"2.jpg",img:"2.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Speaker",previewImg:"1.jpg",img:"1.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Disk",previewImg:"3.jpg",img:"3.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Keyboard",previewImg:"4.jpg",img:"4.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Notebook",previewImg:"5.jpg",img:"5.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Notebook1",previewImg:"6.jpg",img:"6.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Canon",previewImg:"8.jpg",img:"8.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."},{name:"Macbook",previewImg:"7.jpg",img:"7.jpg",title:"PROJECT TITLE HERE",text:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."}]},about:{title:{main:"about",story:"story",info:"info`s",skills:"skills"},text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",info:[{question:"Fullname",answer:"John Doe"},{question:"Birthday",answer:"21 June 1987"},{question:"Job",answer:"Freelancer"},{question:"Website",answer:"www.johndoe.com"},{question:"E-mail",answer:"johndoe@domain.com"}],button:"DOWNLOAD CV",skills:[{skill:"HTML5 & CSS3",study:"85"},{skill:"JAVASCRIPT & JQUERY",study:"70"},{skill:"PHOTOSHOP",study:"90"},{skill:"PHP",study:"60"}]},services:{title:"services",items:[{img:"1.jpg",title:"IDEAS",desc:"help you start"},{img:"2.jpg",title:"SKETCHES",desc:"see different looks"},{img:"3.jpg",title:"GRAPHICS",desc:"get a design"},{img:"4.jpg",title:"CUSTOMIZE",desc:"more customization"},{img:"5.jpg",title:"DEVELOP",desc:"build your project"},{img:"6.jpg",title:"PUBLISH",desc:"get your project online"},{img:"7.jpg",title:"ANALYTICS",desc:"analyse your project"},{img:"8.jpg",title:"SUPPORT",desc:"fast and friedly"}]},blog:{title:"blog",posts:[{title:"Hey, what's up?!",date:"18 MAY",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."},{title:"I went to London last week",date:"21 APRIL",text:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam."},{title:"Just a quick update",date:"6 APRIL",text:"Qe porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquamcorporis."},{title:"I would buy this template",date:"1 APRIL",text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "},{title:"So yea...I'm batman",date:"30 MARCH",text:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ."},{title:"This is what happend",date:"23 FEBRUARY",text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. "}]},footer:{copywrite:"© Yoursite.",toTop:"BACK TO TOP",social:["fasebook","twitter","dribbble","deviantart"]}}}angular.module("mesar").service("dataServices",t)}(),function(){"use strict";function t(){return function(t,e,i,s){var o=[];for(i;s>i;i++){var a=i%e;o[a]=o[a]||[],o[a].push(t[i])}return o}}angular.module("mesar").factory("colomnizServices",t)}(),function(){"use strict";function t(){var t=function(e){function i(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function s(t){for(var e=document.getElementById(t),i=e.offsetTop,s=e;s.offsetParent&&s.offsetParent!=document.body;)s=s.offsetParent,i+=s.offsetTop;return i}var o=i(),a=s(e),l=a>o?a-o:o-a;if(100>l)return void t(0,a);var n=Math.round(l/100);n>=20&&(n=20);var r=Math.round(l/25),c=a>o?o+r:o-r,m=0;if(a>o)for(var d=o;a>d;d+=r)setTimeout("window.scrollTo(0, "+c+")",m*n),c+=r,c>a&&(c=a),m++;else for(var d=o;d>a;d-=r)setTimeout("window.scrollTo(0, "+c+")",m*n),c-=r,a>c&&(c=a),m++};return t}angular.module("mesar").factory("anchorSmoothScrollServices",t)}(),function(){"use strict";function t(t){return{restrict:"A",link:function(e,i,s){function o(){var t=i.prop("offsetTop"),e=window.pageYOffset,o=t-window.innerHeight,a=t,l=s.scrTargetDircAddclass;e>o&&a>e&&i.addClass(l)}t.bind("scroll",o)}}}angular.module("mesar").directive("scrTargetDirc",t),t.$inject=["$document"]}(),function(){"use strict";function t(t,e){var i=this;i.copywrite=t.footer.copywrite,i.toTop=t.footer.toTop,i.social=t.footer.social,i.gotoElement=function(t){e(t)}}angular.module("mesar").controller("footerController",t),t.$inject=["dataServices","anchorSmoothScrollServices"]}(),function(){"use strict";function t(t){var e=this;e.title=t.desc.title,e.text=t.desc.text,e.img=t.desc.img}angular.module("mesar").controller("descController",t),t.$inject=["dataServices"]}(),function(){"use strict";function t(t,e){var i=this;i.title=t.blog.title;var s=t.blog.posts,o=0,a=s.length,l=3;i.posts=e(s,l,o,a)}angular.module("mesar").controller("blogController",t),t.$inject=["dataServices","colomnizServices"]}(),function(){"use strict";function t(){}angular.module("mesar").controller("contactController",t)}(),function(){"use strict";function t(t){var e=this;e.title=t.about.title.main,e.storyTitle=t.about.title.story,e.text=t.about.text,e.infoTitle=t.about.title.info,e.info=t.about.info,e.button=t.about.button,e.skillsTitle=t.about.title.skills,e.skills=t.about.skills}angular.module("mesar").controller("aboutController",t),t.$inject=["dataServices"]}(),function(){"use strict";function t(t){t.debug("runBlock end")}angular.module("mesar").run(t),t.$inject=["$log"]}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/view/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}angular.module("mesar").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("mesar").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}angular.module("mesar").config(t),t.$inject=["$logProvider","toastr"]}(),angular.module("mesar").run(["$templateCache",function(t){t.put("app/components/about/about.html",'<div ng-controller="aboutController as about" class="h-about"><div class="h-about__header"><h2 class="b-title">{{about.title}}</h2></div><div class="h-about__content"><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.storyTitle}}</h3><p class="b-text">{{about.text}}</p></div><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.infoTitle}}</h3><ul ng-repeat="item in about.info" class="b-info"><li class="b-info__item"><b>{{item.question}}</b> {{item.answer}}</li></ul></div><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.skillsTitle}}</h3><div ng-repeat="item in about.skills" class="b-skills"><div class="b-skills__title">{{item.skill}}</div><div class="b-indicator"><span ng-style="{width:\'{{item.study}}%\'}" class="b-indicator__arrow">{{item.study}}</span></div></div></div></div></div>'),t.put("app/components/blog/blog.html",'<div ng-controller="blogController as blog" class="h-blog"><div class="h-blog__header"><h2 class="b-title">{{blog.title}}</h2></div><div class="h-blog__content"><div ng-repeat="col in blog.posts" class="h-columns"><div ng-repeat="item in col track by $index" class="b-post"><h4 class="b-post__title">{{item.title}}</h4><span class="b-post__date">{{item.date}}</span><p class="b-post__text">{{item.text}}</p><a href="#" class="b-post__more-link">Read more</a></div></div></div></div>'),t.put("app/components/contact/contact.html",'<div ng-controller="contactController as con" class="h-contact"><div class="h-contact__header"><h2 class="b-title">contact</h2></div><div class="h-contact__content"><form class="h-form"><fieldset class="b-form"><div class="h-form__item _size-1in3"><input name="name" type="text" id="name" placeholder="Name* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in3"><input name="email" type="email" id="email" placeholder="E-mail* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in3"><input name="subject" type="text" id="subject" placeholder="Subject* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in1"><textarea name="comments" cols="40" rows="5" placeholder="Message* :" id="comments" required="" class="b-form__item"></textarea></div><div class="h-form__item _size-1in1"><input name="submit" type="submit" id="submit" value="Send message" class="b-form__item _button"></div></fieldset></form></div></div>'),t.put("app/components/desc/desc.html",'<div ng-controller="descController as desc" class="b-desc"><div class="h-col-left"><h2 class="b-desc__title">{{desc.title}}</h2><p class="b-desc__text">{{desc.text}}</p></div><div class="h-col-right"><img ng-src="./assets/images/{{desc.img}}" alt="desc img" class="b-desc__img _round"></div></div>'),t.put("app/components/footer/footer.html",'<div ng-controller="footerController as footer" class="h-footer"><div class="h-footer__item _size-1in3"><span class="b-copywrite">{{footer.copywrite}}</span></div><div class="h-footer__item _size-1in3"><a ng-click="footer.gotoElement(\'js_toTop\')" class="b-beack-to-top">{{footer.toTop}}</a></div><div class="h-footer__item _size-1in3"><ul class="b-social"><li ng-repeat="item in footer.social" class="b-social__item _{{item}}"></li></ul></div></div>'),t.put("app/components/logo/logo.html",'<div ng-controller="logoController as logo" class="b-logo"><a href="#" class="h-logo-wrapper"><h1 class="b-logo__title">{{logo.title}}</h1></a></div>'),t.put("app/components/nav/nav.html",'<div ng-controller="navController as nav" class="b-nav"><span ng-click="nav.visible = !nav.visible" class="b-nav__toogle-button"><div class="b-icon"></div></span><ul ng-show="nav.visible" class="b-nav__menu"><li ng-repeat="item in nav.menu" class="b-menu-item"><a scrollspy-listen="{{item}}" ng-click="nav.gotoElement(\'{{item}}\')">{{item}}</a></li></ul></div>'),t.put("app/components/portfolio/portfolio.html",'<div ng-controller="portfolioController as port" class="b-portfilio"><h2 class="b-portfilio__title">{{port.title}}</h2><div class="b-portfilio__content"><div ng-repeat="col in port.articles" class="h-columns"><a href="" ng-repeat-start="item in col track by $index" class="b-article"><button ng-click="port.active(item.name)" ng-init="port.articleDisc[item.name] = false" class="b-article__name">{{item.name}}</button><img ng-src="./assets/images/portfolio/{{item.previewImg}}" class="b-article__previewImg"></a><div ng-repeat-end="" ng-show="port.articleDisc[item.name]" ng-click="port.active(item.name)" class="h-article-disc"><div ng-click="$event.stopPropagation();" class="b-article-disc"><img ng-src="./assets/images/portfolio/{{item.img}}" class="b-article-disc__img"><h5 class="b-article-disc__title">{{item.title}}</h5><p class="b-article-disc__text">{{item.text}}</p><button ng-click="port.active(item.name)" class="b-article-disc__close">+</button></div></div></div></div></div>'),t.put("app/components/services/services.html",'<div ng-controller="servicesController as ser" class="h-services"><div class="h-services__header"><h2 class="b-title">{{ser.title}}</h2></div><div class="h-services__content"><div ng-repeat="item in ser.items" class="b-services-item"><span class="b-services-item__img _icon_{{item.title}}"></span><h4 class="b-services-item__title">{{item.title}}</h4><p class="b-services-item__desc">{{item.desc}}</p></div></div></div>'),t.put("app/view/main/main.html",'<div class="h-page-home"><header class="l-home-header"><div class="l-home-header__logo"><div ng-controller="logoController as logo" class="b-logo"><a href="#" class="h-logo-wrapper"><h1 class="b-logo__title">{{logo.title}}</h1></a></div></div><div class="l-home-header__nav"><div ng-controller="navController as nav" class="b-nav"><span ng-click="nav.visible = !nav.visible" class="b-nav__toogle-button"><div class="b-icon"></div></span><ul ng-show="nav.visible" class="b-nav__menu"><li ng-repeat="item in nav.menu" class="b-menu-item"><a scrollspy-listen="{{item}}" ng-click="nav.gotoElement(\'{{item}}\')">{{item}}</a></li></ul></div></div></header><article id="intro" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-desc _an-start-point_left _an_js_endPoint"><div ng-controller="descController as desc" class="b-desc"><div class="h-col-left"><h2 class="b-desc__title">{{desc.title}}</h2><p class="b-desc__text">{{desc.text}}</p></div><div class="h-col-right"><img ng-src="./assets/images/{{desc.img}}" alt="desc img" class="b-desc__img _round"></div></div></article><article id="portfolio" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-portfolio _an-start-point_left _an_js_endPoint"><div ng-controller="portfolioController as port" class="b-portfilio"><h2 class="b-portfilio__title">{{port.title}}</h2><div class="b-portfilio__content"><div ng-repeat="col in port.articles" class="h-columns"><a href="" ng-repeat-start="item in col track by $index" class="b-article"><button ng-click="port.active(item.name)" ng-init="port.articleDisc[item.name] = false" class="b-article__name">{{item.name}}</button><img ng-src="./assets/images/portfolio/{{item.previewImg}}" class="b-article__previewImg"></a><div ng-repeat-end="" ng-show="port.articleDisc[item.name]" ng-click="port.active(item.name)" class="h-article-disc"><div ng-click="$event.stopPropagation();" class="b-article-disc"><img ng-src="./assets/images/portfolio/{{item.img}}" class="b-article-disc__img"><h5 class="b-article-disc__title">{{item.title}}</h5><p class="b-article-disc__text">{{item.text}}</p><button ng-click="port.active(item.name)" class="b-article-disc__close">+</button></div></div></div></div></div></article><article id="about" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-about _an-start-point_left"><div ng-controller="aboutController as about" class="h-about"><div class="h-about__header"><h2 class="b-title">{{about.title}}</h2></div><div class="h-about__content"><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.storyTitle}}</h3><p class="b-text">{{about.text}}</p></div><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.infoTitle}}</h3><ul ng-repeat="item in about.info" class="b-info"><li class="b-info__item"><b>{{item.question}}</b> {{item.answer}}</li></ul></div><div class="h-col _1in3"><h3 class="b-title _about-content">{{about.skillsTitle}}</h3><div ng-repeat="item in about.skills" class="b-skills"><div class="b-skills__title">{{item.skill}}</div><div class="b-indicator"><span ng-style="{width:\'{{item.study}}%\'}" class="b-indicator__arrow">{{item.study}}</span></div></div></div></div></div></article><article id="services" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-services _an-start-point_left"><div ng-controller="servicesController as ser" class="h-services"><div class="h-services__header"><h2 class="b-title">{{ser.title}}</h2></div><div class="h-services__content"><div ng-repeat="item in ser.items" class="b-services-item"><span class="b-services-item__img _icon_{{item.title}}"></span><h4 class="b-services-item__title">{{item.title}}</h4><p class="b-services-item__desc">{{item.desc}}</p></div></div></div></article><article id="blog" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-blog _an-start-point_left"><div ng-controller="blogController as blog" class="h-blog"><div class="h-blog__header"><h2 class="b-title">{{blog.title}}</h2></div><div class="h-blog__content"><div ng-repeat="col in blog.posts" class="h-columns"><div ng-repeat="item in col track by $index" class="b-post"><h4 class="b-post__title">{{item.title}}</h4><span class="b-post__date">{{item.date}}</span><p class="b-post__text">{{item.text}}</p><a href="#" class="b-post__more-link">Read more</a></div></div></div></div></article><article id="contact" scrollspy-broadcast="" scr-target-dirc="" scr-target-dirc-addclass="_an_js_endPoint" class="l-home-contact _an-start-point_left _an_js_endPoint"><div ng-controller="contactController as con" class="h-contact"><div class="h-contact__header"><h2 class="b-title">contact</h2></div><div class="h-contact__content"><form class="h-form"><fieldset class="b-form"><div class="h-form__item _size-1in3"><input name="name" type="text" id="name" placeholder="Name* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in3"><input name="email" type="email" id="email" placeholder="E-mail* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in3"><input name="subject" type="text" id="subject" placeholder="Subject* :" value="" required="" class="b-form__item"></div><div class="h-form__item _size-1in1"><textarea name="comments" cols="40" rows="5" placeholder="Message* :" id="comments" required="" class="b-form__item"></textarea></div><div class="h-form__item _size-1in1"><input name="submit" type="submit" id="submit" value="Send message" class="b-form__item _button"></div></fieldset></form></div></div></article><footer class="l-home-footer"><div ng-controller="footerController as footer" class="h-footer"><div class="h-footer__item _size-1in3"><span class="b-copywrite">{{footer.copywrite}}</span></div><div class="h-footer__item _size-1in3"><a ng-click="footer.gotoElement(\'js_toTop\')" class="b-beack-to-top">{{footer.toTop}}</a></div><div class="h-footer__item _size-1in3"><ul class="b-social"><li ng-repeat="item in footer.social" class="b-social__item _{{item}}"></li></ul></div></div></footer></div>')}]);