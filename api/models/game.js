import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  slug: {
    type: String,
    required: true
  },
  pictureUrl: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  genre: {
    type: [String],
    enum: [
      'Shooter',
      'RPG',
      'Adventure',
      'Racing',
      'Sport',
      'Fighting',
      'Action',
      'Survival'
    ],
    required: true
  },
  platform: {
    type: String,
    enum: ['Xbox One', 'Playstation 4'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Game', gameSchema);
