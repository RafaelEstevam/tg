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

import { COLORS } from '../../styles/colors';

import mock from '../../services/mock';

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
  span{
    text-transform: capitalize;
  }
`

const ChatItem = styled('div')`
  height: 40px;
  width: 40px;
  background: #333;
  border-radius: 100%;
  margin: 10px;
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

  const [carrosselItems] = useState(carrosselList.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);
  const [currentDash, setCurrentDash] = useState({});

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

  const handleSetDash = (item) => {
    const current = mock.filter((dash) => {
      return item.subject === dash.subject
    });
    setCurrentDash(current[0]);
  }

  const handleGetDash = (item, index) => {
    setCurrentLinkIndex(index);
    handleSetDash(item);
  }

  useEffect(() => {
    handleSetDash(mock[0]);
  }, []);

  return (
    <>
      <PageTitle>
        <Typography variant="h5" className="primary-text">
          Dashboard
        </Typography>
        <Typography variant="subtitle2" className="main-text">
          Último acesso: 20 de junho de 2021
        </Typography>
      </PageTitle>

      <DashboardMenu>
        <DashboardMenuWrapper>
          {mock.map((item, index) => (
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
                    <AchievementsComponent achivements={currentDash?.achivements}/>
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
              <MetricCardComponent title={'Aulas'} subtitle={'assistidas'} value={currentDash?.class} background={COLORS.secondary} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº tarefas'} subtitle={'entregues'} value={currentDash?.tasks} background={COLORS.success} />
            </Grid>
            <Grid item lg={3} xs={6}>
              <MetricCardComponent title={'Nº trabalhos'} subtitle={'entregues'} value={currentDash?.jobs} background={COLORS.danger} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <CustomCard height={'360px'} className="second-background main-text">
                {
                  currentDash?.carrossel?.map((item, index) => (
                    <CarrosselItemComponent key={index} title={item.title} subtitle={item.subtitle} label={item.label}
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
              <CustomCard height={'360px'} className="primary-background">
                <ChartWrapper>
                  <Typography style={{ color: COLORS.light0 }}>Minutos estudados</Typography>
                  <BarChartComponent data={currentDash?.chart} />
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
                <CardWrapper>
                  <Typography>Dados de conversa</Typography>
                  <div style={{ width: '100%' }}>

                  </div>
                </CardWrapper>
              </CustomCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={1} sm={8} xl={9} xs={12}>
          <CustomCard className="second-background main-text">
            <CardWrapper>
              <Typography>Chat</Typography>
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
            </CardWrapper>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;