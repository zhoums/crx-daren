!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=337)}({337:function(e,t,n){"use strict";$(function(){if(chrome.runtime.sendMessage({greeting:"checkVersion"}),chrome.extension.onRequest.addListener(function(e,t,n){if("checkV"==e.greeting&&e.res.verSeq>e.res.app_verSeq&&($("#smartTip").attr({"data-isForced":e.res.isForced}).html(e.res.description+",<a href='"+e.res.url+'\' target="_blank">点击下载</a>').show(),$("#reinstall-download-plug").attr({href:e.res.url})),"allDataTurnPage"==e.greeting){var a=$("#smartSet").attr("data-token")||1e4;chrome.runtime.sendMessage({greeting:"allData",tk:a})}}),!window.location.href.includes("login.html")){var e=document.createElement("div");e.id="my-chrome-extension-installed",e.style.display="none",e.innerText=JSON.stringify({key:"value"}),document.body.appendChild(e);var t=null,n=document.getElementById("suc-login-tb"),a=document.getElementById("smartSet"),r=document.getElementById("rollBackData");n.addEventListener("eventByLogin",function(){$.ajax({url:"https://sycm.taobao.com/custom/menu/getPersonalView.json",async:!1,success:function(e){if(0==e.code){$(".window-panel").height(260),$("#step-login").removeClass("step-current"),$("#step-data").addClass("step-current"),$(".window-panel").find(".title").find("h3").html("正在智能回填数据"),$("#s-step-tip-2").hide(),$("#s-step-tip-3").show();var n=$("#smartSet").attr("data-darenid")||1e4,a=$("#smartSet").attr("data-darenname"),r=encodeURIComponent(a),s=$("#smartSet").attr("data-sid")||1e4,o=$("#smartSet").attr("data-token")||1e4;$("#smartTip").html("您即将要做智能回填的是达人“"+a+"”，请确保当前创作平台登录的是该达人，否则智能回填无法生效。").show(),setTimeout(function(){$("#smartTip").hide(),$(".plug-step-win").hide()},78e4),console.log("开始获取配置数据，请稍候。。。"),chrome.runtime.sendMessage({greeting:"triggerConfig",head:"tk="+o+"&darenId="+n+"&darenName="+r+"&sid="+s},function(e){t=e,console.log("configData:",t),$("#rollBackData").trigger("click")})}else alert("未收到平台确认信息，请重新登录创作平台。")}})}),a.addEventListener("eventBySmartSet",function(){$.ajax({url:"https://sycm.taobao.com/custom/menu/getPersonalView.json",success:function(e){if(0==e.code){$(".window-panel").height(260),$("#s-step-tip-1").hide(),$("#s-step-tip-2").hide(),$("#step-login").removeClass("step-current"),$("#step-data").addClass("step-current"),$(".window-panel").find(".title").find("h3").html("正在智能回填数据"),$("#s-step-tip-3").show();var n=$("#smartSet").attr("data-darenid")||1e4,a=$("#smartSet").attr("data-darenname"),r=encodeURIComponent(a),s=$("#smartSet").attr("data-sid")||1e4,o=$("#smartSet").attr("data-token")||1e4;$("#smartTip").html("您即将要做智能回填的是达人“"+a+"”，请确保当前创作平台登录的是该达人，否则智能回填无法生效。").show(),setTimeout(function(){$("#smartTip").hide(),$(".plug-step-win").hide()},78e4),console.log("开始获取配置数据，请稍候。。。"),chrome.runtime.sendMessage({greeting:"triggerConfig",head:"tk="+o+"&darenId="+n+"&darenName="+r+"&sid="+s},function(e){t=e,$("#rollBackData").trigger("click")})}}})}),r.addEventListener("eventByRollBackData",function(){var e=$("#smartSet").attr("data-darenid")||1e4,n=encodeURIComponent($("#smartSet").attr("data-darenname")||1e4),a=$("#smartSet").attr("data-sid")||1e4,r=$("#smartSet").attr("data-token")||1e4,s={darenId:e,tk:r,darenName:n,sid:a};console.log("Begin post data....",t),-1<t.status?chrome.runtime.sendMessage({greeting:"spider",interFaceList:t.result,head:s}):alert("获取配置文件出错"),chrome.runtime.sendMessage({greeting:"allData",tk:r})})}})}});