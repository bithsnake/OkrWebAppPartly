import { useEffect, useState } from 'react';
import { User } from '../../types/types'
/**Component that shows the logged in user name and status + logged in users */
const CurrentUser = (props: {SpaceMultiplier?: number, AddClassToBody?: string, AddClassToText?: string,CurrentUsersOnline: number, IsAdmin: boolean, user: User, IsAdminEditActive: boolean }) => {
    const bodyclass = props.AddClassToBody !== undefined ? props.AddClassToBody : '';
    const textClass = props.AddClassToText !== undefined ? props.AddClassToText : '';
    const [multiplier, setMultiplier] = useState<number[]>([]);
    multiplier.length = props.SpaceMultiplier !== undefined ? props.SpaceMultiplier : 0;
    useEffect(() => {
        if (props.SpaceMultiplier === undefined) return;
        setMultiplier([...multiplier,props.SpaceMultiplier]);
    
        return () => {
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div className={`${bodyclass}`}>
            <span>  
            <p className={`select-none xxs:z-0 md:z-40 w-full rounded-sm ${textClass}`}>
                <a id="glow-logged-in-user-anchor" href="/#" className="  duration-300">{props.user.name !== "" ? props.user.name : "Anon Anonsson"}</a>
            </p>
            </span>
        </div>
    )
}
export default CurrentUser