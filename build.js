const { exec } = require('child_process');
const { build } = require('esbuild');
const madge = require('madge');
const glob = require('tiny-glob');
const tsConfig = require('./tsconfig.json');

const buildProject = () => {
  console.log('Typechecking 🔎');
  console.time('Typechecked in ⌛️');
  exec(`tsc --skipLibCheck --noEmit`, async (typeCheckErr) => {
    if (typeCheckErr) process.exit(1);

    console.timeEnd('Typechecked in ⌛️');
    console.log('Building 🛠');
    console.time('Built in ⌛️');

    const outDir = './dist';
    build({
      entryPoints: await glob('src/**/*.{ts,js,json}'),
      outdir: outDir,
      format: 'cjs',
      platform: 'node',
      target: 'node16',
      bundle: false,
      sourcemap: true,
      minify: true,
    })
      .then(() => {
        exec(`tsc-alias`, (tscAliasErr) => {
          if (tscAliasErr) process.exit(1);
          console.timeEnd('Built in ⌛️');
          console.log('Checking circular dependencies ♻️');
          madge(outDir, {
            tsConfig,
          }).then((madgeRes) => {
            const circularErrors = madgeRes.circular();
            if (circularErrors.length > 0) {
              console.error('Found circular dependencies ❌\n', circularErrors);
              process.exit(1);
            }
            console.log('No circular dependencies ✅');
          });
        }).stdout.pipe(process.stdout);
      })
      .catch((esbuildErr) => {
        console.error(esbuildErr);
        process.exit(1);
      });
  }).stdout.pipe(process.stdout);
};

buildProject();
