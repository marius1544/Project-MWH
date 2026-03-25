const passwordValidation = async (req, res, next) => {
    if (req.token.psw !== process.env.ADMIN_PASSWORD_HASH) {
    return res.status(401).json({ error: "Wrong password" });
  }

  next();
};

export default passwordValidation;
