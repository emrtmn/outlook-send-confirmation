// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)", // tüm dosyalar için geçerli
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://outlook.office.com https://outlook.office365.com;"
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL"
          }
        ]
      }
    ];
  }
};
