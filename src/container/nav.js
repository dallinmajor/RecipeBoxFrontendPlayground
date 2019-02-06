import React, {Component} from 'react';
import Brand from '../components/brand';
import Toggle from '../components/toggle';
import Search from '../components/forms/nav-search';

class Nav extends Component {
    render() {
        return(
            <nav>
                <Brand/>
                <Toggle>
                    <ul>
                        <li><Search/></li>
                        <li>New Recipe</li>
                        <li>Logout</li>
                    </ul>
                </Toggle>
            </nav>
        )
    }
}

export default Nav;