function Form(category, tournament, team, email, contact, fee) {
    this.category = category;
    this.tournament = tournament;
    this.teamName = team;
    this.email = email;
    this.contact = contact;
    this.fee = fee;
};
Form.prototype.registry = function () {
    return this.category + "||" + this.tournament + "||" + this.teamName + "||" + this.email + "||" + this.contact + "||" + this.fee
}
$(document).ready(function () {
    $(".popup").hide();
    $("button#popup-football").click(function (event) {
        event.preventDefault();
        $(".popup").css("display", "block");
        $(".game-type").append("FOOTBALL");
    });
    $("button#popup-basketball").click(function (event) {
        event.preventDefault();
        $(".popup").css("display", "block");
        $(".game-type").append("BASKETBALL");
    });
    $("button#popup-rugbyball").click(function (event) {
        event.preventDefault();
        $(".popup").css("display", "block");
        $(".game-type").append("RUGBYBALL");
    })
    $("button#popup-tennisball").click(function (event) {
        event.preventDefault();
        $(".popup").css("display", "block");
        $(".game-type").append("TENNISBALL");
    })
    $("button#popup-baseball").click(function (event) {
        event.preventDefault();
        $(".popup").css("display", "block");
        $(".game-type").append("BASEBALL");
    })
    $("#close-icon").click(function () {
        location.href = "register.html";
    })
    $(".form").submit(function (event) {
        event.preventDefault()
        var inputtedSelectcategory = $("select#category").val();
        var inputtedTournament = $("select#tournament").val();
        var inputeddTeamname = $("input#team-name").val();
        var inputtedEmail = $("input#email").val();
        var inputtedContacts = $("input#contacts").val();
        var inputtedFee = $("input#fee").val();
        var newForm = new Form(inputtedSelectcategory, inputtedTournament, inputeddTeamname, inputtedEmail, inputtedContacts, inputtedFee);
        $(".ticket-team-name").append("<li>" + newForm.registry() + "</li")
    });
});