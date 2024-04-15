import { connect } from 'react-redux';
import { DashboardPage } from './DashboardPage';
import { clearData } from '../../state/Session/reducer';
import { selectUsers } from '../../state/Session/selectors';
import { setDataTableRequest } from '../../state/Dashboard/reducer';
import { selectDataTable } from '../../state/Dashboard/selectors';

const mapStateToProps = (state) => ({
  user: selectUsers(state),
  data: selectDataTable(state),
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(clearData()),
  getData: () => dispatch(setDataTableRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
