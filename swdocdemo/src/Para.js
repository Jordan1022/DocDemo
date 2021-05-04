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
            console.log(String.raw`/\b(\w*` + KeywordsTosearch[i] + String.raw`\w*)\b/gi`)
            temp = reactStringReplace(temp, new RegExp(String.raw`\b(` + KeywordsTosearch[i] + String.raw`)\b`,'gi'), (match, i) => (
                <span onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'red', cursor: 'pointer' }}>{match}</span>
            ))
        }
        return temp.slice(0,allText.length)
        var allText = this.props.text
        var KeywordsTosearch = levels.map(function (item) {
            return item.title;
        });
        let parts = this.props.text + " "

        for (let j = 0; j < KeywordsTosearch.length; j++) {
            parts.split('/(\b' + KeywordsTosearch[j] + '+\b)/gi')
            for (var i = 1; i < parts.length; i += KeywordsTosearch[i].length - 1) {
                parts[i] = <span onClick={() => this.props.handleToggle(parts[i])} key={i} style={{ color: 'red', cursor: 'pointer' }}>{parts[i]}  </span>
            }
            // temp = reactStringReplace(temp, new RegExp('(' + KeywordsTosearch[i] + ')', 'gu'), (match, i) => (
            //     <span onClick={() => this.props.handleToggle(match)} key={i} style={{ color: 'red', cursor: 'pointer' }}>{match}  </span>
            // ))
        }
        // var parts = "I am a cow; cows say moo. MOOOOO.".split(/(\bmoo+\b)/gi);
        // for (var i = 1; i < parts.length; i += 2) {
        //     parts[i] = <span className="match" key={i}>{parts[i]}</span>;
        // }
        return parts;
    }
}
