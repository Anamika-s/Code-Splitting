import logo from './logo.svg';
import './App.css';
import {Suspense ,lazy} from "react";
import {ErrorBoundary} from "react-error-boundary";
// import About from './About';
// import Home from './Home';
import { isCompositeComponent } from 'react-dom/test-utils';

import ErrorFallback from './ErrorBoundary';
const Home = lazy(()=> import('./Home'));
const About = lazy(()=> import('./About'));



function App() {
  return (
    <div className="App">
      
      <h1> Lazy Loading </h1>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset = {()=> {}}>
      <Suspense fallback={<div> Home Page is loading </div>}>
       <Home/>
       </Suspense>
      <Suspense fallback={<div> About Page is loading </div>}>
         <About/>
         </Suspense>
       </ErrorBoundary>
    
    </div>
  );
}

export default App;
