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
    date="8. mars"
    iconStyle={{ background: 'white', color: '#fff' }}
    icon={""}
  ><HeaderTitle color={'black'}>Påmelding til <span style={{color: '#BD6631'}}>START</span>IT 2021 åpner.</HeaderTitle></VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#BD6631', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #BD6631' }}
    date="18. mars"
    iconStyle={{ background: '#BD6631', color: '#fff' }}
    icon={""}
  ><HeaderTitle>Interaktiv workshop med samarbeidspartnere.</HeaderTitle>
  <Paragraph>12:00 Iterate workshop åpner</Paragraph>
  <Paragraph>14:00 Visma Capture the Flag </Paragraph>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#BD6631' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    date="18. mars"
    iconStyle={{ background: 'white', color: 'white' }}
    icon={""}
  ><HeaderTitle>Mingling med StartUps på Gather.town</HeaderTitle>
  <Paragraph color={'#BD6631'}>16:00 Dørene åpner på Gather.town</Paragraph>
  <Paragraph color={'#BD6631'}>Lightning talks med utvalgte StartUps</Paragraph>
  </VerticalTimelineElement>

  <VerticalTimelineElement
   className="vertical-timeline-element--work"
    contentStyle={{ background: 'black', color: '#BD6631', borderWidth: '0.5px', borderStyle: "solid", borderColor: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid black' }}
    iconStyle={{ background: 'black', color: '#fff' }}
    date="18. mars"
    icon={""}
  ><HeaderTitle color={'#BD6631'}>Kveldsarrangement</HeaderTitle>
  <Paragraph>18:00 åpning ved Eirik Norman Hansen</Paragraph>
  <Paragraph>Norges digitale fremtid ved Silvija Seres</Paragraph>
  <Paragraph>Cybersecurity ved Visma</Paragraph>
  <Paragraph>Sofaprat - Hvordan er det å være gründer?</Paragraph>
  <Paragraph>Foredrag ved Isabelle Ringnes</Paragraph>
  <Paragraph>Foredrag ved Nancy Giordano</Paragraph>
  <Paragraph>Motivasjonsforedrag ved Thomas Anglero</Paragraph>
  <Paragraph>20:00 avslutning</Paragraph>
  </VerticalTimelineElement>
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

const HeaderTitle = styled.h3`
  margin-top: 0px;
  color: ${props => props.color ? props.color : 'white'};
`;

const Paragraph = styled.p`
  color: ${props => props.color ? props.color : 'white'};
`;
