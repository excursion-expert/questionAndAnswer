import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
margin-top: 16px;
`
const Overall = styled.div`
padding: 48px 48px;
`
const Note = styled.div`
font-size: 12px;
`
const QuickAnswers = styled.div`
font-weight: 500;
`
const Image = styled.img`
height: 28px;
width: 28px;
float: left;
margin: -3px 8px 0 -3px;
border-radius: 100%;
line-height: 18px;
`
const DisplayBlock = styled.div`
  display: block;
`
const XButton = styled.div`
position: absolute;
font-size: 16px;
font-weight: 500;
right: 2%;
top: 4%;
cursor: pointer;
:hover {
  color: #545454
}
`
const ModalDisplay = styled.div`
position: fixed;
background: white;
width: 70%;
height: auto;
top: 30%;
left: 50%;
border-color: black;
border-width: 1px;
margin-top: 95px;
transform: translate(-50%, -50%);
box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 8px 0px;
z-index: 3;
`

const AskAQuestion = styled.div`
padding: 16px 48px 16px 24px;
display: block;
font-size: 14px;
font-weight: 500;
line-height: 16px;
background-color: rgb(242, 242, 242);
`
const TextFieldExpanded = styled.textarea`
box-sizing: border-box;
padding: 12px;
font-size: 14px;
border: 1px solid;
border-radius: 2px;
padding: 12px;
border-color: rgb(224, 224, 224);
font-family: Poppins;
width: 90%;
justify-content: 'flex-end';
`
TextFieldExpanded.displayName = 'TextFieldExpanded';

const PicTextBox = styled.div`
display: 'flex';
flex-direction: 'row';
width: 100%;
`

const SubmitAButton = styled.button`
background-color: rgb(0, 0, 0);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(255, 255, 255);
display: inline-block;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
margin-right: 16px;
cursor: pointer;
transition: 0.2s;
:hover {
  background-color: #292929;
}
`
SubmitAButton.displayName = 'SubmitAButton';

const SubmitQButton = styled.button`
background-color: rgb(255, 255, 255);
border-color: rgb(0, 0, 0);
border-radius: 3px;
border-width: 1px;
color: rgb(0, 0, 0);
display: inline-block;
padding-bottom: 8px;
padding-top: 8px;
padding-right: 16px;
padding-left: 16px;
text-align: center;
height: 36px;
width: 77px;
cursor: pointer;
transition: 0.2s;
:hover {
  background-color: #d6d6d6;
}
`
SubmitQButton.displayName = 'SubmitQButton'
const AnswerSubmission = styled.div`
`
const PostingGuidelines = styled.div`
margin-top: 16px;
color: rgb(44, 44, 44);
display: inline-block;
cursor: pointer;
`
const Guidelines = styled.span`
font-size: 14px;
border-bottom: 1px dotted #e0e0e0;
`
const SubCancel = styled.div`
display: inline-block;
float: left;
margin-top: 16px;
margin-bottom: 50px;
`
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      question: event.target.value
    });
  }
  handleSubmit() {
    event.preventDefault();
    this.props.handleSubmit(this.state.question);
    this.props.hideModal();
  }
  render() {
    return (
      <ModalDisplay>
        <div>
          <AskAQuestion>
            <i className="far fa-comment-alt"></i>
            <span> Ask a question</span>
          </AskAQuestion>
          <XButton onClick={() => this.props.hideModal()}>
            X
          </XButton>
          <Overall>
            <QuickAnswers>Get Quick answers from staff and past guests.</QuickAnswers>
            <Form>
              <PicTextBox>
                <Image src={`https://picsum.photos/id/100/200`}></Image>
                <TextFieldExpanded placeholder="Hi, what would you like to know about this attraction?" rows="5" onChange={this.handleChange} value={this.state.question}></TextFieldExpanded>
              </PicTextBox>
              <Note>Note: your question will be posted publicly on the Questions & Answers page.</Note>
              <AnswerSubmission>
                <DisplayBlock>
                  <PostingGuidelines>
                    <Guidelines>Posting Guidelines</Guidelines>
                  </PostingGuidelines>
                </DisplayBlock>
                <SubCancel>
                  <SubmitAButton onClick={this.handleSubmit}>Submit</SubmitAButton>
                  <SubmitQButton onClick={() => this.props.hideModal()}>Cancel</SubmitQButton>
                </SubCancel>
              </AnswerSubmission>
            </Form>
          </Overall>
        </div>
      </ModalDisplay>
    )
  }
}


export default Modal;