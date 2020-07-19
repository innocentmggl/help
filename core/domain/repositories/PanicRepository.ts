import { Panic } from "../entities/Panic";

export interface PanicRepository {
  GetItems(): Promise<Panic[]>;
}
