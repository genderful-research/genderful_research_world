(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-249de110"],{"0da3":function(e,t,n){},"2e44":function(e,t,n){"use strict";n.r(t);var i=n("7a23"),s=(n("d81d"),n("7db0"),n("6422")),a=n.n(s),o=(n("9911"),n("2ca0"),n("99af"),n("ac1f"),n("5319"),n("5502")),r=n("0e54"),c=n.n(r),l={key:0},d={class:"card",style:{"max-width":"40rem"}},u={class:"card-header"},h={class:"card-body"},f={class:"fs-5"},b=["innerHTML"],m={class:"align-middle text-center"},p={class:"btn-group float-start",role:"group"},g=["disabled","onClick"],v={key:0,class:"align-middle text-center text-success fs-5"},x={key:1,class:"text-danger fs-5"},w={key:0,class:"btn float-end btn-outline-secondary","data-bs-toggle":"collapse","data-bs-target":"#explain","aria-expanded":"false","aria-controls":"explain"},y={class:"card-footer text-end"},j=["disabled"],O={key:1},q={props:{item:Object,section:String},setup:function(e){var t=e,n=new c.a.Renderer,s=n.link;n.link=function(e,t,i){var a=e.startsWith("".concat(location.protocol,"//").concat(location.hostname)),o=s.call(n,e,t,i);return a?o:o.replace(/^<a /,'<a target="_blank" ')};var a=Object(i["I"])(t),r=a.item,q=a.section,k=Object(o["b"])(),T=function(e){return k.getters.selectedAnswer(e.id)},S=k.getters.getMaxQuestions(q.value),J=function(e,t){return 1==e.value?1==T(t)["selected"]?"success":"outline-success":0==e.value?0==T(t)["selected"]?"danger":"outline-danger":void 0},_=function(e,t){return k.dispatch("addAnswer",{item:e,answer:t})},A=function(){return k.commit("updateQuestionNumber",q.value)},C=function(e){return k.getters.getScore(e)},I=[{text:"True",value:!0},{text:"False",value:!1}];return function(e,t){return Object(i["J"])(r)?(Object(i["y"])(),Object(i["g"])("div",l,[Object(i["h"])("div",d,[Object(i["h"])("div",u," Question "+Object(i["H"])(Object(i["J"])(r).number)+" of "+Object(i["H"])(Object(i["J"])(S)),1),Object(i["h"])("div",h,[Object(i["h"])("p",f,Object(i["H"])(Object(i["J"])(r).question),1),T(Object(i["J"])(r))?(Object(i["y"])(),Object(i["g"])("div",{key:0,class:"collapse",id:"explain",innerHTML:Object(i["J"])(c.a)(Object(i["J"])(r).explanation,{renderer:Object(i["J"])(n)})},null,8,b)):Object(i["f"])("",!0),Object(i["h"])("div",m,[Object(i["h"])("div",p,[(Object(i["y"])(),Object(i["g"])(i["a"],null,Object(i["E"])(I,(function(e){return Object(i["h"])("button",{class:Object(i["q"])(["btn","btn-"+J(e,Object(i["J"])(r))]),key:e.value,disabled:!!T(Object(i["J"])(r)),onClick:Object(i["M"])((function(t){return _(Object(i["J"])(r),e.value)}),["stop"])},Object(i["H"])(e.text),11,g)})),64))]),T(Object(i["J"])(r))?(Object(i["y"])(),Object(i["g"])(i["a"],{key:0},[T(Object(i["J"])(r))["correct"]?(Object(i["y"])(),Object(i["g"])("span",v," Correct! ")):(Object(i["y"])(),Object(i["g"])("span",x," Incorrect! "))],64)):Object(i["f"])("",!0),Object(i["k"])(i["b"],{name:"fade"},{default:Object(i["L"])((function(){return[T(Object(i["J"])(r))?(Object(i["y"])(),Object(i["g"])("button",w," Explain")):Object(i["f"])("",!0)]})),_:1})])]),Object(i["h"])("div",y,[Object(i["h"])("button",{class:"btn btn-outline-secondary",disabled:!T(Object(i["J"])(r)),onClick:t[0]||(t[0]=Object(i["M"])((function(e){return A()}),["stop"]))}," Next ⮕",8,j)])])])):(Object(i["y"])(),Object(i["g"])("div",O,[Object(i["h"])("h5",null,"Score: "+Object(i["H"])(C(Object(i["J"])(q)))+"%",1)]))}}};const k=q;var T=k,S={props:{section:String},setup:function(e){var t=e,n=Object(o["b"])(),s=Object(i["I"])(t),r=s.section,c=a.a[r.value].title,l=1,d=a.a[r.value].questions.map((function(e){return e.number=l++,e}));n.commit("setNumberOfQuestions",{section:r.value,length:d.length});var u=function(){return n.getters.currentQuestionNumber(r.value)},h=function(e){return d.find((function(t){return t.number===e}))};return function(e,t){return Object(i["y"])(),Object(i["g"])(i["a"],null,[Object(i["h"])("h4",null,Object(i["H"])(Object(i["J"])(c)),1),Object(i["k"])(i["b"],{name:"fade"},{default:Object(i["L"])((function(){return[Object(i["k"])(T,{section:Object(i["J"])(r),item:h(u())},null,8,["section","item"])]})),_:1})],64)}}};n("8c06");const J=S;var _=J,A={class:"container pt-4"},C={class:"row"},I={class:"col"},H=Object(i["j"])("Quiz "),z=["disabled","onClick"],M=Object(i["h"])("i",{class:"bi-recycle"},null,-1),Q=Object(i["j"])(" Reset quiz "),G=[M,Q],R={class:"row justify-content-md-center"},E={class:"col-md-6"},L={setup:function(e){var t=Object(o["b"])(),n=Object(i["c"])((function(){return t.getters.totalAnswered})),s=function(e){return t.getters.quizAnswered(e)},a=function(){return t.commit("resetQuiz")};return function(e,t){return Object(i["y"])(),Object(i["g"])("div",A,[Object(i["h"])("div",C,[Object(i["h"])("div",I,[Object(i["h"])("h1",null,[H,Object(i["h"])("button",{class:"btn btn-outline-secondary float-end",disabled:!Object(i["J"])(n),onClick:Object(i["M"])(a,["stop"])},G,8,z)])])]),Object(i["h"])("div",R,[Object(i["h"])("div",E,[Object(i["k"])(_,{section:"definitions"}),s("definitions")?(Object(i["y"])(),Object(i["e"])(_,{key:0,section:"relevance"})):Object(i["f"])("",!0)])])])}}};const N=L;t["default"]=N},6422:function(e,t){e.exports={definitions:{title:"What are the definitions for sex and gender?",questions:[{id:"definitions-q-1",question:"Sex and gender are always the same thing.",correct_answer:!1,explanation:"This is false. Sex refers to sets of biological traits of people and animals. It is associated with physical, psychological (chromosomes, gene-expression, hormone levels/functions and reproductive and sexual anatomy. It is often divided into men and women, while gender refers to a more complex interplay between socially constructed roles, behaviors, expressions and identities of girls, women, men, boys and gender diverse people. They are not the same, but they can interact with each other."},{id:"definitions-q-2",question:"Sex should not be used in the context of research as it means sexual intercourse.",correct_answer:!1,explanation:"This is false. Sex can mean sexual intercourse or it can mean the biological differences between men and women. The fact that it has two meanings should never be the argument to avoid sex sensitive research, avoid reporting on sex differences or use the word gender incorrectly."},{id:"definitions-q-3",question:"Sex refers to biological attributes in humans and animals, while gender refers to socially constructed roles, behaviors, expressions and identities.",correct_answer:!0,explanation:"This is true. Sex refers to sets of biological traits of people and animals. It is associated with physical, psychological (chromosomes, gene-expression, hormone levels/functions and reproductive and sexual anatomy. It is often divided into men and women, while gender refers to a more complex interplay between socially constructed roles, behaviors, expressions and identities of girls, women, men, boys and gender diverse people."},{id:"definitions-q-4",question:"Gender refers to biological attributes in humans and animals, while sex refers to socially constructed roles, behaviors, expressions and identities.",correct_answer:!1,explanation:"This is false. Gender refers to the complex interplay of concepts, among which societal position, but also behaviors, expressions, identities."},{id:"definitions-q-5",question:"Sex and gender are two separate definitions that do not influence each other.",correct_answer:!1,explanation:"This is false. Although there are two difference definitions for sex an gender, they can interact and influence with each other. To give an example. Sex refers to biological traits, such as gene-expression. Gene-expression is influenced by epigenetic regulation, which can be changed by certain lifestyle choices such as smoking. The behavior of smoking is influenced by gender roles in society (gender) , which thereby via epigenetic regulation can influence gene-expression (sex)."},{id:"definitions-q-6",question:"Sex is always defined as sex given at birth.",correct_answer:!1,explanation:"This is false. Sex refers to the biological attributes in humans and animals and can be divided differently depending on the situation. Sex can also be defined as chromosomal situation (XX/XY), which can differ from sex defined at birth due to mutations in the SRY gene (development of external genitalia). In public health and clinical research, sex is often defined as sex given at birth, but be aware that other options are possible."},{id:"definitions-q-7",question:"Sex and gender approach in research is beneficial for both men and women.",correct_answer:!0,explanation:"This is true. Research best tailored to their target population gives the most precise knowledge. Taking the average of men and women in research leads to a less correct estimate for both men and women."},{id:"definitions-q-8",question:"Gender is a concept that cannot be objectively measured.",correct_answer:!1,explanation:"This is false. Although gender is a complex interplay of different concepts there has been a great effort to develop gender questionnaires and indexes to measure gender. Note that which concept of gender you focus on might influence which empirical measurement you want to use."}]},relevance:{title:"What are the relevance of accounting for sex/gender in biomedical and health research?",questions:[{id:"relevance-q-1",question:"Taking a sex-specific approach leads to discrimination",correct_answer:!1,explanation:"This is false. By accounting for sex in biomedical and health research, scientists are contributing for a more equal/balanced healthcare, also improving the rigor, reproducibility and generalization of science. Due to equity based health care (recognizing that not everybody benefits from the same care) we will avoid discrimination."},{id:"relevance-q-2",question:"Performing sex-specific research costs more money",correct_answer:!1,explanation:"This is false. In the short term, it may seems more costly and it can be, however, not accounting for sex differences along the different research phases will lead to a failure in efficacy of treatment/healthcare in the long term, which costs more money. To illustrate, performing sex-specific analysis on the side effects of the COVID vaccination during the trails could have avoided the surprise of side effects among women compared to men. The latter cost much more money."},{id:"relevance-q-3",question:"Gender concept as in humans do not apply directly to animals",correct_answer:!0,explanation:"This is true. Gender is defined as socially constructed roles, behaviours, expressions and identities from girls, women, boys, men and gender-diverse people. This definition does not directly apply to animals since they do not have such a societal environment as humans do. ."},{id:"relevance-q-4",question:"Female inclusion in animal experiments increase variability",correct_answer:!1,explanation:"This is false. That was a misconception common across the scientific community, which was based on the sex hormone fluctuation (Prendergast, Onishi et al. 2014, Becker, Prendergast et al. 2016, Beery 2018). It turns out males tend to have higher variation, which can be linked to external stressors related to the expression of dominance and power dynamics inherent to males."},{id:"relevance-q-5",question:"Sex awareness is unimportant to in vitro studies",correct_answer:!1,explanation:"This is false. Depending on what cell types used for in vitro studies (primary cells, cell lines), different details might need to be taken in consideration. Until now, there has been an overlook on the sex of cells being used. Resources on Analyzing Sex in Tissues and Cells can be found here [Analyzing Sex in Tissues and Cells](https://genderedinnovations.stanford.edu/methods/tissues.html)."},{id:"relevance-q-6",question:"Excluding women from clinical studies is always necessary to protect their fertility",correct_answer:!1,explanation:"This is false. This was a common understanding for clinical studies in the past decades. However, by excluding women from clinical studies there is an increased risk on fertility since these side effects will not be discovered during clinical trials before going to the market."},{id:"relevance-q-7",question:"Reporting sex differences should only be mentioned when significant",correct_answer:!1,explanation:"This is false. Mentioning that no sex differences were observed is also relevant, as it will prevent future studies to investigate these sex differences."},{id:"relevance-q-8",question:"Patient gender influences the treatment efficiency",correct_answer:!0,explanation:"This is true. The patient's gender influences treatment adherence and side effects due to motivational and stress differences."},{id:"relevance-q-9",question:"Healthcare professional gender does not influence patient care",correct_answer:!1,explanation:"This is false. The gender of the healthcare profession can have a great influence on patient care in multiple dimensions, among which how the patient perceives care, the type of complaints shared with professionals (https://www.ntvg.nl/artikelen/mannelijke-vrouwelijke-huisarts/abstract) and even delay visit to the doctor because he/she is of other sex."}]}}},"7db0":function(e,t,n){"use strict";var i=n("23e7"),s=n("b727").find,a=n("44d2"),o="find",r=!0;o in[]&&Array(1)[o]((function(){r=!1})),i({target:"Array",proto:!0,forced:r},{find:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},"857a":function(e,t,n){var i=n("1d80"),s=n("577e"),a=/"/g;e.exports=function(e,t,n,o){var r=s(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+s(o).replace(a,"&quot;")+'"'),c+">"+r+"</"+t+">"}},"8c06":function(e,t,n){"use strict";n("0da3")},9911:function(e,t,n){"use strict";var i=n("23e7"),s=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("link")},{link:function(e){return s(this,"a","href",e)}})},"99af":function(e,t,n){"use strict";var i=n("23e7"),s=n("d039"),a=n("e8b5"),o=n("861d"),r=n("7b0b"),c=n("50c4"),l=n("8418"),d=n("65f0"),u=n("1dde"),h=n("b622"),f=n("2d00"),b=h("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=f>=51||!s((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=u("concat"),x=function(e){if(!o(e))return!1;var t=e[b];return void 0!==t?!!t:a(e)},w=!g||!v;i({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,i,s,a,o=r(this),u=d(o,0),h=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],x(a)){if(s=c(a.length),h+s>m)throw TypeError(p);for(n=0;n<s;n++,h++)n in a&&l(u,h,a[n])}else{if(h>=m)throw TypeError(p);l(u,h++,a)}return u.length=h,u}})},af03:function(e,t,n){var i=n("d039");e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}}}]);
//# sourceMappingURL=chunk-249de110.0133ed3f.js.map