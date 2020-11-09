import React, { Component } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import {PhoneOutlined,MailOutlined,GlobalOutlined} from '@ant-design/icons';



class Contact extends Component {
    render() {
        return (
            <div>
               <Row>
                {/* Our Platforms Section */}
               <Col span={24}>
               <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid tomato' }}>
                    <h5 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Get In Touch</h5>
                    <h3 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}><PhoneOutlined /> +91 9179837228</h3>
                    <h3 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}><MailOutlined /> Contact@Study4U.in</h3>
                    <h3 style={{marginTop:20,fontSize:'20px',color:'#0070A6',fontWeight:'300'}}><GlobalOutlined /> Gwalior, Madhya Pradesh</h3>
               </Card>
               </Col> 
               </Row>


               <div class="mapouter" style={{marginTop:'50px',marginBottom:'20px'}}><div class="gmap_canvas"><iframe width="300" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Gwalior&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='Map'></iframe></div></div>
            </div>
        )
    }
}

export default Contact
