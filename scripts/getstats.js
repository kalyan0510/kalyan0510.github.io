function getStatData (response) {
                $.ajax({
                      url:"https://l1az6ozvxa.execute-api.us-east-1.amazonaws.com/alpha/helloworld", //the page containing php script
                      type: "post", //request type,
                      dataType: 'json',
                      contentType: "application/json",
                     data: JSON.stringify({ip: response.ip, jsondata: JSON.stringify(response), city: response.city, page: cpage, region:response.region, org:response.org})
                   });
}
function ipLookUp () {
  fetch('https://ipapi.co/json')
   .then( response => response.json() )
   .then( data => getStatData(data) )
}
ipLookUp()
