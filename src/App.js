import React, { Component } from 'react';
import { ReactGhLikeDiff } from 'react-gh-like-diff';
import { TITLE, PAST, CURRENT } from './constant';
import 'react-gh-like-diff/lib/diff2html.min.css';

class App extends Component {
    state = {
        past: '',
        current: ''
    };

    render() {
        return (
            <div>
                <ReactGhLikeDiff
                    past={JSON.stringify(JSON.parse(PAST), null, 1)}
                    current={JSON.stringify(JSON.parse(CURRENT),  null, 1)}
                />
            </div>
        );
    }
}

export default App;
