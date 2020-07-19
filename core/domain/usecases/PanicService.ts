import { Panic } from "../entities/Panic";
import { PanicRepository } from "../repositories/PanicRepository";

export interface PanicService {
  GetItems(): Promise<Panic[]>;
}

export class PanicServiceImpl implements PanicService {
  panicRepo: PanicRepository;

  constructor(repository: PanicRepository) {
    this.panicRepo = repository;
  }

  async GetItems(): Promise<Panic[]> {
    return this.panicRepo.GetItems();
  }
}
