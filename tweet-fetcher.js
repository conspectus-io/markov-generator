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
userTimelineInputs.set_Count("25");

// Run the choreo, specifying success and error callback handlers
userTimelineChoreo.execute(
    userTimelineInputs,
    function(results) {
        console.log('#########        result Object:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results);
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_Result:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.getResult());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########     get_ResultString:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.getResultString());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_ResultList:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.getResultList());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_Outputs:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.getOutputs());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_Response:       ########## ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.get_Response());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_Limit:       ############# ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.get_Limit());
        //        function keysetVar(output) { return results.getKeySet; };
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log('#########        get_Remaining:       ############# ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
        console.log(results.get_Remaining());
        console.log('                                               ');
        console.log('-----------------------------------------------');
        console.log('                                               ');
    },
    function(error) { console.log(error.type); console.log(error.message); }
);

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


