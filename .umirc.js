
// ref: https://umijs.org/config/
export default {
  chainWebpack(config, { webpack }) {
    // 设置 alias
    console.log('config',config);
    console.log('webpack',webpack);
    // config.resolve.alias.set('a', 'path/to/a');
    
    // 删除进度条插件
    // config.plugins.delete('progress');
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'iatk',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: false,
    }],
  ],
}
