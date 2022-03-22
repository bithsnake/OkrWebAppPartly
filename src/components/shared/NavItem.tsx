const NavItem = (props : {text?:string, image? : string}) => {
    return (
        <>
            <span className={` border-r-2 border-gray-400 w-auto h-auto`}>
                {props.text !== undefined && <div className="">{props.text !== undefined ? props.text : ""} {props.image !== undefined ? props.image : ""}</div>}
                { props.image !== undefined && <div className=""> <img src={props.image} alt="" sizes="32px" /></div>}
            </span>
      </>
  )
}
export default NavItem