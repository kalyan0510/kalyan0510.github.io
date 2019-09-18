
function ipLookUp () {
  $.ajax('http://ip-api.com/json')
  .then(
      function success(response) {

                    $.ajax({
                      url:"https://githubstats.000webhostapp.com/setstat.php", //the page containing php script
                      type: "post", //request type,
                      dataType: 'json',
                     data: {ip: response.query, inf: JSON.stringify(response), oth: response.city, page: cpage}
                   });
          console.log('User\'s Location Data is ', cpage);
          // console.log('User\'s Country', response.country);
      },

      function fail(data, status) {
          // console.log('Request failed.  Returned status of',            status);
      }
  );
}
ipLookUp()