const fs = require("fs");
const csv = require("csv-parser");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function importCSV(filePath) {
  const records = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      records.push(row);
    })
    .on("end", async () => {
      for (const row of records) {
        if (row.title == "") continue;
        try {
          // Upsert category
          //   const category = await prisma.category.upsert({
          //     where: { name: row.category },
          //     update: {},
          //     create: { name: row.category },
          //   });

          // Create product
          let cat = row.categories.split(",").map((name) => name.trim());
          await prisma.product.create({
            data: {
              title: row.title,
              price: parseFloat(row.price),
              description: row.body,
              manufacturer: row.vendor,
              inStock: parseInt(row.qty),
              slug: row.handle,
              mainImage: row.src,
              categories: {
                connectOrCreate: cat.map((name) => ({
                  where: { name },
                  create: { name },
                })),
              },
            },
          });

          console.log(`Inserted product: ${row.title}`);
        } catch (error) {
          console.error(`Failed to insert product: ${row.title}`, error);
        }
      }

      console.log("CSV import completed.");
      await prisma.$disconnect();
    });
}

importCSV("products.csv");
