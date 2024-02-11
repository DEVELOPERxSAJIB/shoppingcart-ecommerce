import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import privateRoutes from "./privateRoutes";
import { commonRoutes } from "./commonRoutes";

const routes = createBrowserRouter([...commonRoutes, ...publicRoutes, ...privateRoutes])

export default routes;