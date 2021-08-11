import React from "react";
import Coin from '../Coin/index';
import range from 'lodash/range';

export const ListCoins = ({quantity}) => {
    const coins = range(0, quantity);
    return (
        coins.map((coin, index) => {
            return (<Coin position={index} key={`coin_${index}`} />)
        })
    )
}
