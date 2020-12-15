import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
import Layout from "../components/Layout";
import SEO from "../components/Seo";
export default function App({ data }) {
  return (
    <>
    <SEO title={'Program'}/>
    <Layout>
        <Title>
          <div><span style={{color: '#BD6631'}}>ÅRETS</span> PROGRAM</div>
        </Title>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="Kommer snart"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={""}
  >Påmelding til <span style={{color: '#BD6631'}}>START</span>IT 2021 åpner.</VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#BD6631', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #BD6631' }}
    date="18. mars"
    iconStyle={{ background: '#BD6631', color: '#fff' }}
    icon={""}
  >Interaktivt opplegg med samarbeidspartnerne.</VerticalTimelineElement>
  <VerticalTimelineElement
   className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#BD6631', borderWidth: '0.5px', borderStyle: "solid", borderColor: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    date="18. mars"
    icon={""}
  >Avslutning med bankett på kvelden.</VerticalTimelineElement>
</VerticalTimeline>
    </Layout>
    </>
  );
}

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (max-width: 1268px) {
    font-size: 46px;
  }
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
