(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e595eee"],{"253d":function(e,t,i){"use strict";i("308a")},"308a":function(e,t,i){},"45d3":function(e,t,i){"use strict";i.r(t);var n=i("7a23"),a=i("1e46"),s=i.n(a),r=(i("b0c0"),{class:"timeline"}),o={props:{road:String,location:String},setup:function(e){return function(t,i){var a=Object(n["F"])("router-link");return Object(n["y"])(),Object(n["g"])("ul",r,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(Object(n["J"])(s.a).phases,(function(t){return Object(n["y"])(),Object(n["g"])("li",{key:t.id,class:Object(n["q"])({active:t.id==e.location})},[Object(n["k"])(a,{class:Object(n["q"])(["btn btn-large btn-secondary",{active:t.id==e.location}]),to:"/research/"+e.road+"/"+t.id},{default:Object(n["M"])((function(){return[Object(n["j"])(Object(n["H"])(t.name),1)]})),_:2},1032,["class","to"]),Object(n["h"])("p",null,Object(n["H"])(t.summary),1)],2)})),128))])}}},l=(i("814f"),i("6b0d")),c=i.n(l);const d=c()(o,[["__scopeId","data-v-3debc1f6"]]);var u=d,h=i("b8f1"),p=i("5f84"),b=i("6c02"),m=i("0e54"),v=i.n(m),g={class:"modal",tabindex:"-1",id:"modal"},f={class:"modal-dialog modal-dialog-centered"},y={class:"modal-content"},O={class:"modal-header"},j={class:"modal-title"},x=Object(n["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_=["innerHTML"],w={class:"modal-footer"},I={key:0},S={key:0,type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},C={key:1},k=Object(n["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),G=[k],H={props:{content:Object},setup:function(e){var t=e,i=Object(n["I"])(t),a=i.content;return function(e,t){var i=Object(n["F"])("router-link");return Object(n["y"])(),Object(n["g"])("div",g,[Object(n["h"])("div",f,[Object(n["h"])("div",y,[Object(n["h"])("div",O,[Object(n["h"])("h5",j,Object(n["H"])(Object(n["J"])(a).title),1),x]),Object(n["h"])("div",{class:"modal-body",innerHTML:Object(n["J"])(v.a)(Object(n["J"])(a).body)},null,8,_),Object(n["h"])("div",w,[Object(n["J"])(a).buttons?(Object(n["y"])(),Object(n["g"])("div",I,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(Object(n["J"])(a).buttons,(function(e){return Object(n["y"])(),Object(n["g"])(n["a"],{key:e},["close"==e.type?(Object(n["y"])(),Object(n["g"])("button",S,Object(n["H"])(e.title),1)):Object(n["f"])("",!0),"link"==e.type?(Object(n["y"])(),Object(n["e"])(i,{key:1,to:e.url,class:"btn btn-primary"},{default:Object(n["M"])((function(){return[Object(n["j"])(Object(n["H"])(e.title),1)]})),_:2},1032,["to"])):Object(n["f"])("",!0)],64)})),128))])):(Object(n["y"])(),Object(n["g"])("div",C,G))])])])])}}};const R=H;var z=R,A=i("7b17"),q=i("5502"),E=function(e){return Object(n["B"])("data-v-6f29c70e"),e=e(),Object(n["z"])(),e},J={class:"container-fluid py-4"},T={key:0,class:"row"},F={class:"col-md-6"},P={class:"col-md-6"},M={key:1,class:"row"},D={class:"col-md-6"},L=E((function(){return Object(n["h"])("h1",null,"Research",-1)})),B={props:{road:String,location:String},setup:function(e){var t=e,i=Object(q["b"])(),a=null;Object(n["v"])((function(){a=new A["b"](document.getElementById("modal"),{}),i.getters.viewed_quiz||(a.show(),i.commit("setQuizViewed"))}));var r=Object(b["c"])();r.afterEach((function(){a.hide()}));var o=Object(n["I"])(t),l=o.road,c=o.location,d=function(){l.value&&!c.value&&r.push("/research/"+l.value+"/research-question")};d(),Object(n["x"])((function(){d()}));var m=[[{content:s.a.biomedical,url:"/research/biomedical"},{content:s.a.health,url:"/research/health"}]];return function(e,t){return Object(n["y"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("div",J,[Object(n["J"])(l)?(Object(n["y"])(),Object(n["g"])("div",T,[Object(n["h"])("div",F,[Object(n["h"])("h1",null,Object(n["H"])(Object(n["J"])(s.a)[Object(n["J"])(l)].title),1),Object(n["h"])("p",null,Object(n["H"])(Object(n["J"])(s.a)[Object(n["J"])(l)].body),1),Object(n["k"])(u,{road:Object(n["J"])(l),location:Object(n["J"])(c)},null,8,["road","location"])]),Object(n["h"])("div",P,[Object(n["k"])(p["a"],{road:Object(n["J"])(l),phase:Object(n["J"])(c)},null,8,["road","phase"])])])):(Object(n["y"])(),Object(n["g"])("div",M,[Object(n["h"])("div",D,[L,Object(n["h"])("p",null,Object(n["H"])(Object(n["J"])(s.a).research.body),1),Object(n["k"])(h["a"],{buttons:m})])]))]),Object(n["k"])(z,{content:Object(n["J"])(s.a).quiz_teaser_popup},null,8,["content"])],64)}}};i("253d");const K=c()(B,[["__scopeId","data-v-6f29c70e"]]);t["default"]=K},"5f84":function(e,t,i){"use strict";i("4de4"),i("d3b7"),i("a4d3"),i("e01a");var n=i("7a23"),a=i("914f"),s=i.n(a),r=i("1e46"),o=i.n(r),l=Object(n["h"])("h3",null,"Relevant resources",-1),c={class:"card mb-3"},d={class:"card-header"},u={class:"card-body"},h={class:"card-title"},p={class:"card-text"},b=["href"],m={props:{road:String,phase:String},setup:function(e){var t=e,i=Object(n["I"])(t),a=i.phase,r=i.road,m=Object(n["c"])((function(){return s.a.filter((function(e){return r.value?e["phase"]===a.value&&e[r.value]:e["phase"]===a.value}))})),v=function(e){return o.a.resource_types[e.type]?o.a.resource_types[e.type].icon:"bi-question-diamond"},g=function(e){return o.a.resource_types[e.type]?o.a.resource_types[e.type].text:"Unknown"};return function(e,t){return Object(n["y"])(),Object(n["g"])(n["a"],null,[l,(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(Object(n["J"])(m),(function(e){return Object(n["y"])(),Object(n["g"])("div",{key:e},[Object(n["h"])("div",c,[Object(n["h"])("div",d,[Object(n["h"])("i",{class:Object(n["q"])(v(e))},null,2),Object(n["j"])(" "+Object(n["H"])(g(e)),1)]),Object(n["h"])("div",u,[Object(n["h"])("h5",h,Object(n["H"])(e.title),1),Object(n["h"])("p",p,Object(n["H"])(e.description),1),Object(n["h"])("a",{target:"_blank",class:"btn btn-secondary stretched-link",href:e.url},"View",8,b)])])])})),128))],64)}}};const v=m;t["a"]=v},"814f":function(e,t,i){"use strict";i("adee")},"914f":function(e,t){e.exports=[{phase:"terms-and-definitions",title:"What is gender? What is sex?",url:"https://cihr-irsc.gc.ca/e/48642.html",source:"CIHR",description:"Terminology",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"infographic"},{phase:"terms-and-definitions",title:"Terminology",url:"https://genderedinnovations.stanford.edu/terms.html",source:"GI",description:"Terminology",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"terms-and-definitions",title:"Learning about Sex and Gender",url:"https://cihr-irsc.gc.ca/e/50003.html",source:"CIHR",description:"Describes why integrating sex and gender in health research is important",biomedical:"x",health:"X",in_vivo:null,in_vitro:null,type:"video"},{phase:"terms-and-definitions",title:"Introduction to Sex and Gender Considerations in Clinical and Epidemiological Research",url:"https://cihr-irsc.gc.ca/lms/e/cihrpolicysexgenderhumanparticipants/",source:"CIHR",description:"General terms-and-definitions to sex and gender in clinical and epidemiological research at all stages of the research process + Quizes",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"course"},{phase:"terms-and-definitions",title:"Evolutionary biology: Gender Aware Guidelines",url:"https://genderedinnovations.stanford.edu/methods/evobio.html",source:"GI",description:"Guideline for dealing with gender-biased assumption on biomedical research",biomedical:"x",health:"X",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"terms-and-definitions",title:"Course 1: Sex and gender in biomedical research",url:"https://cihr-irsc.gc.ca/e/49347.html",source:"CIHR",description:"Course 1: Sex and gender in biomedical research",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"course"},{phase:"terms-and-definitions",title:"Course 2: Sex and gender in primary data collection with human participants",url:"https://cihr-irsc.gc.ca/e/49347.html",source:"CIHR",description:"Course 2: Sex and gender in primary data collection with human participants",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"course"},{phase:"terms-and-definitions",title:"Course 3: Sex and gender in the analysis of secondary data from human participants",url:"https://cihr-irsc.gc.ca/e/49347.html",source:"CIHR",description:"Course 3: Sex and gender in the analysis of secondary data from human participants",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"course"},{phase:"research-question",title:"The ethical imperative of sex and gender considerations in health research",url:"https://cihr-irsc.gc.ca/e/49932.html",source:"CIHR",description:"Overview of the aspects of research ethics that relate to sex and gender considerations",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"research-question",title:"Formulating Research Questions",url:"https://genderedinnovations.stanford.edu/methods/questions.html",source:"GI",description:"Formulating Research Questions",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"research-question",title:"Key considerations for the appropriate integration of sex as a biological variable",url:"https://cihr-irsc.gc.ca/e/documents/sgba_criteria_sex-en.pdf",source:"CIHR",description:"Key considerations for the appropriate integration of sex as a biological variable",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"research-question",title:"Key considerations for the appropriate integration of gender as a social determinant of health",url:"https://cihr-irsc.gc.ca/e/documents/sgba_criteria_gender-en.pdf",source:"CIHR",description:"Key considerations for the appropriate integration of gender as a social determinant of health",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"research-question",title:"Analyzing how Sex and Gender Interact",url:"https://genderedinnovations.stanford.edu/methods/how.html",source:"GI",description:"Key considerations how sex and gender can interact",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"research-question",title:"Gender Impact Assessment",url:"https://genderedinnovations.stanford.edu/methods/impact.html",source:"GI",description:"Gender impact assessment: Stepwise process to evaluate potential impacts of research before research decisions are finalized.",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"research-question",title:"Rethinking Standards and Reference Models",url:"https://genderedinnovations.stanford.edu/methods/standards.html",source:"GI",description:"Information about rethinking standards and references models related to sex and gender",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"study-population",title:"Science Fact or Science Fiction: If I include female animals, do I need to double my sample size?",url:"https://cihr-irsc.gc.ca/e/documents/igh_mythbuster_november_2018_en.pdf",source:"CIHR",description:"Information about study design and analysis when including female animals",biomedical:"x",health:null,in_vivo:"x",in_vitro:null,type:"factsheet"},{phase:"study-population",title:"Considerations and guidance in designing equity-relevant clinical trials",url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5460332/",source:"CIHR-Linked",description:"Considerations and guidance in designing equity-relevant clinical trials",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"article"},{phase:"study-population",title:"Inclusion of females does not increase variability in rodent research studies",url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6294461/",source:"CIHR-Linked",description:"Article that dispels myths related to the inclusion of female animals in research, and considerations re: sample size",biomedical:"x",health:null,in_vivo:"x",in_vitro:null,type:"article"},{phase:"study-population",title:"Sex and Gender Differences Research Design for Basic, Clinical, and Population Studies: Essentials for Investigators",url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7263836/",source:"Hand Searched",description:"Article that describes considerations related to integrating sex and gender in research design at multiple stages, including section on study population and sample size",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"article"},{phase:"study-population",title:"CPATH Ethical Guidelines for Research Involving Transgender People & Communities",url:"https://cpath.ca/wp-content/uploads/2019/08/CPATH-Ethical-Guidelines-EN.pdf",source:"CIHR-Linked",description:"Guidelines for working with gender-diverse study populations",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-collection",title:"Sex and Gender in Surveys",url:"https://genderedinnovations.stanford.edu/methods/surveys.html",source:"GI",description:"How to ask about gender in surveys",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"data-collection",title:"Analyzing Sex in Tissues and Cells",url:"https://genderedinnovations.stanford.edu/methods/tissues.html",source:"GI",description:"Specific methods for analyzing sex in tissue and cells",biomedical:"x",health:null,in_vivo:null,in_vitro:"x",type:"guideline"},{phase:"data-collection",title:"Lab Animal Research",url:"https://genderedinnovations.stanford.edu/methods/lab.html",source:"GI",description:"Specific methods for lab animal research",biomedical:"x",health:null,in_vivo:"x",in_vitro:null,type:"guideline"},{phase:"data-collection",title:"Analyzing Sex in Biomedicine",url:"https://genderedinnovations.stanford.edu/methods/sex_biomed.html",source:"GI",description:"Specific methods for analyzing sex in biomedicine",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-collection",title:"Analyzing Gender in Health and Biomedicine",url:"https://genderedinnovations.stanford.edu/methods/gender_biomed.html",source:"GI",description:"Specific methods for analyzing gender in health and biomedicine",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-collection",title:"Analyzing Sex",url:"https://genderedinnovations.stanford.edu/methods/AnalyzingSex.pdf",source:"GI",description:"Steps to integrate sex analysis in all phases of research",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-collection",title:"Analyzing Gender",url:"https://genderedinnovations.stanford.edu/methods/AnalyzingGender.pdf",source:"GI",description:"Steps to integrate gender analysis in all phases of research",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-interpretation",title:"Sex, Gender and Knowledge Translation",url:"https://cihr-irsc.gc.ca/e/49933.html",source:"CIHR",description:"Information about how to consider sex and gender in the dissemination of research knowledge",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-interpretation",title:"Rethinking language and visual representation",url:"https://genderedinnovations.stanford.edu/methods/language.html",source:"GI",description:"Information about how language and visual representation shape our knowledge based science activities",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"factsheet"},{phase:"data-interpretation",title:"How to dissemminate results from sex sensitive studies",url:"https://genderedinnovations.stanford.edu/methods/AnalyzingSex.pdf",source:"GI",description:"Steps to integrate sex in all phases of research - section: Disseminate",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-interpretation",title:"How to dissemminate results from gender sensitive studies",url:"https://genderedinnovations.stanford.edu/methods/AnalyzingGender.pdf",source:"GI",description:"Steps to integrate gender in all phases of research - section: Disseminate",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"data-interpretation",title:"Why sex and gender matter in implementation research",url:"https://pubmed.ncbi.nlm.nih.gov/27788671/",source:"CIHR-Linked",description:"Article on taking a sex and gender lens in implementation research (translation of results to practice)",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"article"},{phase:"data-interpretation",title:"Sex as a biological variable: A primer",url:"https://orwh.od.nih.gov/career-development-education/e-learning/sabv-primer",source:"Hand Searched",description:"Series of courses about sex as a biological variable at various stages of the research process. For Data Interpretation and Translation, see course 4 specifically.",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"course"},{phase:"funding",title:"Rethinking Research Priorities and Outcomes",url:"https://genderedinnovations.stanford.edu/methods/priorities.html",source:"GI",description:"Critical questions for analyzing the significance (if any) of sex and gender",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"funding",title:"Criteria for Evaluating the integration of sex and gender [biomedical research]",url:"https://cihr-irsc.gc.ca/e/documents/biomedical_research_guidelines-en.pdf",source:"CIHR",description:"Criteria for Evaluating the integration of sex and gender [biomedical research]",biomedical:"x",health:null,in_vivo:"x",in_vitro:"x",type:"guideline"},{phase:"funding",title:"Criteria for evaluating the integration of sex and gender [research with human participants]",url:"https://cihr-irsc.gc.ca/e/documents/clinical_research_guidelines-en.pdf",source:"CIHR",description:"Criteria for evaluating the integration of sex and gender [research with human participants]",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"funding",title:"Checklists for stepwise integration procedures for incorporating sex and gender analysis into research",url:"https://genderedinnovations.stanford.edu/researchers.html",source:"GI",description:"Checklists for researchers, grant writers, project directors and evaluators for stepwise integration procedures for incorporating sex and gender analysis into research.",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"assembling-teams",title:"Best Practices in Equity, Diversity and Inclusion in Research",url:"https://www.sshrc-crsh.gc.ca/funding-financement/nfrf-fnfr/edi-eng.aspx#4_1",source:"Government of Canada",description:"Guidelines for equity in research teams",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"guideline"},{phase:"assembling-teams",title:"Opinion: Gender diversity leads to better science",url:"https://www.pnas.org/content/114/8/1740",source:"PNAS",description:"Opinion paper about gender-sensitive assembly of research teams",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"article"},{phase:"assembling-teams",title:"Equity, Diversity and Inclusion as Integral to Research and Innovation Excellence: Models for Success",url:"https://gender-summit.com/portia_web/assets/GS11NA_REPORT_EN.pdf",source:"Gender Summit Report",description:"Report regarding equity in research with specific strategies for implementing this",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"report"},{phase:"assembling-teams",title:"How the entire scientific community can confront gender bias in the workplace",url:"https://www.nature.com/articles/s41559-018-0747-4",source:"Nature",description:"Article on gender bias in research",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"article"},{phase:"case-studies",title:"Case Studies for Analyzing Sex",url:"https://genderedinnovations.stanford.edu/methods/sex.html",source:"GI",description:"Related case studies for analyzing sex",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"case_study"},{phase:"case-studies",title:"Case studies for Analyzing Gender",url:"https://genderedinnovations.stanford.edu/methods/gender.html",source:"GI",description:"Related case studies for analyzing gender",biomedical:null,health:"x",in_vivo:null,in_vitro:null,type:"case_study"},{phase:"case-studies",title:"Science Fact or Science Fiction: Can medicine be personalized without sex and gender?",url:"https://cihr-irsc.gc.ca/e/documents/igh_mythbuster_august_2016_en.pdf",source:"CIHR",description:"Case study for integrating sex and gender",biomedical:"x",health:"x",in_vivo:null,in_vitro:null,type:"case_study"},{phase:"case-studies",title:"Science Fact or Science Fiction: Does sex make a difference in preclinical research?",url:"https://cihr-irsc.gc.ca/e/documents/igh_mythbuster_issue6_2015_en.pdf",source:"CIHR",description:"Case study for analyzing sex",biomedical:"x",health:null,in_vivo:null,in_vitro:null,type:"case_study"}]},adee:function(e,t,i){},b0c0:function(e,t,i){var n=i("83ab"),a=i("5e77").EXISTS,s=i("e330"),r=i("9bf2").f,o=Function.prototype,l=s(o.toString),c=/^\s*function ([^ (]*)/,d=s(c.exec),u="name";n&&!a&&r(o,u,{configurable:!0,get:function(){try{return d(c,l(this))[1]}catch(e){return""}}})},b8f1:function(e,t,i){"use strict";var n=i("7a23"),a={class:"card text-dark bg-warning mb-3"},s={class:"card-body"},r={class:"card-title"},o={class:"card-text"},l=Object(n["j"])("Go"),c={props:{buttons:Object},setup:function(e){var t=e,i=Object(n["I"])(t),c=i.buttons;return function(e,t){var i=Object(n["F"])("router-link");return Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(Object(n["J"])(c),(function(e){return Object(n["y"])(),Object(n["g"])("div",{key:e[0],class:"row"},[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["E"])(e,(function(e){return Object(n["y"])(),Object(n["g"])("div",{key:e[0],class:"col-sm-6"},[Object(n["h"])("div",a,[Object(n["h"])("div",s,[Object(n["h"])("h5",r,Object(n["H"])(e.content.title),1),Object(n["h"])("p",o,Object(n["H"])(e.content.info),1),Object(n["k"])(i,{class:"btn btn-primary stretched-link",to:e.url},{default:Object(n["M"])((function(){return[l]})),_:2},1032,["to"])])])])})),128))])})),128)}}};const d=c;t["a"]=d},e01a:function(e,t,i){"use strict";var n=i("23e7"),a=i("83ab"),s=i("da84"),r=i("e330"),o=i("1a2d"),l=i("1626"),c=i("3a9b"),d=i("577e"),u=i("9bf2").f,h=i("e893"),p=s.Symbol,b=p&&p.prototype;if(a&&l(p)&&(!("description"in b)||void 0!==p().description)){var m={},v=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=c(b,this)?new p(e):void 0===e?p():p(e);return""===e&&(m[t]=!0),t};h(v,p),v.prototype=b,b.constructor=v;var g="Symbol(test)"==String(p("test")),f=r(b.toString),y=r(b.valueOf),O=/^Symbol\((.*)\)[^)]+$/,j=r("".replace),x=r("".slice);u(b,"description",{configurable:!0,get:function(){var e=y(this),t=f(e);if(o(m,e))return"";var i=g?x(t,7,-1):j(t,O,"$1");return""===i?void 0:i}}),n({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=chunk-5e595eee.719fda47.js.map