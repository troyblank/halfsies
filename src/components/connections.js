import { connect } from 'react-redux';
import AuthRedirectComponent from './auth/authRedirect';
import SignInComponent from './signIn/signIn';

const mapStateToProps = (state) => ({ ...state });

export const AuthRedirect = connect(mapStateToProps)(AuthRedirectComponent);
export const SignIn = connect(mapStateToProps)(SignInComponent);

export default null;
