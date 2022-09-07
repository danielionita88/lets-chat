import NavigationMenu from "./NavigationMenu";

const Layout = (props) => {
    return <div>
        <NavigationMenu/>
        {props.children}
    </div>
}

export default Layout;