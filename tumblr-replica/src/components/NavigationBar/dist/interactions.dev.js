"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newMessageHandler = exports.tumblrSelection = exports.chooseBlueItem = exports.toggleOptions = exports.useOutsideAlerter = exports.toggleIconColor = exports.toggleDropDown = void 0;

var _react = require("react");

/**
 * Toggles one of the three main drop down menus of the navigation bar.
 * @method
 * @param {MutableRefObject} toggleRef - The ref for HTML node that should have its display toggled.
 * @param {Array} allRefs - Array of refs for HTML nodes that should have their display set to none.
 */
var toggleDropDown = function toggleDropDown(toggleRef, allRefs) {
  // one dropdown open at a time:
  var el = toggleRef;
  var dropdown = el.current.childNodes[1];
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
  var icon = el.current.childNodes[0].childNodes[0].childNodes[0];
  var white = 'rgb(255, 255, 255)';
  var grey = 'rgba(255, 255, 255, 0.698)';
  icon.style.color = icon.style.color === grey ? white : grey;
  var els = allRefs;
  els.forEach(function (currentRef) {
    var element = currentRef;

    if (element !== toggleRef) {
      element.current.childNodes[1].style.display = 'none';
      element.current.childNodes[0].childNodes[0].childNodes[0].style.color = 'rgba(255, 255, 255, 0.698)';
    }
  });
};
/**
 * Toggles the colors of navigation bar icons between grey and white
 * @method
 * @param {MutableRefObject} toggleRef - The ref for HTML node that should be toggled to white.
 * @param {Array} allRefs - Array of refs for HTML nodes that should have their color set to grey.
 */


exports.toggleDropDown = toggleDropDown;

var toggleIconColor = function toggleIconColor(toggleRef, allIconRefs) {
  var el = toggleRef;
  el.current.style.color = 'rgb(255, 255, 255)';
  var els = allIconRefs;
  els.forEach(function (currentRef) {
    var element = currentRef;

    if (element !== toggleRef) {
      element.current.style.color = 'rgba(255, 255, 255, 0.698)';
    }
  });
};
/**
 * Set the navigation's bar dropdown's display to none.
 * @method
 * @param {MutableRefObject} refs - The ref for HTML node that should have its display set to none
 */


exports.toggleIconColor = toggleIconColor;

var useOutsideAlerter = function useOutsideAlerter(ref, buttonRef) {
  (0, _react.useEffect)(function () {
    function handleClickOutside(event) {
      var el = ref;
      var element = buttonRef;
      var dropdown = el.current;

      if (ref.current && !ref.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        dropdown.style.display = 'none';
        element.current.childNodes[0].childNodes[0].childNodes[0].style.color = '#ffffffb2';
      }
    } // Bind the event listener


    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, buttonRef]);
};
/**
 * Responsible for toggling the options that drop from each tumblr in user profile drop down
 * @method
 * @param {MutableRefObject} optionsRef - the ref for the HTML node pertaining to the options
 */


exports.useOutsideAlerter = useOutsideAlerter;

var toggleOptions = function toggleOptions(optionsRef) {
  var el = optionsRef;
  el.current.style.display = el.current.style.display === 'none' ? 'block' : 'none';
};
/**
 * This chooses one of the four notification categories and sets it as blue
 * @method
 * @param {MutableRefObject} chosenRef - the ref for the HTML node of the category to be set as blue
 * @param {Array} allRefs - An array of the four refs representing the four categories
 */


exports.toggleOptions = toggleOptions;

var chooseBlueItem = function chooseBlueItem(chosenRef, allRefs) {
  var el = chosenRef;
  el.current.style.color = 'rgb(0, 184, 255)';
  el.current.style.borderBottom = '2px solid rgb(0, 184, 255)';
  var els = allRefs;
  els.forEach(function (currentRef) {
    var element = currentRef;

    if (element !== chosenRef) {
      element.current.style.color = 'rgba(0, 0, 0, 0.65)';
      element.current.style.borderBottom = '0px solid rgb(0, 184, 255)';
    }
  });
};
/**
 * This chooses one of the Tumblr's owned by the user to view their notifications
 * @method
 * @param {MutableRefObject} chevroonRef - the ref for the HTML node that shows tumblr list
 */


exports.chooseBlueItem = chooseBlueItem;

var tumblrSelection = function tumblrSelection(chevronRef) {
  var el = chevronRef;
  el.current.style.display = el.current.style.display === 'none' ? 'block' : 'none';
};
/**
 * -Deprecated- :This handles clicking on a new message when the chat drop down is open
 * @method
 * @param {MutableRefObject} chatsRef - the ref for the HTML node of the chat items container
 * @param {MutableRefObject} followingRef - the ref for the node of the following items container
 * @param {MutableRefObject} buttonRef - the ref for the node of the button pressed
 */


exports.tumblrSelection = tumblrSelection;

var newMessageHandler = function newMessageHandler(chatsRef, followingRef, buttonRef) {
  var cEl = chatsRef;
  var fEl = followingRef;
  var chatDisplay = cEl.current.style.display;
  var followingDisplay = fEl.current.style.display;
  fEl.current.style.display = 'block';
  var _ref = [followingDisplay, chatDisplay];
  cEl.current.style.display = _ref[0];
  fEl.current.style.display = _ref[1];
  var bEl = buttonRef;
  bEl.current.innerHTML = bEl.current.innerHTML === 'New Message' ? 'Nevermind' : 'New Message';
  bEl.current.style.color = bEl.current.innerHTML === 'New Message' ? 'rgb(0, 184, 255)' : 'rgba(0, 0, 0, 0.65)';
};

exports.newMessageHandler = newMessageHandler;