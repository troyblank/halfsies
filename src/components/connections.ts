// @ts-nocheck - reducer code is not typed and is planned to be removed
import { connect } from 'react-redux'
import BalanceComponent from './balance/balance'
import CreateFormComponent from './createForm/createForm'
import LogComponent from './log/log'

const mapStateToProps = (state) => ({ ...state })

export const Balance = connect(mapStateToProps)(BalanceComponent)
export const CreateForm = connect(mapStateToProps)(CreateFormComponent)
export const Log = connect(mapStateToProps)(LogComponent)

export default null
