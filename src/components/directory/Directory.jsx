import React, { Component } from 'react';
import { SECTIONS_DATA } from './sections.data';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';


class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} { ...otherSectionProps } />
                    ))
                }
            </div>
        )
    }
}

export default Directory;