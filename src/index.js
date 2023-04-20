// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter} from 'react-router-dom'
// import './index.css';
// import './utils/assets/iconfont.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   {/* <React.StrictMode> */}
//     <App />
//   {/* </React.StrictMode> */}
//   </BrowserRouter>
// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './utils/assets/iconfont.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    {/* </React.StrictMode>, */}
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
