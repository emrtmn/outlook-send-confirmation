module.exports = {
  async headers() {
    return [
      {
        source: "/manifest.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/xml; charset=utf-8"
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*"
          }
        ]
      }
    ];
  }
}
