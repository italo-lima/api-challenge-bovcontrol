import { Router } from "express";

const routes = Router();

import appointmentsRoutes from "@modules/animals/infra/http/routes/animals.routes";

routes.use("/animals", appointmentsRoutes);

export default routes;
