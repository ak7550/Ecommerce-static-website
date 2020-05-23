import React, { Component } from 'react'
import Heading from '../reusable/Heading';
import Img from 'gatsby-image';

export default class Coursecart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: props.courses.edges,
        }
    }
    render() {
        // console.log(this.state.courses);
        
        return (
            <div>
                <h1>Hey I am from course cart.</h1>
            </div>
        )
    }
}
