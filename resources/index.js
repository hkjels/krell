/**
 * Generated by Krell, do not edit by hand
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {krellUpdateRoot} from './$KRELL_OUTPUT_TO';

/*
 * Establish a root that works for REPL based dev / prod. In the REPL case
 * the real app root will be loaded async. In prod it won't really be async
 * but we want to treat both cases the same.
 */
class KrellRoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loaded: false, root: null};
    }

    render() {
        if (!this.state.loaded) {
            var plainStyle = {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            };
            return (
                <ReactNative.View style={plainStyle}>
                    <ReactNative.Text>Waiting for Krell to load
                        files.</ReactNative.Text>
                </ReactNative.View>
            );
        }
        return this.state.root;
    }

    componentDidMount() {
        var krell = this;
        krellUpdateRoot(function (appRoot) {
            krell.setState({root: appRoot, loaded: true});
        });
    }
}

AppRegistry.registerComponent(appName, () => KrellRoot);
