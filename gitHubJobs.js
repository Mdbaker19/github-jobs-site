$(document).ready(function (){
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "_jobs_session=otnUFTFpXXrr7L%2BH9%2FfpgAdzgE7RnkL%2BRIrH9KDSsdgpywsaQeubHx59aE7StP7kD9DMFkdrnNAySqM9hLIlJGNLu9OTcBK5xam%2B%2FDn2wS32hBFUG0b9mwOFggXihY952FO9rHcdpJ9Hz3qAP0k%3D--XeccXpwa2x5uZPuJ--3sF%2Bo5FqWxHmGayESgbOgw%3D%3D");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(baseURL, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
});