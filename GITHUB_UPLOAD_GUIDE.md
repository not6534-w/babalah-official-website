# GitHub Upload Guide

## 1. Create a new repository on GitHub

Recommended repository name:

```bash
babalah-grand-reveal-web
```

Do not initialize with README if this project already has one.

---

## 2. Open terminal in the project folder

Example:

```bash
cd "C:\Users\namna\BabalahGrandReveal-Web"
```

---

## 3. Initialize Git

```bash
git init
git add .
git commit -m "Initial Babalah brand website"
git branch -M main
```

---

## 4. Connect GitHub remote

Replace `YOUR_USERNAME` with your GitHub username.

```bash
git remote add origin https://github.com/YOUR_USERNAME/babalah-grand-reveal-web.git
git push -u origin main
```

---

## 5. Future update flow

Whenever you edit files:

```bash
git status
git add .
git commit -m "Update Babalah website"
git push
```

---

## Optional: if remote already exists

```bash
git remote set-url origin https://github.com/YOUR_USERNAME/babalah-grand-reveal-web.git
git push -u origin main
```
