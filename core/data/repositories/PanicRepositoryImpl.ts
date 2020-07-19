import { Panic } from "../../domain/entities/Panic";
import { PanicRepository } from "../../domain/repositories/PanicRepository";

class PanicDTO {
  id: number = 0;
  name: string = "";
}

export class PanicRepositoryImpl implements PanicRepository {
  jsonUrl =
    "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json";

  async GetItems(): Promise<Panic[]> {
    const res = await fetch(this.jsonUrl);
    const jsonData = await res.json();
    return jsonData.map((panic: PanicDTO) => new Panic(panic.id, panic.name));
  }
}
