import webpack from 'webpack';
import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoders';
import { buildResolver } from './buildResolvers';

export function BuildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options;
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
      rules: buildLoaders(),
    },
    resolve: buildResolver(),
  };
}
