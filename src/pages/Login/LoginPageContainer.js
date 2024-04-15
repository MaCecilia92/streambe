import { connect } from 'react-redux';
import { LoginPage } from './LoginPage';
import { setDataRequest, setUserParams } from '../../state/Session/reducer';
import { selectUsers, selectUserParams } from '../../state/Session/selectors';

console.log(setDataRequest, 'set');

const mapStateToProps = (state) => ({
  user: selectUsers(state),
  userParams: selectUserParams(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSessionUser: (params) => dispatch(setDataRequest(params)),
  setUserParams: (params) => dispatch(setUserParams(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
