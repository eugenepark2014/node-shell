module.exports = function() {
  console.log(`current directory: ${process.cwd()}`);
  process.stdout.write("prompt > ");
};
