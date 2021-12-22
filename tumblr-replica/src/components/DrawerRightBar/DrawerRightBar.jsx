import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';
import Header from './DrawerHeader';
import './css/DrawerRightBar.css';

const useStyles = makeStyles({
  drawerpaper: {
    width: 730,
  },

});

/**
 * Component Header in Drawer.
 *
 * @component
 * @example
 * <Header CloseCliked={CloseCliked}) />
 * const Open = false
 * return (
 *   <RightBar />
 * )
 */

function RightBar({ BlogID }) {
  const [Open, setOpening] = useState(false);
  const [OpenChat, setOpenChat] = useState(false);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  /**
* toggelDrawer open drawer state to uodate the drawer state
* @param   {hook} setOpening  hook for updating drawer state
*/
  function toggelDrawer() {
    setOpening(!Open);
  }
  /**
 * closing the drawer and make open=false
 * @param   {hook} setOpening  hook for updating drawer state
 */
  function handelCloseDrawer() {
    setOpening(false);
    setOpenChat(false);
  }

  // function OpenTheChat() {
  //   setOpenChat(true);
  // }

  // function handelCloseChat() {
  //   setOpenChat(false);
  // }
  const classes = useStyles();
  return (
    <div>
      <button type="button" onClick={toggelDrawer}> Open Drawer</button>
      {/* <button type="button" onClick={OpenTheChat}> Open chat</button> */}
      <div className="drawer">

        <Drawer
          className="drawer"
          variant="temporary"
          anchor="right"
          classes={{ paper: classes.drawerpaper }}
          open={Open}
          ModalProps={{ onBackdropClick: handelCloseDrawer }}
        >
          <div>
            <Header
              CloseClicked={() => setOpening(false)}
              OpenChatClicked={() => {
                setOpenChat(true);
                console.log('Openn chat');
              }}
              BlogId={BlogID}
            />
          </div>
          {/* this part for  integrating chat module */}
          {!IsTabletOrMobile && OpenChat && (
            <div className="chat">
              <p>the chat will integrated here</p>
            </div>
          )}
        </Drawer>

      </div>

    </div>
  );
}
RightBar.propTypes = {
  BlogID: PropTypes.func.isRequired,
  /**
* if user click the close button it will be call function HandelClose
*/
};
export default RightBar;
