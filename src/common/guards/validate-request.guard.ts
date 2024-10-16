import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

import { FastifyRequest } from 'fastify';

@Injectable()
export class ValidateRequestGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const {
      headers: { authorization },
    } = context.switchToHttp().getRequest<FastifyRequest>();

    return !!authorization;
  }
}
