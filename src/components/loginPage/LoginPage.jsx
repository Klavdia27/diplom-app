import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../loader/Loader.jsx";
import { Card, CardContent, CardHeader, TextField, Button } from "@mui/material";
import  authApi  from "../../api/authApi.js";
import { withTranslator } from "../../hoc/withTranslator.jsx";
import { withTheme } from "../../hoc/withTheme.jsx";
import { withMe } from "../../hoc/withMe.jsx";

import "./LoginPage.scss"


function LoginPage({ translate, me, setMe }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
        if (me) {
            navigate("/buyticket")
        }
    }, [me])


    const handleInput = (setFunction) => (e) => {
        setError(false);
        setFunction(e.currentTarget.value)
    }

    const handleSubmit = () => {
        setLoading(true);
        authApi.login(login, password)
            .then((response) => {
                setMe(response.data.user);
            })
            .catch((error) => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })
    }



    return (
        <div className="login-page">
            <Card>
                <CardHeader title={translate("loginpage.title")}/>
                <CardContent>

                    {error && <span>{error}</span>}
                    <TextField 
                        value={login}
                        onChange={handleInput(setLogin)}
                        error={!!error}
                        className="text-field"
                        fullWidth 
                        label={translate("loginpage.login")}
                        placeholder={translate("loginpage.placeholder.login")}
                        variant="outlined" 
                    />
                    <TextField 
                        value={password}
                        onChange={handleInput(setPassword)}
                        error={!!error}
                        className="text-field"
                        fullWidth
                        type="password"
                        placeholder={translate("loginpage.placeholder.password")} 
                        label={translate("loginpage.password")} 
                        variant="outlined" 
                    />
                    <Button 
                        onClick={handleSubmit}
                        endIcon={ loading ? <Loader/> : undefined}
                        disabled={loading || !!error}
                    > 
                    {translate("loginpage.submit")} 
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default withMe(withTheme(withTranslator(LoginPage)));