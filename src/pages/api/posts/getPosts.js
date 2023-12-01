import { connectToDatabase } from '../../../../db';

async function getPosts(req, res) {
  try {
    const { nome, imagem, categoria, topico, descricao } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection('posts');

    const result = await collection.find({
      nome,
      imagem,
      categoria,
      topico,
      descricao,
    }).toArray()

    res.status(200).json({ result });
  } catch (error) {
    console.error('Erro ao processar requisição POST:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (db) {
      await db.close();
    }
  }
}
export default getPosts;