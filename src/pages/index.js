import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import { Typography, Grid, Button } from "@material-ui/core";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, animated, useSpring } from "react-spring";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import resumeEn from "../../static/files/resume_en.pdf";
import resumePt from "../../static/files/resume_pt.pdf";
// import Contact from "../components/Contact";
import Experience from "../components/Experience";

function GetResumePath(locale) {
    switch(locale)
    {
      case "pt-br":
          return resumePt;
      case "en":
        return resumeEn;

      default: resumeEn;
    }
}

function Home() {
  // const context = useDocusaurusContext();
  const { siteConfig, i18n } = useDocusaurusContext();

  // const { siteConfig = {} } = context;
  const animatedHero = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(8em)" },
    config: { mass: 2, tension: 260, friction: 30 },
    delay: 600,
  });
  const animatedTexts = useTrail(5, {
    from: { opacity: 0, transform: "translateY(3em)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
    delay: 200,
  });

  return (
    <Layout
      //title={` ${siteConfig.title}`}
      title={`Presentation`}
      description="Description will go into a meta tag in <head />"
    >
      <Grid container style={{ padding: "5%" }} className="hero">
        {/*Personal Intro */}
        <Grid item xs={12} lg={6} className="homeIntro">
          <animated.div style={animatedTexts[0]}>
            <Typography variant="h2" gutterBottom>
              <Translate>Welcome! I am</Translate>
              <span className="intro__name"> {siteConfig.title}</span>
              {/* <Typography variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
            </Typography>
          </animated.div>
          <animated.div style={animatedTexts[1]}>
            <Typography variant="body1">
              <Translate>
              An experienced developer with solid knowledge in C#, .Net platform and enthusiast in the world of multi cloud and dev ops. Experience in support, automation and performance optimization in projects, in addition to leading some projects and planning improvements in meetings with other areas.
              </Translate>
            </Typography>
          </animated.div>
          &nbsp;
          <animated.div style={animatedTexts[2]}>
            <Typography variant="h6" gutterBottom>
              <Translate>My Skills:</Translate>
            </Typography>
            <Typography variant="body1" gutterBottom>
              .NetFramework and .Net Core with C#, SQL Server, Oracle, JavaScript, Html, Css, VueJs, Rest Api, DevExpress, Azure, etc.
            </Typography>
          </animated.div>
          &nbsp;
          <animated.p style={animatedTexts[3]}>
            <Button
              style={{ textTransform: "none" }}
              color="primary"
              variant="outlined"
              size="small"
              href={GetResumePath(i18n.currentLocale)}
            >
              <Translate>My Resume</Translate>
            </Button>
          </animated.p>
          <SocialLinks animatedProps={animatedTexts[4]} />
        </Grid>

        <Grid item xs={12} lg={6} className="homeImg">
          {/* <img src={useBaseUrl(image)} className="image" /> */}
          <animated.img
            src={useBaseUrl("img/programming.svg")}
            style={animatedHero}
          />
        </Grid>
      </Grid>
      {/* Experiences section */}
      <Grid>
        <Experience />
      </Grid>
      {/* Projects section */}
      {/* <Grid>
        <Projects />
      </Grid> */}
      {/* Contact form */}
      {/* <Grid>
        <Contact />
      </Grid> */}
    </Layout>
  );
}

function SocialLinks({ animatedProps, ...props }) {
  return (
    <animated.div className="social__links" style={animatedProps}>
      <Grid container spacing={2}>
        <Grid item>
          <Typography display={"inline"} gutterBottom>
            Social Media:
          </Typography>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/rafael-brand%C3%A3o-825494111/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
      </Grid>
    </animated.div>
  );
}

export default Home;
