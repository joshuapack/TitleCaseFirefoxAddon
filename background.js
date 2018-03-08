// set some globals
var checkedState = true;
var currentClicked = '';

/*
Create all the context menu items.
*/
browser.contextMenus.create({
  id: "check-uncheck",
  title: "Go To Options Page",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "propercase",
  title: "Proper case | ALT+1",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "titlecase",
  title: "Title Case | ALT+2",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "titlecasecc",
  title: "Title Case (CamelCase) | ALT+3",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "startcase",
  title: "Start Case | ALT+4",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "startcasecc",
  title: "Start Case (CamelCase) | ALT+5",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "camelcase",
  title: "CamelCase | ALT+6",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "uppercase",
  title: "UPPER CASE | ALT+7",
  contexts: ["all"]
});

browser.contextMenus.create({
  id: "lowercase",
  title: "lower case | ALT+8",
  contexts: ["all"]
});

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == 'check-uncheck') {
    browser.runtime.openOptionsPage();
  }
  currentClicked = info.menuItemId;
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch("browser.contextMenus.onClicked.addListener:" + onError);
});

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {method: currentClicked}
    ).then(response => {
      // Message from the content script:
      // response.response
    }).catch("sendMessageToTabs:" + onError);
  }
}

function onError(error) {
  console.log("Error: " + error);
}
