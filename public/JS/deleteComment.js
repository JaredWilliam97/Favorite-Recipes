async function deleteComment(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const comment_id = document
    .querySelector('input[name="commentID"]')
    .value.trim();

  console.log("comment ID: " + comment_id);

  console.log("deleting comment at ID: " + id);

  const response = await fetch(`/api/comments/${comment_id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: comment_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace(`/post/${id}`);
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".deleteCommentBtn")
  .addEventListener("click", deleteComment);
