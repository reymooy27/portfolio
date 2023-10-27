
export default function SlideWraper(props) {

  return (
    <div {...props} className={`relative ${props.className}`}>
      <div className="children">
        {props.children}
      </div>
      <div className='slider absolute bg-[#ECECEC] left-0 top-0 w-full h-full'></div>
    </div>
  )
}
