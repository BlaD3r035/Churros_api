import express from "express";

const app = express();

app.use(json)

app.get("/", (req, res) =>{
  res.status(200).json({"mensaje": "Ruta principal"})
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
