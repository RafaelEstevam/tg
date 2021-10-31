import {
  Box,
  Card,
  CardContent, Grid, Typography,
  Button
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../../services/api';
import styled from 'styled-components';

import XpProgressComponent from 'components/xpprogress.component';
import PodiumComponent from 'components/podium.component';
import CustomCard from 'components/card.component';
import AchievementsComponent from 'components/achievements.component';
import ActivityComponent from 'components/activity.component';
import MetricsComponent from 'components/metricsCarrossel.compoment';
import MetricCardComponent from 'components/metricCard.component';
import BarChartComponent from 'components/barChart.component';
import CarrosselItemComponent from 'components/carrosselItem.component';

import { AcUnitSharp } from '@material-ui/icons';

const CardWrapper = styled('div')`
  padding: 15px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`

const CarrosselItem = styled('div')`
  height: 80%;
  display: ${props => props.currentIndex === props.index ? 'block' : 'none'};
`

const CarrosselButtons = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`;

const ChartWrapper = styled('div')`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const carrosselList = [
  {title: 'Teste', subtitle: '234', value: '435'},
  {title: '234', subtitle: 'Teste', value: '435'}
];

function Home() {

  const dispatch = useDispatch();
  const tasksData = useSelector(state => state.task);
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [carrosselItems] = useState(carrosselList.length);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 < carrosselItems) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

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
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <CustomCard>
                <CardContent>
                  <CardContent>
                    <XpProgressComponent />
                    <AchievementsComponent />
                    <PodiumComponent />
                  </CardContent>
                </CardContent>
              </CustomCard>
            </Grid>
            <Grid item lg={12} xs={12}>
              <CustomCard>
                <CardContent>
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                </CardContent>
              </CustomCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={9} sm={8} xl={9} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nota'} subtitle={'parcial'} value={7.5} icon={<AcUnitSharp />} background={"#6b71b3"} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Aulas'} subtitle={'assistidas'} value={1} background={"#54c662"} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº tarefas'} subtitle={'entregues'} value={3} background={"#c65954"} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº trabalhos'} subtitle={'entregues'} value={2} background={"#c65493"} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CustomCard height={'360px'}>
                {
                  carrosselList.map((item, index) => (
                    <CarrosselItemComponent key={index} title={item.title} subtitle={item.subtitle}
                      value={item.value} index={index} currentIndex={currentIndex} />
                  ))
                }
                <CarrosselButtons>
                  <Button onClick={() => handlePrev()}>Prev</Button>
                  <Button onClick={() => handleNext()}>Next</Button>
                </CarrosselButtons>
              </CustomCard>
            </Grid>
            <Grid item lg={6} xs={12}>
              <CustomCard height={'360px'}>
                <ChartWrapper>
                  <Typography>Minutos estudados</Typography>
                  <BarChartComponent />
                </ChartWrapper>

              </CustomCard>
            </Grid>
            <Grid item lg={4} xs={12}>
              <MetricCardComponent
                height={'250px'}
                title={'Destaque'}
                subtitle={'Aluno participativo'}
                value={7.5}
                icon={<AcUnitSharp />}
                background={"#6b71b3"}
              />
            </Grid>
            <Grid item lg={8} xs={12}>
              <CustomCard height={'250px'}>
                <CardWrapper>
                  <Typography>Dados de conversa</Typography>
                  <div style={{ width: '100%' }}>

                  </div>
                </CardWrapper>
              </CustomCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;