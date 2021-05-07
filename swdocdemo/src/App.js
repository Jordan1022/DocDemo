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
import { makeStyles } from '@material-ui/core/styles';

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
    this.setState({ modalOpen: false }, () => {
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
    })

  }
  handleBack = () => {
    var wordHistoryClone = this.state.wordHistory
    if (wordHistoryClone.length > 1) {
      this.setState({
        modalOpen: false
      }, () => {
        wordHistoryClone.pop()
        let obj = levels.find(obj => obj.title == wordHistoryClone[wordHistoryClone.length - 1].title);
        this.setState({
          wordIndex: obj,
          wordHistory: wordHistoryClone,
          modalOpen: true
        })
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
            <Modal isOpen={this.state.modalOpen} toggle={() => this.setState({ modalOpen: !this.state.modalOpen, wordHistory: [] })} >
              <ModalHeader> <Button onClick={() => this.handleBack()}>{"Back"}</Button>  {this.state.wordIndex?.title}</ModalHeader>
              <ModalBody>

                {this.state.modalOpen &&
                  <Para handleToggle={(text) => this.handleToggle(text)} text={this.state.wordIndex?.text} />
                }
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.setState({ modalOpen: false, wordHistory: [] })}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        }

        <div className="App" >
          <h1>
            Sweet Will
        </h1>
          <div style={{ marginBottom: "1%" }} ><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[0]} /></div>
          <div style={{ marginBottom: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[1]} /></div>
          <div style={{ marginBottom: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[2]} /></div>
          <div style={{ marginBottom: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[3]} /></div>
          <div style={{ marginBottom: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[4]} /></div>
          <h3>Select the beneficiary plan you desire:</h3>
          <a href={'#'} >Default Beneficiary Plan</a>
          <br />
          <a href={'#'}>Customized Beneficiary Plan</a>
          <br />
          <br />
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[5]} />
          <h3>Default Beneficiary Plan</h3>
          <span style={{ padding: "1%" }} ><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[6]} /></span>
          <ol style={{ marginTop: "1%" }}>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[7]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[8]} /></li>

            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[9]} /></li>
            <ol type="a" style={{ marginTop: "1%" }}>
              <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[10]} /></li>
              <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[11]} /></li>
              <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[12]} /></li>
              <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[13]} /></li>
              <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[14]} /></li>
            </ol>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[15]} /></li>

          </ol>
          <h3>Customized Beneficiary Plan</h3>
          <span style={{ padding: "1%" }} ><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[16]} /></span>
          <ol>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[17]} /></li>
            <li><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[18]} /></li>
          </ol>
          <h3>Definitions and Interpretations</h3>
          <Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[19]} />
          <table>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Adopt / Adopted</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[20]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Arts and Sciences</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[21]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Business Activities</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[22]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Buyer</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[23]} /></td>
            </tr
            ><tr>
              <th style={{ width: "20%", textAlign: "center" }}>Buy/Buying</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[24]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Cash</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[25]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Child/Children</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[26]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>City/Cities</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[27]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Claim Proof Verifications</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[28]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Claim Proofs</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[29]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Economy Administrator</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[30]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Ecosystem(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[31]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Ecosystem Operator</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[32]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Execute / Executed</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[33]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Explicitly</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[34]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>iCitizen(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[35]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>iCitizenship</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[36]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Individual(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[37]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Government(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[38]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Government Agency</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[39]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Joins/Joining</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[40]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Jurisdiction</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[41]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Legal Person(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[42]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>License / Licensing/ Licensed </th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[43]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Licensed Agents</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[44]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>LPEntity</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[45]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Married / Marriage</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[46]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Natural</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[47]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Offspring</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[48]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Owns(s) / Owned / Owner(s) / Ownership</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[49]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Parent / Parents</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[50]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Participant(s)</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[51]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Payment</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[52]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Personal Device</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[53]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Poor</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[54]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Purchase</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[55]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sell(s) / Selling</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[56]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Seller</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[57]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sound Mind</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[58]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Spouse</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[59]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Certificate of eBirth</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[60]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Economy / Economy</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[61]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Economy Notary / Economy Notary</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[62]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Economy Notary List</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[63]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet iPassport / iPassport</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[64]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Seed / Seed</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[65]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Squares / Squares</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[66]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweet Will</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[67]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweetbridge Foundation</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[68]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Sweetbridge Synchronized Commerce Platform</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[69]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Testator</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[70]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>You</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[71]} /></td>
            </tr>
            <tr>
              <th style={{ width: "20%", textAlign: "center" }}>Your</th>
              <td style={{ padding: "1%" }}><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[72]} /></td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default App;
