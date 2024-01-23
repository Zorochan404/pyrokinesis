import * as Scrollytelling from "~/lib/scrollytelling-client";
import s from "./horizontal-marquee.module.scss";
import { forwardRef } from "react";

import Logo from "../../../../public/logo.png"


const phrase = "A DIVE INTO THE MYSTIC REALM...";
const splitted = phrase.split("");
const charsLength = splitted.length;

export const HorizontalMarquee = () => {
  return (
    <Scrollytelling.Root
      start="top top+=300px"
    >
      <section className={s.section}>
        <div className={s.pinned}>
          <Scrollytelling.Animation
            tween={{
              start: 0,
              end: 90,
              from: { xPercent: 98, ease: "linear" },
            }}
          >
            <div className={s.animated}>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  to: { x: "-=50vw", ease: "linear" },
                }}
              >
                <p>
                  {splitted.map((s, i) => {
                    const charDuration = 90 / charsLength;
                    const charStart = charDuration * i;
                    const charEnd = charStart + charDuration;

                    return (
                      <Scrollytelling.Animation
                        key={i}
                        tween={{
                          start: charStart * 0.7, // make it start a bit sooner, actually
                          end: charEnd,
                          fromTo: [
                            {
                              yPercent: 40,
                              scale: 0.5,
                              autoAlpha: 0,
                              transformOrigin: "center right",
                            },
                            {
                              keyframes: {
                                "0%": { autoAlpha: 0, scale: 0.5 },
                                "50%": { autoAlpha: 1, scale: 1 },
                                "100%": { yPercent: 0 },
                                easeEach: "linear",
                              },
                              ease: "linear",
                            },
                          ],
                        }}
                      >
                        <span
                          data-character
                          style={{
                            display: "inline-block",
                          }}
                        >
                          {s === " " ? <>&nbsp;</> : s}
                        </span>
                      </Scrollytelling.Animation>
                    );
                  })}
                </p>
              </Scrollytelling.Animation>
              <Scrollytelling.Animation
                tween={{
                  start: 90,
                  end: 100,
                  fromTo: [
                    { scale: 0.8, opacity: 0 },
                    { scale: 1.45, opacity: 1, ease: "linear" },
                  ],
                }}
              >
                <WorldSvg />
              </Scrollytelling.Animation>
            </div>
          </Scrollytelling.Animation>
        </div>
      </section>
    </Scrollytelling.Root>
  );
};

const WorldSvg = forwardRef<SVGSVGElement>((_, ref) => {
  return (
    <svg
      viewBox="0 0 699 467"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.worldSvg}
      ref={ref}
    >
     <image 
     x="-100"
     y="-140"
     width="900"
     height="700"
     xlinkHref={Logo.src}
     />
     
    </svg>
  );
});
