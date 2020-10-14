# Demo

![](FitCo1.gif)  ![](FitCo2.gif)

# About
Platform for fitness instructors, coaches, and health experts to expand their social presence. FitCo comes with two types of user experiences, one for the coach and one for the student. Users are able to swipe and filter for coaches to follow. Live stream feature only available for coaches.


## You can deploy using Xcode Emulator: 
react-native run-ios

## Pre-Setup: 
1. Setup Backend!
2. Use the updated API from localTunnel
3. Update containers: BroadCastScreen and LiveVideoScreen with new MUX links. (in progress) 

## Install the application on iphone:
1. Open Xcode. Project path: FitCo/FitCoApp/ios/FitCoApp.xcodeproj
2. Connect iphone using USB. Change deploy device to iphone
3. Run / install application 
4. Settings/General/Device Management/Developer app 
   APPROVE THIS APP DEVELOPER 
5. Application should be clickable at this point.
    Background the debugger will be loading the application on Mac. 

NOTE: Only deploy to phone with the project FitCoApp.xcworkspace
    expect build errors when deploying with FitCoApp,xcodeproj
