var Twitter = require('twitter-node-client').Twitter;

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": "U2bNemfuHMyrHPmmc8AVFerN7",
    "consumerSecret": "HrZL8k1ATMC6Oas70KjaFrgpZxs5jHtVDdZj22PkdSlgWpWXGc",
    "accessToken": "814060594110283776-YpTrCZiA9ZeVF5WccpeRymBSsDt7mue",
    "accessTokenSecret": "cAWQxW4pmwagS0Ss8uDO1COhtJwwWSzXyWVYiuDjmZMYU"
};

// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

var twitter = new Twitter(config);

//Example calls
// console.log(twitterUserObjectID('@neiltyson', 15));

let userTweets = (twitterHandle, tweetCount) => {
    // Ex:  { screen_name: 'neiltyson', count: '10' }
    let userObj = {
        screen_name: twitterHandle.slice(1),
        count: tweetCount
    };
    
    var initialJSON = twitter.getUserTimeline(userObj, error, success);
    var fixedResponse = initialJSON.replace(/\\'/g, "'");
    let tweetObj = JSON.parse(fixedResponse);
    // let tweetText = tweetJSON.data[0][0].text;
    return tweetObj;
};

let neilTweets = userTweets('@neiltyson', 2);

console.log("neilTweets is: ", neilTweets);

// twitter.getMentionsTimeline({ count: '10' }, error, success);

// twitter.getHomeTimeline({ count: '10' }, error, success);

// twitter.getReTweetsOfMe({ count: '10' }, error, success);

// twitter.getTweet({ id: '1111111111' }, error, success);