import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// ✅ This guard uses the 'jwt' strategy defined in jwt.strategy.ts
//    Apply it with @UseGuards(JwtAuthGuard) on routes
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
