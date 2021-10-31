import react from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import GroupIcon from '@material-ui/icons/Group';

import { resetStorage } from 'services/api';

import { HeaderStyle } from '../styles/header';
import AccessibilityBar from './acessibilityBar.component';
import { PowerSettingsNew } from '@material-ui/icons';

import styled from 'styled-components';

const StudentComponent = styled('div')`
  display: flex;
  align-items: center;
`;

const StudentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 10px;
`;

const CustonTitle = styled(Typography)`
  font-weight: bold;
  line-height: inherit;
  padding-left: 40px;
  span{
    font-size: 20px;
  }
`

const Header = ({ open, handleDrawerOpen, handleDrawerClose }) => {

  const history = useHistory();
  const classes = HeaderStyle();
  const theme = useTheme();

  const decode = useSelector(state => state.decode);

  const handleLogout = () => {
    resetStorage()
    history.push("/");
  }

  return (
    <>
      <AppBar
        color="transparent"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={`${clsx(classes.menuButton, open && classes.hide)} main-text`}
            >
              <MenuIcon />
            </IconButton>
          </div>
          <AccessibilityBar />
          <StudentComponent>
            <StudentWrapper>
              <Typography className="primary-text">
                <b>
                  Aluno X
                </b>
              </Typography>
              <Typography variant="subtitle2" className="main-text">
                alunox@alunox.com
              </Typography>
            </StudentWrapper>
            <IconButton color="primary">
              <PowerSettingsNew />
            </IconButton>
          </StudentComponent>
        </Toolbar>
      </AppBar>
      <Drawer
        className={`${classes.drawer} main-background`}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: `${classes.drawerPaper} second-background`,
        }}
      >
        <div className={classes.drawerHeader}>
          <CustonTitle>
            <span className="main-text">EDUCA</span>
            <span className="primary-text">LYTICS</span>
          </CustonTitle>
          <IconButton onClick={handleDrawerClose} className="main-text">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        {/* <Divider /> */}
        <List>
          {/* <ListItem button onClick={() => {history.push("/dashboard")}}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"Dashboard"} />
        </ListItem> */}
          {/* <ListItem button onClick={() => {history.push("/kanban")}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary={"Kanban"} />
        </ListItem>
        <ListItem button onClick={() => {history.push("/tasks")}}>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText primary={"Tarefas"} />
        </ListItem>
        <ListItem button onClick={() => {history.push("/categories")}}>
          <ListItemIcon>
            <LocalOfferIcon />
          </ListItemIcon>
          <ListItemText primary={"Categorias"} />
        </ListItem>
        {decode.permission === "ROLE_ADMIN" && (
          <ListItem button onClick={() => {history.push("/users")}}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={"Usuários"} />
          </ListItem>
        )}
        <ListItem button onClick={() => {history.push(`/profile/edit`)}}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary={"Perfil de usuário"} />
        </ListItem> */}
        </List>
        {/* <Divider /> */}
      </Drawer>
    </>
  )
}

export default Header;