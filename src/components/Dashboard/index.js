import { connect } from 'react-redux';
import { Dashboard } from './presentational.jsx';
import {
  setPlayer,
} from '../../actions';

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  setPlayer: (player) => dispatch(setPlayer( player))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
