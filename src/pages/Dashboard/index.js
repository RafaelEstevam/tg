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

import {ChatBar} from 'components/chatBar.component';

import { AcUnitSharp } from '@material-ui/icons';

import { COLORS } from '../../styles/colors';

import mock from '../../services/mock';

const ChartWrapper = styled('div')`
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PageTitle = styled('div')`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
`

const DashboardMenu = styled('div')`
  margin-bottom: 20px;
  overflow: hidden;
  overflow-x: auto;
  max-width: 87vw;
  //   overflow: hidden;
  //   overflow-x: auto;
`;

const DashboardMenuWrapper = styled('div')`
  display: flex;
  gap: 20px;
  width: max-content;
`

const DashboardMenuItem = styled(Button)`
  padding: 4px 10px;
  border-radius: ${COLORS.borderRadius};
  span{
    text-transform: capitalize;
  }
`

const carrosselList = [
  { title: 'Teste', subtitle: '234', value: '435' },
  { title: '234', subtitle: 'Teste', value: '435' }
];

const dashItems = [
  { title: 'Português' },
  { title: 'Matemática' },
  { title: 'História' },
  { title: 'Geografia' }
]

function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [currentDash, setCurrentDash] = useState({});
  const [data, setData] = useState(mock());

  const handleSetDash = (item) => {
    const current = data.filter((dash) => {
      return item.subject === dash.subject
    });
    setCurrentDash(current[0]);
  }

  const handleGetDash = (item, index) => {
    setCurrentLinkIndex(index);
    handleSetDash(item);
  }

  

  useEffect(() => {
    handleSetDash(data[0]);
  }, []);

  return (
    <>
      <PageTitle>
        <Typography variant="h5" className="primary-text">
          Dashboard
        </Typography>
        <Typography variant="subtitle2" className="main-text desktop">
          Último acesso: 20 de junho de 2021
        </Typography>
      </PageTitle>

      <DashboardMenu>
        <DashboardMenuWrapper>
          {data.map((item, index) => (
            <DashboardMenuItem
              size="small"
              className={index !== currentLinkIndex && 'main-text'}
              color={index === currentLinkIndex ? 'primary' : 'default'}
              variant={index === currentLinkIndex ? 'contained' : 'text'}
              currentLinkIndex={currentLinkIndex}
              onClick={() => handleGetDash(item, index)}
            >
              {item.subject}
            </DashboardMenuItem>
          ))}
        </DashboardMenuWrapper>
      </DashboardMenu>

      <Grid container spacing={3}>
        <Grid item lg={3} sm={4} xl={3} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <CustomCard className="second-background main-text">
                <CardContent>
                  <CardContent>
                    <XpProgressComponent experience={currentDash?.experience} />
                    <AchievementsComponent achievements={currentDash?.achievements}/>
                    <PodiumComponent podium={currentDash?.podium} />
                  </CardContent>
                </CardContent>
              </CustomCard>
            </Grid>
            {/* <Grid item lg={12} xs={12}>
              <CustomCard className="main-background main-text">
                <CardContent>
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                </CardContent>
              </CustomCard>
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item lg={8} sm={8} xl={9} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nota'} subtitle={'parcial'} value={currentDash?.review} icon={<AcUnitSharp />} background={COLORS.primary} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Aulas'} subtitle={'assistidas'} value={currentDash?.class} background={COLORS.primary} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº tarefas'} subtitle={'entregues'} value={currentDash?.tasks} background={COLORS.primary} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº trabalhos'} subtitle={'entregues'} value={currentDash?.jobs} background={COLORS.primary} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CarrosselItemComponent carrossel={currentDash?.carrossel} setCurrentIndex={setCurrentIndex} currentIndex={currentIndex}/>
            </Grid>
            <Grid item lg={6} xs={12}>
              <CustomCard height={'360px'} className="primary-background">
                <ChartWrapper>
                  <Typography style={{ color: COLORS.light0 }}><b>Minutos estudados</b></Typography>
                  <BarChartComponent data={currentDash?.chart} />
                  <Typography style={{ color: COLORS.light0 }}><b>Por semana</b></Typography>
                </ChartWrapper>
              </CustomCard>
            </Grid>
            <Grid item lg={4} xs={12}>
              <MetricCardComponent
                height={'250px'}
                title={currentDash?.emphasis?.title}
                subtitle={currentDash?.emphasis?.subtitle}
                value={7.5}
                icon={<AcUnitSharp />}
                background={COLORS.primary}
              />
            </Grid>
            <Grid item lg={8} xs={12}>
              <CustomCard height={'250px'} className="second-background main-text">
                {/* <CardWrapper>
                  <Typography>Dados de conversa</Typography>
                  <div style={{ width: '100%' }}>

                  </div>
                </CardWrapper> */}
              </CustomCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1} sm={8} xl={9} xs={12}>
          <ChatBar />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;