import "whatwg-fetch";
//es6 file
class HttpService {
  getProducts(){
    fetch("http://localhost/product")
    .then(function(res) {
      console.log(res.json());
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
}

export default HttpService;

// fetch('/users.json')
//   .then(function(response) {
//     return response.json()
//   }).then(function(json) {
//     console.log('parsed json', json)
//   }).catch(function(ex) {
//     console.log('parsing failed', ex)
//   })
