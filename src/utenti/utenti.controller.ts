import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UtentiService } from './utenti.service';
import { CreateUtentiDto } from './dto/create-utenti.dto';
import { UpdateUtentiDto } from './dto/update-utenti.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginDto } from './dto/LoginDto';
import { Public } from 'src/decorators/ispublic.decorator';

@Controller('utenti')
export class UtentiController {
  constructor(private readonly utentiService: UtentiService) {}
  @Public()
  @Post('login')
  async login(@Body() utente: LoginDto) {
    return await this.utentiService.loginUtente(utente);
  }
  @Public()
  @Get('utente')
  // @UseGuards(AuthGuard)
  async getUtente(@Body() utente: LoginDto) {
    // const user = await this.utentiService.getUtente();
    return 'Ok riconosciuto';
  }
  @Public()
  @Post('login')
  async create(@Body() utente: LoginDto) {
    return await this.utentiService.registraUtente(utente);
  }
}
