
dependencies {
    // to add jar file
    compile files('libs/android-support-v4.jar')
    // to add all jar files.
    compile fileTree(dir: 'libs', include: '*.jar')
    // to add library from repo
    compile 'com.android.support:support-v4:13.0.0'
    // to add a project
    //compile project(':morelangs')
}



