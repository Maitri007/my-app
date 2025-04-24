import "./assets/toDoList/toDoList.css"

const Layout = (props) => {
    return (
        <div className="mainPage">
        <header>
            <center>This is Header</center>
        </header>
        {props.children}
        <footer>
            <center>This is Foooter</center>
        </footer>
        </div>
        
    )
}

export default Layout
