// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from './config'
import existingDealsRows from './existingDealsRows'
import noDealsRows from './noDealsRows'
import Nav from './component/Nav'
import Table from './component/Table'

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">RCP</a>
        </div>
      </div>
    </nav>

    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3 col-md-2 sidebar">
          <Nav />
        </div>
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <section id="deal">
            <Table
              title={'Existing Deals'}
              headers={[null, 'MM', 'Sym', 'Tran', 'Split']}
              rows={existingDealsRows}
            />
          </section>

          <section id="no-deal">
            <Table
              title={'No Deal (My Stock)'}
              headers={[null, 'MM', 'Sym', 'Tran', 'Split']}
              rows={noDealsRows}
            />
          </section>
        </div>
      </div>
    </div>
  </div>

export default App
