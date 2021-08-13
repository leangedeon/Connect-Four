import styled from 'styled-components'

export const CircleDiv = styled.div`
    height:50px;
    width:50px;
    background:#E76AFA;
    -moz-border-radius:50px;
    -webkit-border-radius:50px;
    border-radius:50px;
    background: ${(props) => {
            if (props.color) {
                if (props.color === 1) {
                    return '#E76AFA';
                }else{
                    return '#E76000';
                }
            }else{
                return "white";
            }
        }
    };
`;
