

function check() {
    var q1 = document.myform.q1.value;
    var q2 = document.myform.q2.value;
    var q3 = document.myform.q3.value;
    var q4 = document.myform.q4.value;
    var q5 = document.myform.q5.value;
    var total = 5;

    var answers = ["b", "a", "b", "d", "b"];

    var count = 0;
    for (var i = 1; i <= 5; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            count++;
        }
    }

    alert("ai obtinut " + count + " puncte");

    var result = document.getElementById('results');
    result.innerHTML = '<h3> AI cistigat <span>' + count + '</span> din <span>' + total + '</span>';
    return false;
}