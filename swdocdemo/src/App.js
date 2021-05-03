// import logo from './logo.svg';
// import ModalParent from './ModalParent';
// //
// import './App.css';
// import TextComponent from './TextComponent';

// function App() {

//   return (
//     <div className="App">
//       <ModalParent />
//     </div>
//   );
// }

// export default App;

import './App.css';
import Para from './Para'
import Paragraphs from './assets/Paragraphs'
import React from 'react'
import levels from './Levels'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalText: '',
      wordIndex: null,
      modalOpen: false,
      wordHistory: []
    }
  }
  handleToggle = (text) => {
    if (text) {
      let obj = levels.find(obj => obj.title == text);
      if (obj) {
        let wordHistory = this.state.wordHistory
        wordHistory.push(obj)
        this.setState({
          wordIndex: obj,
          modalOpen: true,
          wordHistory
        })
      }
    }
    else {
      this.setState({
        modalOpen: !this.state.modalOpen,
      })
    }
  }
  handleBack = () => {
    var wordHistoryClone = this.state.wordHistory
    if (wordHistoryClone.length > 1) {
      wordHistoryClone.pop()
      this.setState({
        wordIndex: wordHistoryClone[wordHistoryClone.length - 1],
        wordHistory: wordHistoryClone,
        modalOpen: true
      })
    }
    else {
      this.setState({
        modalOpen: !this.state.modalOpen,
      })
    }
  }

  render() {
    return (
      <>
        {this.state.modalOpen &&
          <div>
            <Modal isOpen={this.state.modalOpen} toggle={() => this.handleToggle()} >
              <ModalHeader> <Button onClick={() => this.handleBack()}>{"<-Back"}</Button>  {this.state.wordIndex?.title}</ModalHeader>
              <ModalBody>
                <p>
                  {this.state.wordIndex?.text}
                </p>
                <Para handleToggle={(text) => this.handleToggle(text)} text={this.state.wordIndex?.text} />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.handleToggle()}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        }

        <div className="App" >
          <h1>
            Sweet Will
        </h1>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[0]} />
          <h3>Select the beneficiary plan you desire:</h3>
          <a href={'#'} >Default Beneficiary Plan</a>
          <br />
          <a href={'#'}>Customized Beneficiary Plan</a>
          <br />
          <br />
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[1]} />
          <h3>Default Beneficiary Plan</h3>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[2]} />
          <ol>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[3]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[4]} /></li>
          
          <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[5]} /></li>
          <ol type="a">
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[6]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[7]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[8]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[9]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[10]} /></li>
          </ol>
          <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[11]} /></li>

          </ol>
          <h3>Customized Beneficiary Plan</h3>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[12]} />
          <ol>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[13]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[14]} /></li>
          </ol>
          <h3>Definitions and Interpretations</h3>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[15]} />
          <table >
            <tr>
              <th>Adopt / Adopted</th>
              <td>means iCitizens parents who have decided to accept, appropriate, choose, or select, as to adopt a child. An adopted child who has been legally taken by another family to be taken care of as their own child.</td>
            </tr>
            <tr>
              <th>Adopt / Adopted</th>
              <td>means iCitizens parents who have decided to accept, appropriate, choose, or select, as to adopt a child. An adopted child who has been legally taken by another family to be taken care of as their own child.</td>
            </tr>
          </table>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[16]} />
        </div>
      </>
    );
  }
}

export default App;
