import React from "react";

export default function OurStory() {
  return (
    <>
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(img/bg//heroheader-bg.png)",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      ></div>

      <div className="container text-center text-light mt-5">
        <h1 className="display-3 glitch" data-text="Our Story">
          Our Story
        </h1>

        {/* <iframe width="100%"
                    height="300px"
                    src="video/trailer.mp4">
                </iframe> */}
        {/* <x-sign>
                    <p className="">Crypto CRIMINALS Criminals Full Trailer</p>
                </x-sign> */}

        <iframe
          width="80%"
          height="300px"
          src="https://www.youtube.com/embed/eoSHmx3g0ms"
        >
          {/* https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1 */}
          {/* src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"> */}
        </iframe>

        <div className="row my-4 text-left">
          <div className="col-12">
            <x-sign>
              <p className="text-left">
                You casually recline in the back seat of your armored car. The
                spreadsheet on your encrypted computer stares back at you. And
                the profits it shows are staggering.
              </p>
              <p className="text-left">
                In this month alone, you coordinated drug deals and weapons
                trades, all while overseeing extensive gambling and
                loan-sharking operations. Bigger than profits, however, was
                simultaneously eliminating an investigation and a competitor.
                Two birds. One bullet.
              </p>
              <p className="text-left">
                Then your mind's eye blinks, and you remember your predecessor
                doing life in prison, and your under boss who fell victim to a
                Columbian necktie. You wonder: Is "the life" worth the
                disastrous outcomes you've repeatedly witnessed?
              </p>
              <p className="text-left">
                There is a well-known saying; it goes a little something like
                this: “If you can’t do the time, don’t do the crime.” For most,
                this saying is all we need to live a life on the straight and
                narrow. Because the knowledge of consequence is a strong enough
                deterrent. Yet for some reason we consume countless hours of
                interviews, films, and documentaries, and we read millions of
                pages of books, all exploring—and in many instances
                celebrating—the stories of mobsters, drug kingpins, and outlaws.
                Because deep down we want to know if we have what it takes to
                ascend to the top of the underworld food chain. Or would we
                become a statistic, like the 99% who are dead or in jail?
              </p>
              <p className="text-left">
                Enter Crypto Criminals. An NFT project solely designed to help
                you find out if you will not just survive but thrive in a world
                predicated on deceit and violence. A world where breaking the
                law for a day isn’t sufficient. This is a world where you break
                the law for a living. Join us.{" "}
              </p>
              <p className="text-left">
                One last thing: Don’t forget your mask. No face, no case.{" "}
              </p>
              <p className="text-left">Sincerely, </p>
              <p className="text-left">Crypto Criminals: </p>
              <p className="text-left">The Crazy Greek</p>
              <p className="text-left">Mr. Diamondhands</p>
              <p className="text-left">Brahtoshi</p>
              <p className="text-left">El Tiguere</p>
              <p className="text-left">01001101</p>
            </x-sign>
          </div>
        </div>
      </div>
    </>
  );
}
