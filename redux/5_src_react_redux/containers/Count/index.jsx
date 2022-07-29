import CountUI from "../../components/Count";
import {connect} from 'react-redux'
import {incrementAction, decrementAction, incrementAsyncAction} from '../../redux/count_action'

function mapStateToProps(state) {
  return {count: state}
}

function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => dispatch(incrementAction(number)),
    jian: (number) => dispatch(decrementAction(number)),
    jiaAsync: (number, time) => dispatch(incrementAsyncAction(number, time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);