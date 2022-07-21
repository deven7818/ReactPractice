import './App.css';

import WelcomeFun from './funccomp/function1';
import Classcomp from './classcomp/classcomp';
import Props1 from './props/Props1';
import Props2 from './props/Props2';
import State1 from './state/State1';
import Counter from './state/Counter';
import DistructuringProps from './Destructuring/DistructuringProps';
import DistructuringClass from './Destructuring/DistructringClass';
import FunctionClick from './EventHandling/FunctionClick';
import ClassClick from './EventHandling/ClassClick';
import ParentComponent from './MethodsProps/ParentComponent';
import UserGreeting from './ConditionalRendoring/UserGreeting';
import NameList from './ListRendering/NameList';
import LifeCycleA from './LifeCycleMethods/MountingLifeCycle/LifeCycleA';
import UpdateLifeCycleA from './LifeCycleMethods/UpdateLifeCycle/UpdateLifeCycleA';
import Mounting from './LifeCycleMethods/MountingLifeCycle/Practice/Mounting';
import ClassCounter from './Hooks/UseStateHooks/ClassCounter';
import HookCounter from './Hooks/UseStateHooks/HookCounter';
import HookuseStateEx from './Hooks/UseStateHooks/HookuseStateEx';
import HookCounterTwo from './Hooks/UseStateHooks/HookCounterTwo';
import HookPrevStateEx from './Hooks/UseStateHooks/HookPrevStateEx';
import HooksObj from './Hooks/UseStateHooks/HooksStateObj/HooksObj';
import HooksObjEx from './Hooks/UseStateHooks/HooksStateObj/HooksObjEx';
import HooksStateArray from './Hooks/UseStateHooks/HooksStateArray/HooksStateArray';
import StateArray from './Hooks/UseStateHooks/HooksStateArray/StateArray'
import UseEffectCounter from './Hooks/UseEffectHooks/UseEffectCounter';
import UseEffectExample from './Hooks/UseEffectHooks/UseEffectExample';
import ConditionalRunEffect from './Hooks/UseEffectHooks/ConditionallyRunEffect/ConditionalRunEffect';
import RunEffectOnce from './Hooks/UseEffectHooks/ConditionallyRunEffect/RunEffectOnce';
import Unmounting from './Hooks/UseEffectHooks/Unmounting/Unmounting';

function App() {
  return (
    <div className="App">
        {/*<WelcomeFun />*/}
        
        {/* <Props1 name="Deven" lastName="Mali">
          <p>This is children props</p>
        </Props1> */}
        {/* <Props1 name="Yuvi" lastName="Salunkhe"/> */}
        {/* <Props1 name="Nilesh" lastName="Patil"/> */}

        {/* <Props2 name="Devendra" city="Nashik"/> */}
        {/* <Props2 name="Kartik" city="Pune"/> */}

{/* 
        <Classcomp name="Deven" lastName="Mali"/>
        <Classcomp name="Yuvi" lastName="Salunkhe"/>
        <Classcomp name="Nilesh" lastName="Patil"/> */}

        {/*<State1 />*/}

        {/*<Counter />*/}

        {/*<DistructuringProps name="Gaurav" lastName="More"/> */}

        {/*<DistructuringClass name="Ajay" city="Mumbai"/> */}
{/* 
        <FunctionClick />
        <ClassClick /> */}

        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <LifeCycleA /> */}
        {/* <UpdateLifeCycleA /> */}
        {/* <Mounting /> */}
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookuseStateEx /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookPrevStateEx /> */}
        {/* <HooksObj /> */}
        {/* <HooksObjEx /> */}
        {/* <HooksStateArray /> */}
        {/* <StateArray /> */}
        {/* <UseEffectCounter /> */}
        {/* <UseEffectExample /> */}
        {/* <ConditionalRunEffect /> */}
        {/* <RunEffectOnce /> */}
        <Unmounting />
    </div>
  );
}

export default App;
