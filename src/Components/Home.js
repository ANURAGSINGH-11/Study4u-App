import React, { Component } from 'react'
import { Carousel } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Avatar } from 'antd';
import './styles/Home.css';
import { Layout } from 'antd';
const {Footer} = Layout;
function onChange(a, b, c) {
    //console.log(a, b, c);
  }
  
  const contentStyle1 = {
    height: '500px',
    color: '#FF5733',
    lineHeight:'250px',
    fontSize:'30px',
    textAlign: 'center',
    backgroundColor:'#5D6D7E',
    backgroundImage: `url(${'https://study4u.in/wp-content/uploads/2020/11/study4u.jpg'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  };
  const contentStyle2 = {
    height: '500px',
    color: '#FF5733',
    lineHeight:'250px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${'https://study4u.in/wp-content/uploads/2020/11/online-courses.jpg'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  };
  const contentStyle3 = {
    height: '500px',
    color: '#FF5733',
    lineHeight:'250px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${'https://study4u.in/wp-content/uploads/2020/11/test.jpg'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  };
  const contentStyle4 = {
    height: '500px',
    color: '#FF5733',
    lineHeight:'250px',
    textAlign: 'center',
    background: '#364d79',
    backgroundImage: `url(${'https://study4u.in/wp-content/uploads/2020/11/image.jpg'})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  };
export class Home extends Component {
    render() {
        return (
            <div>
               <Carousel afterChange={onChange}>
                    <div>
                        <h1 style={contentStyle1}>Welcome to Study4u</h1>
                        <h3 style={{marginTop:-350,color:'#FF5733',fontSize:'20px'}}>Discover New Way of Learning</h3>
                        <Button type="primary" danger style={{marginTop:0,marginBottom:'30px'}}>Get Started</Button>
                    </div>
                    <div>
                    <h1 style={contentStyle2}>Explore Study4u Courses</h1>
                        <h3 style={{marginTop:-350,color:'#FF5733',fontSize:'20px'}}>Be a part of amazing learning experience</h3>
                        <Button type="primary" danger style={{marginTop:0,marginBottom:'30px'}}>Explore More</Button>
                    </div>
                    <div>
                    <h1 style={contentStyle3}>Explore Study4u Quiz</h1>
                        <h3 style={{marginTop:-350,color:'#FF5733',fontSize:'20px'}}>Analyze Your Capabliliy</h3>
                        <Button type="primary" danger style={{marginTop:0,marginBottom:'30px'}}>Explore More</Button>
                    </div>
                    <div>
                    <h1 style={contentStyle4}>Explore our Q and A Forum</h1>
                        <h3 style={{marginTop:-350,color:'#FF5733',fontSize:'20px'}}>Ask Questions and give Answers in Community.</h3>
                        <Button type="primary" danger style={{marginTop:0,marginBottom:'30px'}}>Explore More</Button>
                    </div>
                </Carousel>


                <Row>
                    <Col span={24} style={{height:'400px'}}>
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',border:'1px solid tomato',borderRadius:'10px' }}>
                        <h5 style={{fontSize:'25px',fontWeight:'300'}}>A Platform to Grow you Knowledge</h5>
                        <p style={{fontSize:'18px'}}>
                            Study4U is an educational platform where we provide
                            study material to those students that are focused on the
                            knowledge and willing to learn new skills. 
                        </p>
                    </Card>
                    </Col>
                    <Col span={24} style={{height:'400px'}}>
                    <Card style={{ width: 350,height:400,margin:'auto',borderRadius:'10px',backgroundImage:`url(${'https://study4u.in/wp-content/uploads/2020/06/glenn-carstens-peters-npxXWgQ33ZQ-unsplash-1536x1022.jpg'})`,backgroundSize:'cover',boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05)` }}>
                    </Card>
                    </Col>
                    <Col span={24}>
                      <h3 style={{marginTop:'30px',color:'tomato',fontSize:'30px',fontWeight:'300'}}>Our Platforms</h3>
                      <Col span={24} style={{height:300}}>
                        <img style={{width:100}} src="https://study4u.in/wp-content/uploads/2020/10/e-learning-2.png" alt='college-platform'/>
                        <h2 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>College.Study4U.in</h2>
                        <p>
                        In this platform, We provide various subjects
                        study material for college students. The subjects like DBMS, Python, AngularJS, Core Java, SQL,etc.
                        </p>
                        <Button danger>Visit Now</Button>
                      </Col>
                      <Col span={24} style={{height:300}}>
                        <img style={{width:100}} src="https://study4u.in/wp-content/uploads/2020/10/e-learning-6.png" alt='college-platform'/>
                        <h2 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>School.Study4U.in</h2>
                        <p>
                        In this platform, We provide study material for various classes 9 to 12 for various boards like MP Board, CBSE, UP Board, etc.
                        </p>
                        <Button danger>Visit Now</Button>
                      </Col>
                      <Col span={24} style={{height:300}}>
                        <img style={{width:100}} src="https://study4u.in/wp-content/uploads/2020/10/search.png" alt='college-platform'/>
                        <h2 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}>Forum.Study4U.in</h2>
                        <p>
                        In this platform, We provide an online forum, where any person can ask any questions.
                        Simply create your topic and post your question. anybody can give answer these questions.
                        </p>
                        <Button danger href='https://forum.study4u.in/'>Visit Now</Button>
                      </Col>
                    </Col>

                    <Col span={24}>
                      <h3 style={{marginTop:'30px',color:'tomato',fontSize:'30px',fontWeight:'300'}}>Our Testimonials</h3>
                      <Col span={24} style={{height:200}}>
                        <quote>
                        I had initially bad response time,
                        then the support team did a fantastic job helping. Really a trusted platform.
                        </quote><br/>
                      <Avatar
                          size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
                          src="https://study4u.in/wp-content/uploads/2020/07/woman.png"
                          style={{boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                          0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'20px'}}/>
                        <h3>Radhika Gupta</h3>
                      </Col>
                      <Col span={24} style={{height:200}}>
                        <quote>
                        This is very well organized online teaching technology skill-building course.Keep the good work!! 
                        </quote><br/>
                        <Avatar
                          size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
                          src="https://study4u.in/wp-content/uploads/2020/07/man.png"
                          style={{boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                          0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'20px'}} />
                        <h3>Akash Ojha</h3>
                      </Col>
                      <Col span={24} style={{height:200}}>
                      <quote>
                        Fast and efficient and great help in this type of lockdown situation.
                        This prepared me very well to the exam!
                        </quote><br />
                      <Avatar
                          size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 100 }}
                          src="https://study4u.in/wp-content/uploads/2020/07/man.png"
                          style={{boxShadow:`0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
                          0 9px 28px 8px rgba(0, 0, 0, 0.05)`,marginTop:'20px'}}/>
                        <h3>Riyaz Beg</h3>
                      </Col>
                    </Col>
                </Row>
                <Footer style={{ textAlign: 'center',marginTop:'20px' }}>Study4u ©2018 All Right are Reserved</Footer>
            </div>
        )
    }
}

export default Home
