function  authMiddleware(req, res, next) {
    const token = req.headers.token;
    
      if (!token) {
        res.status(403).send({
          message: "You are not logged in",
        });
        return;
      }
    
      // Verify JWT token using secret key and extract user data from it by converting the token back to username
      const decoded = jwt.verify(token, "faheem123");
      const username1 = decoded.username;
    
      if (!username1) {
        res.status(403).json({
          message: "Not Correct Token",
        });
        return;
      }
      req.username = username1;        // as we commented this in index,js so how can it know the username ,so we used this

      next();
    }

    module.exports = {
        authMiddleware
    }