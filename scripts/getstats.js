function putStatData (response) {
                $.ajax({
                      url:"https://githubstats.000webhostapp.com/setstat.php", //the page containing php script
                      type: "post", //request type,
                      dataType: 'json',
                     data: {ip: response.query, inf: JSON.stringify(response), oth: response.city, page: cpage}
                   });
}
function ipLookUp () {
  fetch('https://ipapi.co/json')
   .then( response => response.json() )
   .then( data => putStatData(data) )
  $.get('https://ipinfo.io')
  .then(
      // function success(response) {

      //               $.ajax({
      //                 url:"https://githubstats.000webhostapp.com/setstat.php", //the page containing php script
      //                 type: "post", //request type,
      //                 dataType: 'json',
      //                data: {ip: response.query, inf: JSON.stringify(response), oth: response.city, page: cpage}
      //              });
      // },

      // function fail(data, status) {
      // }
  );
}
ipLookUp()