module.exports = {
    module: {
      rules: [
        {
          test: /\.(txt)$/i,
          loader: 'file-loader'          
        },
      ],
    },
  };