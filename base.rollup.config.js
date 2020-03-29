import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';

const extensions = [
  '.js',
  '.ts'
];

process.env.BABEL_ENV = 'production';

export default ({
  input,
  outputDir,
  declarationDir,
}) => ({
  input,
  output: [
    {
      dir: outputDir,
      format: 'es',
    },
  ],
  plugins: [
    resolve({ extensions }),
    // common js 형태의 패키지를 불러와 사용할 수 있도록 해줌
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      extensions,
      include: ['src/**/*'],
      runtimeHelpers: true,
    }),
    typescript({
      declarationDir,
    }),
  ],
});
