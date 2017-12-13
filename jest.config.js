module.exports = {
    verbose: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx}",
        "!src/api/**"
    ],
    setupFiles: ["jest-localstorage-mock"]
};