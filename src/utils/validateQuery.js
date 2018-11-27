

const validQuery = (...queryOptions) => {
  return (req, res, next) => {
    let query = {};
    queryOptions.forEach(option => {
      if (req.query.option) {
        query.option = req.query.option.toLowerCase();
      }
    });
    req.query = query;
    next();
  }
}