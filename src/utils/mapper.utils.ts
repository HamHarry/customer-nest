import { plainToClass } from 'class-transformer';

interface ClassType<T> {
  new (): T;
}

export const modelMapper = <T, V>(cls: ClassType<T>, plain: V): T => {
  return plainToClass(cls, JSON.parse(JSON.stringify(plain)), {
    excludeExtraneousValues: true,
  });
};
