import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

function TextReveal() {
  let startPos, endPos;

  if (window.innerWidth <= 768) {
    startPos = "top top";
    endPos = "bottom -10";
  } else {
    startPos = "center 40%";
    endPos = "bottom 30%";
  }

  useEffect(() => {
    const matches = document.querySelectorAll(".textRev");

    matches.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: "0%",
        stagger: 0.3,
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
        <Text>
          <p className="textRev">Code transforms vision into reality.</p>
          <p className="textRev">Design meets function in perfect harmony.</p>
          <p className="textRev">Innovation drives every pixel and line.</p>
          <p className="textRev">Users experience seamless digital journeys.</p>
          <p className="textRev">Performance meets aesthetic excellence.</p>
        </Text>
      </Container>
    </AppContainer>
  );
}

export default TextReveal;

// ====================== Styled Components ======================

const AppContainer = styled.div`
  width: 100%;
  min-height: 60vh;
  background: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
    min-height: 50vh;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Text = styled.div`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.6;
  font-family: 'font2', monospace;
  text-align: center;

  p {
    background: linear-gradient(to right, #ffffff 50%, #1a1a1a 50%);
    background-size: 200% 100%;
    background-position-x: 100%;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    margin-bottom: 16px;
    user-select: none;
    letter-spacing: -0.02em;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 36px;

    p {
      margin-bottom: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    font-size: 28px;

    p {
      margin-bottom: 12px;
    }
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    font-size: 18px;

    p {
      margin-bottom: 5px;
    }
  }
`;
