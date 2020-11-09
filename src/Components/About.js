import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Layout } from 'antd';
const {Footer} = Layout;
export class About extends Component {
    render() {
        return (
            <div>
                <Row>
                <Col span={24}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid tomato' }}>
                        <h5 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Who we are?</h5>
                        <p style={{fontSize:'20px'}}>
                            E-Learning doesn’t just “happen” ! It requires careful planning and implementation.
                            Study4U is a well-organized place where you can achieve something new. It brings the most unique concept of education. This E-Learning platform works as the most valuable option for many students either a school student or college student. 
                        </p>
                    </Card>
                        <Card style={{ width: 350,height:400,margin:'auto',borderRadius:'10px',backgroundImage:`url(${'https://study4u.in/wp-content/uploads/2020/11/image-1024x683.jpg'})`,backgroundSize:'cover',boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 10px 6px 16px 0 rgba(0, 0, 0, 0.08),
                        0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'30px' }} />
                </Col>
                <Col span={24}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid #0070A6' }}>
                        <h5 style={{fontSize:'30px',fontWeight:'300',color:'#0070A6'}}>Our Mission</h5>
                        <p style={{fontSize:'20px'}}>
                        We believe in equality for education.
                        The education should be affordable and accessible to everyone in order to excel their career. 
                        </p>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid #0070A6' }}>
                        <h5 style={{fontSize:'30px',fontWeight:'300',color:'#0070A6'}}>Our Vision</h5>
                        <p style={{fontSize:'20px'}}>
                        Our mission is to bring innovative ideas to the education.
                        We want to bring flexible foramework for self paced and fun way of learning. 
                        </p>
                    </Card>
                </Col>
                <Col span={24}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid tomato' }}>
                        <h5 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Our Team</h5>
                        <Avatar
                          size={{ xs: 120, sm: 120, md: 120, lg: 64, xl: 80, xxl: 100 }}
                          src="https://study4u.in/wp-content/uploads/2020/11/image1.jpg"
                          style={{boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                          0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'20px'}} />
                          <h2 style={{fontWeight:300}}>Anshul Pandey, Founder of Study4u</h2>
                          <Avatar
                          size={{ xs: 120, sm: 120, md: 120, lg: 64, xl: 80, xxl: 100 }}
                          src="https://study4u.in/wp-content/uploads/2020/11/image2.jpg"
                          style={{boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                          0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'20px'}} />
                          <h2 style={{fontWeight:300}}>Anurag Singh, Frontend Developer at Study4u</h2>
                    </Card>
                </Col>
                </Row>
                <Footer style={{ textAlign: 'center',marginTop:'20px' }}>Study4u ©2018 All Right are Reserved</Footer>
            </div>
        )
    }
}

export default About
