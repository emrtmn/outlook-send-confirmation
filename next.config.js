const nextConfig = {
  async headers() {
    return [
      {
        source: "/manifest.xml",
        headers: [
          {
            key: "Content-Type",
            value: "application/xml"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
