
function get (url, data, message) {
      //get请求
  axios.get(url, {
    params: {
        data
        }
    })
    .then(function (res) {
        //message
    })
    .catch(function (error) {
        //message
    });
  }
  function post (url, data, message) {
    //get请求
    axios.post(url, {
    params: {
        data
        }
    })
    .then(function (res) {
        //message
    })
    .catch(function (error) {
        //message
    });
}
