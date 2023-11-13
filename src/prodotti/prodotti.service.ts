import { Injectable } from '@nestjs/common';
import { CreateProdottiDto } from './dto/create-prodotti.dto';
import { UpdateProdottiDto } from './dto/update-prodotti.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdottoEntity } from './entities/prodotti.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ProdottiService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(ProdottoEntity)
    private prodottiRepository: Repository<ProdottoEntity>,
  ) {}
  create(createProdottiDto: CreateProdottiDto) {
    return 'This action adds a new prodotti';
  }

  findAll() {
    return `This action returns all prodotti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodotti`;
  }

  update(id: number, updateProdottiDto: UpdateProdottiDto) {
    return `This action updates a #${id} prodotti`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodotti`;
  }
}
