# Strudel – Brewing Sounds & Patterns

Welcome to my little corner of Strudel.

This repository is a growing collection of musical experiments, evolving compositions, sample loops, rhythmic explorations and whatever else happens to emerge along the way.

Some things start with a simple beat, others turn into elaborate arrangements, and occasionally an experiment develops a life of its own.

There's no particular formula here. Just me messing around with Strudel, exploring sounds, combining patterns, breaking things, and seeing what grows out of it.

---

### New to Strudel?

If you've somehow ended up here without knowing what Strudel is, here's the short version:

[Strudel](https://strudel.cc/) is a browser-based live coding environment for making music. Instead of arranging notes and samples manually, you write code to create rhythms, melodies, effects and entire musical compositions in real time.

Think of it as programming your own music. No traditional instruments required, just a little curiosity and a willingness to experiment.

**Want to give it a try?**

- **[Strudel REPL](https://strudel.cc/)** – Jump straight into the browser-based music playground. Nothing to install.
- **[Getting Started](https://strudel.cc/workshop/getting-started/)** – A beginner-friendly introduction to making your first sounds.
- **[Documentation](https://strudel.cc/learn/)** – Explore patterns, samples, synths, effects and everything in between.

### Installing Strudel

There are two ways to get Strudel running locally, depending on how far down the rabbit hole you want to go.

#### 1. Easy mode – Install as a web app

You don't actually need to install anything to use Strudel. However, you can install it as a standalone browser application.

1. Open [strudel.cc](https://strudel.cc/) in Chrome or another Chromium-based browser.
2. Look for the install icon on the right side of the address bar.
3. Click it and follow the installation prompt.

That's it! Strudel now has its own application window and icon, without needing to keep a browser tab open.

#### 2. Advanced mode – Run Strudel locally with Node.js

Want the full experience? You can download the Strudel source code, install its dependencies and run your own local development instance.

This requires a few additional tools:

**Prerequisites**

- [Node.js](https://nodejs.org/) – JavaScript runtime. Install the current LTS version.
- [Git](https://git-scm.com/downloads) – Required to clone the source repository.
- [pnpm](https://pnpm.io/installation) – Package manager used by Strudel.

**Step 1 – Verify your installations**

Open PowerShell or your preferred terminal and check that everything is installed:

```powershell
node -v
npm -v
git --version
```

**Step 2 – Install pnpm**

If pnpm isn't already installed, install it through npm:

```powershell
npm install -g pnpm
```

Verify the installation:

```powershell
pnpm -v
```

**Step 3 – Clone the Strudel repository**

Strudel's source code is maintained on Codeberg.

```powershell
git clone https://codeberg.org/uzu/strudel.git
```

Navigate into the newly downloaded directory:

```powershell
cd strudel
```

**Step 4 – Install dependencies**

Let pnpm download and install everything Strudel needs:

```powershell
pnpm install
```

This may take a little while, depending on your connection and system.

**Step 5 – Start the development server**

Once everything is installed, fire it up:

```powershell
pnpm dev
```

The terminal will display a local address. Open that address in your browser to access your own locally running Strudel instance.

Usually this will be:

`http://localhost:5173/`

**That's it! You're running Strudel locally.**

Keep the terminal window open while using the development server. Closing it or pressing `CTRL + C` will stop the server.

**Updating your local installation**

If you want to pull the latest changes from the Strudel source repository:

```powershell
git pull
pnpm install
pnpm dev
```

For further development information, check the [official Strudel source repository](https://codeberg.org/uzu/strudel).

---

### What's cooking?

- **Evolving Melodies** – Longer-running projects, gradual builds, melodic experiments and compositions that develop over time.
- **Sample Loops** – Collections of loops, rhythmic ideas and sample-based experiments, ranging from conventional EDM to more experimental territory.
- **Experiments** – Unfinished ideas, unusual combinations, advanced patterns and things that may or may not work as intended.

### A work in progress

This repository is continuously evolving. Some projects are polished, others are rough sketches, and some are simply snapshots of an idea worth keeping around.

Expect additions, revisions, variations and the occasional questionable musical decision.

Feel free to explore, experiment, borrow ideas and make some noise of your own.

---
.
