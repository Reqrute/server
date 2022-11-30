import express from 'express'
import config from './config';
import adressRoutes from "./routers/Adress.routes"
import authorRoutes from "./routers/Author.routes"
import bookRoutes from "./routers/Book.routes"
import bookAndRateRoutes from "./routers/BookAndRate.routes"
import bookAndUserRoutes from "./routers/BookAndUser.routes"
import bookplaceRoutes from "./routers/Bookplace.routes"
import clientRoutes from "./routers/Client.routes"
import employeeRoutes from "./routers/Employee.routes"
import genreRoutes from "./routers/Genre.routes"
import libraryRoutes from "./routers/Library.routes"
import rateRoutes from "./routers/Rate.routes"
import readingRoomRoutes from "./routers/ReadingRoom.routes"
import subscribeRoutes from "./routers/Subscribe.routes"
import typeRoutes from "./routers/Type.routes"
import workAdressRoutes from "./routers/WorkAdress.routes"
import userAndSubcribe from "./routers/UserAndSubscribe.routes"
import query from "./routers/Query.routes"
import cors from "cors"

const app = express();

const corsOptions = {
    origin: true, // домен сервиса, с которого будут приниматься запросы
    optionsSuccessStatus: 200 // для старых браузеров
  }

//setting
app.set('port', config.port) 

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors(corsOptions));
app.use(adressRoutes,
  authorRoutes,
  bookRoutes,
  bookAndRateRoutes,
  bookAndUserRoutes,
  bookplaceRoutes,
  clientRoutes,
  employeeRoutes,
  genreRoutes,
  libraryRoutes,
  rateRoutes,
  readingRoomRoutes,
  subscribeRoutes,
  typeRoutes,
  workAdressRoutes,
  userAndSubcribe,
  query
  );


export default app;
