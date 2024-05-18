import { Container, Box, Stack } from '@mui/material';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { gsap } from 'gsap';

import styled from 'styled-components';

import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';

import MainContent from './main/main_content';
import AboutUsContent from './main/about_us_content';
import ImpactContent from './main/impact_content';
import ActiveInvestContent from './main/active_invest_content';
import PassiveInvestContent from './main/passive_invest_content';
import JoinUsContent from './main/join_us_content';
import Faq from './main/faq';
import ContactUs from './main/contact_us';
import ScrollButton from './main/scroll_but';
import ActiveInvestHeader from './main/active_invest_header';
import PassiveInvestHeader from './main/passive_invest_header';
import JoinUsHeader from './main/join_us_header';
import QuantInvest from './main/quant_invest';
import PrivateClub from './main/private_club';
import Testimonial from './main/testimonial';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const StyledContainer = styled.div`
  height: 300%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const Panel = styled.div`
  width: 100vw;
  height: 100vh;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border: 1px solid white;
`;

export default function Home() {
  const actInvestHeaderRef = useRef<HTMLElement>();
  const actInvestContentRef = useRef<HTMLElement>();

  const passInvestHeaderRef = useRef<HTMLElement>();
  const passInvestContentRef = useRef<HTMLElement>();

  const joinUsHeaderRef = useRef<HTMLElement>();
  const joinUsContentRef = useRef<HTMLElement>();

  const rootBottomRef = useRef<HTMLElement>();

  const [passInvHeaderHeight, setPassInvHeaderHeight] = useState<number>(0);
  const [joinUsHeaderHeight, setJoinUsHeaderHeight] = useState<number>(0);

  useGSAP(
    () => {
      gsap.to('.act-invest-header', {
        scrollTrigger: {
          trigger: actInvestContentRef.current,
          start: 'top top+=110',
          endTrigger: rootBottomRef.current,
          end: 'bottom top+=150',
          pin: actInvestHeaderRef.current,
          pinSpacing: false,
        },
      });

      gsap.to('.pass-invest-header', {
        scrollTrigger: {
          trigger: rootBottomRef.current,
          start: 'top bottom-=300',
          endTrigger: actInvestContentRef.current,
          end: 'bottom bottom-=100',
          pin: passInvestHeaderRef.current,
          pinSpacing: false,
        },
      });

      gsap.to('.pass-invest-header', {
        scrollTrigger: {
          trigger: passInvestContentRef.current,
          start: 'top top+=210',
          endTrigger: rootBottomRef.current,
          end: 'bottom bottom-=75',
          pin: passInvestHeaderRef.current,
          pinSpacing: false,
        },
      });

      gsap.to('.join-us-header', {
        scrollTrigger: {
          trigger: rootBottomRef.current,
          start: 'top bottom-=300',
          endTrigger: passInvestContentRef.current,
          end: 'bottom bottom-=106',
          pin: joinUsHeaderRef.current,
          pinSpacing: false,
        },
      });

      gsap.to('.join-us-header', {
        scrollTrigger: {
          trigger: joinUsHeaderRef.current,
          start: 'top top+=150',
          endTrigger: rootBottomRef.current,
          end: 'bottom bottom-=150',
          pin: true,
          pinSpacing: false,
        },
      });

      gsap.to('.pass-invest-header', {
        visibility: 'hidden',
        duration: 0.01,
        ease: 'none',
        scrollTrigger: {
          trigger: joinUsContentRef.current,
          start: 'top top+=50',
          endTrigger: joinUsContentRef.current,
          end: 'top top',
          scrub: true,
        },
      });

      gsap.to('.join-us-header', {
        visibility: 'hidden',
        duration: 0.01,
        ease: 'none',
        scrollTrigger: {
          trigger: joinUsContentRef.current,
          start: 'top top+=50',
          endTrigger: joinUsContentRef.current,
          end: 'top top',
          scrub: true,
        },
      });

      gsap.to('.act-invest-header', {
        duration: 0.01,
        ease: 'none',
        visibility: 'hidden',
        scrollTrigger: {
          trigger: joinUsContentRef.current,
          start: 'top top+=50',
          endTrigger: joinUsContentRef.current,
          end: 'top top',
          scrub: true,
        },
      });

      // document?.querySelector('#header-passive-invest')?.addEventListener('click', (e) => {
      //   gsap.to(window, {
      //     duration: 1,
      //     scrollTo: {
      //       y: '#content-pass-invest',
      //       offsetY: 200,
      //     },
      //   });
      // });
    },
    { scope: rootBottomRef }
  );

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     ScrollTrigger.create({
  //       trigger: actInvestHeaderRef.current,
  //       start: 'top top+=16',
  //       endTrigger: rootBottomRef.current,
  //       end: 'bottom top+=150',
  //       pin: true,
  //       pinSpacing: false,
  //     });

  //     ScrollTrigger.create({
  //       trigger: actInvestHeaderRef.current,
  //       start: 'top bottom-=240',
  //       endTrigger: actInvestContentRef.current,
  //       end: 'bottom bottom-=140',
  //       pin: passInvestHeaderRef.current,
  //       pinSpacing: false,
  //     });

  //     ScrollTrigger.create({
  //       trigger: passInvestHeaderRef.current,
  //       start: 'top top+=84',
  //       endTrigger: rootBottomRef.current,
  //       end: 'bottom bottom-=75',
  //       pin: true,
  //       pinSpacing: false,
  //     });

  //     ScrollTrigger.create({
  //       trigger: actInvestHeaderRef.current,
  //       start: 'top bottom-=240',
  //       endTrigger: passInvestContentRef.current,
  //       end: 'bottom bottom-=140',
  //       pin: joinUsHeaderRef.current,
  //       pinSpacing: false,
  //     });

  //     ScrollTrigger.create({
  //       trigger: joinUsHeaderRef.current,
  //       start: 'top top+=150',
  //       endTrigger: rootBottomRef.current,
  //       end: 'bottom bottom-=150',
  //       pin: true,
  //       pinSpacing: false,
  //     });

  //     gsap.to('.pass-invest-header', {
  //       visibility: 'hidden',
  //       duration: 0.01,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: joinUsContentRef.current,
  //         start: 'top top+=50',
  //         endTrigger: joinUsContentRef.current,
  //         end: 'top top',
  //         scrub: true,
  //       },
  //     });

  //     gsap.to('.join-us-header', {
  //       visibility: 'hidden',
  //       duration: 0.01,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: joinUsContentRef.current,
  //         start: 'top top+=50',
  //         endTrigger: joinUsContentRef.current,
  //         end: 'top top',
  //         scrub: true,
  //       },
  //     });

  //     gsap.to('.act-invest-header', {
  //       duration: 0.01,
  //       ease: 'none',
  //       visibility: 'hidden',
  //       scrollTrigger: {
  //         trigger: joinUsContentRef.current,
  //         start: 'top top+=50',
  //         endTrigger: joinUsContentRef.current,
  //         end: 'top top',
  //         scrub: true,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <>
      <MainContent />
      <AboutUsContent />
      <QuantInvest />
      <PrivateClub />

      {/* <ImpactContent /> */}

      {/* <Box
        sx={{
          position: 'relative',
        }}
        ref={rootBottomRef}
      >
        <div>
          <Box
            ref={actInvestHeaderRef}
            className="act-invest-header"
            sx={{
              zIndex: 100,
            }}
          >
            <ActiveInvestHeader />
          </Box>

          <Box ref={actInvestContentRef}>
            <ActiveInvestContent />
          </Box>
        </div>

        <div>
          <Box
            ref={passInvestHeaderRef}
            className="pass-invest-header"
            sx={{
              width: '100%',
              position: 'absolute',
              top: '75px',
              zIndex: 200,
            }}
          >
            <PassiveInvestHeader setPassInvHeaderHeight={setPassInvHeaderHeight} />
          </Box>

          <Box
            ref={passInvestContentRef}
            sx={{
              mt: `${passInvHeaderHeight}px`,
            }}
          >
            <PassiveInvestContent />
          </Box>
        </div>

        <Box
          ref={joinUsHeaderRef}
          className="join-us-header"
          sx={{
            width: '100%',
            position: 'absolute',
            top: '150px',
            zIndex: 200,
          }}
        >
          <JoinUsHeader setJoinUsHeaderHeight={setJoinUsHeaderHeight} />
        </Box>
        <div>
          <Box
            ref={joinUsContentRef}
            sx={{
              mt: `${joinUsHeaderHeight - 20}px`,
            }}
          >
            <JoinUsContent />
          </Box>
        </div>
      </Box> */}
      <Faq />
      <ContactUs />
      <Testimonial />
      <ScrollButton />
    </>
  );
}
