import React, { Component } from 'react';
import CategoryList from 'src/components/CategoryList';
import Home from 'src/components/Home';




export default class CMS extends Component {
    render() {
        return <div>
        <CategoryList title="Shop by category" id={2} />
        		<Home identifiers={'home-venia'} />

        </div>
    }
}
