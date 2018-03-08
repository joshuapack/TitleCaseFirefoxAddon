function saveOptions(e) {
    e.preventDefault();
    if (document.querySelector("#altcmd").checked == true) {
        browser.storage.local.set({altcmd: true});
    } else {
        browser.storage.local.set({altcmd: false});
    }
}
  
function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#altcmd").checked = result.altcmd;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get("altcmd");
    getting.then(setCurrentChoice, onError);
}
  
document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);