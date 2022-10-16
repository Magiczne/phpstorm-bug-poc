import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { resolve } from 'path'

export default new ForkTsCheckerWebpackPlugin({
  typescript: {
    configFile: resolve(__dirname, '../../tsconfig.json'),
    diagnosticOptions: {
      semantic: true,
      syntactic: true
    },
    extensions: {
      vue: {
        compiler: '@vue/compiler-sfc',
        enabled: true
      }
    }
  }
})
