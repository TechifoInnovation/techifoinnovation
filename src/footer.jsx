function Footer() {
return(
    <footer>
        <div className="footer-container">
            <div className="logo-1">
                <h3>techifo</h3>
            </div>
            <div className="social-media-icon">
                <a href="https://www.facebook.com/profile.php?id=61561305144395&mibextid=ZbWKwL"><p className="1">facebook</p></a>
                <p className="2">instagram</p>
                <p className="3">twitter</p>
            </div>
        <p>&copy; {new Date().getFullYear()}All rights reserved.</p>
        
        </div>
      
    </footer>
)
}
export default Footer;