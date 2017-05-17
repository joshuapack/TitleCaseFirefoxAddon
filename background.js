// set some globals
var checkedState = false;
var currentClicked = '';

let gettingItem = browser.storage.local.get("altcmd");
gettingItem.then(onGot, onError);

/*
Create all the context menu items.
*/
browser.contextMenus.create({
  id: "check-uncheck",
  type: "checkbox",
  title: "Allow ALT Shorcut",
  contexts: ["all"],
  checked: checkedState
});

browser.contextMenus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "propercase",
  title: "Proper case | ALT+1",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "titlecase",
  title: "Title Case | ALT+2",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "titlecasecc",
  title: "Title Case (CamelCase) | ALT+3",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "startcase",
  title: "Start Case | ALT+4",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "startcasecc",
  title: "Start Case (CamelCase) | ALT+5",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "camelcase",
  title: "CamelCase | ALT+6",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "uppercase",
  title: "UPPER CASE | ALT+7",
  contexts: ["selection"]
});

browser.contextMenus.create({
  id: "lowercase",
  title: "lower case | ALT+8",
  contexts: ["selection"]
});

function updateCheckUncheck() {
  checkedState = !checkedState;
  if (checkedState) {
    browser.storage.local.set({altcmd: true});
  } else {
    browser.storage.local.set({altcmd: false});
  }
}

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == 'check-uncheck') {
    updateCheckUncheck();
  }
  currentClicked = info.menuItemId;
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {method: currentClicked}
    ).then(response => {
      // console.log("Message from the content script:");
      // console.log(response.response);
    }).catch(onError);
  }
}

function onGot(item) {
  checkedState = item.altcmd;
  browser.contextMenus.update("check-uncheck", {checked: checkedState});
}

function onError(error) {
  console.log("Error: " + error);
}
