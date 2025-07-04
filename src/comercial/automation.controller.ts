import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EstimateDto } from './dto/automation.dto';

@ApiTags('Comercial')
@Controller('comercial/automation')
export class AutomationController {
  @Post('estimate')
  @ApiOperation({ summary: 'Estimar precio y prototipo para un producto' })
  estimate(@Body() dto: EstimateDto) {
    const { productType, quantity, designComplexity } = dto;
    const base = 1000;
    const complexityFactor = designComplexity === 'Alta' ? 2 : designComplexity === 'Media' ? 1.5 : 1;
    const estimatedPrice = base * quantity * complexityFactor;
    const prototypeUrl = `https://prototipos.com/${productType}-${Date.now()}`;
    return { estimatedPrice, prototypeUrl };
  }
}
