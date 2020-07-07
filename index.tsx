import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './main';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

export const Demo = () => (
    <>
        This is placeholder for demo of component library
        <Header />
    </>
);

const bootstrap = () => {
    // @ts-ignore
    ReactDOM.render(<Demo />, document.getElementById('root'));
};

bootstrap();
