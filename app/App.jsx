import React from 'react';
import ReactDOM from 'react-dom';
import { HomePage } from './components/presentational/HomePage.jsx';
import { Footer } from './components/presentational/footer.jsx';
import './styles/template.less';


export default class App extends React.Component {
   render() {
      return (     
        <div>  
           
             
           <HomePage/>
        
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




