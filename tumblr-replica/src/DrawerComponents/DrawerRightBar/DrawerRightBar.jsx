import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './DrawerHeader/DrawerHeader';

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
  const [Open, setOpening] = useState(false);

  /**
* toggel open drawer state to uodate the drawer state
* @param   {hook} setOpening  hook for updating drawer state
*/
  function toggel() {
    setOpening(!Open);
  }
  /**
 * closing the drawer and make open=false
 * @param   {hook} setOpening  hook for updating drawer state
 */
  function handelClose() {
    setOpening(false);
  }
  const classes = useStyles();
  return (
    <div>
      <button type="button" onClick={toggel}> Open Drawer</button>
      <div className="drawer">

        <Drawer
          variant="temporary"
          anchor="right"
          classes={{ paper: classes.drawerpaper }}
          open={Open}
          ModalProps={{ onBackdropClick: handelClose }}
        >
          <div>
            <Header CloseClicked={() => setOpening(false)} />
          </div>
        </Drawer>

      </div>

    </div>
  );
}

export default RightBar;
