# 📦 GitHub Profile README Generator - Package Guide

## Overview

This package provides a CLI tool to quickly generate awesome GitHub profile READMEs using pre-built templates.

## Installation

### Option 1: Install from GitHub Packages

```bash
npm install @snakeeye-sudo/create-github-profile
```

### Option 2: Use with npx (No installation required)

```bash
npx @snakeeye-sudo/create-github-profile
```

## Usage

### Interactive CLI

Run the CLI tool:

```bash
npx @snakeeye-sudo/create-github-profile
```

The tool will guide you through:

1. **Template Selection**: Choose from 3 professionally designed templates
   - Minimalist Professional
   - Professional Portfolio
   - Animated & Dynamic

2. **Personalization**: Enter your details
   - Your name
   - GitHub username
   - Email (optional)

3. **Output**: Generate README.md file or view in terminal

### Example Session

```
🚀 GitHub Profile README Generator

Create an awesome GitHub profile README in minutes!

? Choose a template: Professional Portfolio - Comprehensive showcase of skills and projects
? What's your name? John Doe
? What's your GitHub username? johndoe
? Your email (optional): john@example.com
? Save to README.md file? Yes

✅ README.md file created!

🎉 Your awesome GitHub profile README is ready!
```

## Templates

### 1. Minimalist Professional
Clean and simple design focusing on essentials. Perfect for those who prefer a straightforward approach.

### 2. Professional Portfolio
Comprehensive showcase with:
- Tech stack badges
- GitHub statistics
- Featured projects
- Social media links

### 3. Animated & Dynamic
Eye-catching profile with:
- Typing animations
- GitHub streak stats
- Activity graphs
- Dynamic content

## Local Development

### Setup

```bash
# Clone the repository
git clone https://github.com/SnakeEye-sudo/awesome-profile-readme-templates.git
cd awesome-profile-readme-templates

# Install dependencies
npm install

# Test the CLI locally
node bin/cli.js
```

### Making the CLI Executable

```bash
# Make the file executable
chmod +x bin/cli.js

# Link it globally for testing
npm link

# Now you can run it anywhere
create-github-profile
```

## Publishing

The package is automatically published to GitHub Packages when a new version tag is created:

```bash
# Update version in package.json
npm version patch  # or minor, or major

# Push the tag
git push --tags
```

The GitHub Actions workflow will automatically build and publish the package.

## Configuration

### Authenticating with GitHub Packages

To install packages from GitHub Packages, you need to authenticate:

1. Create a Personal Access Token (PAT) with `read:packages` scope
2. Create/edit `~/.npmrc`:

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
@snakeeye-sudo:registry=https://npm.pkg.github.com
```

## Features

- ✨ Interactive CLI with beautiful prompts
- 🎨 3 professionally designed templates
- ⚡ Quick generation (< 2 seconds)
- 💾 Auto-save to README.md
- 🌈 Colorful terminal output
- 🔧 Easy customization

## Dependencies

- `inquirer` - Interactive command-line prompts
- `chalk` - Terminal string styling
- `ora` - Elegant terminal spinners
- `boxen` - Create boxes in terminal

## Troubleshooting

### Package not found

Make sure you're authenticated with GitHub Packages and have access to the repository.

### Permission denied

If you get a permission error when running the CLI:

```bash
chmod +x bin/cli.js
```

### Module not found

Ensure all dependencies are installed:

```bash
npm install
```

## Contributing

Contributions are welcome! Feel free to:

- Add new templates
- Improve existing templates
- Fix bugs
- Enhance documentation

## License

MIT License - See LICENSE file for details

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the main README.md

---

Created with ❤️ by SnakeEye-sudo
