const indexR = require("./index");
const usersR = require("./users");



exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("*",(req,res) => {
   return res.status(404).json({msg:"Page/endpoint not found, 404"})
  })
}