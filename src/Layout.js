const Layout = (props) => {
    return (
        <>
        <header>
            <center>This is Header</center>
        </header>
        {props.children}
        <footer>
            <center>This is Foooter</center>
        </footer>
        </>
        
    )
}

export default Layout
