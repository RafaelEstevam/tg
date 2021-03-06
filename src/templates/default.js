import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent, Grid, Typography,
  Button
} from '@material-ui/core';
import clsx from 'clsx';

import { useSelector } from 'react-redux'

import { HeaderStyle } from 'styles/header';

import { ChatWrapper } from '../components/chatBar.component';
import { ChatBar } from '../components/chatBar.component';

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
      <div style={{ minHeight: '100vh' }} className={accessibility.nightMode && 'nightMode'}>
        <div className={`${classes.root} main-background`}>
          <Header
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}

          />
          <main
            className={`${clsx(classes.content, {
              [classes.contentShift]: open,
            })} main-background`}
            style={{minHeight: '100vh'}}
          >
            <div>
              <div className={classes.drawerHeader} />
              <Grid container>
                <Grid item lg={11} xs={12}>
                  <div className={classes.drawerWrapper}>
                    {children}
                  </div>
                </Grid>
                <Grid item lg={1}>
                  <ChatBar />
                </Grid>
              </Grid>

            </div>
          </main>
        </div>
      </div>
      <ChatWrapper />
    </>
  );
}
