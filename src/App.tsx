'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Canvas } from '@react-three/fiber'
import {OrbitControls } from '@react-three/drei'
import Model from './components/Model'
import SlideWraper from './components/SlideWraper'

function App() {
  const ref = useRef(null)
  // let q = gsap.utils.selector(ref);
  gsap.registerPlugin(TextPlugin)


  const tl =  gsap.timeline()
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const ballRef = useRef(null)
  const titleRef = useRef(null)

  const AnimatedLink = ({name}: {name: string})=>{
    const underline = useRef(null)
    gsap.set(underline.current, {scaleX:0, width: 0})
    function mouseEnter(){
      gsap.set(underline.current, {scaleX: 1, width: '100%'})
      gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
      gsap.from(underline.current, {scaleX: '0', transformOrigin: 'left' })
    }
    
    function mouseLeave(){
      gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white',})
      gsap.to(underline.current, {scaleX: '0', transformOrigin: 'right' })
      gsap.set(underline.current, {scaleX: 1})
    }
  
    return (
      <div className='flex flex-col'>
        <a  href=""  onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>{name}</a>
        <div ref={underline} className='w-0 h-[0.5px] bg-white'></div>
      </div>
    )
  }

  const NameTitle = ()=>{
    const mouseEnter = ()=>{
      gsap.to('.titleWraper .first', {text: 'the', delay:0.3})
      gsap.to('.titleWraper .last', {text: 'dev.', delay:0.3})
      gsap.to(ballRef.current, {width: 100, height: 100})
    }
  
    const mouseLeave = ()=>{
      gsap.to('.titleWraper .first', {text: 'rey', delay:0.3})
      gsap.to('.titleWraper .last', {text: 'mooy', delay:0.3})
      gsap.to(ballRef.current, {width: 20, height: 20})
    }

    return(
      <div className='titleWraper' ref={titleRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >
        <SlideWraper>
          <h1 className='first text-[120px] font-bold leading-[0.9]'>rey</h1>
        </SlideWraper>
        <SlideWraper className='mt-4'>
          <h1 className='last text-[120px] font-bold leading-[0.9]'>mooy</h1>
        </SlideWraper>
      </div>
    )
  }


  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      gsap.set("#ball", {xPercent: -50, yPercent: -50});

      tl
      .from('.test', {scaleX: 0, duration: 0.7, transformOrigin: 'left',}, 1)
      .to('.children', {opacity: 1,}, '>')
      .to('.test', {scaleX: 0, duration: 0.7, transformOrigin: 'right',}, '-=0.2')
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
    <div className='smooth-wrapper' ref={ref}>
      <div className='smooth-content'>
        <div className='w-full h-screen px-4 relative'>
        
          <div ref={ballRef} id='ball' className='bg-white rounded-full w-[20px] h-[20px] fixed top-0 left-0 pointer-events-none mix-blend-difference z-[999]'></div>
          <header className='pt-[30px] fixed top-0 left-0 w-full z-[999]'>
            <div className='flex justify-between px-3'>
              <div className='flex gap-4'>
                <SlideWraper>
                  <AnimatedLink name='about'/>
                </SlideWraper>
                <SlideWraper>
                  <AnimatedLink name='projects'/>
                </SlideWraper>
                <SlideWraper>
                  <AnimatedLink name='contact'/>
                </SlideWraper>
              </div>
              <div className='flex gap-3'>
                <SlideWraper>
                  <AnimatedLink name='gdrrey@gmail.com'/>
                </SlideWraper>
                <SlideWraper>
                  <span>Rey Mooy</span>
                </SlideWraper>
              </div>
            </div>
          </header>

          <section className='w-full flex mt-[200px]'>
            <div className='w-1/3 p-4'>
                <NameTitle/>
            </div>
            <div className='w-1/3 p-4 flex items-end justify-end'>
                <SlideWraper>
                  <p className=''>I am a dedicated web developer. </p>
                </SlideWraper>
            </div>
            <div className='w-1/3 p-4 flex flex-col justify-end'>
             
            </div>
          </section>

          <div className='horizontalLine w-full bg-white h-[0.5px] mt-[40px]'></div>
        </div>
        <div className='mt-[100px]'>
          {/* <Canvas >
            <OrbitControls enableZoom={false}/>
            <Model/>
          </Canvas> */}
        </div>
      </div>
    </div>
  )
}

export default App



