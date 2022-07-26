
function Header(){
    return(
        <div className="Header">
            <div className="Home">
                <div className="bkav-logo">
                    <img  src="image/mascot.svg" height="43px" alt=""/>
                </div>
                <div className="text">
                    <div className="BKAV-text">Bkav</div>
                    <div className="Smart-text">Smart</div>
                </div>
            </div>
            <div className="language">
                <div className="vi-language">
                    <img src="/image/vietnam.png" alt="VietNam"/>
                </div>
                <div className="en-language">
                    <img src="/image/united-kingdom.png" alt="U-KIngdom"/>
                </div>
            </div>
        </div>
    )
}
export default Header;