/**
 * Created by Иван on 18.11.2017.
 */
$(document).ready(function() {
    $('#sended').click(function(e2) {

        var $myInusreToken = 'duwNbB4ONSCoDfJxf5jn';

        var request = new XMLHttpRequest();

        request.open('POST', 'https://ropsten.infura.io/'+$myInusreToken);

        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                console.log('Status:', this.status);
                console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            }
        };

        var body = {
            'jsonrpc': '2.0',
            'id': -29846618,
            'method': 'eth_getBalance',
            'params': ["0x278fDeDC9f2FA45baC875BaA770DC55202c2C091", "latest"]
        };

        request.send(JSON.stringify(body));

    });

});