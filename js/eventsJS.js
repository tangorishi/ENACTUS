$(document).ready(function() {
    // Event details toggle
    $(".show-details").on("click", function() {
        const eventDetails = $(this).siblings(".event-details");
        const isActive = eventDetails.hasClass("active");

        if (!isActive) {
            eventDetails.slideDown();
            eventDetails.addClass("active");
        } else {
            eventDetails.slideUp();
            eventDetails.removeClass("active");
        }
    });
});