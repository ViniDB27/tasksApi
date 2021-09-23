export class CreateTaskDto {
  id: number;
  title: string;
  description: string;
  complete: boolean;
  ownerId: number;
}
