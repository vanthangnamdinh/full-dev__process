

function handledata(user,password){
    var regularExpression = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
    if(password.length<8||password.length>16||user.length>40){
        alert("Bạn đã nhập không đúng số lươngk kí tự(8-16)"+"Tên tài khoản không được quá 40 từ")
        return false
    }else if(!regularExpression.test(password)){
        alert("Mật khẩu phải chứa ít nhất 1 số ,1 kí tự chữ và 1 kí tự đặc biệt")
        return false
    }

}

function handleClickSubmit(){
    const check=document.getElementsByClassName("check")[0]
    const user =document.getElementById("user").value
    const password=document.getElementById("password").value
    if(!check.checked){
        alert("Bạn chưa đồng ý với điều khoản của chúng tôi")
    }else if(user=="" || password==""){
            alert("Vui lòng điền hết thông tin")
        
    }else{
        handledata(user,password)
    }
}

function Body(){
    return(
        <div className="login-body">
            <div className="login-form">
                <div className="bkav-logo-login">
                    <img src="image/mascot.svg" height="150px" alt=""/>
                </div>
                <div className="login-container">
                    <div className="header-form">
                        <div className="login-text">
                            Login with Bkav Smart account
                        </div>
                    </div>
                    <div className="login">
                        <div className="input-login">
                            <input id="user" className="input" type="text" placeholder="Mobile number or email address"/>
                            <input className="input" type="password" name="" id="password" placeholder="Password"/>
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