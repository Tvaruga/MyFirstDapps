/**
 * Created by Иван on 18.11.2017.
 */
$(document).ready(function() {
    $('#accounts').click(function(e2) {
        var $myInfureToken = 'duwNbB4ONSCoDfJxf5jn';
        var request = new XMLHttpRequest();

        request.open('POST', 'https://ropsten.infura.io/'+$myInfureToken);

        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('Accept', 'application/json');

        request.onreadystatechange = function () {
            if (this.readyState === 4) {
                //console.log('Status:', this.status);
                //console.log('Headers:', this.getAllResponseHeaders());
                console.log('Body:', this.responseText);
            }
        };

        var body = {
            'jsonrpc': '2.0',
            'id': 1,
            'method': 'eth_accounts',
            'params': []
        };

        request.send(JSON.stringify(body));

    });

});