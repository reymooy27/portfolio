import { useLayoutEffect, useRef } from 'react'
import {gsap} from 'gsap'


function App() {
  const ref = useRef(null)
  const tl =  gsap.timeline({yoyo: true})
  const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const mouse = { x: pos.x, y: pos.y };
  const speed = 0.15;

  const ballRef = useRef(null)

  function hoverLink(){
    gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
  }

  function leave(){
    gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white'})
  }


  useLayoutEffect(() => {
    
    let ctx = gsap.context(()=>{
      gsap.set("#ball", {xPercent: -50, yPercent: -50});
      tl.from('#name', {duration: 1, y: 1000})
        .from('.parg', {duration: 1, y: 1000}, '-=0.8' )

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
        <div className='w-full h-screen bg-gray-900 px-4'>
          <div ref={ballRef} id='ball' className='bg-white rounded-full w-[20px] h-[20px] fixed top-0 left-0 pointer-events-none mix-blend-difference z-[999]'></div>
          <header className='flex justify-between pt-[20px]'>
            <div className='flex gap-3'>
              <a onMouseEnter={hoverLink} onMouseLeave={leave} href="">About</a>
              <a href="">Projects</a>
              <a href="">Contact</a>
            </div>
            <div className='flex gap-3'>
              <a href="">gdrrey@gmail.com</a>
              <span>Rey Mooy</span>
            </div>
          </header>

          <section className='w-full flex mt-[150px]'>
            <div className='w-1/3 p-4'>
              <h1 id='name' className='text-[120px] font-bold leading-[0.8]'>rey <br /> mooy</h1>
            </div>
            <div className='w-1/3 p-4 flex items-end parg'>
              <p>Lorem ipsum dolor sm necessitatibus exercitationem alias tenetur  repellat magnam omnis ducimus. </p>
            </div>
            <div className='w-1/3 p-4'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores, quaerat blanditiis rerum provident deserunt earum necessitatibus exercitationem alias tenetur veniam, minus architecto autem corporis iusto repellat magnam omnis ducimus. </p>
            </div>
          </section>

        </div>
        <div className='w-full bg-gray-500 h-[200px]'>

        </div>
      </div>
    </div>
  )
}

export default App
