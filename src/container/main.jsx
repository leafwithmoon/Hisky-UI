import React, {Component, PropTypes} from 'react';
import { Row, Col, Affix} from 'antd';
import SideBar from '../component/SideBar/SideBar.jsx'
import './main.less'

export default class Main extends Component {
    state = {

    }
    render() {
        return (
            <div>
            <div className='main-title'>
                <Row>
                    <Col span={2}>
                        <img src={require('../img/logo.png')} height='80' width='80'/>
                    </Col>
                    <Col span={22}>
                        <div className='main-title-text'>哈士奇和雪橇犬培训基地</div>
                    </Col>
                </Row>
            </div>
            <div className='main-page'>
                <Affix offsetTop={75}>
                    <div className='main-page-sidebar'>
                        <SideBar/>
                    </div>
                </Affix>
            </div>
        </div>
        )
    }
}
