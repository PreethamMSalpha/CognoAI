import React from "react";
import "./chatUI.styles.scss";
import bot from "../../assests/chatbot.png";
import questionmark from "../../assests/question-mark.png";
import chat from "../../assests/chat.png";
import wave from "../../assests/waving-hand.png";
import "aos/dist/aos.css";

function ChatUI() {
  return (
    <div className="main-container">
      <div
        className="upper-container"
        data-aos="fade"
        data-aos-easing="ease-in-cubic"
      >
        <div
          className="text-fields"
          data-aos="fade"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="1000"
        >
          <div style={{ color: "white", fontWeight: 600, fontSize: "25px" }}>
            IRIS
          </div>
          <div className="hello-wave">
            Hello <img src={wave} alt="wave" style={{ width: "30px" }} />
            {/* <span role="img" aria-label="wave">
              👋
            </span> */}
          </div>
          <div style={{ color: "white", fontWeight: 400, fontSize: "20px" }}>
            <div>I am Iris, a Virtual Assistant</div>
            <div>How may I help you?</div>
          </div>
        </div>
      </div>
      <div className="lower-container">
        <div className="contents">
          <div
            className="bot-logo"
            data-aos="fade"
            data-aos-easing="ease-in-cubic"
            data-aos-offset="100"
            data-aos-delay="2000"
          >
            <div
              style={{
                margin: "auto",
                width: "auto",
                fontSize: "30px",
                textAlign: "center",
                lineHeight: "60px",
                verticalAlign: "middle",
              }}
            >
              <img src={bot} alt="bot" style={{ width: "30px" }} />
            </div>
          </div>
          <div className="faq">
            <span
              data-aos="fade"
              data-aos-easing="ease-in-cubic"
              data-aos-offset="100"
              data-aos-delay="3000"
            >
              Frequently Asked Questions
            </span>
            <div
              className="circle"
              data-aos="fade"
              data-aos-easing="ease-in-cubic"
              data-aos-offset="100"
              data-aos-delay="3000"
            >
              <img
                id="faq_questmark"
                src={questionmark}
                alt="questionmark"
                style={{ width: "15px" }}
              />
            </div>
          </div>
          <div
            className="questions"
            data-aos="fade"
            data-aos-easing="ease-in-cubic"
            data-aos-delay="3000"
          >
            <div className="indi-quest pointer">
              <span className="circle"></span>
              <span>Can I redeem my FB before the original term?</span>
            </div>
            <div className="indi-quest pointer">
              <span className="circle"></span>
              <span>How do I pay my Credit card bill?</span>
            </div>
            <div className="indi-quest pointer">
              <span className="circle"></span>
              <span>How can I get my Account Statement?</span>
            </div>
            <div className="indi-quest pointer">
              <span className="circle"></span>
              <span>What is the tenure of Fixed Deposit?</span>
            </div>
          </div>
          <div
            className="start-convo pointer"
            data-aos="fade"
            data-aos-easing="ease-in-cubic"
            data-aos-delay="3000"
            data-aos-offset="0"
          >
            <div style={{ display: "flex" }}>
              <img
                src={chat}
                alt=""
                style={{ width: "15px", margin: "0 5px" }}
              />
            </div>
            <div style={{ display: "flex" }}>
              <span
                className="convo"
                // style={{ fontWeight: 500, fontSize: "smaller" }}
              >
                Start a New Conversation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatUI;
