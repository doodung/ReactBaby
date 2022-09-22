
// type GreettingsProps={
//     name:string;
// };

// // React.FC의 장단점
// // React.FC를 사용할 떄는 props 타입을 Generics로 넣어서 사용한다.
// // <이점> 1. props에 기본적으로 children이 들어가 있다는 것.
// //       2. 컴포넌트의 defaultProps, protoTypes, contextTypes를
// //          설정할 때 자동완성이 될 수 있다는 것
// // <단점> children이 옵셔널 형태로 들어가있다 보니까 어찌보면 컴포넌트의 props 타입이
// //       명백하지 않음. 예를 들어 어떤 컴포넌트는 children이 무조건 있어야 하는 경우도 있을 것이고
// //       어떤 컴포넌트는 들어가면 안되는 경우도 있을 것이다.
// //       결국 그에 대한 처리를 하고 싶다면 Props 타입 안에 children을 명시해야 함
// //       -> 차라리 쓰지 않고 GreetingsProps 타입을 통해 children이 있다 없다를 명백하게 명시하는게 덜 헷갈림
// const Greetings:React.FC<GreettingsProps> = ({name})=>(
//     <div>Hello,{name}</div>
// );

// export default Greetings;
// // 컴포넌트의 props에 대한 타입을 선언할 때에는 type을 써도 되고
// // interface를 써도 된다. 일관성만 유지하자!

import React from 'react';
// 화살표 함수와 React.FC를 사용하지 않는다면?
type GreetingsProps = {
  name: string;
  mark: string;
  optional?:string; // 생략해도 되는 값에 ? 붙이장
  // 컴포넌트에서 특정 함수를 props로 받아와야 한다면 다음과 같이 타입을 지정할 수 있음
  onClick:(name:string)=>void; // 아무것도 리턴하지 않는다는 함수를 의미
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
    {optional && <p>{optional}</p>}
    <div>
    <button onClick={handleClick}>Click Me</button>
  </div>
  </div>
  );
}

Greetings.defaultProps = {
  mark: '!'
};

export default Greetings;
