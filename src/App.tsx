'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Canvas } from '@react-three/fiber'
import {OrbitControls } from '@react-three/drei'
import Model from './components/Model'

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
    function mouseEnter(){
      gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
      gsap.to(underline.current, {width: '100%' })
    }
  
    function mouseLeave(){
      gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white',})
      gsap.to(underline.current, {width: '0%'})
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
      gsap.to(titleRef.current, {text: 'the dev.', delay:0.3})
      gsap.to(ballRef.current, {width: 100, height: 100})
    }
  
    const mouseLeave = ()=>{
      gsap.to(titleRef.current, {text: 'rey mooy', delay:0.3})
      gsap.to(ballRef.current, {width: 20, height: 20})
    }

    return(
      <h1 id='name' ref={titleRef} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className='text-[120px] font-bold leading-[0.9]'>rey mooy</h1>
    )
  }

  


  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
      gsap.set("#ball", {xPercent: -50, yPercent: -50});
      tl.from('#name', {duration: 1, y: 1000, ease: 'power2.inOut'})
        .from('.parg', {duration: 1, y: 1000, ease: 'power2.inOut'}, '-=0.8' )
        .from('.horizontalLine', {width: '0%', duration: 1,  }, '+=0.2' )



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
          <header className='flex justify-between pt-[30px]'>
            <div className='flex gap-4'>
              <AnimatedLink name='about'/>
              <AnimatedLink name='projects'/>
              <AnimatedLink name='contact'/>
            </div>
            <div className='flex gap-3'>
              <AnimatedLink name='gdrrey@gmail.com'/>
              <span>Rey Mooy</span>
            </div>
          </header>

          <section className='w-full flex mt-[200px]'>
            <div className='w-1/3 p-4'>
              <NameTitle/>
            </div>
            <div className='w-1/3 p-4 flex items-end justify-end parg'>
              <p>I am a dedicated web developer. </p>
            </div>
            <div className='w-1/3 p-4 flex flex-col justify-end'>
              <Canvas >
                <OrbitControls enableZoom={false}/>
                <Model/>
              </Canvas>
            </div>
          </section>

          <div className='horizontalLine w-full bg-white h-[0.5px] mt-[40px]'></div>

        </div>
      </div>
    </div>
  )
}

export default App



