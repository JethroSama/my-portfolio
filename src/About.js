import { Typography } from '@material-ui/core';
import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import useStyles from './About.styles';
import SectionTag from './SectionTag';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
function About() {
  const classes = useStyles();
  return (
    <ScrollableAnchor id={'About'}>
      <div className={classes.root}>
        <div className={classes.container}>
          <SectionTag name='about' />
          <div className={classes.innerContainer}>
            <Typography variant='h4' className={classes.text}>
              A Full Stack Developer. Is Flexible, can learn fast.
            </Typography>
            <Typography variant='h5' className={classes.email}>
              Natividad.jethro69@gmail.com
            </Typography>
          </div>
          <div className={classes.social}>
            {[
              {
                display: <LinkedInIcon />,
                link: 'https://www.linkedin.com/in/jethro-natividad-751a121b2/',
              },
              {
                display: <GitHubIcon />,
                link: 'https://github.com/JethroSama',
              },
            ].map((item) => (
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                {item.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ScrollableAnchor>
  );
}

export default About;
