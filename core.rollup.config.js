import base from './base.rollup.config';

export default base({
  input: './src/core/index.ts',
  outputDir: 'dist/core',
  declarationDir: 'dist/core/types'
});
