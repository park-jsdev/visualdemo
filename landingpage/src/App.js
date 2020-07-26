import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Visual Demo</Link>} scroll>
            <Navigation>
              <Link to="/admin">Admin</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>

        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Visual Demo</Link>} >
            <Navigation>
              {/* <Link to="/search">Searching Algorithms</Link> */}
              <Link to="/sorting">Sorting Algorithms</Link>
              <Link to="/graphs">Graph Algorithms</Link>
              {/* <Link to="/patterns">Algorithmic Patterns</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;