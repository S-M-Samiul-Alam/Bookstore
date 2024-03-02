const Book = require("../model/book_Model")

//Add a new Book
exports.addBook=async (req, res) => {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      publishedYear: req.body.publishedYear
    });
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


// Get all Book
exports.getBook=async (req, res) => {
  
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

//Get Book By Id

exports.getBookById=async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a Book
exports.updateBook= async (req, res) => {
  const { id } = req.params;

  try {
    const updatedBook = await Book.findOneAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Delete a Book
exports.deleteBook=async (req, res) => {
  try {
    const result = await Book.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

