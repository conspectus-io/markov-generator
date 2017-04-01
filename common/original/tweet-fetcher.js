// You'll need a single TembooSession object in your code, eg:
var tsession = require("temboo/core/temboosession");
var session = new tsession.TembooSession("conspectus-io", "myFirstApp", "OXBoGmABaZT7r5kXTFOKDKTVlNxiKf3B");

var Twitter = require("temboo/Library/Twitter/Timelines");

var userTimelineChoreo = new Twitter.UserTimeline(session);

// Instantiate and populate the input set for the choreo
var userTimelineInputs = userTimelineChoreo.newInputSet();


// Set inputs
userTimelineInputs.set_TrimUser("true");
userTimelineInputs.set_ContributorDetails("false");
userTimelineInputs.set_ConsumerKey("U2bNemfuHMyrHPmmc8AVFerN7");
userTimelineInputs.set_ExcludeReplies("true");
userTimelineInputs.set_AccessToken("814060594110283776-YpTrCZiA9ZeVF5WccpeRymBSsDt7mue");
userTimelineInputs.set_UserId("19725644");
userTimelineInputs.set_ConsumerSecret("HrZL8k1ATMC6Oas70KjaFrgpZxs5jHtVDdZj22PkdSlgWpWXGc");
userTimelineInputs.set_IncludeRetweets("false");
userTimelineInputs.set_ScreenName("neiltyson");
userTimelineInputs.set_AccessTokenSecret("cAWQxW4pmwagS0Ss8uDO1COhtJwwWSzXyWVYiuDjmZMYU");
userTimelineInputs.set_Count("2");

// Run the choreo, specifying success and error callback handlers
userTimelineChoreo.execute(
    userTimelineInputs, function (results) {
        console.log(results.get_Response());
    }, function (error) {
        console.log(error.type); console.log(error.message);
    }
);

var runTimeline = userTimelineChoreo.execute;
console.log(runTimeline());
// function response(result) {
    
//     userTimelineChoreo.execute(
//         userTimelineInputs, function(results) {
//             resultResponse = JSON.parse(results.get_Response())[0].text;
//         }, function(error) {
//             console.log(error.type); console.log(error.message);
//         }
//     );

//     result
// };
// console.log("RESPONSE: ", response);
// console.log("RESULT RESPONSE: ", resultResponse);

// Results JSON
//UserTimelineLatestTweetResultSet {
//  getCompletionStatus: [Function],
//  getStartTime: [Function],
//  getCompletionTime: [Function],
//  getID: [Function],
//  getResult: [Function],
//  getResultString: [Function],
//  getResultList: [Function],
//  getKeySet: [Function],
//  getOutputs: [Function],
//  getLastError: [Function],
//  get_ID: [Function],
//  get_Limit: [Function],
//  get_Remaining: [Function],
//  get_Reset: [Function],
//  get_Text: [Function],
//  get_Response: [Function] }



var tweetText = '';

//console.log('userTimelineLatestTweetChoreo = ', userTimelineLatestTweetChoreo);
//console.log('userTimelineLatestTweetInputs = ', userTimelineLatestTweetInputs);


