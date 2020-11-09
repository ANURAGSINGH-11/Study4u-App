import React from 'react'
import { Form, Input, Button } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import emailjs from 'emailjs-com';
import { Layout } from 'antd';
const {Footer} = Layout;
const Career=()=> { 
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
    //   const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //       email: '${label} is not validate email!',
    //       number: '${label} is not a validate number!',
    //     },
    //     number: {
    //       range: '${label} must be between ${min} and ${max}',
    //     },
    //   };
    const sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('Form', 'template_grv3tbh', e.target,'user_bGQdBZyBhWTvrCanr3VVq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    

        return (
            <div>
                 <Row>
                {/* Our Platforms Section */}
               <Col span={24}>
                   <h3 style={{fontSize:'35px',fontWeight:'300',color:'tomato',marginTop:'50px'}}>Career</h3>
                   
                   <img src="https://study4u.in/wp-content/uploads/2020/11/accountant.png" alt='flexwork' style={{width:'200px'}}/>
                   <h3 style={{fontSize:'25px',fontWeight:'300',color:'darkgray',marginTop:'20px'}}>Work in a Flexible Environment</h3>

                   <img src="https://study4u.in/wp-content/uploads/2020/11/graphic-designer.png" alt='flexwork' style={{width:'200px'}}/>
                   <h3 style={{fontSize:'25px',fontWeight:'300',color:'darkgray',marginTop:'20px'}}>Share your ideas with the Team</h3>
                    
                   <img src="https://study4u.in/wp-content/uploads/2020/11/businessman.png" alt='flexwork' style={{width:'200px'}}/>
                   <h3 style={{fontSize:'25px',fontWeight:'300',color:'darkgray',marginTop:'20px'}}>Grow your Career with us</h3>

                   <img src="https://study4u.in/wp-content/uploads/2020/11/scientist.png" alt='flexwork' style={{width:'200px'}}/>
                   <h3 style={{fontSize:'25px',fontWeight:'300',color:'darkgray',marginTop:'20px'}}>Flexiblility to experiment with ideas</h3>
                    
                    <Card style={{ width: 300,margin:'auto',marginTop:'50px',borderRadius:'10px',border:'1px solid tomato' }}>
                    <h3 style={{fontSize:'30px',fontWeight:'300',color:'tomato'}}>Work @ Study4u</h3>
                    <p style={{color:'red'}}>* Plaese fill the information carefully</p>
                <Form {...layout} name="nest-messages" onSubmitCapture={sendEmail}>
                <Form.Item label="* Name" rules={[{ required: true }]}>
                    <Input type="text" name="user_name" />
                </Form.Item>
                <Form.Item label="* Email" rules={[{ type: 'email' }]}>
                    <Input type="email" name="user_email" />
                </Form.Item>
                <Form.Item label="* Describe Yourself">
                    <Input.TextArea name="message" />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" value="Send">
                    Submit
                    </Button>
                </Form.Item>
                </Form>
                    </Card>
               </Col>
               </Row> 
               <Footer style={{ textAlign: 'center',marginTop:'20px' }}>Study4u ©2018 All Right are Reserved</Footer>    
            </div>
        )
}

export default Career
