var TitleCaseChange = new function() {
  // set global vars
  var $this = this;
  var newinfo = 'replaced text';
  var exceptionWords = new Array('and', 'the', 'to', 'for', 'is', 'in', 'a', 'at', 'an', 'from', 'by', 'if', 'of');

  this.properCaseChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.titleCaseChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.titleCaseCamelChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.startCaseChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.startCaseCamelChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.camelCaseChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.upperCaseChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.lowerCaseCamelChange = function(info, selectionTarget) {
    $this.changeSelection(info, newinfo, selectionTarget);
  };

  this.changeSelection = function(info, newinfo, selectionTarget) {
    console.log(info);
    if (selectionTarget.value === undefined) {
      // need to detect rich text field or input/text field
      if (selectionTarget.rangeCount) {
        var range = selectionTarget.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(newinfo));
      }
    } else {
      console.log('input or textarea');
    }

    console.log(selectionTarget);
  };
};

  //
  //   onMenuCamelCase: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			original = selectedText.toLowerCase();
  // 			} else {
  // 			original = original2.value.toLowerCase();
  // 			}
  //
  //         original = original.toLowerCase().replace(/[^a-z ]+/g, ' ');
  //   original = original.replace(/^(.)|\s(.)/g, function($1) { return $1.toUpperCase(); });
  //   original = original.replace(/[^a-zA-Z]+/g, '');
  //
  //   // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + original + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = original;
  // 			}
  // 			// end
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //   onMenuStartCase: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //         //var tmpString = gContextMenu.target.value;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			original = selectedText.toLowerCase();
  // 			} else {
  // 			original = original2.value.toLowerCase();
  // 			}
  // 			// end
  //
  //   //var original = tmpString.toLowerCase();
  //   var o_split = original.split(" ");
  //
  //   for (i=0;i<o_split.length;i++) {
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //   }
  //   retval = o_split.join(' ');
  //   //document.theForm.theField.value = retval;
  //
  //   // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + retval + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = retval;
  // 			}
  // 			// end
  //
  //   //gContextMenu.target.value = retval;
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //   onMenuStartCaseCamel: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //         //var tmpString = gContextMenu.target.value;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			original = selectedText;
  // 			} else {
  // 			original = original2.value;
  // 			}
  // 			// end
  //
  //   //var original = tmpString.toLowerCase();
  //   var o_split = original.split(" ");
  //
  //   for (i=0;i<o_split.length;i++) {
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //   }
  //   retval = o_split.join(' ');
  //   //document.theForm.theField.value = retval;
  //
  //   // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + retval + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = retval;
  // 			}
  // 			// end
  //
  //   //gContextMenu.target.value = retval;
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onMenuTitleCase: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  // 	  var special_words = new Array('and',
  // 				'the',
  // 				'to',
  // 				'for',
  // 				'is',
  // 				'in',
  // 				'a',
  // 				'at',
  // 				'an',
  // 				'from',
  // 				'by',
  // 				'if',
  // 				'of');
  // function ie_has_no_indexOf(input) {
  //   for (var i=0;i<special_words.length;i++) {
  //     if (special_words[i]==input) {
  //       return 1;
  //     }
  //   }
  //   return -1;
  // }
  //
  //
  //         //var tmpString = gContextMenu.target.value;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			original = selectedText.toLowerCase();
  // 			} else {
  // 			original = original2.value.toLowerCase();
  // 			}
  // 			// end
  //
  //   //var original = tmpString.toLowerCase();
  //   var o_split = original.split(" ");
  //
  //   for (i=0;i<o_split.length;i++) {
  //     if (i == 0) {
  //       //always capitalize the first word
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //     }
  //     else if(ie_has_no_indexOf(o_split[i]) < 0) {
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //     }
  //   }
  //   retval = o_split.join(' ');
  //   //document.theForm.theField.value = retval;
  //
  //   // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + retval + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = retval;
  // 			}
  // 			// end
  //
  //   //gContextMenu.target.value = retval;
  //
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onMenuTitleCaseCamel: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  // 	  var special_words = new Array('and',
  // 				'the',
  // 				'to',
  // 				'for',
  // 				'is',
  // 				'in',
  // 				'a',
  // 				'at',
  // 				'an',
  // 				'from',
  // 				'by',
  // 				'if',
  // 				'of');
  // function ie_has_no_indexOf(input) {
  //   for (var i=0;i<special_words.length;i++) {
  //     if (special_words[i]==input) {
  //       return 1;
  //     }
  //   }
  //   return -1;
  // }
  //
  //
  //         //var tmpString = gContextMenu.target.value;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			original = selectedText;
  // 			} else {
  // 			original = original2.value;
  // 			}
  // 			// end
  //
  //   //var original = tmpString.toLowerCase();
  //   var o_split = original.split(" ");
  //
  //   for (i=0;i<o_split.length;i++) {
  //     if (i == 0) {
  //       //always capitalize the first word
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //     }
  //     else if(ie_has_no_indexOf(o_split[i]) < 0) {
  //       o_split[i] = (o_split[i].substring(0,1)).toUpperCase() + o_split[i].substring(1);
  //     }
  //   }
  //   retval = o_split.join(' ');
  //   //document.theForm.theField.value = retval;
  //
  //   // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + retval + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = retval;
  // 			}
  // 			// end
  //
  //   //gContextMenu.target.value = retval;
  //
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onMenuItemCommand: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //         var tmpString, findonecase;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			tmpString = selectedText;
  // 			} else {
  // 			tmpString = original2.value;
  // 			}
  // 			// end
  // 			findonecase = tmpString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});;
  // // added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + findonecase + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = findonecase;
  // 			}
  // 			// end
  //
  //
  //
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onMenuAllUppercase: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //         var tmpString, findonecase;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			tmpString = selectedText;
  // 			} else {
  // 			tmpString = original2.value;
  // 			}
  // 			// end
  //         var findonecase = tmpString.toUpperCase();
  //         //gContextMenu.target.value = tmpStringDone;
  // 		// added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + findonecase + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = findonecase;
  // 			}
  // 			// end
  //
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onMenuAllLowercase: function(e) {
  // 	try {
  // 	var richtexteditoredit = false;
  // 	if (gContextMenu == null && document.commandDispatcher.focusedElement != null) {
  // 	  var original2 = document.commandDispatcher.focusedElement;
  //      } else if(gContextMenu == null || gContextMenu.target.value == 'undefined') {
  //   TitleCase.showerror(e);
  // 	return false;
  //   } else if(gContextMenu.target.value) {
  //   var original2 = gContextMenu.target;
  //   } else {
  //   TitleCase.showerror(e);
  // 	return false;
  //   }
  //         var tmpString, findonecase;
  //   // added ability to know if highlighted
  //   var len = original2.value.length;
  //             var startPos = original2.selectionStart;
  // 			var endPos = original2.selectionEnd;
  // 			var selectedText = original2.value.substring(startPos, endPos);
  // 			if (selectedText != "") {
  // 			tmpString = selectedText;
  // 			} else {
  // 			tmpString = original2.value;
  // 			}
  // 			// end
  //         var findonecase = tmpString.toLowerCase();
  //         //gContextMenu.target.value = tmpStringDone;
  // 		// added ability to know if highlighted
  // 			if (selectedText != "") {
  // 			original2.value = original2.value.substring(0,startPos) + findonecase + original2.value.substring(endPos,len);
  // 			original2.selectionStart = startPos;
  // 			original2.selectionEnd = endPos;
  // 			} else {
  // 			original2.value = findonecase;
  // 			}
  // 			// end
  // 		}catch(e){
  //       alert('TitleCase error: ' + e);
  // 	}
  //
  //   },
  //
  //   onToolbarButtonCommand: function(e) {
  //     // just reuse the function above.  you can change this, obviously!
  //     TitleCase.onMenuItemCommand(e);
  //   }
