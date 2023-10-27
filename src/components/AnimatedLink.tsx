import {forwardRef} from 'react'

type PropsType = {
  name: string,
  link: string,
  className?: string,
  underlineColor?: string,
  mouseEnter: ()=> void,
  mouseLeave: ()=> void
}

const AnimatedLink = forwardRef<HTMLDivElement, PropsType>((props, ref)=>{

  return (
    <div className={`flex flex-col w-fit ${props.className}`}>
      <a target='_blank' href={props.link} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>{props.name}</a>
      <div ref={ref} className={`w-0 h-[0.5px] ${props.underlineColor ? `bg-${props.underlineColor}` : 'bg-white'}`}></div> 
    </div>
    //bg-gradient-to-r from-[#6128f0] to-[#e04e58]
  )
})

export default AnimatedLink;