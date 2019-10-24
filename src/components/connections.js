import { connect } from 'react-redux';
import SignInComponent from './signIn/signIn';

const mapStateToProps = (state) => ({ ...state });

export const SignIn = connect(mapStateToProps)(SignInComponent);

export default null;
