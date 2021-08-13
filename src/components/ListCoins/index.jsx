import React from "react";
import PropTypes from "prop-types";
import Coin from '../Coin/index';
import range from 'lodash/range';
import { StyledList } from './styled.jsx';

export const ListCoins = ({quantity}) => {
    const coins = range(0, quantity);
    return (
        <StyledList>
        {
            coins.map((coin, index) => {
                return (<Coin position={index} key={`coin_${index}`} />)
            })
        }
        </StyledList>
    )
}

ListCoins.propTypes = {
    quantity: PropTypes.number.isRequired
}
