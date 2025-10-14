import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const matches = document.querySelectorAll('.textRev')

    matches.forEach((target)=>{
        gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 0.5,
        scrollTrigger: {
        trigger: target,
        start: "top 20%",
        end: "bottom 10%",
        scrub: true,
        // markers:true,
      },
    });

    })

  }, []);

  return (
    <AppContainer>
      <Container className="main">
        <Section>Scroll Up</Section>
        <Text>
          <p className="textRev" > I'm a Junior Full Stack Developer</p>
          <p className="textRev">and a recent graduate of the</p>
          <p className="textRev">Software Program.</p>

          <p className="textRev">I create projects under the notion</p>
          <p className="textRev">that “less is more” and my work</p>
          <p className="textRev">reflects my addiction for minimal</p>
          <p className="textRev">and clean design as well as my</p>
          <p className="textRev">desire to push boundaries.</p>

          <p className="textRev">I am currently learning Redux and</p>
          <p className="textRev">JS to further my front-end</p>
          <p className="textRev">focus while developing my concepts on</p>
          <p className="textRev">UI/UX into native mobile applications</p>
          <p className="textRev">using React Native.</p>
        </Text>

        <Section>Scroll Up</Section>
      </Container>
    </AppContainer>
  );
}

export default App;

// ====================== Styled Components ======================

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
  color: white;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Section = styled.section`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
`;

const Text = styled.div`
  font-size: 80px;
  font-weight: 600;
  padding: 70px 0;

  p {
    background: linear-gradient(to right, #ffffff 50%, #252525 50%);
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    user-select:none;
  }
`;
