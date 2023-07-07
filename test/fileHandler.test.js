const fs = require('fs');
const { writeToFile } = require('../lib/fileHandler');
const mockFs = require('mock-fs');

describe('fileHandler', () => {
  describe('writeToFile', () => {
    beforeEach(() => {
      // Mock the file system
      mockFs();
    });

    afterEach(() => {
      // Restore the file system
      mockFs.restore();
    });

    it('should create a new SVG file with the correct content', () => {
      const filename = 'test.svg';
      const data = '<svg></svg>';

      writeToFile(filename, data);

      const fileContent = fs.readFileSync(`examples/${filename}`, 'utf-8');
      expect(fileContent).toEqual(data);
    });
  });
});