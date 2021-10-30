import {
  Box,
  Card,
  CardContent, Grid, Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../services/api';
import XpProgressComponent from 'components/xpprogress.component';
import CustomCard from 'components/card.component';

function Home() {

  const dispatch = useDispatch();
  const tasksData = useSelector(state => state.task);
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = React.useState(false);
 
  // console.log(tasksData);

  // const handleAddTask = () => {
  //   dispatch({type: 'ADD_TASK', count: 1});
  // }

  // const handleRemoveTask = () => {
  //   dispatch({type: 'REMOVE_TASK', count: 1});
  // }

  useEffect(() => {
    try {
      API.get("/task/all").then((response) => {
        setTaskList(response.data);
        dispatch({ type: 'ADD_TASK', count: response.data.length });
      })
    } catch (e) {
      console.log(e);
    }

  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <CustomCard>
            <CardContent>
              <CardContent>
                <XpProgressComponent />
              </CardContent>
            </CardContent>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;