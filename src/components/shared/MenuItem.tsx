import React, { SyntheticEvent, useEffect, useRef, useState } from "react"
import { IMenuItem } from "../../interfaces/componentinterfaces";

const MenuItem  : React.FunctionComponent<IMenuItem> = (props) => {
    const anchorRef = useRef(HTMLAnchorElement.prototype);
    const [MyLocation] = useState<string>(props.MyLocation === undefined ? "" : props.MyLocation);

    useEffect(() => {
        if (!props.ExpandItems) {
            anchorRef.current.classList.remove("transition-margin-y");
            anchorRef.current.classList.remove("margin-y-stay");
        } else if (props.ExpandItems) {
            anchorRef.current.classList.add("transition-margin-y");
            anchorRef.current.addEventListener("animationend", () => {
            anchorRef.current.classList.replace("transition-margin-y","margin-y-stay");
            });
        }
        
    }, [props.ExpandItems]);

    const ClickHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        if (props.OnClick === undefined) return;
        if (props.MyLocation === null) return;
        props.OnClick(MyLocation);
    }
    const MouseOverHandler = (e: React.MouseEvent) => {
        if (props.OnMouseEnter === undefined) return;
        props.OnMouseEnter();
    }
    const MouseLeaveHandler = (e: React.MouseEvent) => {
        if (props.OnMouseLeave === undefined) return;
        props.OnMouseLeave();
    }
    return (
        <a ref={anchorRef} onMouseLeave={MouseLeaveHandler} onClick={ClickHandler} onMouseEnter={MouseOverHandler}  href={props.url} className={`border-b-2 border-opacity-30 block-py-2.5  flex content-center space-x-2 text-xl bg-contain transform duration-200`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.svgpath} />
            </svg>
            <span style={{fontFamily: "Roboto"}} className={`${props.addclass ? props.addclass : ""}`}>{props.text}</span>
        </a>
    )
}
export default MenuItem;