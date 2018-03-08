// ==UserScript==
// @name         AWI Colors
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Colors the Automic Web Interface tabs according to its clients settings
// @author       Matthias Schelp
// @match        https://*/awi/*
// @grant        none
// ==/UserScript==

(function(){

//Define colors for your clients and environments
//
// e.g. : '<environment>' : {'<client>': '<color>','<client>': '<color>', ...}
var AEEnvs = {
 '<environment01>': {'<client>': '<color>','<client>': '<color>'}
};

window.setTimeout(function(){

    // Function that colors tabs in Automic Web Interface
    // according to the colors defined in AEEnvs
    function colorTabs(){

        //That grabs the 4 letter Automic environment name
        // from the page title. Not very generic
        var titleStrArray  = document.title.split(" - ");
        var UC4Env         = titleStrArray[0];
        var UC4Clnt        = new Number(titleStrArray[1]);

        if(AEEnvs[UC4Env][UC4Clnt]){
            var cssDynStileAreaP = document.getElementById("dynamic-style");
            cssDynStileAreaP.sheet.insertRule(".v-tabbar-tab { background-color: " + AEEnvs[UC4Env][UC4Clnt] + " !important }",1);
        } else {
            console.debug("There's no corresponding Automic environment/client.");
        }
    };

    // If on login page, add mutation observer to <title> tag that fires when title changes.
    // Else: someone has reloaded the page. No need to activate another
    // mutation observer, just color the tabs.
    if(document.title === "Automic Web Interface"){

        // Create a new event listener via mutation observer that fires
        // colorTabs() when title changes
        var titleChange = new MutationObserver(function(mutations) {
            colorTabs();
        })

        // Register the observer to the <title> tag
        titleChange.observe(document.querySelector('title'),{ subtree: true, characterData: true, childList: true});

    } else {

        // It was just a page relaod. Color the tabs
        colorTabs();
    }
},2000);
})();