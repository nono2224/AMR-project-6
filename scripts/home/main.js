$(".header-button").on("click", header_open_close);
$(".header-home-button").on("click", go_home);
$(".app-one").on("click", go_page_one);
$(".app-two").on("click", go_page_two);
$(".app-three").on("click", go_page_three);
$(".app-four").on("click", go_page_four);
$(".app-five").on("click", go_page_five);
$(".header-content-home").on("click", go_home);
$(".header-content-page-one").on("click", go_page_one);
$(".header-content-page-two").on("click", go_page_two);
$(".header-content-page-three").on("click", go_page_three);
$(".header-content-page-four").on("click", go_page_four);
$(".header-content-page-five").on("click", go_page_five);
$(".header-dark-mode-button").on("click", dark_mode_change);
$(window).keydown(function(e) {
    if (e.keyCode == 27) {
        if (header_open_close_check == 1) {
            $("header").css("left", "calc(50px - 100vw)");
            $(".header-content").css("opacity", "0");
            $(".header-button-content-border-one").css("opacity", "1");
            $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%)");
            $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%)");
            $(".header-button-content-border-three").css("opacity", "1");
            header_open_close_check = 0;
        }
    }
});

var header_open_close_check = 0;
var dark_mode_check = 0;

function start_scroll_timer() {
    var timer_start_scroll_timer = setInterval(start_scroll, 3500);

    function start_scroll() {
        $(".home").css("overflow-y", "scroll");
        clearInterval(timer_start_scroll_timer);
    }
}

function header_open_close() {
    if (header_open_close_check == 0) {
        $("header").css("left", "calc(40vw - 100vw)");
        $(".header-content").css("opacity", "1");
        $(".header-button-content-border-one").css("opacity", "0");
        $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%) rotateZ(45deg)");
        $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%) rotateZ(-45deg)");
        $(".header-button-content-border-three").css("opacity", "0");
        header_open_close_check = 1;
    } else {
        $("header").css("left", "calc(50px - 100vw)");
        $(".header-content").css("opacity", "0");
        $(".header-button-content-border-one").css("opacity", "1");
        $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%)");
        $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%)");
        $(".header-button-content-border-three").css("opacity", "1");
        header_open_close_check = 0;
    }
}

function page_transition_header_cover() {
    $("header").css("left", "calc(50px - 100vw)");
    $(".header-content").css("opacity", "0");
    $(".header-button").css("opacity", "0");
    $(".header-home-button").css("opacity", "0");
    $(".header-dark-mode-button").css("opacity", "0");
    $(".header-button-content-border-one").css("opacity", "1");
    $(".header-button-content-border-two-one").css("transform", "translate(-50%,-50%)");
    $(".header-button-content-border-two-two").css("transform", "translate(-50%,-50%)");
    $(".header-button-content-border-three").css("opacity", "1");
    header_open_close_check = 0;
    $("header").css("width", "200%");
    var timer_page_transition_header_cover = setInterval(page_transition_header_cover_close, 1000);

    function page_transition_header_cover_close() {
        $("header").css("width", "100%");
        $(".header-button").css("opacity", "1");
        $(".header-home-button").css("opacity", "1");
        $(".header-dark-mode-button").css("opacity", "1");
        clearInterval(timer_page_transition_header_cover);
    }
}

function all_clear() {
    $(".home").css("width", "0");
    $(".home").css("height", "0");
    $(".home").css("opacity", "0");
    $(".page-one").css("width", "0");
    $(".page-one").css("height", "0");
    $(".page-one").css("opacity", "0");
    $(".page-two").css("width", "0");
    $(".page-two").css("height", "0");
    $(".page-two").css("opacity", "0");
    $(".page-three").css("width", "0");
    $(".page-three").css("height", "0");
    $(".page-three").css("opacity", "0");
    $(".page-four").css("width", "0");
    $(".page-four").css("height", "0");
    $(".page-four").css("opacity", "0");
    $(".page-five").css("width", "0");
    $(".page-five").css("height", "0");
    $(".page-five").css("opacity", "0");
}

function go_home() {
    page_transition_header_cover();
    var timer_go_home = setInterval(go_home_page_change, 750);

    function go_home_page_change() {
        all_clear();
        $(".home").css("width", "100%");
        $(".home").css("height", "100%");
        $(".home").css("opacity", "1");
        clearInterval(timer_go_home);
    }
}

function go_page_one() {
    page_transition_header_cover();
    var timer_go_page_one = setInterval(go_page_one_page_change, 750);

    function go_page_one_page_change() {
        all_clear();
        $(".page-one").css("width", "100%");
        $(".page-one").css("height", "100%");
        $(".page-one").css("opacity", "1");
        clearInterval(timer_go_page_one);
    }
}

function go_page_two() {
    page_transition_header_cover();
    var timer_go_page_two = setInterval(go_page_two_page_change, 750);

    function go_page_two_page_change() {
        all_clear();
        $(".page-two").css("width", "100%");
        $(".page-two").css("height", "100%");
        $(".page-two").css("opacity", "1");
        clearInterval(timer_go_page_two);
    }
}

function go_page_three() {
    page_transition_header_cover();
    var timer_go_page_three = setInterval(go_page_three_page_change, 750);

    function go_page_three_page_change() {
        all_clear();
        $(".page-three").css("width", "100%");
        $(".page-three").css("height", "100%");
        $(".page-three").css("opacity", "1");
        clearInterval(timer_go_page_three);
    }
}

function go_page_four() {
    page_transition_header_cover();
    var timer_go_page_four = setInterval(go_page_four_page_change, 750);

    function go_page_four_page_change() {
        all_clear();
        $(".page-four").css("width", "100%");
        $(".page-four").css("height", "100%");
        $(".page-four").css("opacity", "1");
        clearInterval(timer_go_page_four);
    }
}

function go_page_five() {
    page_transition_header_cover();
    var timer_go_page_five = setInterval(go_page_five_page_change, 750);

    function go_page_five_page_change() {
        all_clear();
        $(".page-five").css("width", "100%");
        $(".page-five").css("height", "100%");
        $(".page-five").css("opacity", "1");
        clearInterval(timer_go_page_five);
    }
}

function dark_mode_change() {
    if (dark_mode_check == 0) {
        $(".home").css("background-color", "#404040");
        $(".top").css("color", "white");
        $(".middle-border").css("background-color", "white");
        $(".bottom").css("color", "white");
        $(".selector-top").css("color", "white");
        $(".selector-creator").css("color", "white");
        $(".dark-mode-off").css("opacity", "0");
        $(".dark-mode-on").css("opacity", "1");
        dark_mode_check = 1;
    } else if (dark_mode_check == 1) {
        $(".home").css("background-color", "white");
        $(".top").css("color", "black");
        $(".middle-border").css("background-color", "black");
        $(".bottom").css("color", "black");
        $(".selector-top").css("color", "black");
        $(".selector-creator").css("color", "black");
        $(".dark-mode-off").css("opacity", "1");
        $(".dark-mode-on").css("opacity", "0");
        dark_mode_check = 0;
    }
}

start_scroll_timer();