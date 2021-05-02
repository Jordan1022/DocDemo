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
        console.log(KeywordsTosearch, "Levels")
        let temp = allText
        for (let i = 0; i < KeywordsTosearch.length; i++) {
            temp = reactStringReplace(temp, KeywordsTosearch[i], (match, i) => (
                <span onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'red' }}>{match + " "}</span>
            ))
        }
        return temp
    }
}
