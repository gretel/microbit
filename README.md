<h1 align="center">MicroBit More v2 - German Translation Fork</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.2.5-blue.svg?cacheSeconds=2592000" />
  <a href="https://gretel.github.io/microbit" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/gretel/microbit/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/gretel/microbit/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/gretel/microbit" />
  </a>
</p>
<p>
  <img alt="work with micro:bit v1 and v2" src="https://cdn.sanity.io/images/ajwvhvgo/production/17d9277789c6f781092ee9c2f6993b0457c6ce94-1454x421.png" height="48">
</p>

> Full-functional extension of micro:bit for Scratch3 with German translation support

This is an extension for [Scratch3 by MIT](https://scratch.mit.edu/). You can code using all sensors and pins on micro:bit with normal Scratch3 blocks on this app.

## ⭐ What's New in This Fork

This fork **fixes German translation support** that was already present but not working:
- 🔧 Fixed locale fallback logic: `de-DE`, `de-AT`, `de-CH`, `de_DE` → `de`
- ✅ German translations (86+ blocks) now load correctly for German-speaking users
- ✅ Kid-friendly landing page at [gretel.github.io/microbit](https://gretel.github.io/microbit)
- ✅ Pre-configured Xcratch project for easy classroom use
- ✅ All original languages (English, Japanese) still work unchanged

**Note:** The German translations already existed in the codebase but weren't loading for regional locales. This fork only fixes the loading mechanism.

**For Students:** Visit **[gretel.github.io/microbit](https://gretel.github.io/microbit)** for an easy-to-use landing page!


## What You Can Do With This Extension

Open a Scratch3-Mod application ✨ [Microbit More](https://microbit-more.github.io/) to use this extension. You can code using its extended blocks and all blocks in normal Scratch3 on this app. 

You don't need to run [Scratch Link](https://scratch.mit.edu/microbit) when your browser is Chrome, Edge or 'Web Bluetooth API' supporting browser (the browser in Chromebook, [Scrub](https://apps.apple.com/jp/app/scrub-web-browser/id1569777095) in iPadOS, like that).


## How to Use in Xcratch

### Quick Start (Recommended)
Visit **[gretel.github.io/microbit](https://gretel.github.io/microbit)** which will open Xcratch with the extension pre-loaded!

### Manual Loading
This extension can be used with other extension in [Xcratch](https://xcratch.github.io/).
1. Open [Xcratch Editor](https://xcratch.github.io/editor)
2. Click 'Add Extension' button
3. Select 'Extension Loader' extension
4. Type the module URL in the input field
```
https://gretel.github.io/microbit/dist/microbitMore.mjs
```

---

**This is a fork of [microbit-more/mbit-more-v2](https://github.com/microbit-more/mbit-more-v2)** with fixed German translation loading and an educational landing page for classroom use.