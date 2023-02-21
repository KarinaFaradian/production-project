import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoders';
import { buildResolver } from './buildResolvers';
import { buildDevSerder } from './buildDevServer';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolver(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevSerder(options) : undefined,
  };
}
