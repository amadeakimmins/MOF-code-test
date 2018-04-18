angular
  .module('InstagramApp')
  .controller('InstagramCtrl', InstagramCtrl);

InstagramCtrl.$inject = [ '$http', '$scope', '$log' ];

function InstagramCtrl($http, $scope, $log) {
  const vm = this;
  vm.all = [];

  $http
    .get('https://api.instagram.com/v1/users/self/media/recent?access_token=259554385.92b06f1.74d47492b51848fab097689fc0529827&count=10')
    .then((res) => {
      vm.all = res.data.data;
      // console.log(res);
    });

    // CHANGING THE IMAGE
    $scope.NextImage = function(post){
      // $log.log('You have clicked');
      // post.images.standard_resolution.url="{{ res.data.data[3].images.standard_resolution.url }}";
      post.images.standard_resolution.url="https://scontent.cdninstagram.com/vp/3582bff0388491f32b0b59f50f10ef38/5B703913/t51.2885-15/sh0.08/e35/p640x640/22709155_134653940520505_3033939862530031616_n.jpg";
      // post.caption.test="Woahhh look at that sky";
    };
}
