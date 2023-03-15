import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  // const babelLoader = {
  //   test: /\.(js|jsx|ts|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //       plugins: [
  //         [
  //           'i18next-extract',
  //           {
  //             locales: ['en', 'ru'],
  //             keyAsDefaultValue: false,
  //             saveMissing: true,
  //             outputPath: 'public/locales/{{locale}}/{{ns}}.json',
  //           },
  //         ],
  //       ],
  //     },
  //   },
  // };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

  const typescriptloader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  return [svgLoader, typescriptloader, cssLoader, fileLoader];
}
