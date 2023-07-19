
export default function SlideWraper(props) {

  return (
    <div {...props} className={`relative ${props.className}`}>
      <div className="children opacity-0">
        {props.children}
      </div>
      <div className='absolute bg-white test left-0 top-0 w-full h-full'></div>
    </div>
  )
}
