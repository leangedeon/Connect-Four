import React from "react";
import { Piece } from "../Piece/index.jsx";
import PropTypes from "prop-types";
import { StyledRow } from './styled.jsx';

export const Row = ({rowData}) => {
    return (
        <StyledRow className="row">
            <div className="card">
                <div className="card-body">
                    {
                        rowData.columns.map((piece, index) => (
                            <Piece piece={piece} key={`piece_${index}`} />
                        ))
                    }
                </div>
            </div>
        </StyledRow>
    )
}

Row.propTypes = {
    rowData: PropTypes.object.isRequired
}