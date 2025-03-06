//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async () => {
	
  const text = document.getElementById("text").value.trim();
  const delay = parseInt(document.getElementById("delay").value, 10);
  const output = document.getElementById("output");


	if (!text || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter a valid message and delay time.";
    return;
  }


	  output.textContent = "Waiting...";

	await new Promise((resolve) => setTimeout(resolve, delay));

  output.textContent = text;
});

	