import { MongoClient } from 'mongodb';

export default async function PostCard(req, res) {
  if (req.method === 'POST') {
    const { nome, imagem, categoria, topico, descricao } = req.body;

    const client = new MongoClient(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      const database = client.db('spspost');

      const collection = database.collection('posts');

      await collection.insertOne({ nome, imagem, categoria, topico, descricao });

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}