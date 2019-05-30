keytool -genkey -keystore (name).keystore -validity 10000 -alias (name)

jarsigner -keystore （name）.keystore -verbose LunarLander.apk （name）

# sign unsigned apk with debug key
jarsigner -verbose -keystore ~/.android/debug.keystore -storepass android -keypass android app-release-unsigned.apk androiddebugkey
