export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

//加一方法，并导出
export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

//减一方法，并导出
export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}


//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
  return (dispatch, getState) => {
    //获取state对象中的counter属性
    const {
      counter
    } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment())
  }
}

//导出方法，返回延迟1秒加1的函数
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}
