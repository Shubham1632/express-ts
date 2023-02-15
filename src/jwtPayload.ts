import { Request } from "express";

type jwtpayload = {
  email: string;
  id: string;
};

export interface Irequest extends Request {
  user: jwtpayload;
}
