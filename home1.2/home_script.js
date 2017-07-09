GitHubActivity.feed({username: "jcowman2", selector: "#feed"});

$(document).ready(function() {

  $("#resume").hide();

  $("#resumeBtn").click(function() {
    $("#feed").hide();
    $("#resume").fadeIn();
  })

})
