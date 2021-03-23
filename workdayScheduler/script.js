$(document).ready(function () {
  let date = moment().format("LL");
  $("#currentDay").text(date)

  let hour = moment().hours()

  setInterval(function () {
    date = moment().format("LL");
    $("#currentDay").text(date);
    hour = moment().hours();
  }, 10000)

  $(".time-block").each(function () {
    let timestuff = $(this).attr("id");
    timestuff = Math.abs(timestuff.substring(timestuff.length - 2))
    if (hour > timestuff) {
      $(this).addClass("past")
    }
    if (hour === timestuff) {
      $(this).addClass("present")
    }
    if (hour < timestuff) {
      $(this).addClass("future")
    }
  })

  $("button").on("click", function () {
    let buttonNum = $(this).parent().attr("id")
    buttonNum = Math.abs(buttonNum.substring(buttonNum.length - 2))
    let buttonTxt = $(this).siblings(".description").val()
    localStorage.setItem(buttonNum, buttonTxt)
  });

  for (let i = 9; i <= 17; i++) {
    $("#hour-" + i)
      .children(".description")
      .val(localStorage.getItem("" + i))
  }
});
