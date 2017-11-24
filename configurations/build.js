/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

console.log('Generating production bundle');

webpack(webpackConfig).run((err, stats) => {
    if(err){
        console.log(err);
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErrors){
        return jsonStats.errors.map(error => console.log(error));
    }

    if(jsonStats.hasWarnings){
        console.log('Webpack warnings');
        jsonStats.warnings.map(warning => console.log(warning));
    }

    console.log(`Webpack stats: ${stats}`);

    console.log('Finished building in production mode. ==> /dist');

    return 0;

});