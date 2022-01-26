import AuthContext from "../components/contexts/AuthContext";

export const withMe = (Component) => (props) => (
    <AuthContext.Cunsumer>
        {value => <Component me={value.me}/>}
    </AuthContext.Cunsumer>
)

