---
description: How to deploy the 3D Portfolio to GitHub Pages
---

1. Create a new repository on GitHub named `3d-portfolio`.
2. Run the following commands:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/3d-portfolio.git
   npm run deploy
   ```
3. If your repository name is DIFFERENT from `3d-portfolio`, update `vite.config.js` `base` property to match `/your-repo-name/`.
