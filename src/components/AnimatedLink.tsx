import {useRef} from 'react'
import gsap from 'gsap'
type PropsType = {
  name: string,
  link: string,
  className?: string,
  underlineColor?: string,
  // mouseEnter: ()=> void,
  // mouseLeave: ()=> void
}

const AnimatedLink = ((props: PropsType)=>{

  const ref = useRef(null);
  

  function animatedLinkMouseEnter(){
    gsap.set(ref.current, {scaleX: 1, width: '100%'})
    // gsap.to(ballRef.current, {width: 60, height: 60, border: 2, borderColor: 'white', backgroundColor: 'transparent'})
    gsap.from(ref.current, {scaleX: '0', transformOrigin: 'left' })
  }
  
  function animatedLinkMouseLeave(){
    // gsap.to(ballRef.current, {width: 20, height: 20, backgroundColor: 'white',})
    gsap.to(ref.current, {scaleX: '0', transformOrigin: 'right' })
    // gsap.set(underline.current, {scaleX: 1})
  }

  return (
    <div className={`flex flex-col w-fit ${props.className}`}>
      <a target='_blank' href={props.link} onMouseEnter={animatedLinkMouseEnter} onMouseLeave={animatedLinkMouseLeave}>{props.name}</a>
      <div ref={ref} className={`w-0 h-[0.5px] ${props.underlineColor ? `bg-${props.underlineColor}` : 'bg-white'}`}></div> 
    </div>
    //bg-gradient-to-r from-[#6128f0] to-[#e04e58]
  )
})

export default AnimatedLink;