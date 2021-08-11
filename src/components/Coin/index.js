import { connect } from 'react-redux';
import { Coin } from './presentational.jsx';
import {
    setMove,
} from '../../actions';

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
    setMove: (position, player) => dispatch(setMove(position, player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Coin);
