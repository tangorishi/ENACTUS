$(document).ready(function() {
    // Event details toggle
    $(".show-details").on("click", function() {
        const eventDetails = $(this).siblings(".event-details");
        eventDetails.toggleClass("active");

        if (eventDetails.hasClass("active")) {
            eventDetails.css("height", eventDetails[0].scrollHeight + "px");
        } else {
            eventDetails.css("height", "0");
        }
    });
});