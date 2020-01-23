jQuery(document).ready(function(n){
    var t=function(t){
        var u=0,f=0,r=[],i;
        n(t).each(function(){
            if(i=n(this),n(i).find(".widget-content").height("auto"),topPostion=i.position().top,f!=topPostion){
                for(currentDiv=0;currentDiv<r.length;currentDiv++)
                    r[currentDiv].find(".widget-content").height(u);
                r.length=0;
                f=topPostion;
                u=i.find(".widget-content").height();
                r.push(i)
            }else 
                r.push(i),u=u<i.find(".widget-content").height()?i.find(".widget-content").height():u;
            for(currentDiv=0;currentDiv<r.length;currentDiv++)
                r[currentDiv].find(".widget-content").height(u)
        })
    };
    n(window).load(function(){
        t("#page-content .material")
    });
    n(window).resize(function(){
        t("#page-content .material")
    })
})