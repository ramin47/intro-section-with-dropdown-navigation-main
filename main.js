var getDiv = document.getElementById('mydiv')
var getSecondDiv = document.getElementById('mydivsecond')
var getCross = document.getElementById('cross')
var getCrossdrop = document.getElementById('crossdrop')
var getCrossdropTwo = document.getElementById('crossdroptwo')





function okay() {
    if (getDiv.style.display === 'none') {
        getDiv.style.display = 'block';
    } else {
        getDiv.style.display = 'none';
    }
    if (getSecondDiv.style.display ==='block') {
        getSecondDiv.style.display = 'none'
    } return 'ok'
}

function okaytwo() {
    if (getSecondDiv.style.display === 'none') {
        getSecondDiv.style.display = 'block';
    } else {
        getSecondDiv.style.display = 'none';
        
    }

    if(getDiv.style.display ==='block') {
        getDiv.style.display = 'none'

    } return 'ok'

    
}

function openimage() {

    getCross.style.display = 'block';
}

function closeimage() {
    getCross.style.display = 'none';
}


function opendrop() {

    if(getCrossdrop.style.display === 'none') {
        getCrossdrop.style.display = 'block';
    } else {
        getCrossdrop.style.display = 'none';
    }

}


function opendroptwo() {
    if(getCrossdropTwo.style.display === 'none') {
        getCrossdropTwo.style.display = 'block';
    } else {
        getCrossdropTwo.style.display = 'none';
    }
}




