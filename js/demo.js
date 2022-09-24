var demopages = [
    {"pagename":"home", 
    "pageindex":0,
    "title":"Demo Version",
    "pagelink":"demo-version/index.html",
     "pagemenu":"demo-version/menu-1.html",
     "pagefooter":"demo-version/footer.html",
    },
    {"pagename":"dashboard", 
    "pageindex":1,
    "title":"Demo Darshboard",
    "pagelink":"demo-version/dashboard.html",
     "pagemenu":"demo-version/menu-2.html",
     "pagefooter":"demo-version/no-footer.html",
    },
    {"pagename":"kids", 
    "pageindex":2,
    "title":"Demo Kids",
    "pagelink":"demo-version/kids.html",
     "pagemenu":"demo-version/menu-2.html",
     "pagefooter":"demo-version/no-footer.html",
    },
    {"pagename":"points", 
    "pageindex":3,
    "title":"Demo Points",
    "pagelink":"demo-version/points.html",
     "pagemenu":"demo-version/menu-2.html",
     "pagefooter":"demo-version/no-footer.html",
    },
    {"pagename":"messages", 
    "pageindex":4,
    "title":"Demo Messages",
    "pagelink":"demo-version/messages.html",
     "pagemenu":"demo-version/menu-2.html",
     "pagefooter":"demo-version/no-footer.html",
    },
    {"pagename":"discover", 
    "pageindex":5,
    "title":"Demo Discover",
    "pagelink":"demo-version/discover.html",
     "pagemenu":"demo-version/menu-2.html",
     "pagefooter":"demo-version/no-footer.html",
    },
];

demopagecatch();
function demopagecatch() {
    let demohasURL = window.location.hash;
    if(demohasURL == ""){
        demopagedynamic('home');
    }else{
        let newURL = demohasURL.replace("#", "");
        demopagedynamic(newURL);
        //rollmi(smavi)
    }
}

function demopagedynamic(params) {
    var demopg = demopages.filter(anchor => anchor.pagename == params); 
    var pagename = demopg.map(item => item.pagename); 
    var menuindex = demopg.map(item => item.menuindex); 
    var title = demopg.map(item => item.title); 
    var pagelink = demopg.map(item => item.pagelink);
    var pagemenu = demopg.map(item => item.pagemenu);
    var pagefooter = demopg.map(item => item.pagefooter);
    
    //rpstick(pageindex)

    if(demopg.length < 1) return demopagenotseen();
    history.pushState({urlPath:'#'+pagename},"",'#'+pagename)
    window.scrollTo(0, 0);
    // document.title = title+" : Almohd Gulf Finance PJSC"
    // document.getElementById('headingon').innerHTML =  pageheadings
    // document.getElementById('subheadon').innerHTML =  pageheadings  

    $.get(pagemenu, function(data){
        $("#d-nav").html(data);
    });
    $.get(pagelink, function(data){
        $("#d-main").html(data);
    });
    $.get(pagefooter, function(data){
        $("#d-footer").html(data);
    });
          
}

function demopagenotseen(){
    document.getElementById('d-main').innerHTML =  "Sorry! The page you are looking for does not exits or has been moved."
}

function lintopage(params){
    location.href = `demo#${params}`;
    location.reload(); 
}