import { SyntheticEvent } from "react"

const ModalOverlay = (props: { OnClick: Function | undefined, addclass?: string }) => {
    const ClickHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        if (props.OnClick === undefined) return;
        props.OnClick();
    }
    return (<div onClick={ClickHandler} className={`d-none absolute inset-0  left-0 z-10 w-full h-screen ${props.addclass === undefined ? "" : props.addclass}`}></div>)
}
export default ModalOverlay;