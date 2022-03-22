const ModalBackDrop = (props: { OnClick?: Function, AddClass?: string }) => {
    
const OnClick = () => {
  if (props.OnClick === undefined) return;
      props.OnClick();
  }
return (
  <div
    onClick={OnClick}
    className={`fixed w-full h-full bg-black opacity-70 left-0 top-0 ${
      props.AddClass === undefined ? "" : props.AddClass
    }`}
  ></div>
);
      
};
export default ModalBackDrop;