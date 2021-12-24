import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';
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

function RightBar() {
  const { blogid } = useParams();
  console.log(blogid, 'drawer id');
  const navigate = useNavigate();
  const [Open, setOpening] = useState(true);
  const [OpenChat, setOpenChat] = useState(false);
  const IsTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  /**
* toggelDrawer open drawer state to uodate the drawer state
* @param   {hook} setOpening  hook for updating drawer state
*/

  /**
 * closing the drawer and make open=false
 * @param   {hook} setOpening  hook for updating drawer state
 */
  function handelCloseDrawer() {
    setOpening(false);
    setOpenChat(false);
    navigate(-1);
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
              BlogId={blogid}
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

export default RightBar;
