async function newFormHandler(event) {
  event.preventDefault();

  const comment = document.querySelector("#comment").value;
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/comments/${id}`, {
    method: "POST",
    body: JSON.stringify({
      comment,
      post_id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#commentForm")
  .addEventListener("submit", newFormHandler);
