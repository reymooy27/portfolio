'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import SlideWraper from './components/SlideWraper'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedLink from './components/AnimatedLink'
import data from '../pojectData'
import Project from './components/Project'

function App() {
  const ref = useRef(null)
  const ballRef = useRef<HTMLDivElement>(null)
  const ballTextRef = useRef(null)
  const underline = useRef(null)

  // let q = gsap.utils.selector(ref);
  gsap.registerPlugin(TextPlugin, ScrollTrigger)

  const tl =  gsap.timeline()
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const mouseEnter = (siteLink: string | undefined)=>{
    if(siteLink){
      gsap.to(ballRef.current, {width: 100, height: 100, backgroundColor: 'white'})
      ballRef.current?.classList.remove('mix-blend-difference')
      gsap.to(ballTextRef.current, {opacity: 1})
    }
  }
  const mouseLeave = (siteLink: string | undefined)=>{
    if(siteLink){
      ballRef.current?.classList.add('mix-blend-difference')
      gsap.to(ballRef.current, {width: 20, height: 20})
      gsap.to(ballTextRef.current, {opacity: 0})
    }
  }

  function animatedLinkMouseEnter(){
    gsap.set(underline.current, {scaleX: 1, width: '100%'})
    gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
    gsap.from(underline.current, {scaleX: '0', transformOrigin: 'left' })
    console.log(underline.current)
  }
  
  function animatedLinkMouseLeave(){
    gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white',})
    gsap.to(underline.current, {scaleX: '0', transformOrigin: 'right' })
    // gsap.set(underline.current, {scaleX: 1})
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      gsap.set("#ball", {xPercent: -50, yPercent: -50});

      tl
      .to('#loader1', {scaleX: 0, duration: 1, transformOrigin: 'right', ease: 'sine', delay: 1})
      .to('#loader2', {scaleX: 0, duration: 1, transformOrigin: 'right', ease: 'sine'}, '-=0.1')
      .from('.slider', {scaleX: 0, duration: 1, transformOrigin: 'left', ease: 'sine'}, '+=0.4')
      .to('.slider', {scaleX: 0, duration: 0.3, transformOrigin: 'right', ease: 'sine'}, '+=0.1')
      .fromTo('.children', {opacity: 0, y: 10} ,{opacity: 1, stagger: 0.1, y: 0, duration: 0.6, ease: 'sine'}, '-=0.8')
      .from('.horizontalLine', {width: '0%', duration: 1})

      const xSet = gsap.quickSetter('#ball', "x", "px");
      const ySet = gsap.quickSetter('#ball', "y", "px");

      window.addEventListener("mousemove", e => {    
        mouse.x = e.x;
        mouse.y = e.y;  
      });

      gsap.ticker.add(() => {
        // adjust speed for higher refresh monitors
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
        
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
      });
    }, ref)

    return () =>{ 
      ctx.revert()
      window.removeEventListener('mousemove',()=>null)
    }
  }, []);


  return (
    <>
    <div ref={ref} className='w-full h-full px-4'>
      <div id='loader1' className='fixed top-0 left-0 bg-black w-full h-full z-[5]'></div>
      <div id='loader2' className='fixed bottom-0 left-0 bg-[#ECECEC] w-full h-full z-[4]'></div>
      <div ref={ballRef} 
            id='ball' 
            className='bg-[#ECECEC] rounded-full w-[20px] 
            h-[20px] fixed top-0 left-0 pointer-events-none 
            mix-blend-difference z-[3]'>
          <span className='text-black opacity-0 text-[12px] absolute left-[calc(50%-32px/2-12px)] top-[calc(50%-32px/2)]' ref={ballTextRef}>View Site</span>    
      </div>
      <header className='mix-blend-difference backdrop-blur-md shadow-md py-[20px] px-4 fixed top-0 left-0 w-full z-[2] '>
        <div className='flex justify-end'>
          <div className='flex gap-3'>
            <SlideWraper>
              <span>Rey Mooy</span>
            </SlideWraper>
          </div>
        </div>
      </header>
      <div className='w-full h-screen pt-[3.5rem] max-w-[1200px] lg:mx-auto lg:my-0'>
        <section className='grid grid-cols-12 gap-4'>
          <div className='col-span-full col-start-1 w-fit'>
            <SlideWraper>
              <h1 className='title text-[6rem] md:text-[10rem] lg:text-[18rem] font-bold leading-[0.7] lg:leading-[0.3]'>rey</h1>
            </SlideWraper>
          </div>
          <div className='w-fit mt-10 lg:mt-0 col-span-12 lg:col-span-4 lg:col-start-1 lg:col-end-4 self-end'>
            <SlideWraper>
              <p>i am a fullstack developer,<br></br> based in indonesia</p>
            </SlideWraper>
          </div>
          <div className='col-span-8 col-start-1 lg:col-start-4 col-end-13 w-fit row-start-2'>
            <SlideWraper>
              <h1 className='title text-[6rem] md:text-[10rem] lg:text-[18rem] font-bold leading-[0.7] lg:leading-[0.3]'>mooy</h1>
            </SlideWraper>
              
          </div>
        </section>

        <div className='horizontalLine w-full bg-[#ECECEC] text-black h-[0.5px] my-[1.3rem]'></div>
        <div className='grid grid-cols-12 gap-4'>
          <div className='grid-span-4 col-start-1 col-end-4 flex flex-col gap-4 w-fit'>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='twitter' link='https://twitter.com/itzyaboirey'/>
            </SlideWraper>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='instagram' link='https://www.instagram.com/_itzyaboirey/'/>
            </SlideWraper>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='whatsapp' link='https://wa.me/+6281338047308'/>
            </SlideWraper>
          </div>
          <div className='grid-span-4 col-start-5 col-end-8 flex flex-col gap-4 w-fit'>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='github' link='https://github.com/reymooy27'/>
            </SlideWraper>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='linkedin' link='https://www.linkedin.com/in/rey-mooy-1a60a01a6/'/>
            </SlideWraper>
          </div>
          <div className='grid-span-4 row-start-2 lg:row-start-1 col-start-1 lg:col-start-9 col-end-12 flex flex-col gap-4 w-fit'>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='gdrrey@gmail.com' link='mailto:gdrrey@gmail.com'/>
            </SlideWraper>
            <SlideWraper>
              <AnimatedLink ref={underline} mouseEnter={animatedLinkMouseEnter} mouseLeave={animatedLinkMouseLeave} name='curriculum vitae' link=''/>
            </SlideWraper>
          </div>
        </div>
      </div>

    </div>

    <div className='w-full h-full mt-10'>
      <div className='px-4'>
        <h1 className='text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold leading-none'>projects</h1>
      </div>
      <div className='projectWrapper relative bg-[#ECECEC] rounded-t-[100px] rounded-b-[50px] w-full h-full pt-28 px-4 pb-28'>

        <div className='w-full max-w-[1200px] lg:mx-auto flex flex-col'>
          {data.map((project)=>(
            <Project
              mouseEnter={mouseEnter} 
              mouseLeave={mouseLeave}
              animatedLinkMouseEnter={animatedLinkMouseEnter}
              animatedLinkMouseLeave={animatedLinkMouseLeave}
              key={project.id} 
              name={project.name} 
              image={project.image} 
              language={project.language}
              techStack={project.techStack}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
              ref={underline}
              />
          ))}
          <div className='grid grid-cols-12 gap-4 mb-[8em] md:mb-[15em]'>
            <div className='col-start-1 col-end-13 md:col-end-4 md:row-start-1'>
              <h1 className='text-black font-bold text-[1.5rem]'>another project</h1>
            </div>
            <div className='col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1'>
              {data.map(project=>(
                <div key={project.id} className='border-b first:border-t border-black w-full py-2 pl-2'>
                  <a target="_blank" href={project.siteLink}>
                    <h1 className='text-black text-[2em] font-bold '>{project.name}</h1>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 left-0 right-0 w-full mb-[-1.6em] md:mb-[-2.7em] lg:mb-[-5em]'>
          <h1 className='text-[6rem] md:text-[10rem] lg:text-[18rem] text-center font-bold text-black leading-none'>about</h1>
        </div>
      </div>
    </div>

    <div className='mt-[8rem] px-4 lg:mx-auto w-full max-w-[1200px]'>
      <div className='grid grid-cols-12 gap-4 mb-[8em] md:mb-[15em]'>
        <div className='col-start-1 col-end-13 md:col-end-4 md:row-start-1'>
          <h1 className='font-bold text-[1.5rem]'>education</h1>
        </div>
        <div className='col-start-1 md:col-start-4 col-end-13 row-start-2 md:row-start-1'>
          <div className='border-b first:border-t border-white w-full py-2 pl-2 grid grid-cols-3'>
            <h1 className='text-[1em] font-bold '>2015-2017</h1>
            <h1 className='text-[1em] font-bold col-start-2 col-end-4'>SMA Negeri 1 Kupang</h1>
          </div>
          <div className='border-b first:border-t border-white w-full py-2 pl-2 grid grid-cols-3'>
            <h1 className='text-[1em] font-bold '>2019-2023</h1>
            <h1 className='text-[1em] font-bold  col-start-2 col-end-4'>Universitas Citra Bangsa</h1>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App



