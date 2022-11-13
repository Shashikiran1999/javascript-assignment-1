const quote = [
    " \"Inspiration does exist, but it must find you working.\" —Pablo Picasso",
    " \“I have stood on a mountain of no\’s for one yes.\” —Barbara Elaine Smith",
    "  \“The best way out is always through.\” ―Robert Frost",
    "\“Courage is like a muscle. We strengthen it by use.\” —Ruth Gordo",
    "\“Keep a little fire burning; however small, however hidden.” ―Cormac McCarthy\"",
    "  \"Worry is a misuse of imagination. —Unknown\" ",
    " \"I am not a product of my circumstances.\"— Audrey Hepburn"
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quote.length);
  document.getElementById("Quote_Show").innerHTML = quote[randomNumber];
}
