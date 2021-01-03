document.addEventListener("DOMContentLoaded",()=>{ 
    var B= ` {
    "manifest_version": 2 ,
    "name":"",
    "version":"",
    "description":" ",
    "icons":{
        "128":"icon128.png",
        "48":"icon48.png",
        "16":"icon16.png"
    },
    "browser_action":{
        "default_icon":"icon16.png",
        "default_popup":"popup.html",
        "default_title":""
    },
    "content_scripts":[
        {"matches":["<all_urls>"],
        "js":[""]}
    ]
    
    }` ;

    var a=document.getElementById("left");
    a.innerHTML=B;
});
// for copying

var btn=document.getElementById("btn").addEventListener("click",()=>{
    var a=document.getElementById("left");
    a.select();
    document.execCommand("Copy")
    })
// for assign the entered value

    var mod=document.getElementById("add").addEventListener("click",()=>{
        var name=document.getElementById("name");
        var version=document.getElementById("version");
        var description=document.getElementById("description");
        var js=document.getElementById("js");
        var title=document.getElementById("title");

        var b=`{
    "manifest_version": 2 ,
    "name":"${name.value}",
    "version":"${version.value}",
    "description":"${description.value}",
    "icons":{
        "128":"icon128.png",
        "48":"icon48.png",
        "16":"icon16.png"
    },
    "browser_action":{
        "default_icon":"icon16.png",
        "default_popup":"popup.html",
        "default_title":"${title.value}"
    },
    "content_scripts":[
        {"matches":["<all_urls>"],
        "js":["${js.value}"]}
    ]
    
    } `;
    var a=document.getElementById("left");
    a.innerHTML=b;
    })