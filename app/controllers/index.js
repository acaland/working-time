
var isStarted = false;




function doClick(e) {
    $.label.backgroundColor = "red";
}

Alloy.Collections.archives.fetch();
$.index.open();

// Ti.App.Properties.setDate("last_day", today);
// var today_date = new Date();
//
// if (today_date != Ti.App.Properties.getDate("last_day")) {
//
//
// };

var click_counter = 0;
var today = Alloy.createModel("clocking");


function start_n_stop(e){
    Ti.API.info(click_counter);
    if (click_counter  < 4) {
        var t = String.formatTime(new Date(), "medium");
        if (isStarted) {
            // fatto lo stop
            Ti.API.info("model instance created");
            $.ssbtn.title = "Start";
            isStarted = false;
            $.ssbtn.backgroundColor = "green";

            if (today.get("t2") != null) {
                today.set("t4", t);
                $.t4.title = "T4: " + t;

                $.ssbtn.title = "Done";
                $.ssbtn.backgroundColor = "gray";
                $.ssbtn.enabled = false;
                $.ssbtn.color = "white";
                $.add_btn.enabled = true;
                Alloy.Collections.archives.add(today);

            } else {
                today.set("t2", t);
                $.t2.title = "T2: " + t;
            }

        } else {
            $.ssbtn.title = "Stop";
            isStarted = true;
            $.ssbtn.backgroundColor = "red";
            Ti.API.info("model instance created");
            if (today.get("t1") != null) {
                today.set("t3", t);
                $.t3.title = "T3: " + t;
            } else {
                today.set("t1", t);
                $.t1.title = "T1: " + t;
            }


        }
        click_counter++;
        today.set("day", new Date());
        today.save();
        //Alloy.Collections.archives.add(today);

    }



}

function new_day(e){
    today = Alloy.createModel("clocking");
    click_counter = 0;
    $.t1.title = "T1";
    $.t2.title = "T2";
    $.t3.title = "T3";
    $.t4.title = "T4";
    $.ssbtn.enabled = true;
    $.ssbtn.backgroundColor = "green";
    $.ssbtn.title = "Start";
    $.ssbtn.color = "black";
    $.add_btn.enabled = false;
}

function logme(model){
    Ti.API.info("in logme");
    var m = model.toJSON();
    Ti.API.info(model.toJSON());

    return model.toJSON();

}
