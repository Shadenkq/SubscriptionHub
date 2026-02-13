function Header({onToggleSideBar}){
    return(
        <div className="header">
            <button className="menu-btn" onClick={onToggleSideBar} > = 
            </button>
        </div>
    );
}
export default Header;