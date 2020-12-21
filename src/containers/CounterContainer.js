import React from 'react';
import { useSelector, useDispatch, shallowEqual, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

// 컨테이너 컴포넌트
/**
function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  })
  , shallowEqual);


  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}
export default CounterContainer;
 */

 function CounterContainer({number, diff, increase, decrease, setDiff}) {
   return (
     <Counter
        //상태   
        number={number}
        diff={diff}
        // 액션을 디스패치하는 함수들을 props로 넣어준다.
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}
      />
   );
 }

 // mapDispatchToProps는 리덕스 스토어 상태를 조회해서 어떤것들을 props로 넣어줄지 정의
 // 현재 리덕스상태를 파라미터로 받아온다.
 const mapStateToProps = state => ({
   number : state.counter.number,
   diff : state.counter.diff
 });

 // mapDispatchToProps는 액션을 디스패치하는 함수를 만들어서 props로 넣어준다.
 // dispatch를 파라미터로 받아옵니다.
 /* const mapDispatchToProps = dispatch => ({
   onIncrease: () => dispatch(increase()),
   onDecrease: () => dispatch(decrease()),
   onSetDiff: diff => dispatch(setDiff(diff))
 }); */

 // bindActionCreators을 이용하면, 자동으로 액션 생성함수에 dispatch가 감싸진 상태로 호출
 const mapDispatchToProps = {
  increase,
  decrease,
  setDiff
};

 // connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣어준다.
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(CounterContainer);
/* 위 코드는 다음과 동일합니다.
const enhance = connect(mapStateToProps, mapDispatchToProps);
export defualt enhance(CounterContainer);
*/