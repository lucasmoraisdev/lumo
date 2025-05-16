export interface IMapper<TSource, TDestination> {
  map(source: TSource): TDestination | Promise<TDestination>;

  mapList(sources: TSource[]): TDestination[] | Promise<TDestination[]>;
}

export abstract class BaseMapper<Tsource, TDestination> implements IMapper<Tsource, TDestination> {
  abstract map(source: Tsource): TDestination | Promise<TDestination>;

  async mapList(sources: Tsource[]): Promise<TDestination[]> {
    const mappedItems: TDestination[] = [];
    for (const source of sources) {
      const destination = await this.map(source);
      mappedItems.push(destination);
    }

    return mappedItems;
  };
}