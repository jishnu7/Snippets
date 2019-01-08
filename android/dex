# Extracting dex out of odex
# For kitkat
adb pull /system/framework
java -jar baksmali.jar -d framework -x Contacts.odex

# for other
adb pull /system/framework/arm/boot.oat boot.oat
java -jar baksmali.jar -x -c boot.oat -d framework NAME.odex -o out

# this will create `out`

java -jar smali.jar -o classes.dex out

# Create apk
zipalign -v 4 apk.apk new_apk.apk
