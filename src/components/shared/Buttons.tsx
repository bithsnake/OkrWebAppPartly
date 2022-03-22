import { SyntheticEvent, useEffect, useState } from "react";

/**Custom button that has default classes attached to it, but can be overwritten if className property is used */
export const CustomButton = (props: { text: string, className: string, OnClick?: Function | undefined}) => {
    const [text, setText] = useState(props.text);
    const [className, setClassName] = useState(props.className);

    const ButtonClickHandler = (e: SyntheticEvent) => {
        if (props.OnClick === undefined) return;
        props.OnClick();
    }

    useEffect(() => {
        setText(props.text);
        setClassName(props.className);
        return () => {
        }
    }, [props.text, props.className]);

    useEffect(() => {


    },[className, text])
    return (
        <button onClick={ButtonClickHandler} className={className === "" ?"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" : className}>
            {text}
        </button>
    )
}

/**Close button that takes in additional classes and can execute a function */
export const CloseButton = (props: { addclass?: string, OnClick?: Function | undefined}) => {
    const ButtonClickHandler = (e: SyntheticEvent) => {
        if (props.OnClick === undefined) return;
        e.preventDefault();
        props.OnClick();
    }

    return (
        <a onClick={ButtonClickHandler} href="/#" className={`hover:bg-gray-50 hover:bg-opacity-10 glow-menu-items rounded-full h-full ${props.addclass}`}>
        <svg className="w-8 h-8 d-inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </a>
    )
};
/**Add button that takes in additional classes and can execute a function */
export const AddButton = (props: {text?:string, addclass?: string, OnClick ? : Function | undefined }) => {

    const ButtonClickHandler = (e: SyntheticEvent) => {
        if (props.OnClick === undefined) return;
        e.preventDefault();
        props.OnClick();
    }

    return (
        <div className={` cursor-pointer  rounded-lg`}>
            <a onClick={ButtonClickHandler} href="/#" className={`flex align-middle items-center w-full hover:bg-gray-50 hover:bg-opacity-10 glow-menu-items rounded-full hover:font-extrabold pointer-cursor  ${props.addclass}`}>
                <svg
                    style={{display: "inherit !important"}}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                    className={`cursor-pointer`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                    </svg>
                    {
                        props.text !== "" && props.text
                    }
            </a>
        </div>

    );
};
/**Add button that takes in additional classes and can execute a function */
export const EditButton = (props: {text?:string, addclass?: string, OnClick ? : Function | undefined }) => {

    const ButtonClickHandler = (e: SyntheticEvent) => {
        if (props.OnClick === undefined) return;
        e.preventDefault();
        props.OnClick();
    }

    return (
        <div className={`cursor-pointer`}>
            <a onClick={ButtonClickHandler} href="/#" className={`flex align-middle items-center w-full hover:bg-gray-50 hover:bg-opacity-10 glow-menu-items rounded-full hover:font-extrabold cursor-pointer ${props.addclass}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={`cursor-pointer`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                {
                    props.text !== "" && props.text
                }
            </a>
        </div>

    );
};