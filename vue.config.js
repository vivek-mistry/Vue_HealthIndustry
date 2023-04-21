module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:8000ß/',
          ws: true,
          changeOrigin: true
        },
      },
      headers:{"Access-Control-Allow-Origin": "*"} 
    }
  }