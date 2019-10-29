import { connect } from 'react-redux';
import AuthRedirectComponent from './auth/authRedirect';
import HeaderComponent from './header/header';
import SignInComponent from './signIn/signIn';

const mapStateToProps = (state) => ({ ...state });

export const AuthRedirect = connect(mapStateToProps)(AuthRedirectComponent);
export const Header = connect(mapStateToProps)(HeaderComponent);
export const SignIn = connect(mapStateToProps)(SignInComponent);

export default null;
