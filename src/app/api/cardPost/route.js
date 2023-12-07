import{ connectToDatabase }from "../../../dbPost";

const POST = async (req, res) => {
  if (req.method === 'POST') {
    const { nome, imagem, categoria, topico, descricao } = req.body;
    const { db } = await connectToDatabase();
    const collection = db.collection('posts');

    await collection.insertOne({
      nome,
      imagem,
      categoria,
      topico,
      descricao,
    });

    res.status(201).json({ message: 'Postado!' });
  } else {
    res.status(405).json({ message: 'Internal Server Error' });
  } 
}
export default POST;