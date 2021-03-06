async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector("#postTitle").value;
  const content = document.querySelector("#content").value;
  // const userName = fetch(`/api/users/${name}`)

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
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
