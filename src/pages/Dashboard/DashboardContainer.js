import { connect } from 'react-redux';
import { DashboardPage } from './DashboardPage';
import { clearData } from '../../state/Session/reducer';
import { selectUsers } from '../../state/Session/selectors';

const mapStateToProps = (state) => ({
  user: selectUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(clearData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
