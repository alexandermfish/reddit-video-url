let url = 'https://www.reddit.com/r/cosplay/comments/aavwhx/self_styled_my_front_lace_wig_for_my_daenerys.json';
var name

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out[0].data.children[0].data.media.reddit_video.fallback_url);
  vidURL = out[0].data.children[0].data.media.reddit_video.fallback_url
  console.log(name)

})
.catch(err => { throw err });


