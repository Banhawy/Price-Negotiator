import React from 'react';
import NumberFormat from 'react-number-format';

interface IFormattedNumberProps {
    number: number;
}

export default function FormattedNumber(props: IFormattedNumberProps){
    return (
        <NumberFormat value={props.number} displayType={'text'} thousandSeparator={true} />
    )
}