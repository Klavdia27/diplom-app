import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, TextField, Button } from "@mui/material";
import  authApi  from "../../api/authApi.js";
import { withTranslator } from "../../hoc/withTranslator.jsx";
import { withTheme } from "../../hoc/withTheme.jsx";

import "./LoginPage.scss"

function LoginPage({ translate }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        authApi.login(login, password)
            .then((responce) => {
                console.log(responce.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="login-page">
            <Card>
                <CardHeader title={translate("loginpage.title")}/>
                <CardContent>
                    <TextField 
                        value={login}
                        onChange={e => setLogin(e.currentTarget.value)}
                        className="text-field"
                        fullWidth 
                        label={translate("loginpage.login")}
                        placeholder={translate("loginpage.placeholder.login")}
                        variant="outlined" 
                    />
                    <TextField 
                        value={password}
                        onChange={e => setPassword(e.currentTarget.value)}
                        className="text-field"
                        fullWidth
                        type="password"
                        placeholder={translate("loginpage.placeholder.password")} 
                        label={translate("loginpage.password")} 
                        variant="outlined" 
                    />
                    <Button onClick={handleSubmit}> 
                    {translate("loginpage.submit")} 
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default withTheme(withTranslator(LoginPage));;