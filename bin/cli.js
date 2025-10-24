#!/usr/bin/env node

const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Template data
const templates = {
  minimalist: {
    name: 'Minimalist Professional',
    description: 'Clean and simple design focusing on essentials',
    content: `# Hi there 👋

I'm a software developer passionate about creating elegant solutions to complex problems.

## 💼 What I Do
- Software Development
- Problem Solving
- Continuous Learning

## 📫 How to reach me
- Email: your.email@example.com
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

*"Keep it simple, but significant."*`
  },
  professional: {
    name: 'Professional Portfolio',
    description: 'Comprehensive showcase of skills and projects',
    content: `# 👨‍💻 Welcome to My Profile!

## 🚀 About Me
I'm a Full-Stack Developer with expertise in building scalable web applications.

### 🛠️ Tech Stack
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)

### 📊 GitHub Stats
![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=radical)

### 🌟 Featured Projects
- **[Project Name](https://github.com/yourusername/project)** - Project description

### 📫 Connect With Me
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourprofile)
[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white)](https://twitter.com/yourhandle)`
  },
  animated: {
    name: 'Animated & Dynamic',
    description: 'Eye-catching with animations and dynamic content',
    content: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=32&duration=2800&pause=2000&color=A9FEF7&center=true&vCenter=true&width=940&lines=Hi+%F0%9F%91%8B+I'm+Your+Name;Full+Stack+Developer+%F0%9F%92%BB;Open+Source+Enthusiast+%F0%9F%8C%9F;Always+Learning+Something+New!" alt="Typing SVG" />
</div>

## 🔥 Streak Stats
<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=tokyonight" alt="GitHub Streak" />
</p>

## 💡 What I'm Working On
🔭 Currently building amazing projects  
🌱 Learning new technologies every day  
👯 Open to collaborate on innovative ideas  

## 📈 Activity Graph
<p align="center">
  <img src="https://activity-graph.herokuapp.com/graph?username=yourusername&theme=react-dark" />
</p>`
  }
};

console.log(boxen(chalk.cyan.bold('🚀 GitHub Profile README Generator'), {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan'
}));

console.log(chalk.yellow('\nCreate an awesome GitHub profile README in minutes!\n'));

async function main() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Choose a template:',
        choices: Object.keys(templates).map(key => ({
          name: `${templates[key].name} - ${templates[key].description}`,
          value: key
        }))
      },
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your name?',
        default: 'Your Name'
      },
      {
        type: 'input',
        name: 'username',
        message: 'What\'s your GitHub username?',
        default: 'yourusername'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Your email (optional):',
        default: ''
      },
      {
        type: 'confirm',
        name: 'saveToFile',
        message: 'Save to README.md file?',
        default: true
      }
    ]);

    const spinner = ora('Generating your README...').start();
    
    // Simulate generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    let content = templates[answers.template].content;
    content = content.replace(/Your Name/g, answers.name);
    content = content.replace(/yourusername/g, answers.username);
    if (answers.email) {
      content = content.replace(/your\.email@example\.com/g, answers.email);
    }
    
    spinner.succeed(chalk.green('README generated successfully!'));
    
    if (answers.saveToFile) {
      fs.writeFileSync('README.md', content);
      console.log(boxen(chalk.green('✅ README.md file created!'), {
        padding: 1,
        borderColor: 'green'
      }));
    } else {
      console.log('\n' + chalk.cyan('='.repeat(60)));
      console.log(content);
      console.log(chalk.cyan('='.repeat(60)) + '\n');
    }
    
    console.log(chalk.yellow('\n🎉 Your awesome GitHub profile README is ready!'));
    console.log(chalk.gray('Next steps:'));
    console.log(chalk.gray('1. Copy the content to your GitHub profile repository'));
    console.log(chalk.gray('2. Customize it further to make it yours'));
    console.log(chalk.gray('3. Share your amazing profile with the world!\n'));
    
  } catch (error) {
    if (error.isTtyError) {
      console.error(chalk.red('Prompt couldn\'t be rendered in the current environment'));
    } else {
      console.error(chalk.red('Something went wrong:'), error);
    }
  }
}

main();
