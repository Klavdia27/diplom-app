import { withMe } from "./withMe";

export const withAuth = (Component) => withMe(({ me, setMe, ...props}) => {

    if (me) {
        return (
            <Component me={me} setMe={setMe} {...props}/>
        )
    } else {
        return (
            "NOT PERMISSION"
        )
    }
    
})