import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { ProdottiService } from './prodotti.service';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { CustomValidationPipe } from 'src/pipes/prodotti.isNumeric.piepe';
import { HttpExceptionFilter } from 'src/ExceptionFilters/exceptionHTTP.exceptionFilters';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptors.prodotti';
import { UseInterceptors } from '@nestjs/common';
@UseInterceptors(LoggingInterceptor)
@Controller('prodotti')
export class ProdottiController {
  constructor(private readonly prodottiService: ProdottiService) {}

  @Post()
  create(@Body() createProdottiDto: CreateProdottiDto) {
    return this.prodottiService.create(createProdottiDto);
  }

  @Get()
  findAll() {
    return this.prodottiService.findAll();
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  findOne(@Param('id') id: string) {
    return this.prodottiService.findOne(+id);
  }

  @Get('bad')
  @UseFilters(new HttpExceptionFilter())
  get() {
    throw new NotFoundException();
  }

  @Patch(':id')
  update(
    @Param('id', CustomValidationPipe, ParseIntPipe) id: string,
    @Body() updateProdottiDto: UpdateProdottiDto,
  ) {
    return this.prodottiService.update(+id, updateProdottiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodottiService.remove(+id);
  }
}
