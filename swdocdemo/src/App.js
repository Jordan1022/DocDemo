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
      wordHistoryClone.pop()
      let obj = levels.find(obj => obj.title == wordHistoryClone[wordHistoryClone.length - 1].title);
      this.setState({
        wordIndex: obj,
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
            <Modal isOpen={this.state.modalOpen} toggle={() => this.setState({ modalOpen: !this.state.modalOpen })} >
              <ModalHeader> <Button onClick={() => this.handleBack()}>{"Back"}</Button>  {this.state.wordIndex?.title}</ModalHeader>
              <ModalBody>

                {this.state.modalOpen &&
                  <Para handleToggle={(text) => this.handleToggle(text)} text={this.state.wordIndex?.text} />
                }
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => this.setState({ modalOpen: false })}>Close</Button>
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
          <table>
            <tr>
              <th>Adopt / Adopted</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[16]} /></td>
            </tr>
            <tr>
              <th>Arts and Sciences</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[17]} /></td>
            </tr>
            <tr>
              <th>Business Activities</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[18]} /></td>
            </tr>
            <tr>
              <th>Buyer</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[19]} /></td>
            </tr
            ><tr>
              <th>Buy/Buying</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[20]} /></td>
            </tr>
            <tr>
              <th>Cash</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[21]} /></td>
            </tr>
            <tr>
              <th>Child/Children</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[22]} /></td>
            </tr>
            <tr>
              <th>City/Cities</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[23]} /></td>
            </tr>
            <tr>
              <th>Claim Proof Verifications</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[24]} /></td>
            </tr>
            <tr>
              <th>Claim Proofs</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[25]} /></td>
            </tr>
            <tr>
              <th>Economy Administrator</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[26]} /></td>
            </tr>
            <tr>
              <th>Ecosystem(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[27]} /></td>
            </tr>
            <tr>
              <th>Ecosystem Operator</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[28]} /></td>
            </tr>
            <tr>
              <th>Execute / Executed</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[29]} /></td>
            </tr>
            <tr>
              <th>Explicitly</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[30]} /></td>
            </tr>
            <tr>
              <th>iCitizen(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[31]} /></td>
            </tr>
            <tr>
              <th>iCitizenship</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[32]} /></td>
            </tr>
            <tr>
              <th>Individual(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[33]} /></td>
            </tr>
            <tr>
              <th>Government(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[34]} /></td>
            </tr>
            <tr>
              <th>Government Agency</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[35]} /></td>
            </tr>
            <tr>
              <th>Joins/Joining</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[36]} /></td>
            </tr>
            <tr>
              <th>Jurisdiction</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[37]} /></td>
            </tr>
            <tr>
              <th>Legal Person(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[38]} /></td>
            </tr>
            <tr>
              <th>License / Licensing/ Licensed </th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[39]} /></td>
            </tr>
            <tr>
              <th>Licensed Agents</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[40]} /></td>
            </tr>
            <tr>
              <th>LPEntity</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[41]} /></td>
            </tr>
            <tr>
              <th>Married / Marriage</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[42]} /></td>
            </tr>
            <tr>
              <th>Natural</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[43]} /></td>
            </tr>
            <tr>
              <th>Offspring</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[44]} /></td>
            </tr>
            <tr>
              <th>Owns(s) / Owned / Owner(s) / Ownership</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[45]} /></td>
            </tr>
            <tr>
              <th>Parent / Parents</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[46]} /></td>
            </tr>
            <tr>
              <th>Participant(s)</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[47]} /></td>
            </tr>
            <tr>
              <th>Payment</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[48]} /></td>
            </tr>
            <tr>
              <th>Personal Device</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[49]} /></td>
            </tr>
            <tr>
              <th>Poor</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[50]} /></td>
            </tr>
            <tr>
              <th>Purchase</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[51]} /></td>
            </tr>
            <tr>
              <th>Sell(s) / Selling</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[52]} /></td>
            </tr>
            <tr>
              <th>Seller</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[53]} /></td>
            </tr>
            <tr>
              <th>Sound Mind</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[54]} /></td>
            </tr>
            <tr>
              <th>Spouse</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[55]} /></td>
            </tr>
            <tr>
              <th>Sweet Certificate of eBirth</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[56]} /></td>
            </tr>
            <tr>
              <th>Sweet Economy / Economy</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[57]} /></td>
            </tr>
            <tr>
              <th>Sweet Economy Notary / Economy Notary</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[58]} /></td>
            </tr>
            <tr>
              <th>Sweet Economy Notary List</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[59]} /></td>
            </tr>
            <tr>
              <th>Sweet iPassport / iPassport</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[60]} /></td>
            </tr>
            <tr>
              <th>Sweet Seed / Seed</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[61]} /></td>
            </tr>
            <tr>
              <th>Sweet Squares / Squares</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[61]} /></td>
            </tr>
            <tr>
              <th>Sweet Will</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[62]} /></td>
            </tr>
            <tr>
              <th>Sweetbridge Foundation</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[63]} /></td>
            </tr>
            <tr>
              <th>Sweetbridge Synchronized Commerce Platform</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[64]} /></td>
            </tr>
            <tr>
              <th>Testator</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[65]} /></td>
            </tr>
            <tr>
              <th>You</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[66]} /></td>
            </tr>
            <tr>
              <th>Your</th>
              <td><Para handleToggle={(text) => this.handleToggle(text)} text={Paragraphs[67]} /></td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default App;
