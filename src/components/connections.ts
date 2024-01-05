import { connect } from 'react-redux'
import BalanceComponent from './balance/balance'
import CreateFormComponent from './createForm/createForm'
import LogComponent from './log/log'
import SignInComponent from './signIn/signIn'

const mapStateToProps = (state) => ({ ...state })

export const Balance = connect(mapStateToProps)(BalanceComponent)
export const CreateForm = connect(mapStateToProps)(CreateFormComponent)
export const Log = connect(mapStateToProps)(LogComponent)
export const SignIn = connect(mapStateToProps)(SignInComponent)

export default null
