$("button").on("click", handleClick)
let firstValue = 0,
  operatorValue = "",
  firstValueFlag = false,
  secondValue = 0,
  result = 0

function handleClick(e) {
  // display number
  if (e.target.classList[0] === "number") {
    if (firstValueFlag) {
      $(".display").text(e.target.value)
      firstValueFlag = false
    } else {
      if ($(".display").text() !== "0") {
        $(".display").text($(".display").text() + e.target.value)
      } else {
        $(".display").text(e.target.value)
      }
    }
  }
  // decimal
  if (e.target.classList[0] === "decimal") {
    if (!$(".display").text().includes(".")) {
      $(".display").text($(".display").text() + e.target.value)
    }
  }
  // clear display
  if (e.target.classList[0] === "clear") {
    $(".display").text("0")
  }
  // backspace
  if (e.target.classList[0] === "del") {
    let arr = $(".display").text().split("")
    if (arr.length === 1) {
      $(".display").text("0")
    } else {
      arr.pop()
      $(".display").text(arr.join(""))
    }
  }
  // operators
  if (e.target.classList[0] === "operator") {
    operatorValue = e.target.value
    if (!firstValueFlag) {
      firstValue = $(".display").text()
      firstValueFlag = true
    }
  }
  if (e.target.classList[0] === "equal-sign") {
    getSolution()
  }
}

function getSolution(){
    secondValue = $(".display").text()
    switch (operatorValue) {
      case "+":
        result = (Number(firstValue)+Number(secondValue)).toString()
        $(".display").text(result)
        console.log(result)
        break
      case "-":
        result = (Number(firstValue)-Number(secondValue)).toString()
        $(".display").text(result)
        break
      case "*":
        result = (Number(firstValue)*Number(secondValue)).toString()
        $(".display").text(result)
        break
      case "/":
        result = (Number(firstValue)/Number(secondValue)).toString()
        $(".display").text(result)
        break
  }
}

