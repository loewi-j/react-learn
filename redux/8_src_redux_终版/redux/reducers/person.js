import {ADD_PERSON} from '../constant'

const initState = [{id: '001', name: '123', age: '21'}]
export default function personReducer(pre = initState, act) {
  const { type, data } = act

  switch (type) {
    case ADD_PERSON:
      return [data, ...pre]

    default:
      return pre
  }
}