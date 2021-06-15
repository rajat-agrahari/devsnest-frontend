setInterval(() => {
    let d=new Date();
    hHour=d.getHours();
    mMinutes=d.getMinutes();
    sSeconds=d.getSeconds();

    hRevolution=(30*hHour + mMinutes/2);
    mRevolution=(6*mMinutes + sSeconds/10);
    sRevolution=6*sSeconds;

    document.getElementById('hours').style.transform=`rotate(${hRevolution}deg)`
    document.getElementById('minutes').style.transform=`rotate(${mRevolution}deg)`
    document.getElementById('seconds').style.transform=`rotate(${sRevolution}deg)`

}, 1000);