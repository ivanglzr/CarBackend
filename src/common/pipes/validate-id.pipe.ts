import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidateIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (value.length !== 24 || !value || typeof value !== 'string')
      throw new BadRequestException("Id isn't valid");

    return value;
  }
}
