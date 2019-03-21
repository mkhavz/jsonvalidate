import React, { PureComponent  } from 'react';
import './App.css';
import ReactDiffViewer from 'react-diff-viewer'
import { TITLE, PAST, CURRENT } from './constant';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

// import JsonDiffReact from 'jsondiffpatch-for-react';
// import { ReactGhLikeDiff } from 'react-gh-like-diff';
// import Prism from 'prismjs';

const disp = { width: '90%' };
const pre = {
    display: 'block',
    'unicode-bidi': 'embed',
    'font-family': 'monospace',
    'white-space': 'pre',
}
const defaultStyles = {
    variables: {
        addedBackground: '#e6ffed',
        addedColor: '#24292e',
        removedBackground: '#ffeef0',
        removedColor: '#24292e',
        wordAddedBackground: '#acf2bd',
        wordRemovedBackground: '#fdb8c0',
        addedGutterBackground: '#cdffd8',
        removedGutterBackground: '#ffdce0',
        gutterBackground: '#f7f7f7',
        gutterBackgroundDark: '#f3f1f1',
        highlightBackground: '#fffbdd',
        highlightGutterBackground: '#fff5b1',
    },
    diffContainer: {
        color: 'pink'
    }, // style object
    diffRemoved: {}, // style object
    diffAdded: {}, // style object
    marker: {
        color: '#eeefff'
    }, // style object
    gutter: {
        background: 'black'
    }, // style object
    hightlightedLine: {

    }, // style object
    hightlightedGutter: {}, // style object
    lineNumber: {}, // style object
    line: {}, // style object
    wordDiff: {
        color: 'purple'
    }, // style object
    wordAdded: {
        display: 'block'
    }, // style object
    wordRemoved: {
        display: 'block'
    }, // style object
}


class App extends PureComponent  {
    // highlightSyntax = str =>  <SyntaxHighlighter language= 'json' style={disp}>{str}</SyntaxHighlighter>;
    highlightSyntax = str =>  <pre>{str}</pre>;
    // highlightSyntax = str =>  <span className={pre}>{str}</span>;



    render() {

        return (
            <div className={disp}>
                {/*<JsonDiffReact*/}
                {/*right={right}*/}
                {/*left={left}*/}
                {/*show={true}*/}
                {/*annotated={true}*/}
                {/*/>*/}

                {/*Solution 1*/}
                <ReactDiffViewer
                    styles={defaultStyles}
                    oldValue={JSON.stringify(PAST)}
                    newValue={JSON.stringify(CURRENT)}
                    splitView={true}
                    renderContent={this.highlightSyntax}
                />

                {/*Solution 2*/}
                {/*<ReactGhLikeDiff*/}
                {/*options={{*/}
                {/*originalFileName: TITLE,*/}
                {/*updatedFileName: TITLE*/}
                {/*}}*/}
                {/*past={ JSON.stringify(PAST) }*/}
                {/*current={JSON.stringify(CURRENT)}*/}
                {/*/>*/}
            </div>
        );
    }
}

export default App;



import React, { Component } from 'react';
import Diff from 'react-stylable-diff';
import {PAST, CURRENT} from "./constant";
import './App.css';


class App extends Component {

    render() {
        return (
            <Difference>
                <Diff className="App" type="json"
                      inputA={PAST}
                      inputB= {CURRENT}/>
            </Difference>
        );
    }
}

export default App;
