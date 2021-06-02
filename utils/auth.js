const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  // {{#if logged_in}}
  //       <a href="/newPost">profile</a> |
  //       <button type ="button" class="btn btn-secondary" id="logout">logout</button>
  //       {{else}}
  //       <a href="/login">login</a>
  //       {{/if}}
  module.exports = withAuth;
  