import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { sections } from "./Directory.data";
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';


class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: sections
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => (
                        <MenuItem
                            key={id}
                            title={title}
                            imageUrl={imageUrl}
                            size={size}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;