const Nugget = require('../models/Nugget');

// GET /nuggets
exports.getAllNuggets = async (req, res) => {
  const nuggets = await Nugget.find();
  res.status(200).json(nuggets);
};

// GET /nuggets/random
exports.getRandomNugget = async (req, res) => {
  const count = await Nugget.countDocuments();
  if (count === 0) return res.status(404).json({ error: 'No nuggets found' });
  const random = Math.floor(Math.random() * count);
  const nugget = await Nugget.findOne().skip(random);
  res.status(200).json(nugget);
};

// POST /nuggets
exports.createNugget = async (req, res) => {
  const { text, author } = req.body;
  if (!text || !author) {
    return res.status(400).json({ error: 'Text and author are required' });
  }

  const newNugget = new Nugget({ text, author });
  const savedNugget = await newNugget.save();
  res.status(201).json(savedNugget);
};

// DELETE /nuggets/:id
exports.deleteNugget = async (req, res) => {
  const { id } = req.params;
  const nugget = await Nugget.findById(id);
  if (!nugget) return res.status(404).json({ error: 'Nugget not found' });

  await nugget.deleteOne();
  res.status(200).json({ message: 'Nugget deleted successfully' });
};
