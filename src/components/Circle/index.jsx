import React from "react";
import PropTypes from "prop-types";
import { CircleDiv } from './styled.jsx';

export const Circle = ({color}) => {
    return (<CircleDiv color={color} />)
}

Circle.propTypes = {
    color: PropTypes.string.isRequired
}