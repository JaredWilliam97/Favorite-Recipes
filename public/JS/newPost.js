async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#postTitle").value;
  const content = document.querySelector("#content").value;
  const name = document.querySelector("#name").value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
      name,
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
  .querySelector("#newPostForm")
  .addEventListener("submit", newFormHandler);
