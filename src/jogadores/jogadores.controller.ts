import { Body, Controller, Post } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';

@Controller('api/v1/jogadores')
export class JogadoresController {
  @Post()
  async criarAtualizarJogador(@Body() criarJogadorDTO: CriarJogadorDto) {
    const { email } = criarJogadorDTO;
    return JSON.stringify(`{
      "nome": ${email},
    }`);
  }
}
