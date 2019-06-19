document.addEventListener("DOMContentLoaded", function() {
    
    const rootButton = document.getElementById('main');
    rootButton.addEventListener('click', function() {
        request = axios.get('http://intro-ajax-api.herokuapp.com');
    });
    const section3456 = document.getElementById('steps3456');
    const section7 = document.getElementById('step7');
    const section8 = document.getElementById('step8');
    
    const pingPongButton = document.getElementById('ping_pong');
    pingPongButton.addEventListener('click', function() {
        request = axios.get('http://intro-ajax-api.herokuapp.com/ping')
        .then(function(resp) {
            console.log(resp.data);
            section3456.append(resp.data);
        })
        .catch(function(error) {
            console.log('Sorry for the trouble', error)
            section3456.append('I will try harder next time.')
        })
        .then(function(){
            console.log('Hey the request finished!')
        });
    });
    const sharedButton = document.getElementById('shared');
    sharedButton.addEventListener('click', function() {
        request = axios.get('http://intro-ajax-api.herokuapp.com/count', {
        params: {
            amount: 3
        }
    })
    .then(function(resp) {
        console.log("Current count is " + resp.data);
        section7.append(resp.data);
    })
})
    const requestTimeButton = document.getElementById('request_time');
    requestTimeButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/time', {params: {timezone: 'America/Mexico_City'}})
    .then(function(resp) {
        console.log(resp.data)
        section8.append(resp.data);
    })
});
const carButton = document.getElementById('car');
const carList = document.getElementById('list');
carButton.addEventListener('click', function(){
    request = axios.get('http://intro-ajax-api.herokuapp.com/a_car')
    .then(function(resp){
        const newCar = document.createElement('li');
        newCar.innerHTML = resp.data;
        carList.append(newCar);
    })
})
});