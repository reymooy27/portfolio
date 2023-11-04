import { ReactNode } from "react"

type SlideWraper = {
  children: ReactNode
}


export default function SlideWraper(props: SlideWraper) {

  return (
    <div {...props} className={`relative`}>
      <div className="children">
        {props.children}
      </div>
      <div className='slider absolute bg-[#ECECEC] left-0 top-0 w-full h-full'></div>
    </div>
  )
}
