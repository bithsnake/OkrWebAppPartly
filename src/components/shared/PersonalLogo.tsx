import logo from '../../images/fakelogo.png';

const PersonalLogo = () => {
    return (
        <div className="absolute lg:ml-10 lg:mt-10 w-full xxs:mt-4 ">
        <a
            style={{ zIndex: 1 }}
            className="visible xxs:invisible md:visible"
            href="/#"
        >
            <img
            className="xs:mx-auto sm:ml-10 my-1/4 "
            src={logo}
            alt="personal logotyp"
            />
        </a>
        </div>
    )
}
export default PersonalLogo;