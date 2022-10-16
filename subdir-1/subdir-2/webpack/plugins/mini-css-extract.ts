import MiniCssExtractPlugin from "mini-css-extract-plugin";

const getMiniCssExtractPlugin = (version: string) => {
  return new MiniCssExtractPlugin({
    filename: `[name]/style-${version}.css`
  })
}

export default getMiniCssExtractPlugin
