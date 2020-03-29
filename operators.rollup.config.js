import base from './base.rollup.config';

export default base({
  input: './src/operators/index.ts',
  outputDir: 'dist/operators',
  declarationDir: 'dist/operators/types'
});
