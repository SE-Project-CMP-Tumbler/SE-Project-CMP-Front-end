/* eslint-disable */
import { useEffect } from 'react';

/**
 * Toggles one of the three main drop down menus of the navigation bar.
 * @method
 * @param {MutableRefObject} toggleRef - The ref for HTML node that should have its display toggled.
 * @param {Array} allRefs - Array of refs for HTML nodes that should have their display set to none.
 */
export const toggleDropDown = function toggleDropDown(toggleRef, allRefs) {
  // one dropdown open at a time:
  const el = toggleRef;
  const dropdown = el.current.childNodes[1];
  dropdown.style.display = (dropdown.style.display) === 'none' ? 'block' : 'none';
  const icon = el.current.childNodes[0].childNodes[0].childNodes[0];
  const white = 'rgb(255, 255, 255)';
  const grey = 'rgba(255, 255, 255, 0.698)';
  icon.style.color = (icon.style.color === grey) ? white : grey;
  const els = allRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
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
export const toggleIconColor = function toggleIconColor(toggleRef, allIconRefs) {
  const el = toggleRef;
  el.current.style.color = 'rgb(255, 255, 255)';
  const els = allIconRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
    if (element !== toggleRef) { element.current.style.color = 'rgba(255, 255, 255, 0.698)'; }
  });
};

/**
 * Set the navigation's bar dropdown's display to none.
 * @method
 * @param {MutableRefObject} refs - The ref for HTML node that should have its display set to none
 */
export const useOutsideAlerter = function useOutsideAlerter(ref, buttonRef) {
  useEffect(() => {
    function handleClickOutside(event) {
      const el = ref;
      const element = buttonRef;
      const dropdown = el.current;
      if (ref.current && !ref.current.contains(event.target)
      && !buttonRef.current.contains(event.target)) {
        dropdown.style.display = 'none';
        element.current.childNodes[0].childNodes[0].childNodes[0].style.color = '#ffffffb2';
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
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
export const toggleOptions = function toggleOptions(optionsRef) {
  const el = optionsRef;
  el.current.style.display = (el.current.style.display) === 'none' ? 'block' : 'none';
};

/**
 * This chooses one of the four notification categories and sets it as blue
 * @method
 * @param {MutableRefObject} chosenRef - the ref for the HTML node of the category to be set as blue
 * @param {Array} allRefs - An array of the four refs representing the four categories
 */

export const chooseBlueItem = function chooseBlueItem(chosenRef, allRefs) {
  const el = chosenRef;
  el.current.style.color = 'rgb(0, 184, 255)';
  el.current.style.borderBottom = '2px solid rgb(0, 184, 255)';
  const els = allRefs;
  els.forEach((currentRef) => {
    const element = currentRef;
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
export const tumblrSelection = function tumblrSelection(chevronRef) {
  const el = chevronRef;
  el.current.style.display = (el.current.style.display) === 'none' ? 'block' : 'none';
};

/**
 * -Deprecated- :This handles clicking on a new message when the chat drop down is open
 * @method
 * @param {MutableRefObject} chatsRef - the ref for the HTML node of the chat items container
 * @param {MutableRefObject} followingRef - the ref for the node of the following items container
 * @param {MutableRefObject} buttonRef - the ref for the node of the button pressed
 */
export const newMessageHandler = function newMessageHandler(chatsRef, followingRef, buttonRef) {
  const cEl = chatsRef;
  const fEl = followingRef;
  const chatDisplay = cEl.current.style.display;
  const followingDisplay = fEl.current.style.display;
  fEl.current.style.display = 'block';
  [cEl.current.style.display, fEl.current.style.display] = [followingDisplay, chatDisplay];
  const bEl = buttonRef;
  bEl.current.innerHTML = (bEl.current.innerHTML === 'New Message') ? 'Nevermind' : 'New Message';
  bEl.current.style.color = (bEl.current.innerHTML === 'New Message') ? 'rgb(0, 184, 255)' : 'rgba(0, 0, 0, 0.65)';
};

export const items = [
  {
    id: 0,
    name: 'Eiffel Tower',
  },
  {
    id: 1,
    name: 'Tumblr',
  },
  {
    id: 2,
    name: 'Pyramids',
  },
  {
    id: 3,
    name: 'Cairo',
  },
  {
    id: 4,
    name: 'Waterall',
  },
  {
    id: 5,
    name: 'Flowers',
  },
  {
    id: 4,
    name: 'Meh',
  },
  {
    id: 4,
    name: 'Jordon',
  },
  {
    id: 4,
    name: 'Tram Car',
  },
  {
    id: 4,
    name: 'Surfing',
  },
  {
    id: 4,
    name: 'Karthus',
  },
  {
    id: 4,
    name: 'Zed',
  },
  {
    id: 4,
    name: 'Yasuo',
  },
  {
    id: 4,
    name: 'MrWonderful',
  },
  {
    id: 4,
    name: 'Jax',
  },
  {
    id: 4,
    name: 'Malzahar',
  },
  {
    id: 4,
    name: 'Zeo',
  },
];

/**
* Toggles the dropdown menu of the mobile navigation bar.
* @method
* @param {MutableRefObject} divRef - The ref for HTML node that should have its display toggled.
* @param {Boolean} toggled - The state that should be toggled
* @param {Function} setToggled - The function that would help toggle it.
* @param {MutableRefObject} pageRef - The ref for HTML node that should have its display toggled (page).

*/
export const toggleDropDownM = function toggleDropDownM(divRef, toggled, setToggled, pageRef) {
  const el = divRef;
  el.current.style.display = (el.current.style.display) === 'none' ? 'block' : 'none';
  const el2 = pageRef;
  el2.current.style.display = (el2.current.style.display) === 'none' ? 'block' : 'none';
  if (toggled) { setToggled(false); } else { setToggled(true); }
};


/**
* Toggles the dropdown menu of the mobile navigation bar.
* @method
* @param {String} new theme's font.
* @param {String} new theme's font color.
* @param {String} new theme's background color.
*/
export const changeTheme = function changeTheme(font, fontColor, backgroundColor ){
  let elements = document.querySelectorAll('*');
  for (let i = 0; i < elements.length; ++i) {
    elements[i].style.font = font;
    elements[i].style.color = fontColor;
    elements[i].style.backgroundColor = backgroundColor;
  }
  
}