
// General data-loading function. 
// XXX: This should be replaced with something more robust or from
// whatever library we want to use. This is for proof-of-concept
// purposes only.
function getJSON(url, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200)
            callback(JSON.parse(request.responseText));
    }
    request.open("GET", url, true);
    request.send(null);
}

function getProposeProjects() {
    var url = "https://api.github.com/repos/cfpb/hackathon/issues?labels=project";
    getJSON(url, function(issues) {
        var projects_elm = document.querySelector('#project-list');
        issues.forEach(function(issue) {
            var issue_elm = document.createElement('li');
            issue_elm.innerHTML = '<a href="' + issue.html_url + '">' + issue.title + '</a>';
            projects_elm.appendChild(issue_elm);
        });
    });
}
