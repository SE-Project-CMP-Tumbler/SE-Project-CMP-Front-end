"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgrounds = exports.colors = exports.fonts = exports.changeTheme = exports.toggleDropDownM = exports.items = exports.newMessageHandler = exports.tumblrSelection = exports.chooseBlueItem = exports.toggleOptions = exports.useOutsideAlerter = exports.toggleIconColor = exports.toggleDropDown = void 0;

var _react = require("react");

/* eslint-disable */

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
  var white = 'brightness(100%)';
  var grey = 'brightness(70%)';
  icon.style.filter = icon.style.filter === grey ? white : grey;
  var els = allRefs;
  els.forEach(function (currentRef) {
    var element = currentRef;

    if (element !== toggleRef) {
      element.current.childNodes[1].style.display = 'none';
      element.current.childNodes[0].childNodes[0].childNodes[0].style.filter = grey;
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
  el.current.style.filter = 'brightness(100%)';
  var els = allIconRefs;
  els.forEach(function (currentRef) {
    var element = currentRef;

    if (element !== toggleRef) {
      element.current.style.filter = 'brightness(70%)';
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
        element.current.childNodes[0].childNodes[0].childNodes[0].style.filter = 'brightness(70%)';
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
var items = [{
  id: 0,
  name: 'Eiffel Tower'
}, {
  id: 1,
  name: 'Tumblr'
}, {
  id: 2,
  name: 'Pyramids'
}, {
  id: 3,
  name: 'Cairo'
}, {
  id: 4,
  name: 'Waterall'
}, {
  id: 5,
  name: 'Flowers'
}, {
  id: 4,
  name: 'Meh'
}, {
  id: 4,
  name: 'Jordon'
}, {
  id: 4,
  name: 'Tram Car'
}, {
  id: 4,
  name: 'Surfing'
}, {
  id: 4,
  name: 'Karthus'
}, {
  id: 4,
  name: 'Zed'
}, {
  id: 4,
  name: 'Yasuo'
}, {
  id: 4,
  name: 'MrWonderful'
}, {
  id: 4,
  name: 'Jax'
}, {
  id: 4,
  name: 'Malzahar'
}, {
  id: 4,
  name: 'Zeo'
}];
/**
* Toggles the dropdown menu of the mobile navigation bar.
* @method
* @param {MutableRefObject} divRef - The ref for HTML node that should have its display toggled.
* @param {Boolean} toggled - The state that should be toggled
* @param {Function} setToggled - The function that would help toggle it.
* @param {MutableRefObject} pageRef - The ref for HTML node that should have its display toggled (page).

*/

exports.items = items;

var toggleDropDownM = function toggleDropDownM(divRef, toggled, setToggled, pageRef) {
  var el = divRef;
  el.current.style.display = el.current.style.display === 'none' ? 'block' : 'none';
  var el2 = pageRef;
  el2.current.style.display = el2.current.style.display === 'none' ? 'block' : 'none';

  if (toggled) {
    setToggled(false);
  } else {
    setToggled(true);
  }
};
/**
* Toggles the dropdown menu of the mobile navigation bar.
* @method
* @param {String} new theme's font.
* @param {String} new theme's font color.
* @param {String} new theme's background color.
*/


exports.toggleDropDownM = toggleDropDownM;

var changeTheme = function changeTheme(font, fontColor, backgroundColor) {
  console.log('Change Theme');
  var elements = document.querySelectorAll('*, .blog-option');

  for (var i = 0; i < elements.length; ++i) {
    elements[i].style.setProperty("font-family", font, "important");
    elements[i].style.setProperty("color", fontColor, "important");
  }

  var body = document.querySelectorAll('html, nav, .icons-container, .icon-style, .following-main, .NewsFeed, .Base, .drop-content, .notification-item, css-iezo6v');

  for (var _i = 0; _i < body.length; _i++) {
    body[_i].style.setProperty("background-color", backgroundColor, "important");
  } // fixing font awesome icons:


  var icons = document.querySelectorAll('.fas, .far');

  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    icons[_i2].style.setProperty("font-family", "'Font Awesome 5 Free'", "important");
  }

  var tumblr = document.querySelectorAll('.fa-tumblr');

  for (var _i3 = 0; _i3 < tumblr.length; _i3++) {
    tumblr[_i3].style.setProperty("font-family", "'FontAwesome'", "important");
  }
};

exports.changeTheme = changeTheme;
var fonts = ["'Chakra Petch', sans-serif", "'Indie Flower', cursive", "'Merienda', cursive ", "'Cinzel Decorative', cursive", "'Oooh Baby', cursive", "'Indie Flower', cursive", "'Poppins', sans-serif"];
exports.fonts = fonts;
var colors = ['azure', 'Turquoise', 'Snow', 'FloralWhite', 'Lavender', 'LemonChiffon', ''];
exports.colors = colors;
var backgrounds = ['Black', 'RoyalBlue', '#061833', 'FireBrick', 'MidnightBlue', 'SlateGray', ''];
exports.backgrounds = backgrounds;