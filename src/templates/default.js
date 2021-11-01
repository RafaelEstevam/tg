import React, { useState } from 'react';
import clsx from 'clsx';

import {useSelector} from 'react-redux'

import { HeaderStyle } from 'styles/header';

import {ChatWrapper} from '../components/chatBar.component';

import Header from 'components/header.component';
import AccessibilityBar from 'components/acessibilityBar.component';

export default function PersistentDrawerLeft({ children }) {
  const classes = HeaderStyle();
  const [open, setOpen] = useState(false);
  const accessibility = useSelector(state => state.accessibility);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{minHeight: '100vh'}} className={accessibility.nightMode && 'nightMode'}>
        <div className={`${classes.root} main-background`}>
          <Header
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            
          />
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div>
              <div className={classes.drawerHeader} />
              <div className={classes.drawerWrapper}>
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
      <ChatWrapper />
    </>
  );
}
