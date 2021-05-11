import React, { Component } from "react";
import ReactDOM from "react-dom";
import levels from './Levels'
import parse from 'html-react-parser'
import reactStringReplace from 'react-string-replace'
const styles = {
    sea: {
        fontWeight: "bold",
        color: "red"
    },
    sky: {
        fontWeight: "bold",
        color: "blue"
    }
};

export default class SolrSearchComponent extends Component {
    render() {
        var allText = this.props.text
        var KeywordsTosearch = levels.map(function (item) {
            return item.title;
        });
        // console.log(KeywordsTosearch, "Levels")
        let temp = allText
        for (let i = 0; i < KeywordsTosearch.length; i++) {
            // console.log(String.raw`/\b(\w*` + KeywordsTosearch[i] + String.raw`\w*)\b/gi`)
            temp = reactStringReplace(temp, new RegExp(String.raw`\b(` + KeywordsTosearch[i] + String.raw`)\b`, 'gi'), (match, i) => (
                <span onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'blue', cursor: 'pointer' }}>{match}</span>
            ))
        }
        temp = reactStringReplace(temp, new RegExp(String.raw`\b(` + "Customized Beneficiary Plan" + String.raw`)\b`, 'gi'), (match, i) => (
            <a onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'blue', cursor: 'pointer' }}>{match}</a>
        ))
        temp = reactStringReplace(temp, new RegExp(String.raw`\b(` + "Default Beneficiary Plan" + String.raw`)\b`, 'gi'), (match, i) => (
            <a onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'blue', cursor: 'pointer' }}>{match}</a>
        ))

        return temp.slice(0, allText.length)
    }
}
