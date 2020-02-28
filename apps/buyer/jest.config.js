module.exports = {
  name: 'buyer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/buyer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
