## Local Build 

`npx expo run:android` - prebuild, build apk and install on device
`npm expo prebuild` - creat prebuild (android and ios) folders
`cd android`
`./gradlew assembleRelease` - creates APK file in `android/app/build/outputs/apk/release/app-release.apk`
`./gradlew bundleRelease` - creates AAB file in `android/app/build/outputs/bundle/release/app-release.aab`

## Cloud Build with EAS 
0. [Link](https://docs.expo.dev/develop/tools/#eas-cli)
1. Create an account in [expo.dev](https://expo.dev/)
2. Install eas cli `npm i -g eas-cli`
3. Login into eas `eas login`
4. Config project in EAS `eas build:configure`
5. Build for android `eas build --platform android` (production profile by default, aab by default)
5. Build apk `eas build --platform android --type apk`
5. Build from profile `eas build --platform android --profile preview`

## Setup Firebase Function
...
`npm i express cors json-server`
create db.json file in function directiory
