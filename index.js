const { execSync } = require('child_process');
const currentDate = new Date();

function fakeCommit(days) {
  if (days < 1) {
    execSync('git push');
    console.log('Pushed to Git');
  } else {
    const commitDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
    const dateStr = commitDate.toISOString().split('T')[0];

    execSync(`git add log.txt && git commit --date="${dateStr}" -m "Fake Commit"`);
    console.log(`Committed for ${dateStr}`);

    fakeCommit(days - 1);
  }
}

fakeCommit(365);
