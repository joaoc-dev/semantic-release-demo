module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer', // checks commit messages
    '@semantic-release/release-notes-generator', // creates changelog content
    '@semantic-release/changelog', // writes changelog to file
    '@semantic-release/git', // commits changelog + package.json
    '@semantic-release/github', // creates GitHub release
  ],
};
