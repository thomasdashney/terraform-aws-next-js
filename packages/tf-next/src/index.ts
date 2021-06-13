import yargs from 'yargs';

yargs.command(
  'build',
  'Build the next.js project',
  (yargs_) => {
    return yargs_
      .option('skipDownload', {
        type: 'boolean',
        description: 'Runs the build in the current working directory',
      })
      .option('skipInstall', {
        type: 'boolean',
        description: 'Skip npm/yarn install step',
      })
      .option('verbose', {
        type: 'boolean',
        description: 'Run with verbose logging',
      });
  },
  async ({ skipDownload, skipInstall, verbose }) => {
    const cwd = process.cwd();

    (await import('./commands/build')).default({
      skipDownload,
      skipInstall,
      logLevel: verbose ? 'verbose' : 'none',
      cwd,
    });
  }
).argv;
