import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
import { Layout } from 'antd';
const {Footer} = Layout;
 class Platforms extends Component {
    render() {
        return (
            <div>
                <Row>
                {/* Our Platforms Section */}
               <Col span={24}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid tomato' }}>
                        <h5 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Our Platforms</h5>
                        <h5 style={{marginTop:30,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>College.Study4u.in</h5>
                        <p style={{fontSize:'20px'}}>
                        This platform/service is made for college students.
                        The students can learn new skills and gain knowledge with this platform at your place in anytime they want. 
                        </p>
                        <img src="https://study4u.in/wp-content/uploads/2020/10/e-learning-2.png" alt='platform1' style={{width:'100px'}}/><br/>
                        <Button danger href="https://college.study4u.in" style={{marginTop:'10px'}}>Know more</Button>
                        
                        
                        <h5 style={{marginTop:50,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>School.Study4u.in</h5>
                        <p style={{fontSize:'20px'}}>
                        This platform/service is made for school students.
                        The students can learn new skills and gain knowledge with this platform at your place in anytime they want. 
                        </p>
                        <img src="https://study4u.in/wp-content/uploads/2020/10/e-learning-6.png" alt='platform2' style={{width:'100px'}}/><br/>
                        <Button danger href="https://school.study4u.in" style={{marginTop:'10px'}}>Know more</Button>
                        
                        
                        <h5 style={{marginTop:50,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>Forum.Study4u.in</h5>
                        <p style={{fontSize:'20px'}}>
                        This platform/service is made for those who have any type of query. 
                        The students can visit this forum after register yourself create topic of questions and post in the forum. 
                        </p>
                        <img src="https://study4u.in/wp-content/uploads/2020/10/search.png" alt='platform2' style={{width:'100px'}}/><br/>
                        <Button danger href="https://forum.study4u.in" style={{marginTop:'10px'}}>Know more</Button>
                    </Card>
                </Col>
                </Row>


                <Row>
                <Col span={24}>
                <Card style={{ width: 300,margin:'auto',marginTop:'20px',textAlign:'center',borderRadius:'10px',border:'none' }}>
                <h3 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Enriched Features</h3>
                <h3 style={{marginTop:10,fontSize:'25px',color:'#0070A6',fontWeight:'300'}}>Real time stats</h3>
                <img src="https://study4u.in/wp-content/uploads/2020/11/analytics.png" alt='feature1' style={{width:'150px'}}/>
                <p style={{fontSize:'20px'}}>
                In our platform, You can check real time statistics like course progress, Activities, forum statistics, etc.
                </p>
                </Card>
                </Col>
                <Col span={24}>
                <Card style={{ width: 300,margin:'auto',marginTop:'20px',textAlign:'center',borderRadius:'10px',border:'none' }}>
                <h3 style={{marginTop:10,fontSize:'25px',color:'#0070A6',fontWeight:'300'}}>Amazingly responsive</h3>
                <img src="https://study4u.in/wp-content/uploads/2020/11/responsive-design.png" alt='feature1' style={{width:'150px'}}/>
                <p style={{fontSize:'20px'}}>
                Our platform is fully responsive. You can access these platform in Desktop, laptop, mobile, etc.
                </p>
                </Card>
                </Col>
                
                <Col span={24}>
                <Card style={{ width: 300,margin:'auto',marginTop:'20px',textAlign:'center',borderRadius:'10px',border:'none' }}>
                <h3 style={{marginTop:10,fontSize:'25px',color:'#0070A6',fontWeight:'300'}}>Contact and Support</h3>
                <img src="https://study4u.in/wp-content/uploads/2020/11/contact-1.png" alt='feature1' style={{width:'150px'}}/>
                <p style={{fontSize:'20px'}}>
                If You face any type of problem. related to access platform and any other query. You can ask any time. Otherwise drop a message us.
                </p>
                </Card>
                </Col>

                <Col span={24}>
                <Card style={{ width: 300,margin:'auto',marginTop:'20px',textAlign:'center',borderRadius:'10px',border:'none' }}>
                <h3 style={{marginTop:10,fontSize:'25px',color:'#0070A6',fontWeight:'300'}}>Easy to use interface</h3>
                <img src="https://study4u.in/wp-content/uploads/2020/11/interface.png" alt='feature1' style={{width:'150px'}}/>
                <p style={{fontSize:'20px'}}>
                Our platform interface in very easy to understand. At the time of access our platform you can easily access it.
                </p>
                </Card>
                </Col>
                </Row>
                <Footer style={{ textAlign: 'center',marginTop:'20px' }}>Study4u ©2018 All Right are Reserved</Footer>
            </div>
        )
    }
}

export default Platforms
