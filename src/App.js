import './App.css';
import Classbase1 from './component/classbase1';
import Functionbase2 from './component/functionbase2';
import Manual6 from './component/ListRender/Manual6';
import RemoveData8 from './component/ListRender/RemoveData8';
import ShowHide7 from './component/ListRender/ShowHide7';
import Useprops3 from './component/useprops3';
import Usestate4 from './component/usestate4';

function App() {
  return (
    <div className="App">
     <Classbase1/>
     <Functionbase2/>
     <Useprops3 myname = "Deepti"
     surname = "Mahisare"
     city = "Indore"/>

     <Usestate4/>
     <Manual6/>
     <ShowHide7/>
     <RemoveData8/>
    </div>
  );
}

export default App;
