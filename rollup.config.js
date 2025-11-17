import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default {
    input: [
        'src/vm/extensions/block/index.js',
        'src/gui/lib/libraries/extensions/entry/index.jsx'
    ],
    output: {
        file: 'dist/microbitMore.mjs',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        multi(),
        image(),
        json(),
        resolve({
            browser: true,
            preferBuiltins: false
        }),
        commonjs(),
        nodePolyfills(),
        babel({
            babelHelpers: 'runtime',
            extensions: ['.js', '.jsx'],
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 3 versions', 'Safari >= 8', 'iOS >= 8']
                    }
                }],
                '@babel/preset-react'
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', {
                    regenerator: true,
                    useESModules: true
                }]
            ]
        })
    ]
};
