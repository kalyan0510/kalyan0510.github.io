function getStatData (response) {
                $.ajax({
                      url:"https://l1az6ozvxa.execute-api.us-east-1.amazonaws.com/alpha/helloworld", //the page containing php script
                      type: "post", //request type,
                      dataType: 'json',
                      contentType: "application/json",
                      // headers: {'ip': ip, 'page':cpage},
                     data: JSON.stringify({ip: response.ip, jsondata: JSON.stringify(response), city: response.city, page: cpage, region:response.region, org:response.org})
                   });
}
function ipLookUp () {
  fetch('https://ipapi.co/json')
   .then( response => response.json() )
   .then( data => getStatData(data) )
  // $.get('https://ipinfo.io')
  // .then(
  //     // function success(response) {

  //     //               $.ajax({
  //     //                 url:"https://githubstats.000webhostapp.com/setstat.php", //the page containing php script
  //     //                 type: "post", //request type,
  //     //                 dataType: 'json',
  //     //                data: {ip: response.query, inf: JSON.stringify(response), oth: response.city, page: cpage}
  //     //              });
  //     // },

  //     // function fail(data, status) {
  //     // }
  // );
}
ipLookUp()
