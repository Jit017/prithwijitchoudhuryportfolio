#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const figlet = require('figlet');
const gradient = require('gradient-string');
const open = require('open');

// ASCII Art
console.log(
  gradient.pastel.multiline(
    figlet.textSync('Prithwijit', { horizontalLayout: 'full' })
  )
);

// Info box
const info = boxen(
  chalk.bold('Prithwijit Choudhury (PC)') + '\n\n' +
  chalk.cyan('Full Stack Developer') + '\n\n' +
  chalk.white('GitHub: ') + chalk.cyan('https://github.com/Jit017') + '\n' +
  chalk.white('LinkedIn: ') + chalk.cyan('https://linkedin.com/in/prithwijit-choudhury-7a299b273') + '\n' +
  chalk.white('Twitter: ') + chalk.cyan('https://twitter.com/Prithwijit8') + '\n' +
  chalk.white('Email: ') + chalk.cyan('prithu.pri789@gmail.com') + '\n\n' +
  chalk.yellow('Projects:') + '\n' +
  chalk.cyan('• DSALearningPlanner - ') + chalk.white('https://dsalearningplanner.vercel.app') + '\n' +
  chalk.cyan('• RealTimePR - ') + chalk.white('https://realtime-pr.vercel.app') + '\n' +
  chalk.cyan('• LinkShrink - ') + chalk.white('https://linkshrink.vercel.app') + '\n' +
  chalk.cyan('• YT Video to Blog Maker - ') + chalk.white('https://ytvideotoblogmaker.vercel.app') + '\n' +
  chalk.cyan('• MediSync - ') + chalk.white('https://medisync.vercel.app') + '\n' +
  chalk.cyan('• VideoSummarizer - ') + chalk.white('https://videosummarizer.vercel.app'),
  {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    backgroundColor: '#000000'
  }
);

console.log(info);

// Interactive menu
console.log('\n' + chalk.yellow('What would you like to do?'));
console.log(chalk.cyan('1.') + ' Open Portfolio Website');
console.log(chalk.cyan('2.') + ' Open GitHub Profile');
console.log(chalk.cyan('3.') + ' Open LinkedIn Profile');
console.log(chalk.cyan('4.') + ' Open Twitter Profile');
console.log(chalk.cyan('5.') + ' Send Email');
console.log(chalk.cyan('6.') + ' Exit');

// Handle user input
process.stdin.once('data', (data) => {
  const choice = data.toString().trim();
  
  switch(choice) {
    case '1':
      open('https://prithwijit.tech');
      break;
    case '2':
      open('https://github.com/Jit017');
      break;
    case '3':
      open('https://linkedin.com/in/prithwijit-choudhury-7a299b273');
      break;
    case '4':
      open('https://twitter.com/Prithwijit8');
      break;
    case '5':
      open('mailto:prithu.pri789@gmail.com');
      break;
    case '6':
      process.exit(0);
      break;
    default:
      console.log(chalk.red('Invalid choice!'));
      process.exit(1);
  }
}); 