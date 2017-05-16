var checkedState = false;
let gettingItem = browser.storage.local.get("altcmd");
gettingItem.then(onGot, onError);
if (checkedState !== true && checkedState !== false) {
  console.log('checkedState not set');
  checkedState = false;
  browser.storage.local.set({altcmd: false});
}
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
    // if check enable ALT
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
  switch (info.menuItemId) {
    case "propercase":
      TitleCaseChange.properCaseChange(info.selectionText);
      break;
    case "titlecase":
      TitleCaseChange.titleCaseChange(info.selectionText);
      break;
    case "titlecasecc":
      TitleCaseChange.titleCaseCamelChange(info.selectionText);
      break;
    case "startcase":
      TitleCaseChange.startCaseChange(info.selectionText);
      break;
    case "startcasecc":
      TitleCaseChange.startCaseCamelChange(info.selectionText);
      break;
    case "camelcase":
      TitleCaseChange.camelCaseChange(info.selectionText);
      break;
    case "uppercase":
      TitleCaseChange.upperCaseChange(info.selectionText);
      break;
    case "lowercase":
      TitleCaseChange.lowerCaseCamelChange(info.selectionText);
      break;
    case "check-uncheck":
      updateCheckUncheck();
      break;
  }
});


function onGot(item) {
  checkedState = item.altcmd;
}

function onError(error) {
  console.log("Error: ${error}");
}
