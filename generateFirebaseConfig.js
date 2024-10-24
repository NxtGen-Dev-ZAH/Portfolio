const fs = require('fs');

const isDev = process.env.NODE_ENV === 'development';

const firebaseConfig = {
    hosting: {
        public: "out",
        ignore: ["firebase.json", "**/.*", "**/node_modules/**"],
        cleanUrls: true,
        rewrites: [
            {
                source: "/api/:path*",
                destination: isDev
                    ? "http://127.0.0.1:8000/api/:path*"
                    : "/api/"
            },
            {
                source: "/docs",
                destination: isDev
                    ? "http://127.0.0.1:8000/docs"
                    : "/api/docs"
            },
            {
                source: "/openapi.json",
                destination: isDev
                    ? "http://127.0.0.1:8000/openapi.json"
                    : "/api/openapi.json"
            }
        ]
    }
};

fs.writeFileSync('firebase.json', JSON.stringify(firebaseConfig, null, 2));
console.log('Firebase configuration generated successfully.');
