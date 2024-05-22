const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllBooks = async (req, res) => {
  try {
    const bookRequest = await prisma.book.findMany({
      include: {
        buy: true,
        rent: true,
      },
    });
    res.status(200).json({ data: bookRequest });
  } catch (error) {
    console.error("error get all book: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const addBook = async (req, res) => {
  console.log(req.body);
  const {
    bookId,
    title,
    resume,
    type,
    edition,
    author,
    salePrice,
    rentalPrice,
    available,
    count,
    coverImage,
    releaseDate,
  } = req.body;
  const dateCreatation = new Date();
  try {
    const bookRequest = await prisma.book.create({
      data: {
        bookId,
        title,
        resume,
        type,
        edition,
        author,
        salePrice,
        rentalPrice,
        available,
        count,
        coverImage,
        releaseDate: new Date(releaseDate),
        created_at: dateCreatation,
      },
    });
    res
      .status(200)
      .json({ message: "Book data added successfully", data: bookRequest });
  } catch (error) {
    console.error("error add book: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getBookByGenre = async (req, res) => {
  const { type } = req.params;
  try {
    const book = await prisma.book.findMany({
      where: {
        type,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.error("error get book by genre: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getBookByAuthor = async (req, res) => {
  const { author } = req.params;
  try {
    const book = await prisma.book.findMany({
      where: {
        author,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.error("error get book by author: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getBookByAuthorAndType = async (req, res) => {
  const { author, type } = req.params;
  try {
    const book = await prisma.book.findMany({
      where: {
        author,
        type,
      },
    });
    res.status(200).json({ data: book });
  } catch (error) {
    console.error("error get book by author and type: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const uploadCover = (req, res) => {
  console.log(req.file)
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  res.status(200).send({
    message: "File uploaded successfully",
    filename: req.file.filename,
  });
};

module.exports = {
  getAllBooks,
  addBook,
  getBookByGenre,
  getBookByAuthor,
  getBookByAuthorAndType,
  uploadCover,
};
