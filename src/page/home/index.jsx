import React, { Component } from 'react';
import './index.scss'

import PageTitle from 'component/page-title/index.jsx';

class index extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-12">
                        body..
                    </div>
                </div>
            </div>
        );
    }
}

export default index;