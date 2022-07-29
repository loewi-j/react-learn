

//pre: 之前的状态   act：动作对象类型
const initState = 0
export default function countReducer(pre = initState, act) {
  const {type, data} = act
  switch(type) {
    case 'increment':
      return pre + data;

    case 'decrement':
      return pre - data;

    default:
      return pre;
  }
}