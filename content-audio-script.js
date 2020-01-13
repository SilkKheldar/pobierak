// dla ścieżki (1)  
// Audio/Index 11?p=-1
// top/11  
// https://edesk.pearson.pl/Home/Show/11
//
// dla ścieżki (2)
//  <audio src="/Audio/GetAudio?access_token=46dace5d-3775-4b33-854f-2fbce37f6092" preload="auto" />
// Audio/Index 559?p=11
// top/559
// 
// dla ścieżki (3)
//  <audio src="/Audio/GetAudio?access_token=2c25b74d-8ab9-408b-8e58-ff05681406d9" preload="auto" />
// https://edesk.pearson.pl/Audio/Index/560?p=11
// top/

// <div class="audiojs " classname="audiojs" id="audiojs_wrapper0">

//ten skrypt poniżej >>  https://edesk.pearson.pl/Content/audio?v=mGMacGLw3fC3GLp5Pf8Ozj2gr7BIlYtgJFAZonSRAJ41
(function(n,t,i){
    var u=function(){
        for(var t,i=/audio(.min)?(.js)?.*/,r=document.getElementsByTagName("script"),n=0,u=r.length;n<u;n++)
        if(t=r[n].getAttribute("src"),i.test(t))
        return t.replace(i,"")
    }(),r;
    i[n]={
        instanceCount:0,
        instances:{},
        flashSource:'      <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="$1" width="1" height="1" name="$1" style="position: absolute; left: -1px;">         <param name="movie" value="$2?playerInstance='
        +n+
        '.instances[\'$1\']&datetime=$3">         <param name="allowscriptaccess" value="always">         <embed name="$1" src="$2?playerInstance='
        +n+
        '.instances[\'$1\']&datetime=$3" width="1" height="1" allowscriptaccess="always">       <\/object>',
        settings:{
            autoplay:!1,
            loop:!1,
            preload:!0,
            imageLocation:u+"player-graphics.gif",
            swfLocation:u+"audiojs.swf",
            useFlash:function(){
                var n=document.createElement("audio");
                return!(n.canPlayType&&n.canPlayType("audio/mpeg;").replace(/no/,""))
            }(),
            hasFlash:function(){
                if(navigator.plugins&&navigator.plugins.length&&navigator.plugins["Shockwave Flash"])
                    return!0;
                if(navigator.mimeTypes&&navigator.mimeTypes.length){
                    var n=navigator.mimeTypes["application/x-shockwave-flash"];
                    return n&&n.enabledPlugin
                }
                try{
                    return new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),!0
                }
                catch(t){}return!1
            }(),
            createPlayer:{
                markup:'          <div class="play-pause">             <p class="play"><\/p>             <p class="pause"><\/p>             <p class="loading"><\/p>             <p class="error"><\/p>           <\/div>           <div class="scrubber">             <div class="progress"><\/div>             <div class="loaded"><\/div>           <\/div>           <div class="time">             <em class="played">00:00<\/em>/<strong class="duration">00:00<\/strong>           <\/div>           <div class="error-message"><\/div>',
                playPauseClass:"play-pause",
                scrubberClass:"scrubber",
                progressClass:"progress",
                loaderClass:"loaded",
                timeClass:"time",
                durationClass:"duration",
                playedClass:"played",
                errorMessageClass:"error-message",
                playingClass:"playing",
                loadingClass:"loading",
                errorClass:"error"
            },
            css:'        .audiojs audio { position: absolute; left: -1px; }         .audiojs { width: 460px; height: 36px; background: #404040; overflow: hidden; font-family: monospace; font-size: 12px;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #444), color-stop(0.5, #555), color-stop(0.51, #444), color-stop(1, #444));           background-image: -moz-linear-gradient(center top, #444 0%, #555 50%, #444 51%, #444 100%);           -webkit-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); -moz-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3);           -o-box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.3); }         .audiojs .play-pause { width: 25px; height: 40px; padding: 4px 6px; margin: 0px; float: left; overflow: hidden; border-right: 1px solid #000; }         .audiojs p { display: none; width: 25px; height: 40px; margin: 0px; cursor: pointer; }         .audiojs .play { display: block; }         .audiojs .scrubber { position: relative; float: left; width: 280px; background: #5a5a5a; height: 14px; margin: 10px; border-top: 1px solid #3f3f3f; border-left: 0px; border-bottom: 0px; overflow: hidden; }         .audiojs .progress { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #ccc; z-index: 1;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ccc), color-stop(0.5, #ddd), color-stop(0.51, #ccc), color-stop(1, #ccc));           background-image: -moz-linear-gradient(center top, #ccc 0%, #ddd 50%, #ccc 51%, #ccc 100%); }         .audiojs .loaded { position: absolute; top: 0px; left: 0px; height: 14px; width: 0px; background: #000;           background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #222), color-stop(0.5, #333), color-stop(0.51, #222), color-stop(1, #222));           background-image: -moz-linear-gradient(center top, #222 0%, #333 50%, #222 51%, #222 100%); }         .audiojs .time { float: left; height: 36px; line-height: 36px; margin: 0px 0px 0px 6px; padding: 0px 6px 0px 12px; border-left: 1px solid #000; color: #ddd; text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5); }         .audiojs .time em { padding: 0px 2px 0px 0px; color: #f9f9f9; font-style: normal; }         .audiojs .time strong { padding: 0px 0px 0px 2px; font-weight: normal; }         .audiojs .error-message { float: left; display: none; margin: 0px 10px; height: 36px; width: 400px; overflow: hidden; line-height: 36px; white-space: nowrap; color: #fff;           text-overflow: ellipsis; -o-text-overflow: ellipsis; -icab-text-overflow: ellipsis; -khtml-text-overflow: ellipsis; -moz-text-overflow: ellipsis; -webkit-text-overflow: ellipsis; }         .audiojs .error-message a { color: #eee; text-decoration: none; padding-bottom: 1px; border-bottom: 1px solid #999; white-space: wrap; }                 .audiojs .play { background: url("$1") -2px -1px no-repeat; }         .audiojs .loading { background: url("$1") -2px -31px no-repeat; }         .audiojs .error { background: url("$1") -2px -61px no-repeat; }         .audiojs .pause { background: url("$1") -2px -91px no-repeat; }                 .playing .play, .playing .loading, .playing .error { display: none; }         .playing .pause { display: block; }                 .loading .play, .loading .pause, .loading .error { display: none; }         .loading .loading { display: block; }                 .error .time, .error .play, .error .pause, .error .scrubber, .error .loading { display: none; }         .error .error { display: block; }         .error .play-pause p { cursor: auto; }         .error .error-message { display: block; }',
            trackEnded:function(){},
            flashError:function(){
                var t=this.settings.createPlayer,
                f=r(t.errorMessageClass,this.wrapper),
                u='Missing <a href="http://get.adobe.com/flashplayer/">flash player<\/a> plugin.';
                this.mp3&&(u+=' <a href="'+this.mp3+'">Download audio file<\/a>.');
                i[n].helpers.removeClass(this.wrapper,t.loadingClass);
                i[n].helpers.addClass(this.wrapper,t.errorClass);
                f.innerHTML=u
            },
            loadError:function(){
                var t=this.settings.createPlayer,u=r(t.errorMessageClass,this.wrapper);
                i[n].helpers.removeClass(this.wrapper,t.loadingClass);
                i[n].helpers.addClass(this.wrapper,t.errorClass);
                u.innerHTML='Error loading: "'+this.mp3+'"'
            },
            init:function(){
                i[n].helpers.addClass(this.wrapper,this.settings.createPlayer.loadingClass)
            },
            loadStarted:function(){
                var t=this.settings.createPlayer,
                e=r(t.durationClass,this.wrapper),
                u=Math.floor(this.duration/60),
                f=Math.floor(this.duration%60);
                i[n].helpers.removeClass(this.wrapper,t.loadingClass);
                e.innerHTML=(u<10?"0":"")+u+":"+(f<10?"0":"")+f
            },
            loadProgress:function(n){
                var t=this.settings.createPlayer,i=r(t.scrubberClass,this.wrapper);
                r(t.loaderClass,this.wrapper).style.width=i.offsetWidth*n+"px"
            },
            playPause:function(){
                this.playing?this.settings.play():this.settings.pause()
            },
            play:function(){
                i[n].helpers.addClass(this.wrapper,this.settings.createPlayer.playingClass)
            },
            pause:function(){
                i[n].helpers.removeClass(this.wrapper,this.settings.createPlayer.playingClass)
            },
            updatePlayhead:function(n){
                var i=this.settings.createPlayer,t=r(i.scrubberClass,this.wrapper);r(i.progressClass,this.wrapper).style.width=t.offsetWidth*n+"px";
                i=r(i.playedClass,this.wrapper);
                t=this.duration*n;
                n=Math.floor(t/60);
                t=Math.floor(t%60);
                i.innerHTML=(n<10?"0":"")+n+":"+(t<10?"0":"")+t
            }
        },
        create:function(n,t){
            return t=t||{},n.length?this.createAll(t,n):this.newInstance(n,t)
        },
        createAll:function(n,t){
            var r=t||document.getElementsByTagName("audio"),u=[],i,f;
            for(n=n||{},i=0,f=r.length;i<f;i++)u.push(this.newInstance(r[i],n));
            return u
        },
        newInstance:function(n,r){
            var u=this.helpers.clone(this.settings),e="audiojs"+this.instanceCount,f="audiojs_wrapper"+this.instanceCount;
            return this.instanceCount++,
                   n.getAttribute("autoplay")!=null&&(u.autoplay=!0),
                   n.getAttribute("loop")!=null&&(u.loop=!0),
                   n.getAttribute("preload")=="none"&&(u.preload=!1),
                   r&&this.helpers.merge(u,r),
                   u.createPlayer.markup?n=this.createPlayer(n,u.createPlayer,f):n.parentNode.setAttribute("id",f),
                   f=new i[t](n,u),u.css&&this.helpers.injectCss(f,u.css),
                   u.useFlash&&u.hasFlash?(this.injectFlash(f,e),this.attachFlashEvents(f.wrapper,f)):u.useFlash&&!u.hasFlash&&this.settings.flashError.apply(f),
                   (!u.useFlash||u.useFlash&&u.hasFlash)&&this.attachEvents(f.wrapper,f),
                   this.instances[e]=f
        },
        createPlayer:function(n,t,i){
            var r=document.createElement("div"),u=n.cloneNode(!0);
            return r.setAttribute("class","audiojs"),
                   r.setAttribute("className","audiojs"),
                   r.setAttribute("id",i),
                   u.outerHTML&&!document.createElement("audio").canPlayType?(u=this.helpers.cloneHtml5Node(n),
                   r.innerHTML=t.markup,
                   r.appendChild(u),
                   n.outerHTML=r.outerHTML,
                   r=document.getElementById(i)):(r.appendChild(u),r.innerHTML+=t.markup,n.parentNode.replaceChild(r,n)),r.getElementsByTagName("audio")[0]
        },
        attachEvents:function(t,u){
            if(u.settings.createPlayer){
                var f=u.settings.createPlayer,o=r(f.playPauseClass,t),e=r(f.scrubberClass,t);
                i[n].events.addListener(o,"click",function(){
                    u.playPause.apply(u)
                });
                i[n].events.addListener(e,"click",function(n){
                    n=n.clientX;
                    var t=this,i=0;
                    if(t.offsetParent)
                        do 
                            i+=t.offsetLeft;
                        while(t=t.offsetParent);
                    u.skipTo((n-i)/e.offsetWidth)
                });
                u.settings.useFlash||(i[n].events.trackLoadProgress(u),i[n].events.addListener(u.element,"timeupdate",function(){
                    u.updatePlayhead.apply(u)
                }),
                i[n].events.addListener(u.element,"ended",function(){
                    u.trackEnded.apply(u)
                }),
                i[n].events.addListener(u.source,"error",function(){
                    clearInterval(u.readyTimer);
                    clearInterval(u.loadTimer);
                    u.settings.loadError.apply(u)
                }))
            }
        },
        attachFlashEvents:function(n,t){
            t.swfReady=!1;
            t.load=function(n){
                t.mp3=n;
                t.swfReady&&t.element.load(n)
            };
            t.loadProgress=function(n,i){
                t.loadedPercent=n;
                t.duration=i;
                t.settings.loadStarted.apply(t);
                t.settings.loadProgress.apply(t,[n])
            };
            t.skipTo=function(n){
                n>t.loadedPercent||(t.updatePlayhead.call(t,[n]),t.element.skipTo(n))
            };
            t.updatePlayhead=function(n){
                t.settings.updatePlayhead.apply(t,[n])
            };
            t.play=function(){
                t.settings.preload||(t.settings.preload=!0,t.element.init(t.mp3));
                t.playing=!0;
                t.element.pplay();
                t.settings.play.apply(t)
            };
            t.pause=function(){
                t.playing=!1;
                t.element.ppause();
                t.settings.pause.apply(t)
            };
            t.setVolume=function(n){
                t.element.setVolume(n)
            };
            t.loadStarted=function(){
                t.swfReady=!0;t.settings.preload&&t.element.init(t.mp3);
                t.settings.autoplay&&t.play.apply(t)
            }
        },
        injectFlash:function(n,t){
            var i=this.flashSource.replace(/\$1/g,t),u,r;
            i=i.replace(/\$2/g,n.settings.swfLocation);
            i=i.replace(/\$3/g,+new Date+Math.random());
            u=n.wrapper.innerHTML;r=document.createElement("div");
            r.innerHTML=i+u;
            n.wrapper.innerHTML=r.innerHTML;
            n.element=this.helpers.getSwf(t)
        },
        helpers:{
            merge:function(n,t){
                for(attr in t)(n.hasOwnProperty(attr)||t.hasOwnProperty(attr))&&(n[attr]=t[attr])
            },
            clone:function(n){
                if(n==null||typeof n!="object")
                return n;
                var i=new n.constructor,t;
                for(t in n)i[t]=arguments.callee(n[t]);
                return i
            },
            addClass:function(n,t){
                RegExp("(\\s|^)"+t+"(\\s|$)").test(n.className)||(n.className+=" "+t)
            },
            removeClass:function(n,t){
                n.className=n.className.replace(RegExp("(\\s|^)"+t+"(\\s|$)")," ")
            },
            injectCss:function(n,t){
                for(var o,f="",r=document.getElementsByTagName("style"),e=t.replace(/\$1/g,n.settings.imageLocation),u=0,i=r.length;u<i;u++)
                    if(o=r[u].getAttribute("title"),o&&~o.indexOf("audiojs")){
                        if(i=r[u],i.innerHTML===e)
                            return;
                        f=i.innerHTML;
                        break
                    }
                r=document.getElementsByTagName("head")[0];
                u=r.firstChild;
                i=document.createElement("style");
                r&&(i.setAttribute("type","text/css"),i.setAttribute("title","audiojs"),i.styleSheet?i.styleSheet.cssText=f+e:i.appendChild(document.createTextNode(f+e)),u?r.insertBefore(i,u):r.appendChild(styleElement))
            },
            cloneHtml5Node:function(n){
                var i=document.createDocumentFragment(),t=i.createElement?i:document;
                return t.createElement("audio"),t=t.createElement("div"),i.appendChild(t),t.innerHTML=n.outerHTML,t.firstChild
            },
            getSwf:function(n){
                return n=document[n]||window[n],n.length>1?n[n.length-1]:n
            }
        },
        events:{
            memoryLeaking:!1,listeners:[],
            addListener:function(t,r,u){
                t.addEventListener?t.addEventListener(r,u,!1):t.attachEvent&&(this.listeners.push(t),this.memoryLeaking||(window.attachEvent("onunload",function(){if(this.listeners)for(var t=0,r=this.listeners.length;t<r;t++)i[n].events.purge(this.listeners[t])}),this.memoryLeaking=!0),t.attachEvent("on"+r,function(){u.call(t,window.event)}))
            },
            trackLoadProgress:function(n){
                var t,i,r;
                n.settings.preload&&(n=n,r=/(ipod|iphone|ipad)/i.test(navigator.userAgent),t=setInterval(function(){n.element.readyState>-1&&(r||n.init.apply(n));n.element.readyState>1&&(n.settings.autoplay&&n.play.apply(n),clearInterval(t),i=setInterval(function(){n.loadProgress.apply(n);n.loadedPercent>=1&&clearInterval(i)}))},10),n.readyTimer=t,n.loadTimer=i)
            },
            purge:function(n){
                var i=n.attributes,t;
                if(i)
                    for(t=0;t<i.length;t+=1)
                        typeof n[i[t].name]=="function"&&(n[i[t].name]=null);
                if(i=n.childNodes)
                    for(t=0;t<i.length;t+=1)
                        purge(n.childNodes[t])
            },
            ready:function(){
                return function(n){var i=window,e=!1,o=!0,t=i.document,s=t.documentElement,f=t.addEventListener?"addEventListener":"attachEvent",c=t.addEventListener?"removeEventListener":"detachEvent",u=t.addEventListener?"":"on",r=function(f){f.type=="readystatechange"&&t.readyState!="complete"||((f.type=="load"?i:t)[c](u+f.type,r,!1),!e&&(e=!0)&&n.call(i,f.type||f))},h=function(){try{s.doScroll("left")}catch(n){setTimeout(h,50);return}r("poll")};if(t.readyState=="complete")n.call(i,"lazy");else{if(t.createEventObject&&s.doScroll){try{o=!i.frameElement}catch(l){}o&&h()}t[f](u+"DOMContentLoaded",r,!1);t[f](u+"readystatechange",r,!1);i[f](u+"load",r,!1)}}
            }()
        }
    };
    i[t]=function(n,t){
        this.element=n;
        this.wrapper=n.parentNode;
        this.source=n.getElementsByTagName("source")[0]||n;
        this.mp3=function(n){
            var t=n.getElementsByTagName("source")[0];
            return n.getAttribute("src")||(t?t.getAttribute("src"):null)
        }(n);
        this.settings=t;
        this.loadStartedCalled=!1;
        this.loadedPercent=0;
        this.duration=1;
        this.playing=!1
    };
    i[t].prototype={
        updatePlayhead:function(){this.settings.updatePlayhead.apply(this,[this.element.currentTime/this.duration])},
        skipTo:function(n){n>this.loadedPercent||(this.element.currentTime=this.duration*n,this.updatePlayhead())},
        load:function(t){this.loadStartedCalled=!1;this.source.setAttribute("src",t);this.element.load();this.mp3=t;i[n].events.trackLoadProgress(this)},
        loadError:function(){this.settings.loadError.apply(this)},
        init:function(){this.settings.init.apply(this)},
        loadStarted:function(){if(!this.element.duration)return!1;this.duration=this.element.duration;this.updatePlayhead();this.settings.loadStarted.apply(this)},
        loadProgress:function(){this.element.buffered!=null&&this.element.buffered.length&&(this.loadStartedCalled||(this.loadStartedCalled=this.loadStarted()),this.loadedPercent=this.element.buffered.end(this.element.buffered.length-1)/this.duration,this.settings.loadProgress.apply(this,[this.loadedPercent]))},
        playPause:function(){this.playing?this.pause():this.play()},
        play:function(){/(ipod|iphone|ipad)/i.test(navigator.userAgent)&&this.element.readyState==0&&this.init.apply(this);this.settings.preload||(this.settings.preload=!0,this.element.setAttribute("preload","auto"),i[n].events.trackLoadProgress(this));this.playing=!0;this.element.play();this.settings.play.apply(this)},
        pause:function(){this.playing=!1;this.element.pause();this.settings.pause.apply(this)},
        setVolume:function(n){this.element.volume=n},
        trackEnded:function(){this.skipTo.apply(this,[0]);this.settings.loop||this.pause.apply(this);this.settings.trackEnded.apply(this)}
    };
    r=function(n,t){
        var i=[],r,f,u,e;
        if(t=t||document,t.getElementsByClassName)
            i=t.getElementsByClassName(n);
        else 
            for(u=t.getElementsByTagName("*"),e=RegExp("(^|\\s)"+n+"(\\s|$)"),r=0,f=u.length;r<f;r++)
                e.test(u[r].className)&&i.push(u[r]);
        return i.length>1?i:i[0]
    }
})("audiojs","audiojsInstance",this);
audiojs.events.ready(function(){var n=audiojs.createAll()})