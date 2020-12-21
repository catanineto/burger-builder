import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/Burger-Builder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p></p>
        </Layout>

        <BurgerBuilder/>


      </div>
    );
  }
}

export default App;
