exports.adminAccess = (req, res, next) => {
  if (req.cookies?.token === process.env.ADMIN_TOKEN) {
    return next();
  }
  return res.status(401).json({
    success: false,
    error: "Unauthorized"
  });
};
