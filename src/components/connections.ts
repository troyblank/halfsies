import { connect } from 'react-redux'
import AuthRedirectComponent from './auth/authRedirect'
import BalanceComponent from './balance/balance'
import CreateFormComponent from './createForm/createForm'
import HeaderComponent from './header/header'
import LogComponent from './log/log'
import SignInComponent from './signIn/signIn'

const mapStateToProps = (state) => ({ ...state })

export const AuthRedirect = connect(mapStateToProps)(AuthRedirectComponent)
export const Balance = connect(mapStateToProps)(BalanceComponent)
export const CreateForm = connect(mapStateToProps)(CreateFormComponent)
export const Header = connect(mapStateToProps)(HeaderComponent)
export const Log = connect(mapStateToProps)(LogComponent)
export const SignIn = connect(mapStateToProps)(SignInComponent)

export default null
