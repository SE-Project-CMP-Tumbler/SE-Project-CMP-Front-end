import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './DrawerMenu.css';

const logOut = false;
const ask = false;
const submit = false;
const block = false;

const LogOutOptions = [
  'Archive',
  'Close',
];

const AskOptions = [
  'Archive',
  'Following',
  'Ask',
  'Report',
  'Block',
  'Close',
];

const SubmitOptions = [
  'Archive',
  'Following',
  'Submit',
  'Report',
  'Block',
  'Close',
];

const AskSubmitOptins = [
  'Archive',
  'Following',
  'Ask',
  'Submit',
  'Report',
  'Block',
  'Close',
];
const NOptions = [
  'Archive',
  'Following',
  'Report',
  'Block',
  'Close',
];
const AskOptionsB = [
  'Archive',
  'Following',
  'Ask',
  'Report',
  'Unblock',
  'Close',
];

const SubmitOptionsB = [
  'Archive',
  'Following',
  'Submit',
  'Report',
  'Unblock',
  'Close',
];

const AskSubmitOptinsB = [
  'Archive',
  'Following',
  'Ask',
  'Submit',
  'Report',
  'Unblock',
  'Close',
];
const NOptionsB = [
  'Archive',
  'Following',
  'Report',
  'Unblock',
  'Close',
];

let IntialOptions = [];
if (logOut) {
  IntialOptions = LogOutOptions;
} else if (!block) {
  if (ask && !submit) {
    IntialOptions = AskOptions;
  } else if (!ask && submit) {
    IntialOptions = SubmitOptions;
  } else if (ask && submit) {
    IntialOptions = AskSubmitOptins;
  } else {
    IntialOptions = NOptions;
  }
} else if (ask && !submit) {
  IntialOptions = AskOptionsB;
} else if (!ask && submit) {
  IntialOptions = SubmitOptionsB;
} else if (ask && submit) {
  IntialOptions = AskSubmitOptinsB;
} else {
  IntialOptions = NOptionsB;
}

const ITEM_HEIGHT = 48;

/**
 * Component for showing menu items of the returnd blog_id.
 *
 * @component
 * @example
 * const Ask = true
 * const Submit = true
 * const Block=false
 * return (
 *   <Menu />
 * )
 */

export default function LongMenu() {
  const [Options, setOptions] = useState(IntialOptions);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const HandelClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  /**
 * it handel the menue and close it
 * @param   {hook} setAnchor  set it null
 * @param   {hook} setOpen   set it to false
 */
  const HandelClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  /**
 * it makes block button toggel to Unblock if clicked and the oppsite
 * @param   {hook} setOpen  set's the menu list
 * @param   {function} handelClose   it close the menu after clicking the block button
 * @return  {Menu}           the menu after handling block click
 */

  const HandelBlock = () => {
    if (Options[3] === 'Block') {
      setOptions((PrevOptions) => {
        PrevOptions.splice(3, 1);
        PrevOptions.splice(3, 0, 'Unblock');
        HandelClose();
        return PrevOptions;
      });
    } else if (Options[4] === 'Block') {
      setOptions((PrevOptions) => {
        const NewOpions = PrevOptions;
        NewOpions[4] = 'Unblock';
        HandelClose();
        return NewOpions;
      });
    } else if (Options[3] === 'Unblock') {
      setOptions((PrevOptions) => {
        const NewOpions = PrevOptions;
        NewOpions[3] = 'Block';
        HandelClose();
        return NewOpions;
      });
    } else if (Options[4] === 'Unblock') {
      setOptions((PrevOptions) => {
        const NewOpions = PrevOptions;
        NewOpions[4] = 'Block';
        HandelClose();
        return NewOpions;
      });
    }
  };

  /**
 * this function print the menu items and handel the responsive part by adding follow item to
 * the list
 * @param   {hook} setOptions  if the user open Ask
 * @param   {bool} IsTabletOrMobile   to make the menu responsive
 * @return  {Menu}            the printed Menuitems
 */

  function PrintMenu() {
    if (IsTabletOrMobile && Options[1] !== 'Follow') {
      setOptions((PrevOptions) => {
        PrevOptions.splice(1, 0, 'Follow');
        return PrevOptions;
      });
    } else if (!IsTabletOrMobile && Options[1] === 'Follow') {
      setOptions((PrevOptions) => {
        PrevOptions.splice(1, 1);
        return PrevOptions;
      });
    }

    return (
      Options.map((Option) => (

        <MenuItem
          key={Option}
          onClick={Option === 'Block' || Option === 'Unblock' ? HandelBlock : HandelClose}
          className={Option === 'Block' || Option === 'Report' ? 'red-menuitem' : 'menu-item'}
        >
          {Option}

        </MenuItem>

      )));
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={HandelClick}

      >
        <FontAwesomeIcon className="menu-icon" icon={IsTabletOrMobile ? faUserAlt : faEllipsisH} color="white" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',

        }}
        anchorEl={anchorEl}
        open={open}
        onClose={HandelClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * Options.length,
            width: '25ch',
            textAlign: 'center',
          },
        }}
      >
        {PrintMenu()}
      </Menu>
    </div>
  );
}
