GitHubActivity.feed({username: "jcowman2", selector: "#feed"});

$(document).ready(function() {

  $("#resume").hide();
  $("#feed").hide();

  $("#resumeBtn").click(function() {
    $("#feed").hide();
    $("#resume").fadeIn();
  });

  setTimeout(function() {
    console.log(githubUserNotFound);
    if (!githubUserNotFound) {
      $("#feed").fadeIn();
    }
  }, 1000);

})
