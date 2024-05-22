const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const maxAge = 1000 * 60 * 60 * 24 * 3;

const register = async (req, res) => {
  const { userId, email, firstName, lastName, pseudo, age, password } =
    req.body;

  var salt = bcrypt.genSaltSync(10);
  var passwordHash = bcrypt.hashSync(password, salt);
  const dateCreatation = new Date();

  try {
    const userExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (userExist) {
      return res.status(201).json({ error: "This email already exist" });
    } else {
      const user = await prisma.user.create({
        data: {
          userId,
          email,
          age: parseInt(age),
          firstName,
          lastName,
          pseudo,
          password: passwordHash,
          created_at: dateCreatation,
        },
      });

      res.status(200).json({ message: "user added successfuly", data: user });
    }
  } catch (error) {
    console.error("error register: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const signIn = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  try {
    const userData = await prisma.user.findFirst({
      where: {
        email, 
      },
    });
    if (!userData) {
      return res.status(201).json({ error: "Email or password incorrect" });
    }
    const validPassword = bcrypt.compareSync(password, userData.password);
    if (!validPassword) {
      return res.status(201).json({ error: "Email or password incorrect" });
    }
    const token = jwt.sign(
      {
        userId: userData.userId,
        lastName: userData.lastName,
        firstName: userData.firstName,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: maxAge }
    );
    res.cookie("user_token", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: userData, token: token });
  } catch (err) {
    console.error("error at signin: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
const signOut = async (req, res) => {
  res.cookie("user_token", "", { maxAge: 1 });
  res.redirect("/");
};

module.exports = {
  register,
  signIn,
  signOut,
};
