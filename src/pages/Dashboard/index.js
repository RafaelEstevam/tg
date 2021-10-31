import {
  Box,
  Card,
  CardContent, Grid, Typography
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../services/api';
import XpProgressComponent from 'components/xpprogress.component';
import PodiumComponent from 'components/podium.component';
import CustomCard from 'components/card.component';
import AchievementsComponent from 'components/achievements.component';
import ActivityComponent from 'components/activity.component';
import MetricsComponent from 'components/metricsCarrossel.compoment';

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
        <Grid item lg={3} sm={4} xl={3} xs={12}>
          <CustomCard>
            <CardContent>
              <CardContent>
                <XpProgressComponent />
                <AchievementsComponent />
                <PodiumComponent />
              </CardContent>
            </CardContent>
          </CustomCard>
          <br />
          <CustomCard>
            <CardContent>
              <ActivityComponent />
              <ActivityComponent />
              <ActivityComponent />
              <ActivityComponent />
            </CardContent>
          </CustomCard>
        </Grid>
        <Grid item lg={9} sm={8} xl={9} xs={12}>
          <MetricsComponent />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;