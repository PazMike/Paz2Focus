
// jQuery effects to enhance index.html
$(document).ready(function () {
  // 1️ Slide down welcome message on page load
  $("#welcome-box").slideDown(1200);

  // Fade in customization form
  $("#customizationForm").hide().fadeIn(1500);

  // 3️ Predictive search feature
  const suggestions = [
    "Family Photos",
    "Wedding Photos",
    "Graduation Photos",
    "Event Photos",
    "Portrait Sessions",
    "Couple Shoots",
    "Headshots",
    "Senior Pictures",
  ];

  // When user types in the search box
  $("#search-box").on("input", function () {
    const inputVal = $(this).val().toLowerCase();
    const filtered = suggestions.filter((s) =>
      s.toLowerCase().startsWith(inputVal)
    );

    // Display results as list items
    let suggestionHTML = "";
    filtered.forEach((s) => {
      suggestionHTML += `<li>${s}</li>`;
    });

    $("#suggestions").html(suggestionHTML);
  });

  // Allow user to click suggestion to fill input
  $("#suggestions").on("click", "li", function () {
    $("#search-box").val($(this).text());
    $("#suggestions").empty();
  });

  // 3 Bounce effect on site title when hovered
  $("h1").hover(
    function () {
      $(this).addClass("bounce");
    },
    function () {
      $(this).removeClass("bounce");
    }
  );
});
