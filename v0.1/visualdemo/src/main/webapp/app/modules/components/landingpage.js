import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Visual Demo</h1>
            <hr/>

          <p>
            Searching | <Link to="/sorting">Sorting</Link> | <Link to="/graphs">Graph</Link> | Strings | Algorithmic Patterns | System Design </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/parkjsdev/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/park-jsdev" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
            </div>
          </Cell>
{/* 
          <Cell row={2} col={12}>
            <div className="banner-text">
              <h1>News Feed</h1>
            <hr/>

          <p>We want news feed here </p>
            </div>
          </Cell> */}
        </Grid>
      </div>
    )
  }

}

export default Landing;