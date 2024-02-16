import React,{useState} from 'react'
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';
import Sound from 'react-sound';


export default function Chat() {
  const [soundStatus, setSoundStatus] = useState(Sound.status.STOPPED);

  const playClickSound = () => {
    console.log("Playing click sound"); // Add this line for debugging
    setSoundStatus(Sound.status.PLAYING);
  };

  const chatbotStyle = {
    width: '500px', // Adjust the width as needed
    margin: 'auto',
    marginTop: '100px',
    backgroundColor: 'lightgrey',
    // Set your desired background color
    fontFamily: 'cursive'
  };

  const steps=[
    {
      id: 'Greet',
      message: 'Hello!, Welcome to go food. Please select the order for which you seek support.',
      trigger: 'orderhistory',
    },
    {
      id: 'orderhistory',
      options: [
        {
          value: 'react1', label: 'order of biryani', trigger: () => {
            playClickSound();
            return 'react1';
          }
        },
        {
          value: 'react2', label: 'order of  starter', trigger: () => {
            playClickSound();
            return 'react2';
          }
        },
        {
          value: 'react3', label: 'order of Deserts', trigger: () => {
            playClickSound();
            return 'react3';
          }
        },
        {
          value: 'react4', label: 'order of paneer', trigger: () => {
            playClickSound();
            return 'react4';
          }
        },
      ],
    },

    {
      id: 'react1',
      message: 'How can we help you with your order?',
      trigger: 'issues1'
    },
    {
      id: 'issues1',
      options: [
        {
          value: 'redux1', label: 'I have packinging or spilliage issue with my order', trigger: () => {
            playClickSound();
            return 'redux1';
          }
        },
        {
          value: 'redux2', label: 'Items are missing or incorrect in my order', trigger: () => {
            playClickSound();
            return 'redux2';
          }
        },
        {
          value: 'redux3', label: 'I have food taste,quantity or quality issue with my order', trigger: () => {
            playClickSound();
            return 'redux3';
          }
        },
        {
          value: 'redux4', label: 'I have not recieved my order', trigger: () => {
            playClickSound();
            return 'redux4';
          }
        },
        {
          value: 'backToOrderHistory', label: 'Go back',
          trigger: () => {
            playClickSound();
            return 'orderhistory';
          }
        }
      ],
    },
    {
      id: 'react2',
      message: 'How can we help you with your order?',
      trigger: 'issues2',
    },


    {
      id: 'issues2',
      options: [
        {
          value: 'redux1', label: 'I have packinging or spilliage issue with my order', trigger: () => {
            playClickSound();
            return 'redux1';
          }
        },
        {
          value: 'redux2', label: 'Items are missing or incorrect in my order', trigger: () => {
            playClickSound();
            return 'redux2';
          }
        },
        {
          value: 'redux3', label: 'I have food taste,quantity or quality issue with my order', trigger: () => {
            playClickSound();
            return 'redux3';
          }
        },
        {
          value: 'redux4', label: 'I have not recieved my order', trigger: () => {
            playClickSound();
            return 'redux4';
          }
        },
        {
          value: 'backToOrderHistory', label: 'Go back',
          trigger: () => {
            playClickSound();
            return 'orderhistory';
          }
        }
      ],
    },
    {
      id: 'react3',
      message: 'How can we help you with your order?',
      trigger: 'issues3',
    },
    {
      id: 'issues3',
      options: [
        {
          value: 'redux1', label: 'I have packinging or spilliage issue with my order', trigger: () => {
            playClickSound();
            return 'redux1';
          }
        },
        {
          value: 'redux2', label: 'Items are missing or incorrect in my order', trigger: () => {
            playClickSound();
            return 'redux2';
          }
        },
        {
          value: 'redux3', label: 'I have food taste,quantity or quality issue with my order', trigger: () => {
            playClickSound();
            return 'redux3';
          }
        },
        {
          value: 'redux4', label: 'I have not recieved my order', trigger: () => {
            playClickSound();
            return 'redux4';
          }
        },
        {
          value: 'backToOrderHistory', label: 'Go back',
          trigger: () => {
            playClickSound();
            return 'orderhistory';
          }
        }
      ],

    },
    {
      id: 'react4',
      message: 'How can we help you with your order?',
      trigger: 'issues4',
    },
    {
      id: 'issues4',
      options: [
        {
          value: 'redux1', label: 'I have packinging or spilliage issue with my order', trigger: () => {
            playClickSound();
            return 'redux1';
          }
        },
        {
          value: 'redux2', label: 'Items are missing or incorrect in my order', trigger: () => {
            playClickSound();
            return 'redux2';
          }
        },
        {
          value: 'redux3', label: 'I have food taste,quantity or quality issue with my order', trigger: () => {
            playClickSound();
            return 'redux3';
          }
        },
        {
          value: 'redux4', label: 'I have not recieved my order', trigger: () => {
            playClickSound();
            return 'redux4';
          }
        },
        {
          value: 'backToOrderHistory', label: 'Go back',
          trigger: () => {
            playClickSound();
            return 'orderhistory';
          }
        }

      ],
    },
    {
      id: 'redux1',
      message: 'Hey there! It has been a while since you placed this order.For any concerns,you can write to us at order@epiceats.com with your concern and order ID, and our team will get back to you within 72hours. THANK YOU!-----------------------------If you ok for this type thank you! and give your valuable feedback',
      trigger: 'waiting1'
    },

    {
      id: 'waiting1',
      user: true,
      trigger: 'reply'
    },
    {
      id: 'reply',
      message: '{previousValue} --------------ok,How would you rate your experience with our chatbot?',
      trigger: 'ratingOptions'
    },
    {
      id: 'redux2',
      message: 'Hey there! It has been a while since you placed this order.For any concerns,you can write to us at order@epiceats.com with your concern and order ID, and our team will get back to you within 72hours. THANK YOU!-----------------------------If you ok for this type thank you! and give your valuable feedback',
      trigger: 'waiting2',
    },

    {
      id: 'waiting2',
      user: true,
      trigger: 'Reply'
    },
    {
      id: 'Reply',
      message: '{previousValue} --------------ok,How would you rate your experience with our chatbot?',
      trigger: 'ratingOptions'
    },
    {
      id: 'redux3',
      message: 'Hey there! It has been a while since you placed this order.For any concerns,you can write to us at order@epiceats.com with your concern and order ID, and our team will get back to you within 72hours. THANK YOU!-----------------------------If you ok for this type thank you! and give your valuable feedback',
      trigger: 'waiting3',
    },

    {
      id: 'waiting3',
      user: true,
      trigger: 'Reply'
    },
    {
      id: 'Reply',
      message: '{previousValue} --------------ok,How would you rate your experience with our chatbot?',
      trigger: 'ratingOptions'
    },
    {
      id: 'redux4',
      message: 'Hey there! It has been a while since you placed this order.For any concerns,you can write to us at order@epiceats.com with your concern and order ID, and our team will get back to you within 72hours. THANK YOU!-----------------------------If you ok for this type thank you! and give your valuable feedback',
      trigger: 'waiting4',
    },
    {
      id: 'waiting4',
      user: true,
      trigger: 'Reply'
    },
    {
      id: 'Reply',
      message: '{previousValue} --------------ok,How would you rate your experience with our chatbot?',
      trigger: 'ratingOptions'
    },

    {
      id: 'ratingOptions',
      options: [
        {
          value: 'good', label: '👍 Good', trigger: () => {
            playClickSound();
            return 'thanks';
          }
        },
        {
          value: 'neutral', label: '😐 Neutral', trigger: () => {
            playClickSound();
            return 'thanks';
          }
        },
        {
          value: 'bad', label: '👎 Bad', trigger: () => {
            playClickSound();
            return 'thanks';
          }
        },
      ],
    },
    {
      id: 'thanks',
      message: 'Thank you for using our chatbot! Your feedback is valuable.',
      end: true,
    },
  ]
  return (
    <div>
      <Segment floated="left" style={chatbotStyle}>
          <ChatBot steps={steps}
            style={chatbotStyle}
            botAvatar="https://static.wixstatic.com/media/2c004c_3653aabec4c548f0bfc2c86021b35966~mv2.png/v1/fill/w_93,h_87,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2c004c_3653aabec4c548f0bfc2c86021b35966~mv2.png" // Replace with your desired bot avatar URL

            
          />
        </Segment>
      <Sound
        url="/mouse-click-153941.mp3"  // Replace with the path to your sound file
        playStatus={soundStatus}
        onFinishedPlaying={() => setSoundStatus(Sound.status.STOPPED)}
      />
    </div>
  )
}
