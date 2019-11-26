import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import Store from '../src/store';

// These scss imports are in this location because there is a bug
// where loading styles sometimes breaks routes.
// https://github.com/zeit/next-plugins/issues/282
import '../src/components/head/head.scss';

export default class FoodHow extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
          <Provider store={Store}>
            <Component {...pageProps} />
          </Provider>
        );
    }
}
