import './home.scss';

import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import { IRootState } from 'app/shared/reducers';

export type IHomeProp = StateProps;

export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Row>
      <Col md="9">
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
      </Col>
    </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
