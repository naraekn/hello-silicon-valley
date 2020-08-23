import React from 'react';

import styled from '@emotion/styled';

import TitleWithEmoji from './TitleWithEmoji';

import { companyLogos } from '../../assets/images';

const Container = styled.div({
  backgroundColor: '#FFF',
  margin: '2em',
  borderRadius: '.5em',
  padding: '1.5em',
});

const Tag = styled.div({
  textAlign: 'center',
});

const Subtitle = styled.div({
  margin: '2em 0 .5em',
  fontSize: '.95em',
  fontWeight: 'bold',
});

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.8em auto',
  height: '6em',
  maxWidth: '60vw',
});

export default function ResultContent({ first, second, last }) {
  return (
    <Container>
      <TitleWithEmoji
        title="THIS_IS_YOUR_COMPANY!"
        emoji="🎉"
      />
      <CompanyLogo
        src={companyLogos[first.id]}
        alt=""
      />
      <Subtitle>{first.subtitle}</Subtitle>
      <p>{first.description}</p>
      <TitleWithEmoji
        title="Second_Fit_Company"
        emoji="🥈"
      />
      <Tag>{second.tag}</Tag>
      <TitleWithEmoji
        title="Worst_Fit_Company"
        emoji="👎"
      />
      <Tag>{last.tag}</Tag>
    </Container>
  );
}
