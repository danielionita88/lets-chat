import { Fragment } from "react";
import NavigationMenu from "./Navigation/NavigationMenu";

const Layout = (props) => {
    return <Fragment>
        <NavigationMenu/>
        {props.children}
    </Fragment>
}

export default Layout;