import React, { useEffect, useRef, useState } from "react";
import "../css/roadmap-timeline.css";

import { fireConfetti } from "./confetti";
// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import "../css/TextStyle.css";

export default function RoadMap() {
  // useEffect(() => {
  //     let i = 0;

  //     var observer = new IntersectionObserver(function (entries) {
  //         if (entries[0].isIntersecting === true)
  //             if (i === 0) {
  //                 fireConfetti()
  //                 i = 1;
  //             }

  //     }, { threshold: [1] });

  //     observer.observe(document.querySelector(".fireBox"));

  // }, [])

  const roadmapContent = [
    {
      id: 1,
      phase: "Phase 1",
      desc:
        "The sale of 3333 Crypto Criminal NFT’s available at presale for .04 ETH Three NFT owners will win a Playstation 5 and an Apple iPhone 13. One owner will be selected to join the Crypto Criminal founders in our next trailer.",
    },
    {
      id: 2,
      phase: "Phase 2",
      desc:
        "Remaining Crypto Criminal NFT’s available for sale for .05 ETH.  The sale of the 7778th NFT will result in the giveaway of a Rolex or $20,000 cash.",
    },
    {
      id: 3,
      phase: "Phase 3",
      desc:
        "The sale of the 11111th Crypto Criminal NFT will result in the giveaway of a one kilogram brick of platinum embossed with the Crypto Criminals logo.  In addition a beeple style NFT of all 11111 Crypto Criminal mask’s will be given away.",
    },
    {
      id: 4,
      phase: "Phase 4",
      desc: "We will launch Criminal Coin.  An ERC-20  token",
    },
    {
      id: 5,
      phase: "Phase 5",
      desc: "We will launch the Crypto Criminal Metaverse",
    },
  ];

  const renderRoadmapContent = roadmapContent.map((content) => {
    return (
      <React.Fragment key={content.id}>
        <li>
          <div
            className="timeline_content"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <h4>{content.phase}</h4>
            <p className="font-roboto-mono text-white">{content.desc}</p>
          </div>
        </li>
      </React.Fragment>
    );
  });

  return (
    <>
      <section id="roadmap" className="text-center text-light bgGradientCustom">
        {/* <x-sign>
          <h1 className="display-3">RoadMap</h1>
        </x-sign> */}

        <div className="container">
          <h1
            className="display-3 text-white glitch d-md-block d-none"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            RoadMap
          </h1>
          <h1
            className="h2 text-white glitch d-md-none d-block"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            RoadMap
          </h1>

          <div className="row px-4">
            <div className="col-xl-12">
              <ul className="timeline-list">{renderRoadmapContent}</ul>
            </div>
          </div>
        </div>

        {/* <Timeline lineColor={"blue"} className="text-light">
          <TimelineItem
            key="001"
            dateText="Phase 1"
            dateInnerStyle={{
              background: "rgba(13, 110, 253)",
              backdropFilter: "blur(2rem)",
              color: "white",
            }}
            bodyContainerStyle={{
              color: "white",
              background:
                "linear-gradient(to right bottom,rgba(13, 110, 253, 0.6),rgba(13, 109, 253, 0.3))",
              padding: "20px",
              backdropFilter: "blur(2rem)",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <x-sign>
              <h4>The Launch of Crypto Criminals</h4>
              <p>- An 11111 NFT collection</p>
              <p>
                - 3333 Crypto Criminal NFT's will be available for presale for
                qualifying Discord participants
              </p>
              <p>
                - 7778 Crypto Criminal NFT's will be available on the open
                market via opensea.com or cryptocriminals.io
              </p>
              <p>- .055 Ethereum is the pre-sale price</p>
              <p>- .065 Ethereum floor price</p>
              <p>
                - 9 Crypto Criminal NFT's can be minted per wallet to avoid bots
                and sweeps.
              </p>
              <p>
                - Each Crypto Criminal NFT will have a point value between 1 and
                3. If you collect 10 points you will be able to add a Crypto
                Criminal to your crew. We will release an additional 11111
                Crypto Criminal NFT’s through this method
              </p>
              <p>- Crypto Criminal owners will have full commercial rights</p>
            </x-sign>
          </TimelineItem>

          <TimelineItem
            key="002"
            dateText="GIVEAWAY MILESTONES"
            dateInnerStyle={{
              background: "rgba(13, 110, 253)",
              backdropFilter: "blur(2rem)",
              color: "white",
            }}
            bodyContainerStyle={{
              color: "white",
              background:
                "linear-gradient(to right bottom,rgba(13, 110, 253, 0.6),rgba(13, 109, 253, 0.3))",
              padding: "20px",
              backdropFilter: "blur(2rem)",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <x-sign>
              <p>Only one prize per person</p>
              <p>
                - Upon sellout of the presale, three random Crypto Criminal NFT
                holders will be selected to win a Play Station 5 plus an iPhone
                13
              </p>
              <p>
                - In addition we will select one Crypto Criminal NFT to be
                featured in our next metaverse movie. The actual owner can be in
                the trailer as well, if they choose. This requires verifying
                your identity and using your exact likeness. The trailer will be
                gifted as a one of one NFT to the holder
              </p>
              <p>
                - Upon sale of the 7778th Crypto Criminal NFT, a random holder
                will be selected to win $20,000 cash or an equivalent value
                Rolex
              </p>
              <p>
                - Upon the sale of the 11111th Crypto Criminal NFT, a random
                holder will be selected to win a one kilogram bar of platinum
                embossed with the CRYPTO CRIMINALS logo{" "}
              </p>
              <p>
                - In addition we will select one holder to receive a One of One
                NFT comprised of all 11111 NFT’s, Beeple Style
              </p>
            </x-sign>
          </TimelineItem>
          <TimelineItem
            key="003"
            dateText="PHASE 2"
            dateInnerStyle={{
              background: "rgba(13, 110, 253)",
              backdropFilter: "blur(2rem)",
              color: "white",
            }}
            bodyContainerStyle={{
              color: "white",
              background:
                "linear-gradient(to right bottom,rgba(13, 110, 253, 0.6),rgba(13, 109, 253, 0.3))",
              padding: "20px",
              backdropFilter: "blur(2rem)",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <x-sign>
              <h4>The Launch of Criminal Coin</h4>
              <p>
                Criminal Coin is an ERC-20 token that will be the official
                currency in the upcoming Criminal Metaverse
              </p>
              <p>
                - Use Criminal Coin to convert into other ERC-20
                cryptocurrencies such as Uniswap, etc.{" "}
              </p>
              <p>
                - The launch of Criminal Coin is predicated on the success of
                Crypto Criminals
              </p>
            </x-sign>
          </TimelineItem>
          <TimelineItem
            key="004"
            dateText="Phase 3"
            dateInnerStyle={{
              background: "rgba(13, 110, 253)",
              backdropFilter: "blur(2rem)",
              color: "white",
            }}
            bodyContainerStyle={{
              color: "white",
              background:
                "linear-gradient(to right bottom,rgba(13, 110, 253, 0.6),rgba(13, 109, 253, 0.3))",
              padding: "20px",
              backdropFilter: "blur(2rem)",
              borderRadius: "8px",
              boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            }}
          >
            <x-sign>
              <h4>The Launch of the Criminal Metaverse</h4>
              <p>
                - In addition to answering your questions regarding your success
                or failure as a criminal, you will be able to play as your
                Crypto Criminal character.
              </p>
              <p>
                - The launch of the Criminal Metaverse is predicated on the
                success of Crypto Criminals and Criminal Coin.
              </p>
            </x-sign>
          </TimelineItem>
        </Timeline> */}
      </section>
    </>
  );
}
