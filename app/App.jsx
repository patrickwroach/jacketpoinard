import React from 'react';
import ReactDOM from 'react-dom';

import { HomePage } from './components/presentational/HomePage.jsx';
import { Footer } from './components/presentational/footer.jsx';
import './styles/template.less';
import Logo from './assets/jp-logo.svg';

export default class App extends React.Component {
   render() {
      return (     
        <div>  
           
             
           <HomePage  logo={Logo} />
        
           <Footer />     
        </div>    
      );
   }
}

//export default App;
ReactDOM.render(
<App />,
document.getElementById('app')
);




