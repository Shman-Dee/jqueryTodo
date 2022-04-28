let $input = $("input");
let $button = $("button");
let $ul = $("ul");

console.log($button);

$button.on("click", (e) => {
  console.log(e);
  let $li = $("<li>").text($input.val());
  $ul.append($li);
  $input.val("");
});
