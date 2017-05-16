jQuery.noConflict();
var altcmd = false;
var TitleCase = new function() {

  // set global vars
  var $ = jQuery;
  var selection = '';
  var $this = this;
  var altCmdHandler = function(e) {
    // http://www.catswhocode.com/blog/using-keyboard-shortcuts-in-javascript
    if (e.altKey) {
      switch (e.which) {
        case 49: //ALT+1
          TitleCaseChange.properCaseChange(selection.toString());
          break;
        case 50: //ALT+2
          TitleCaseChange.titleCaseChange(selection.toString());
          break;
        case 51: //ALT+3
          TitleCaseChange.titleCaseCamelChange(selection.toString());
          break;
        case 52: //ALT+4
          TitleCaseChange.startCaseChange(selection.toString());
          break;
        case 53: //ALT+5
          TitleCaseChange.startCaseCamelChange(selection.toString());
          break;
        case 54: //ALT+6
          TitleCaseChange.camelCaseChange(selection.toString());
          break;
        case 55: //ALT+7
          TitleCaseChange.upperCaseChange(selection.toString());
          break;
        case 56: //ALT+8
          TitleCaseChange.lowerCaseCamelChange(selection.toString());
          break;
        default:
          // do nothing
      }
      return false;
    }
  };

  // run this to start application
  this.onLoad = function() {
    let gettingItem = browser.storage.local.get("altcmd");
    gettingItem.then(onGot, onError);
    // make hooks
    $(document).mouseup(function() { $this.getSelectedText(); $this.checkSettingChanges(); });
    $(document).keyup(function(e) { $this.getSelectedText(); $this.checkSettingChanges(); });
  };

  this.checkSettingChanges = function () {
    let gettingItem = browser.storage.local.get("altcmd");
    gettingItem.then(onGot, onError);
  };

  // get select text
  this.getSelectedText = function(e) {
    selection = window.getSelection();
    // need to detect rich text field or input/text field
    if (selection.rangeCount) {
      // var range = sel.getRangeAt(0);
      // range.deleteContents();
      // range.insertNode(document.createTextNode("This is a test"));
    }
  };

  this.unbindAltCmd = function() {
    $(document).unbind("keyup", altCmdHandler);
  };

  this.bindAltCmd = function() {
    $(document).keyup(altCmdHandler);
  };
};

TitleCase.onLoad();

function onGot(item) {
  var altcmd2 = item[0].altcmd;
  if (altcmd2 !== altcmd ) {
    if (altcmd2 === true) {
      TitleCase.bindAltCmd();
    } else {
      TitleCase.unbindAltCmd();
    }
    altcmd = altcmd2;
  }
}

function onError(error) {
  console.log("Error: ${error}");
}
