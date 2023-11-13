import { Injectable } from '@nestjs/common';
import { ProdottoEntity } from '../entities/prodotti.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContiRepository extends Repository<ProdottoEntity> {
  constructor(
    @InjectRepository(ProdottoEntity)
    repository: Repository<ProdottoEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
