let $input = $("input");
let $button = $("button");
let $ul = $("ul");

console.log($button);

$button.on("click", (e) => {
  console.log(e);
  //creating the <li></li>
  let $li = $("<li>").text($input.val());
  //appending the <li></li>
  //add event to delete <li></li>
  $li.on('click', (e) => {
    $li.remove();
  })
  $ul.append($li);
//clearing the input
  $input.val("");
});

