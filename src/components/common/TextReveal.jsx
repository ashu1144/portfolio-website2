import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

function App() {
//  start: "top center",
  //         end: "bottom 40%",

let startPos, endPos;

if (window.innerWidth <= 768) {
  // 📱 Mobile
  startPos = "top top";
  endPos = "bottom -50";
} else {
  // 💻 Tablet / Laptop
  startPos = "bottom 40%";
  endPos = "bottom 10%";
}



  useEffect(() => {
    const matches = document.querySelectorAll(".textRev");

    matches.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 0.8,
        scrollTrigger: {
          trigger: target,
          start: startPos,
          end: endPos,
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <AppContainer>
      <Container className="main">
        <Section>Scroll Up</Section>
        <Text>
            <p className="textRev">I craft full-stack experiences</p>
            <p className="textRev">that blend design with logic.</p>

            <p className="textRev">With React, I bring ideas</p>
            <p className="textRev">to life through fast, fluid</p>
            <p className="textRev">and responsive interfaces.</p>

            <p className="textRev">Behind the scenes, Node.js</p>
            <p className="textRev">and Express power my servers</p>
            <p className="textRev">with clean and scalable APIs.</p>

            <p className="textRev">I use MongoDB when flexibility</p>
            <p className="textRev">matters, and MySQL when structure</p>
            <p className="textRev">and relations take the lead.</p>

            <p className="textRev">Together, they form the core</p>
            <p className="textRev">of my development toolkit.</p>
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
  min-height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.div`
  font-size: 70px;
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
    user-select: none;
    line-height: 1.1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 50px;

    p {
      margin-left: 30px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 36px;

    p {
      margin-left: 20px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 25px;

    p {
      margin-left: 15px;
    }
  }
`;
