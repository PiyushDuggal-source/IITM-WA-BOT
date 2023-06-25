import e from "express";
import { checkAPI } from "./middleware";
import router from "./routes";

const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use("/", checkAPI);
app.use(router)

export default app;
