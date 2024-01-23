"use client";

import * as Scrollytelling from "~/lib/scrollytelling-client";

import s from "./hero.module.scss";
import Link from "next/link";
import { LogoBasement } from "../../logos/logo";
import  {CanvasWithMacModel}  from "./mac-model";
import { toVw } from "~/lib/utils";
import { useMedia } from "~/hooks/use-media";

import Pyro from "../../../../public/pyro.png"

//  

export const Hero = () => {
  const isMobileSize = useMedia("(max-width: 768px)");

  return (

    
    <Scrollytelling.Root
      defaults={{ ease: "linear" }}
    >
      <Scrollytelling.Pin
        childHeight={"100vh"}
        pinSpacerHeight={"300vh"}
        pinSpacerClassName={s["pin-spacer"]}
      >
        <header className={s["header"]}>
          <Link title="basement scrollytelling" href="/">
            <LogoBasement className={s["logo"]} />
          </Link>

          <svg
            className={s["star"]}
            fill="none"
            viewBox="0 0 679 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                fill="#fff"
                d="M209.804 73.71a12.593 12.593 0 00-3.901-8.19 12.543 12.543 0 00-8.384-3.43L0 59.49l197.519-2.6c3.12-.058 6.107-1.278 8.378-3.422s3.664-5.06 3.907-8.177L211.568 22l1.829 24.084a12.587 12.587 0 003.642 7.938 12.546 12.546 0 007.923 3.649L249 59.503l-24.038 1.833a12.542 12.542 0 00-7.923 3.644 12.59 12.59 0 00-3.642 7.936L211.568 97l-1.764-23.29z"
              />
            </g>
            <g clipPath="url(#b)">
              <path
                fill="#fff"
                d="M469.196 45.29a12.593 12.593 0 003.901 8.19 12.543 12.543 0 008.384 3.43L679 59.51l-197.519 2.6c-3.12.058-6.107 1.278-8.378 3.422s-3.664 5.06-3.907 8.177L467.432 97l-1.829-24.084a12.587 12.587 0 00-3.642-7.938 12.546 12.546 0 00-7.923-3.649L430 59.497l24.038-1.833a12.542 12.542 0 007.923-3.644 12.59 12.59 0 003.642-7.936L467.432 22l1.764 23.29z"
              />
            </g>
            <Scrollytelling.Animation
              tween={{
                start: 0,
                end: 100,
                to: {
                  transformOrigin: "50% 50%",
                  rotate: 360,
                },
              }}
            >
              
              <svg
                className={s["logo"]}
                fill="none"
                viewBox="0 0 400 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <image
                  x="161"  
                  y="-30"   
                  width="80"
                  height="120"
                  xlinkHref={Pyro.src}
                />
              </svg>

            </Scrollytelling.Animation>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M249 22H0v75h249z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M430 97h249V22H430z" />
              </clipPath>
            </defs>
          </svg>
          <div className={s["cta"]}>
            
            <pre>
              <code>To get the grooving experience </code>
            </pre>
            <div className={s["cta--buttons"]}>
                    
             <Link  href="/sections/registration">GET YOUR TICKETS NOW </Link>               
                          
            </div>
          </div>
        </header>

        <section className={s["section"]}>
          <div className={s["model-container"]}>
            <CanvasWithMacModel />
          </div>

          <div className="wrapper">
            <div className={s["content"]}>
              <div className={s["svg__container"]}>
  
              </div>
              <div>
              </div>
              <div className={s["footer"]}>
                <p>
                Pyrokinesis, a thrilling celebration that showcases the fervor of tradition and innovation.
                 Pyrokinesis, the annual cultural extravaganza, paints the picture of Assam with charm and mystery.
                Enchanto Enigma, this year's ethereal theme, weaves a captivating tale of wonders secret. 
                It invites participants into a world where mystery blends with the allure of discovery.
                </p>
                <svg
                  viewBox="0 0 24 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0.226562L24 6.00007L14 11.7736L14 7.00006L0 7.00006V5.00006L14 5.00007L14 0.226562Z"
                    fill="white"
                  />
                </svg>
                <p> 
                Pyrokinesis casts a spellbinding aura. It's a testament to the fusion of tradition and modernity,where the flames of creativity ignite hearts and minds, 
                leaving an indelible mark on all who revel in its enchanting embrace.
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  );
};
