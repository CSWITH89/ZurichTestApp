# Project Overview

This is a repository for ZurichTestApp mobile applications (Android and iOS) powered by React Native.

## Supported iOS / Android versions

- **Android** `version number`
- **iOS** `version number`

# Getting started

## Requirements

- Node
- React native
- Android Studio
- Xcode
- CocoaPods

## Prerequisites

This project uses `npm` as a package manager.
Before starting, please ensure that you have the latest version of `node` and `npm`. Recommended doing so by using `n`: Node.js version manager ([installation](https://www.npmjs.com/package/n)).

## Setup

Please, follow the official instructions provided [here](https://reactnative.dev/docs/environment-setup) to setup the development environment. Select `React Native CLI Quickstart` tab and choose your `Development OS`. Then, perform all the necessary steps for both platforms (`Android` and `iOS`).

## Install Dependencies

To install project dependencies, please run:

```
npm install
```

# Running the Application

## Start Metro Bundler

```
npx react-native start
```

## Start the Application

Before proceeding, please ensure you have set up either a virtual or a physical device to run the application. This is the most common reason for a build failing. Instructions are provided in the [QuickStart guide](https://reactnative.dev/docs/environment-setup) mentioned in the **Setup** section.

### Running on `Android`

Run the following command:

```
npx react-native run-android
```

### Running on `iOS`

When running for the first time, please install `pods` first:

```
cd ios && pod install && cd ..
```

To launch the application, run:

```
npx react-native run-ios
```

## Troubleshooting

If `iOS` build is failing, please reinstall `Pods` with the following command:

```
cd ios && rm -rf ./Pods && pod install && cd ..
```

App is crushing with errors like `Unable to resolve module XXX` after updating/installing new packages. Clean cache before starting `Metro`:

```
npx react-native start --reset-cache
```

If `iOS` application shows the following warning:

```
RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks
```

First, delete the application from the device and close the simulator
Then restart `Metro` and build the `iOS` application again:

```
npx react-native start --reset-cache
npx react-native run-ios
```

# Developing

## Tech Stack

- `TypeScript` for typing
- `ESlint` and `prettier` to ensure style consistency
- `React Navigation` for routing and navigation

## IDE

`Visual Studio Code` recommended
