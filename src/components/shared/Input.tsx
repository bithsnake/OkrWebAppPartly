import {useRef} from 'react'

const Input = (props: { ref?: Function, id?: string, placeholder?: string, type?: string, addclass?: string, autofocus?: boolean }) => {
    const okrDescriptionRef = useRef(HTMLInputElement.prototype);

    const propUpRef = () => {
        if (props.ref === undefined) return;
        return props.ref(okrDescriptionRef);
    }
    return (
      <input
            className={`${props.addclass} appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white`}
            id={props.id !== "" ? props.id : "grid-first-name"}
            type={props.type !== "" ? props.type : "text"}
            min={0}
            ref={okrDescriptionRef}
            required
            onChange={propUpRef}
            placeholder={props.placeholder !== "" ? props.placeholder : "Jane"}
            autoFocus={props.autofocus !== undefined ? props.autofocus : false}
        />

    );
}
export default Input