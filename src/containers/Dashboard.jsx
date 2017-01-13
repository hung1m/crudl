import React from 'react'
import { connect } from 'react-redux'

import { adminShape, breadcrumbsShape } from '../PropTypes'
import Header from '../components/Header'

class Dashboard extends React.Component {

    static propTypes = {
        desc: adminShape,
        breadcrumbs: breadcrumbsShape.isRequired,
    };

    componentDidMount() {
        // Add page specific className
        document.getElementById('app').classList.add('dashboard')
    }

    componentWillUnmount() {
        // Remove page specific className
        document.getElementById('app').classList.remove('dashboard')
    }

    render() {
        return (
            <main id="viewport">
                <Header breadcrumbs={this.props.breadcrumbs} {...this.props}>
                    <div id="header-toolbar" className="toolbar">
                        <div className="tools">
                            <div className="title display-when-fixed">Dashboard</div>
                        </div>
                    </div>
                    <div className="title">
                        <h2>Dashboard</h2>
                    </div>
                </Header>
                <div id="viewport-content">
                    {this.props.desc.custom.dashboard}
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.core.auth,
    }
}

export default connect(mapStateToProps)(Dashboard)
