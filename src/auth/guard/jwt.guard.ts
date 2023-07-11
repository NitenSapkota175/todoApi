import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Constant } from "src/utils/constant";

@Injectable()
export class JwtAuthGaurd extends AuthGuard('jwt')
{
    canActivate(context: ExecutionContext) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Response>();

        for(let x = 0 ; x < Constant.BY_PASS_URL.length ; x++)
        {
            if(request.url == Constant.BY_PASS_URL[x]) return true;
        }

        return super.canActivate(context)
    }
}
