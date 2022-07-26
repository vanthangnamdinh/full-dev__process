
function Body(){
    return(
        <div className="login-body">
            <div className="login-form">
                <div className="login-container">
                    <div className="header-form">
                        <div className="bkav-logo-login">
                            <img src="image/mascot.svg" height="150px" alt=""/>
                        </div>
                        <div className="login-text">
                            Login with Bkav Smart account
                        </div>
                    </div>
                    <div className="login">
                        <div className="input-login">
                            <input className="input" type="text" placeholder="Mobile number or email address"/>
                            <input className="input" type="password" name="" id="" placeholder="Password"/>
                        </div>
                        <div className="confirm-login">
                            <div className="term-agree">
                                <input className="check" type="checkbox"/>
                                <div className="Term">
                                    Agree to <a href="">Term of Use</a>
                                </div>
                            </div>
                        </div>
                        <div className="login-btn">
                            <button className="confirm" onClick={handleClickSubmit}>Login</button>
                        </div>
                        <div className="sign">
                            <div className="sign-up">
                                <a href="#">Sign up</a>
                            </div>
                            <div className="forgot-pass">
                                <a href="#">Forgot password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Body