module.exports = {
  name: 'maths',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/maths',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
