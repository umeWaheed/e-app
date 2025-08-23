const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createReview(request, response) {
  try {
    const { image } = request.body;
    const review = await prisma.reviews.create({
      data: {
        image,
      },
    });
    return response.status(201).json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    return response.status(500).json({ error: "Error creating review" });
  }
}

async function getAllReviews(request, response) {
  try {
    const reviews = await prisma.reviews.findMany({});
    return response.json(reviews);
  } catch (error) {
    return response.status(500).json({ error: "Error fetching reviews" });
  }
}

async function deleteReview(request, response) {
  try {
    const { id } = request.params;
    await prisma.reviews.delete({
      where: {
        id: id,
      },
    });
    return response.status(204).send();
  } catch (error) {
    console.log(error);
    return response.status(500).json({ error: "Error deleting review" });
  }
}

async function getReview(request, response) {
  const { id } = request.params;
  const category = await prisma.reviews.findUnique({
    where: {
      id: id,
    },
  });
  if (!category) {
    return response.status(404).json({ error: "Review not found" });
  }
  return response.status(200).json(category);
}

module.exports = {
  createReview,
  deleteReview,
  getReview,
  getAllReviews,
};
