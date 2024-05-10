// @ts-nocheck - reducer code is not typed and is planned to be removed
import { connect } from 'react-redux'
import CreateFormComponent from './createForm/createForm'

const mapStateToProps = (state) => ({ ...state })

export const CreateForm = connect(mapStateToProps)(CreateFormComponent)

export default null
